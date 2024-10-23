import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TeamCard({ team,index }) {
  const cardVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <motion.div
    variants={cardVariant}
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
              transition={{ duration: 0.5, delay: index *0.2 }}
    
    className="lg:w-[20%] w-[40%] md rounded-lg hover:shadow-2xl  my-2 shadow-md md:flex items-center overflow-hidden gap-2 ">
      <Link to={"/team"}>
        <div className=" w-full  ">
          <img
            src={team.image}
            width={250}
            height={250}
            className=" transition-all duration-300 w-full h-full hover:scale-110"
          />
        </div>
      </Link>
      <div className="px-5 py-5 md:flex flex-col gap-5">
        <div className=" ">

        <p>{team.name}</p>

        <p>{team.expertise}</p>
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
        </div>
    </ motion.div>
  );
}

export default TeamCard;
