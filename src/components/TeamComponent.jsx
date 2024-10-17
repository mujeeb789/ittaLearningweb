import React from 'react'
import { teams } from '../constants/Teams'
import { Link } from 'react-router-dom'
import TeamCard from './TeamCard'

function TeamComponent() {
  return (
    <div className="flex flex-col items-center  ">
    <h2 className="text-2xl font-bold ">Our Team</h2>

    <div className="flex w-full flex-wrap justify-between items-center px-10 my-5">
      <div className="flex flex-wrap gap-8 w-full justify-center items-center">
        {teams.slice(0, 4).map((team, index) => (
          <TeamCard
           key={index} team={team} />
        ))}
      </div>
    </div>
    <Link to={"/Team"} className="px-4 py-2">
      {" "}
      see more
    </Link>
  </div>
  )
}

export default TeamComponent