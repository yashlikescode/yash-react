import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import photosData from "./selected-rows.json";
import React, { useEffect, useState } from "react";
import "./Photos.css";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { imageCache } from "./imageCache";

function Photos() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [cachedUrls, setCachedUrls] = useState({});

  const filters = [
    "All",
    "Street",
    "Landscape",
    "Nature",
    "Portrait",
    "Travel",
    "Cars",
    "Night",
    "Architecture",
    "Wildlife",
    "Product",
  ];

  const imageRequestUrl = (url) => `${url}?w=248&fit=crop&auto=format`;

  const matchesFilter = (item, filter) => {
    if (filter === "All") {
      return true;
    }
    const normalizedFilter = filter.toLowerCase();
    return item.tags.some((tag) => tag.toLowerCase() === normalizedFilter);
  };

  useEffect(() => {
    const urlsToLoad = photosData.map((item) => imageRequestUrl(item.url));
    let active = true;

    const subscription = imageCache.getImages(urlsToLoad).subscribe({
      next: (objectUrls) => {
        if (!active) return;

        setCachedUrls((previousUrls) => {
          const nextUrls = { ...previousUrls };
          urlsToLoad.forEach((url, index) => {
            nextUrls[url] = objectUrls[index];
          });
          return nextUrls;
        });
      },
      error: () => {
        // If caching fails, the component will still render using the original URLs.
      },
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <h1 className="page-title" style={{ margin: "5rem 10% 1rem 10%" }}>
        Photography Portfolio
      </h1>
      <div className="filters-wrapper">
        <span className="filters-title">Tags</span>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => {
                setActiveFilter(filter);
                console.log(filter);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <Box
        sx={{
          width: "80%",
          height: "auto",
          minHeight: "200px",
          margin: "0 10%",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {photosData.map((item) => {
            const requestUrl = imageRequestUrl(item.url);
            const displayUrl = cachedUrls[requestUrl] || requestUrl;

            return (
              <div className="filter" key={item.url}>
                {matchesFilter(item, activeFilter) && (
                  <ImageListItem>
                    <img src={displayUrl} alt={item.name} loading="lazy" />
                    <ImageListItemBar
                      subtitle={item.name.substring(0, item.name.length - 4)}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.name.substring(0, item.name.length - 3)}`}
                        ></IconButton>
                      }
                    />
                  </ImageListItem>
                )}
              </div>
            );
          })}
        </ImageList>
      </Box>
    </>
  );
}

export default Photos;
