import React from "react";
import ComingSoon from "../assets/projects/ComingSoon.jpg";
import FooDy from "../assets/projects/FooDy.png";
import MovieSite from "../assets/projects/MovieSite.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 py-13 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-300">
            Projects
          </p>
          <p className="py-4">Check out of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${FooDy})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Food Deliver
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://food-deliver-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/OussamaDeghfel/Food_Deliver.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${MovieSite})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix MovieSite
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://movie-site-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/OussamaDeghfel/Movie_Site.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ComingSoon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Project 03
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ComingSoon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Project 04
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ComingSoon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Project 05
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ComingSoon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Project 06
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-6 py-3 m-5 bg-white text-gray-700 font-bold text-lg hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
