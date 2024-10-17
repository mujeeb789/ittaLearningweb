import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/image.jpg"; // Replace with correct path
import image2 from "../assets/images/image2.jpg"; // Replace with correct path

const images = [image, image2];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [images.length, interval]);

  return (
    <main className="">
      <div className="flex items-center flex-col justify-center w-full">
        <div className="overflow-hidden w-full">
          <div
            className="flex w-full relative transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full lg:h-full rounded-lg shadow-xl flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full lg:h-screen"
                />
              </div>
            ))}
          </div>

          {/* Overlay Text */}
          <div className="flex w-full absolute flex-col bottom-0 top-0 left-0 right-0 px-8 lg:gap-20 justify-center bg-[#080b54a5] z-10 gap-5 lg:h-full h-1/2">
            <p className="text-white clear-start text-2xl lg:text-4xl font-bold">ITTA</p>
            <p className="text-pink-600 font-bold lg:text-[60px] text-3xl">
              Empower Your Tech Journey
            </p>
            <p className="text-white lg:text-xl text-sm max-w-xl">
              Join a community of tech enthusiasts and lifelong learners eager
              to explore, build, and master new skills in cutting-edge
              technologies. Whether you're into coding, design, or digital
              marketing, we provide top-notch courses to fuel your passion.
            </p>
            <div>
              <Link
                to={"/signup"}
                className="bg-pink-600 text-white lg:text-[20px] text-sm font-bold py-2 px-4 rounded-md"
              >
                Join Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Banner;
