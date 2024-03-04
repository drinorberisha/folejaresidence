export const preloadImages = (srcArray) => {
  const promises = srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = () => reject(`Failed to load image at ${src}`);
    });
  });

  return Promise.all(promises);
};
