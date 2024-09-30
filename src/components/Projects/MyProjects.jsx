import React from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const MyProjects = () => {
  return (
    <div
      name="projects"
      className="flex pt-10 justify-around bg-[#0a192f] text-white items-center w-full h-full pb-40"
    >
      <div className="w-[980px] ">
        <h1 className="text-4xl font-bold inline border-b-4 border-blue-300">
          Projects
        </h1>
        <p className="py-4">
          These are the projects I have built using the skills outlined above
        </p>
        <div className="w-full h-full flex border-2 border-red-700 p-8 px-20 justify-between items-center">
          <BiArrowFromRight size={40} className="cursor-pointer hover:rounded-full hover:border-2 hover:border-white duration-50"  />
          <div className="grid grid-cols-2 gap-8">
            <div className="h-96 w-72 border border-blue-500 ">
              image for the project
            </div>
            <div className="h-96 w-72 border border-blue-500 ">
              description about the project
            </div>
          </div>
          <BiArrowFromLeft size={40} className="cursor-pointer hover:rounded-full hover:border-2 hover:border-white duration-50" />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
