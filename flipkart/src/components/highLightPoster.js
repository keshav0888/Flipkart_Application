import React, { useState,useEffect } from 'react';
import '../style/HighlightPoster.css'; // Import the CSS file for styling
export const HighlightPoster = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images=["https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/35eb98e39056ab57.jpg?q=50","https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/3d274f1289f79e2a.jpeg?q=50","https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/69a178cb89162add.jpeg?q=50","https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/cafbabec6e98086b.jpg?q=50"]
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="poster">
      <button className="arrow-button prev" onClick={prevImage}>
        &lt;
      </button>
      <img className="poster-image" src={images[currentImage]} alt="Highlight" />
      <button className="arrow-button next" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};
