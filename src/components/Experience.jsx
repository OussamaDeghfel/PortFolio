import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-400">
              Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid grid-cols-1 w-full gap-8">
          <div className="grid grid-cols-1 space-y-4 border-2 border-slate-500 hover:shadow-white hover:text-white hover:border-cyan-50 duration-300 hover:bg-slate-800 p-8 rounded-md shadow-md">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">
                Junior Frontend Web Developer
              </h1>
              <h1 className="text-2xl italic font-medium text-gray-400">
                3M Express
              </h1>
              <span className="italic text-gray-400">08/2024 - 10/2024,</span>
            </div>
            <p>
              As a Junior FrontEnd Web Developer at 3M Express, I am involved in
              developing and maintaining user-friendly web interfaces. I apply
              my knowledge to create engaging and interactive websites, ensuring
              a seamless user experience. Collaborate with the development team
              to produce high-quality code and user interfaces.Participate in
              the design and implementation of new website features and
              functionalities.Utilize version control systems such as Git for
              efficient code management and collaboration.Stay updated with the
              latest trends and technologies in front-end development to enhance
              web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 space-y-4 border-2 border-slate-500 hover:shadow-white hover:text-white hover:border-cyan-50 duration-300 hover:bg-slate-800 p-8 rounded-md shadow-md">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">
                Internship in Frontend Role
              </h1>
              <h1 className="text-2xl italic font-medium text-gray-400">
                3M Express
              </h1>
              <span className="italic text-gray-400">03/2024 - 07/2024</span>
            </div>
            <p>
              During my internship at 3M Express, I gained valuable hands-on
              experience in front-end web development. I collaborated with
              senior developers to work on various projects, where I was
              responsible for implementing and testing user interfaces using
              HTML, CSS, and JavaScript
            </p>
          </div>

          <div className="grid grid-cols-1 space-y-4 border-2 border-slate-500 hover:shadow-white hover:text-white hover:border-cyan-50 duration-300 hover:bg-slate-800 p-8 rounded-md shadow-md">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Graphic Designer</h1>
              <h1 className="text-2xl italic font-medium text-gray-400">
                Freelancer
              </h1>
              <span className="italic text-gray-400">2019 - 2022</span>
            </div>
            <p>
              I have a strong background in graphic design, where I developed
              expertise in creating visually engaging layouts and mastering
              color theory. This experience taught me how to balance aesthetics
              with user needs. Now, I’m transitioning into frontend development,
              eager to build dynamic, interactive web experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
