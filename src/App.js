import React, { useEffect } from "react";
import { Header } from "./AppComponents/Header.js";
import { Main } from "./AppComponents/Main.js";
import { Footer } from "./AppComponents/Footer.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photos from "./AppComponents/Photos/Photos.jsx";
import photosData from "./AppComponents/Photos/selected-rows.json";
import { imageCache } from "./AppComponents/Photos/imageCache";

function App() {
  useEffect(() => {
    const urls = photosData.map(
      (item) => `${item.url}?w=248&fit=crop&auto=format`,
    );
    const subscription = imageCache.getImages(urls).subscribe({
      next: () => {
        // preloaded successfully
      },
      error: () => {
        // ignore preload failures
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/photo" element={<Photos />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
