import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 place-items-center md:place-items-end md:grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-center md:text-start">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. Nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Junior Front-end developer with over a year of experience building responsive, user-focused web applications. With a solid foundation from a Master’s degree in Computer Science (2023), I am skilled in creating seamless user experiences and implementing modern web development practices. I continuously stay up-to-date with industry trends and thrive in collaborative, innovative environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
