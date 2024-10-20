import React from "react";
import { teams } from "../constants/Teams";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import TeamComponent from "../components/TeamComponent";
import Banner from "../components/Banner";
import CourseNav from "../components/CoursesComponent";
import { coursesOffered } from "../constants/courses";
import StudentReviewCard from "../components/StudentsReview";
import { reviews } from "../constants/reviews";

function Home() {
  return (
    <main className="">
      {/* Banner Section */}
      <Banner />

      {/* Course Navigation */}
      <CourseNav />

      {/* Team Section */}
      <TeamComponent />

      
      <div className="flex justify-center mt-20 w-full items-center  flex-col">
        <p className="text-[#080a54] text-3xl font-bold">
          Reviews from Students
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {reviews.map((review, index) => (
            <StudentReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
