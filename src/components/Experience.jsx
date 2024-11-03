import React from "react";

const Experience = () => {
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
          {ExperienceData.map((experience) => (
            <div
              key={experience.id}
              className="grid grid-cols-1 space-y-4 border-2 border-slate-500 hover:shadow-white hover:text-white hover:border-cyan-50 duration-300 hover:bg-slate-800 p-8 rounded-md shadow-md"
            >
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">{experience.title}</h1>
                <h1 className="text-2xl italic font-medium text-gray-400">
                  {experience.company}
                </h1>
                <span className="italic text-gray-400">
                  {experience.period}
                </span>
              </div>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
