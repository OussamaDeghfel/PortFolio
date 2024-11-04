// import { motion, useScroll } from "framer-motion"
import React, { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa6";

const Experience = () => {
  // const { scrollXProgress } = useScroll();
  const [activeExperienceShow, setActiveExperienceShow] = useState(0);

  const ExperienceData = [
    {
      id: 1,
      title: "Junior Frontend Web Developer",
      company: "3M Express",
      period: "08/2024 - 10/2024",
      description: `As a Junior FrontEnd Web Developer at 3M Express, I am involved in developing and maintaining user-friendly web interfaces. I apply my knowledge to create engaging and interactive websites, ensuring
              a seamless user experience. Collaborate with the development team
              to produce high-quality code and user interfaces. Participate in
              the design and implementation of new website features and
              functionalities. Utilize version control systems such as Git for
              efficient code management and collaboration. Stay updated with the
              latest trends and technologies in front-end development to enhance
              web applications.`,
    },
    {
      id: 2,
      title: "Internship in Frontend Role",
      company: "3M Express",
      period: "03/2024 - 07/2024",
      description: `During my internship at 3M Express, I gained valuable hands-on
              experience in front-end web development. I collaborated with
              senior developers to work on various projects, where I was
              responsible for implementing and testing user interfaces using
              HTML, CSS, and JavaScript`,
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Freelancer",
      period: "2019 - 2022",
      description: `I have a strong background in graphic design, where I developed
              expertise in creating visually engaging layouts and mastering
              color theory. This experience taught me how to balance aesthetics
              with user needs. Now, I’m transitioning into frontend development,
              eager to build dynamic, interactive web experiences.`,
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-2 md:px-4 space-y-8 flex flex-col justify-center items-center md:items-start w-full h-fit ">
        <div className="w-fit h-fit">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 pb-2 border-blue-400">
              Experience
            </p>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col md:flex-row space-y-5 md:space-x-7 w-fit justify-start items-center m-auto">

        <div className=" w-32 h-1 md:w-1 md:h-32 bg-gray-500 rounded-full">
          <span className={`w-2 h-2 flex bg-cyan-300 rounded-full -translate-y-0.5 md:-translate-x-0.5 duration-300 
            ${activeExperienceShow === 0 && "translate-x-1 md:translate-y-1"} 
            ${activeExperienceShow === 1 && "translate-x-14 md:translate-y-14"} 
            ${activeExperienceShow === 2 && "translate-x-28 md:translate-y-28"}`} />
        </div>
        
          {/* {ExperienceData[activeExperienceShow].map((experience) => ( */}
          <div
            key={ExperienceData[activeExperienceShow].id}
            className="grid grid-cols-1 space-y-4 w-full border-2 border-slate-500 hover:shadow-white hover:text-white hover:border-cyan-50 duration-300 hover:bg-slate-800 p-8 rounded-md shadow-md"
          >
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-cyan-300">
                {ExperienceData[activeExperienceShow].title}
              </h1>
              <h1 className="text-2xl italic font-medium text-gray-400">
                {ExperienceData[activeExperienceShow].company}
              </h1>
              <span className="italic text-gray-400">
                {ExperienceData[activeExperienceShow].period}
              </span>
            </div>
            <p>{ExperienceData[activeExperienceShow].description}</p>
          </div>
          {/* ))} */}

          {/* ARROWS PROJECTS SHOW in medium & Large size */}
          <div className="hidden md:flex md:flex-col space-y-8 w-fit h-fit">
            <FaAngleUp
              size={30}
              onClick={() => {
                if (activeExperienceShow >= 1) {
                  setActiveExperienceShow(activeExperienceShow - 1);
                }
              }}
              className={
                activeExperienceShow >= 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />

            <FaAngleDown
              size={30}
              onClick={() => {
                if (activeExperienceShow < ExperienceData.length - 1) {
                  setActiveExperienceShow(activeExperienceShow + 1);
                }
              }}
              className={
                activeExperienceShow < ExperienceData.length - 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />
          </div>


              {/* ARROWS PROJECTS SHOW in small size */}
          <div className="flex md:hidden space-x-7 w-fit h-fit">
           

            <FaAngleLeft
              size={30}
              

              onClick={() => {
                if (activeExperienceShow >= 1) {
                  setActiveExperienceShow(activeExperienceShow - 1);
                }
              }}
              className={
                activeExperienceShow >= 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />
             <FaAngleRight
              size={30}
              onClick={() => {
                if (activeExperienceShow < ExperienceData.length - 1) {
                  setActiveExperienceShow(activeExperienceShow + 1);
                }
              }}
              className={
                activeExperienceShow < ExperienceData.length - 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
