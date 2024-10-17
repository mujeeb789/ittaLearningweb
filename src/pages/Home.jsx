import React from "react";
import { teams } from "../constants/Teams";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import TeamComponent from "../components/TeamComponent";
import Banner from "../components/Banner";
import CourseNav from "../components/CoursesComponent";

function Home() {
  return (
    <main>
      <Banner />
      <CourseNav />
     <TeamComponent />
    </main>
  );
}

export default Home;
