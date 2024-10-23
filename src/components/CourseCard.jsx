import React from "react";
import { coursesOffered } from "../constants/courses";

const CourseNav = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coursesOffered.map((course) => (
          <div
            key={course.id}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 hover:bg-opacity-60">
              <h3 className="text-white text-lg font-bold">{course.title}</h3>
              <p>
                {
                  course.description
                }
              </p>
              <p className="text-white text-sm mt-2">{course.duration}</p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold py-2 px-4 rounded-full mt-3 transition-all duration-300">
                {
                  course
                }
              </button>
            </div>
          </div>
        ))}f6
        \

      </div>
    </div>
  );
};

export default CourseNav;
