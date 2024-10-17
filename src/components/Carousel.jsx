// Carousel.js
import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [images.length, interval]);

  return (
    <div className="flex items-center flex-col justify-center w-screen">
      <div className="relative overflow-hidden w-full h-full">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full rounded-lg shadow-xl flex items-center justify-center flex-shrink-0"
        
            >
              <img
                src={image}
                
                alt={`Slide ${index}`}
                className=""
              />
            </div>
          ))}
        </div>

    
       
      </div>
    </div>
  );
};

export default Carousel;
