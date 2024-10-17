import React from "react";
import { teams } from "../constants/Teams";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div>
        <h2 className="text-2xl font-bold ">Our Team</h2>

        <div className="flex w-full flex-wrap justify-between items-center px-10 my-5">
          <div className="flex gap-8 w-full justify-center items-center">
            {teams.slice(0, 4).map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        </div>
        <Link to={"/Team"} className="px-4 py-2">
          {" "}
          see more
        </Link>
      </div>
    </main>
  );
}

export default Home;
