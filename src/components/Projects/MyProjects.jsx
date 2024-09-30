import React, { useEffect, useMemo, useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import ComingSoon from "../../assets/projects/ComingSoon.jpg";
import MovieSite from "../../assets/projects/MovieSite.jpg";
import JobFinder from "../../assets/projects/JobFinder.jpg";
import FooDy from "../../assets/projects/FooDy.png";
import IPAddressTracker from "../../assets/projects/IPAddressTracker.jpg";

const MyProjects = () => {
  const [counter, setCounter] = useState(0);
  const [projectShow, setProjectShow] = useState("");


  const images = [MovieSite, JobFinder, FooDy, IPAddressTracker, ComingSoon];

  useMemo(() => {
    setProjectShow(images[counter]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  console.log("Counter",counter)
  console.log("projectShow",projectShow)

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
        <div className="w-full h-full flex p-8 px-20 justify-between items-center">
          <BiArrowFromRight
            size={40}
            onClick={() => setCounter(counter - 1)}
            className="cursor-pointer hover:rounded-full hover:border-2 hover:border-white duration-50 hover:shadow-sm hover:shadow-blue-300"
          />
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
          <BiArrowFromLeft
            size={40}
            onClick={() => setCounter(counter + 1)}
            className="cursor-pointer hover:rounded-full hover:border-2 hover:border-white duration-50 hover:shadow-sm hover:shadow-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
