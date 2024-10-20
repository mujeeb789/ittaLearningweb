import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { teams } from "../constants/Teams";

function TeamCard() {
  return (
    <main className="gap-2 flex p-36 flex-col">
      {teams.map((team,index)=>{
        return(
      
          <div key={index} className="flex flex-col lg:flex-row items-center justify-center bg-slate-200  shadow-lg rounded-lg overflow-hidden p-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <div className="relative p-4 border border-[#080a54]">
            <img
              src={team.image}
              alt={team.name}
              className="w-64 h-64 object-cover"
              />
            {/* Decorative Corners */}
            <div className="absolute border-t-2 border-l-2 border-yellow-500 top-2 left-2 w-12 h-12" />
            <div className="absolute border-b-2 border-r-2 border-yellow-500 bottom-2 right-2 w-12 h-12" />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left p-6">
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">
            {team.name}
          </h2>
          <p className="text-gray-600 font-semibold mb-4">{team.expertise}</p>
          <p className="text-gray-500 mb-6">{team.description}</p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-6">
            <Link
              to={team.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              >
              <FaFacebook size={24} />
            </Link>
            <Link
              to={team.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              >
              <FaLinkedin size={24} />
            </Link>
            <Link
              to={team.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
              >
              <FaTwitter size={24} />
            </Link>
          </div>

          {/* Profile Button */}
          <button className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600">
            View Profile
          </button>
        </div>
      </div>
      )
      })}
    </main>
  );
}

export default TeamCard;
