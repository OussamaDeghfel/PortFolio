import React from "react";
import HTML from "../../assets/skillsIcon/html.png";
import CSS from "../../assets/skillsIcon/css.png";
import Tailwind from "../../assets/skillsIcon/tailwind.png";
import Javascript from "../../assets/skillsIcon/javascript.png";
import Typescript from "../../assets/skillsIcon/typescript.svg";
import ReactImg from "../../assets/skillsIcon/react.png";
import Github from "../../assets/skillsIcon/github.png";
import Git from "../../assets/skillsIcon/Git-Icon.svg";
import Ps from "../../assets/skillsIcon/PS.png";
import Redux from "../../assets/skillsIcon/redux.svg"

import Skill from "./skill";


const AllSkills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl w-24 font-bold border-b-4 border-blue-300">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-5 text-center place-items-center py-8">
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
