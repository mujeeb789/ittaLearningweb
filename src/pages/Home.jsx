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
import { motion } from "framer-motion";

function Home() {
  const cardVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="">
      {/* Banner Section */}
      <Banner />

      {/* Course Navigation */}
      <CourseNav />

      {/* Team Section */}
      <TeamComponent />
      <div className=" flex overflow-scroll-x ">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full"
            >
              <StudentReviewCard review={review} />
            </motion.div>
          ))}
        </div>
    </main>
  );
}

export default Home;
