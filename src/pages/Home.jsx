import React from "react";
import { motion } from "framer-motion";
import StudentReviewCard from "../components/StudentsReview";
import { reviews } from "../constants/reviews";
import Banner from "../components/Banner";
import CourseNav from "../components/CoursesComponent";
import TeamComponent from "../components/TeamComponent";

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

      <div className="flex justify-center mt-20 w-full items-center flex-col">
        <p className="text-[#080a54] text-3xl font-bold">
          Reviews from Students
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <StudentReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
