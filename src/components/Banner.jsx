import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/image.jpg"; // Replace with correct path
import image2 from "../assets/images/image2.jpg"; // Replace with correct path
import { TypeAnimation } from "react-type-animation";

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
    <div className="relative w-full h-[75vh] lg:h-screen overflow-hidden">
      {/* Sliding Background Images */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Static Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000a0] to-[#080b54e0] flex flex-col items-center justify-center text-center p-6 lg:p-16 z-10">
        <p className="text-white text-3xl lg:text-5xl font-extrabold tracking-wide mb-2 lg:mb-4">
          ITTA
        </p>
        <TypeAnimation
          sequence={[
            "Explore your journey on Machine Learning",
            1000,
            "Explore your journey on Artificial Intelligence",
            1000,
            "Explore your journey on programming",
            1000,
            "Explore your journey on Software Development",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block", color:"#db2777", fontWeight: "bold"   }}
          repeat={Infinity}
        />
        <p className="text-white lg:text-lg text-base max-w-3xl mx-auto mb-6">
          Join a community of tech enthusiasts and lifelong learners eager
          to explore, build, and master new skills in cutting-edge
          technologies. Whether you're into coding, design, or digital
          marketing, we provide top-notch courses to fuel your passion.
        </p>
        <Link
          to={"/signup"}
          className="bg-pink-600 hover:bg-pink-700 text-white lg:text-lg text-sm font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Join Us!
        </Link>
      </div>
    </div>
  );
}

export default Banner;
