import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function TeamCard({ team }) {
  return (
    <main className="lg:w-[20%] w-[40%] md rounded-lg hover:shadow-2xl pb-5 my-2 shadow-md flex items-center overflow-hidden gap-2 flex-col">
        <div className="h-fit w-full overflow-hidden ">

      <img src={team.image} width={150} height={250} className=" transition-all duration-300 w-full h-full hover:scale-125" />
        </div>
      <div>
        <p>
            {team.name}
        </p>
        
        <p>
            {team.expertise}
            
            </p>


      </div>

      
      <div className="flex gap-5">

      <Link to={team.socialMedia.facebook}>
        <FaFacebook />
      </Link>

      <Link to={team.socialMedia.linkedin}>
        <FaLinkedin />
      </Link>
      
      <Link to={team.socialMedia.twitter}>
        <FaTwitter />
      </Link>
      </div>
    </main>
  );
}

export default TeamCard;
