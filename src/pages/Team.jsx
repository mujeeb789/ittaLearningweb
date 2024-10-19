import React from "react";
import { teams } from "../constants/Teams";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Team() {
  return (
    <main className="min-h-screen w-full bg-gray-100 p-5">
      <div className="flex flex-col gap-10">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col h-full w-full items-center justify-center p-10 lg:flex-row  bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="w-full lg:w-1/3 h-64 lg:h-auto flex items-center justify-center">
              <img
                src={team.image}
                alt={team.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center p-3 w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-2">{team.name}</h2>
              <p className="text-gray-700 mb-4">{team.description}</p>
              <p className="text-gray-500 mb-4">{team.expertise}</p>

              <div className="flex space-x-4 mt-4">
                <Link
                  to={team.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-[#080a54]"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  to={team.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  to={team.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Team;
