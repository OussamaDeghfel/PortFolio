// import { useMemo, useState } from "react";
// import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import ComingSoon from "../../assets/projects/ComingSoon.jpg";
import MovieSite from "../../assets/projects/MovieSite.jpg";
import JobFinder from "../../assets/projects/JobFinder.jpg";
import FooDy from "../../assets/projects/FooDy.png";
import IPAddressTracker from "../../assets/projects/IPAddressTracker.jpg";

const MyProjects = () => {

const projects = [
    {
      id: 1,
      title: "Site For MovieWatch",
      image: MovieSite,
    },
    {
      id: 2,
      title: "Find Job",
      image: JobFinder,
    },
    {
      id: 3,
      title: "Food Restaurant",
      image: FooDy,
    },
    {
      id: 4,
      title: "Tracking IP Address ",
      image: IPAddressTracker,
    },
    {
      id: 5,
      title: "ComingSoon",
      image: ComingSoon,
    },
    {
      id: 6,
      title: "ComingSoon",
      image: ComingSoon,
    },
  ];

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

        {/* SLIDE PROJECTS SHOW  */}
        {/* <div className="w-full h-full flex p-8 px-20 justify-between items-center">
          {disabledButton ? (
            <BiArrowFromRight
              size={40}
              onClick={() => setCounter(counter - 1)}
              className="cursor-pointer hover:rounded-full hover:border-2 hover:border-white duration-50 hover:shadow-sm hover:shadow-blue-300"
            />
          ) : (
            <BiArrowFromRight
              size={40}
              color="gray"
              className="cursor-not-allowed hover:rounded-full hover:border-2 hover:border-gray-400 duration-50 hover:shadow-sm hover:shadow-blue-300"
            />
          )}

          <div className="flex flex-col justify-center items-center">
            <div className="h-96 w-[70vh] border border-slate-600 rounded-md shadow-md shadow-blue-300">
              <div className="flex">
                <img
                  src={projectShow}
                  alt="comming soon project"
                  className="rounded-md h-64 w-full"
                />
              </div>
              <div className="flex justify-between items-center p-4">
                <p> Project title</p>
                <div className="flex flex-col space-y-2">
                  <button className="bg-slate-800 border-2 border-white rounded-md px-4 py-2">
                    Visit
                  </button>
                  <button className="bg-slate-800 border-2 border-white rounded-md px-4 py-2">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          {disabledButton ? <BiArrowFromLeft
            size={40}
            color="gray"
            className="cursor-not-allowed hover:rounded-full hover:border-2 hover:border-gray-400 duration-50 hover:shadow-sm hover:shadow-blue-300"
          /> : (<BiArrowFromLeft
            size={40}
            onClick={() => setCounter(counter + 1)}
            className="cursor-pointer hover:rounded-full hover:border-2 hover:border-white duration-50 hover:shadow-sm hover:shadow-blue-300"
          />)}
          
        </div> */}

        {/* ITEMS PROJECTS SHOW  */}
        <div className="w-full h-full flex justify-between items-center">
          <div className="grid grid-cols-3 gap-8 justify-center items-center">
            {projects.map((project) => (
                <div className="h-96 w-[50vh] border border-slate-600 rounded-md shadow-md shadow-blue-300" key={project.id}>
                <div className="flex">
                  <img
                    src={project.image}
                    alt="comming soon project"
                    className="rounded-t-md h-64 w-full"
                  />
                </div>
                <div className="flex justify-between items-center p-4">
                  <p> {project.title}</p>
                  <div className="flex flex-col space-y-2">
                    <button className="opacity-35 bg-slate-800 border-2 border-white rounded-md px-4 py-2">
                      Code
                    </button>
                    <button className="bg-slate-800 border-2 border-white rounded-md px-4 py-2">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
