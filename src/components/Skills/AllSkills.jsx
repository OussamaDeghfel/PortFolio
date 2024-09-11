import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Tailwind from "../../assets/tailwind.png";
import Javascript from "../../assets/javascript.png";
import Typescript from "../../assets/typescript.svg";
import ReactImg from "../../assets/react.png";
import Github from "../../assets/github.png";
import Git from "../../assets/Git-Icon.svg";
import Ps from "../../assets/PS.png";
import Redux from "../../assets/redux.svg"

import Skill from "./skill";


const AllSkills = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-blue-300">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          <Skill icon={HTML} name="HTML" />
          <Skill icon={CSS} name="CSS" />
          <Skill icon={Javascript} name="JAVASCRIPT" />
          <Skill icon={ReactImg} name="REACT JS" />
          <Skill icon={Typescript} name="TYPESCRIPT" />
          <Skill icon={Redux} name="REDUX" />
          <Skill icon={Github} name="GITHUB" />
          <Skill icon={Git} name="GIT" />
          <Skill icon={Tailwind} name="TAILWIND CSS" />
          <Skill icon={Ps} name="PHOTOSHOP" />
        </div>
      </div>
    </div>
  );
};


export default AllSkills;
