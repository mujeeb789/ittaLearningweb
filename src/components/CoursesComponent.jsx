import React from 'react';
import { coursesOffered } from '../constants/courses';

const CourseNav = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {coursesOffered.map((course, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h3 className="text-white text-lg font-bold">{course.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseNav;
