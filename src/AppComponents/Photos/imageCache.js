import { forkJoin, from, of } from "rxjs";
import { catchError, map, shareReplay } from "rxjs/operators";

const cache = new Map();
const TTL = 10 * 60 * 1000; // 10 minutes

function getImage(url) {
  const now = Date.now();
  const existing = cache.get(url);

  if (existing && existing.expiry > now) {
    return existing.observable;
  }

  const observable = from(
    fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to load image: ${response.status} ${response.statusText}`,
        );
      }
      return response.blob();
    }),
  ).pipe(
    map((blob) => {
      const objectUrl = URL.createObjectURL(blob);
      const cachedEntry = cache.get(url);
      if (cachedEntry) {
        cachedEntry.objectUrl = objectUrl;
      }
      return objectUrl;
    }),
    shareReplay({ bufferSize: 1, refCount: false }),
    catchError((error) => {
      cache.delete(url);
      throw error;
    }),
  );

  cache.set(url, {
    expiry: now + TTL,
    observable,
    objectUrl: null,
  });

  return observable;
}

function getImages(urls) {
  if (urls.length === 0) {
    return of([]);
  }

  return forkJoin(urls.map((url) => getImage(url)));
}

function clearExpired() {
  const now = Date.now();

  for (const [key, entry] of cache.entries()) {
    if (entry.expiry < now) {
      if (entry.objectUrl) {
        URL.revokeObjectURL(entry.objectUrl);
      }
      cache.delete(key);
    }
  }
}

setInterval(clearExpired, 60 * 1000);

export const imageCache = {
  getImage,
  getImages,
  clearExpired,
};
