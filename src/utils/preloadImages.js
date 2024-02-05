// utils/preloadImages.js
export const preloadImages = (imagePaths) => {
    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };
  