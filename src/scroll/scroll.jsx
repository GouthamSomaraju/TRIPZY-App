import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";
import img1 from './tour/Dwarkadhish.jpg';
import img2 from './tour/Manikarnika Ghat.jpeg';
import img3 from './tour/Coorg & Talacauvery, Karnataka.webp';
import img4 from './tour/paris.jpg';
import img5 from './tour/bangkok.png';
import img6 from './tour/Phi-Phi island.avif';

const images = [
  { src: img1, title: "Dwarkadhish Temple", text: "Dwarka" },
  { src: img3, title: "Coorg", text: "Karnataka" },
  { src: img2, title: "Manikarnika Ghat", text: "Varanasi" },
  { src: img4, title: "Eiffel Tower", text: "Paris" },
  { src: img5, title: "Bangkok", text: "Thailand" },
  { src: img6, title: "Phi-Phi island", text: "Tailand" },
];

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

//   const prev = () => {
//     setStartIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <div className="carousel-section">
      {/* <button className="nav-btn left" onClick={prev}>❮</button> */}
      <div className="carousel-track">
        {visibleImages.map((img, index) => (
          <div className="carousel-card" key={index}>
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <div className="overlay-title">{img.title}</div>
              <div className="overlay-text">{img.text}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="nav-btn right" onClick={next}>❯</button> */}
    </div>
  );
};

export default ImageCarousel;
