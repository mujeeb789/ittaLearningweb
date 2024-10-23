import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-y-scroll px-4 sm:px-8 lg:px-20 py-10 space-y-12">
      {/* ABOUT US Section */}
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">ABOUT US</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed">
          We are an innovative technology company focused on creating a better future for Africa.
          Our team consists of experienced professionals dedicated to using technology to promote
          social and economic progress across the continent. We offer a variety of services,
          including software development, hardware design, education and certification programs,
          agricultural solutions, and research services. Our solutions are customized to meet the
          unique needs of our customers, helping them discover new opportunities, improve efficiency,
          and grow their businesses. At our core, we believe technology can change lives and communities
          for the better. That's why we're committed to developing creative solutions that help our
          customers and partners succeed in a fast-changing world.
        </p>
      </div>

      {/* MISSION Section */}
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">MISSION</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed">
          Our mission is to help people, businesses, and communities by providing top-quality technology
          solutions in areas like software, hardware, education, agriculture, and research. We focus on
          delivering great value and building strong partnerships to help our customers and communities succeed.
        </p>
      </div>

      {/* VISION STATEMENT Section */}
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">VISION STATEMENT</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed">
          Our vision is to become the top provider of technology solutions that help improve lives, businesses,
          and communities in Nigeria and Africa. We want to make a positive impact on society and the economy.
          We believe in a future where everyone can use technology to make their lives better and create progress
          across the continent. At Itta, we are committed to excellence in everything we do….
        </p>
      </div>

      {/* OUR BELIEF Section */}
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">OUR BELIEF</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed">
          We believe that technology can change lives and boost social and economic growth. We are committed
          to using our skills and resources to create solutions that meet the specific needs of our customers.
          We also believe in building long-term partnerships with our customers, working together to create
          solutions that fit their unique goals. Our mission is to provide individuals, businesses, and communities
          across Nigeria and Africa with the tools and resources they need to succeed in a technology-driven world.
        </p>
      </div>
    </div>
  );
};

export default About;
