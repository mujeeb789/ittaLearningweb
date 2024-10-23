import React from "react";
import { coursesOffered } from "../constants/courses";

const CourseNav = () => {
  return (
    <div className="container  mx-auto p-6">
      <div className="flex gap-5 ">
        {coursesOffered.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden  rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 md:h-64 lg:h-64 xl:h-72 object-cover"
            />
            <div className="bg-[#080a54] p-4 flex flex-col justify-between transition-opacity duration-300 hover:bg-opacity-90">
              <h3 className="text-pink-600 text-lg font-bold">{course.title}</h3>
              <p className="text-white mt-2 text-sm">{course.description}</p>
              <p className="text-gray-300 text-xs mt-2">{course.duration}</p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold py-2 px-4 rounded-full mt-4 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseNav;
