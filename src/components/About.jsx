import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Oussama, Nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Junior front-end web development using HTML, CSS, JavaScript,
              React JS & Tailwind CSS As a recent graduate with a Master degree
              in computer science earned in 2023, I am now seeking opportunities
              to contribute my creativity and technical skills to a
              forward-thinking and stable company. I am eager to further develop
              and refine my skills, and I am ready to contribute my dedication
              to a collaborative and supportive work environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
