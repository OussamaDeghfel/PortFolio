import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[700px] mx-auto px-5 flex flex-col justify-center text-center h-full ">
        <p className="text-blue-400 text-xl space-y-10"> Say My Name</p>
        <h1 className="text-6xl font-bold text-[#ccd6f6] uppercase m-3">
          Deghfel Oussama
        </h1>
        <h2 className="text-4xl font-bold text-[#8892b0]">
          I'm a FrontEnd Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a passionate front-end developer with a knack for turning design
          concepts into visually stunning and user-friendly websites and web
          applications
        </p>
        <div className="flex justify-center items-center">
          <button className="text-white group border-2 rounded-md hover:text-[#0a192f] hover:font-bold px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            {/* <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3 " />
            </span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
