import ComingSoon from "../../assets/projects/ComingSoon.jpg";
import MovieSite from "../../assets/projects/MovieSite.jpg";
import JobFinder from "../../assets/projects/JobFinder.jpg";
import FooDy from "../../assets/projects/FooDy.png";
import IPAddressTracker from "../../assets/projects/IPAddressTracker.jpg";
import EcomQuickBuy from "../../assets/projects/EcomQuickBuy.jpg";
import LandingPage from "../../assets/projects/landingPage.jpg";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa6";

const MyProjects = () => {
  const [activeProjectShow, setActiveProjectShow] = useState(0);

  const projects = [
    {
      id: 1,
      title: "QuickBuy - Ecommerce ShoppingStore",
      image: EcomQuickBuy,
      codeURL: "https://github.com/OussamaDeghfel/Ecommerce-website.git",
      siteURL: "https://quickbuy-ecommerce-website.vercel.app/",
    },
    {
      id: 2,
      title: "Find Job",
      image: JobFinder,
      codeURL: "https://github.com/OussamaDeghfel/JobFinder.git",
      siteURL: "https://job-finder-steel.vercel.app/",
    },
    {
      id: 3,
      title: "Food Restaurant Delivery",
      image: FooDy,
      codeURL: "https://github.com/OussamaDeghfel/Food_Deliver.git",
      siteURL: "https://food-deliver-seven.vercel.app/",
    },
    {
      id: 4,
      title: "Tracking IP Address ",
      image: IPAddressTracker,
      codeURL: "https://github.com/OussamaDeghfel/IP-Address-Tracker.git",
      siteURL: "https://ip-address-tracker-kappa-five.vercel.app/",
    },
    {
      id: 5,
      title: "Site For MovieWatch",
      image: MovieSite,
      codeURL: "https://github.com/OussamaDeghfel/Movie_Site.git",
      siteURL: "https://movie-site-omega.vercel.app/",
    },
    {
      id: 6,
      title: "Landing Page",
      image: LandingPage,
      codeURL: "https://github.com/OussamaDeghfel/React-LandingPage.git",
      siteURL: "https://react-landing-page-lime-delta.vercel.app/",
    },
    {
      id: 7,
      title: "ComingSoon",
      image: ComingSoon,
      codeURL: "/",
      siteURL: "/",
    },
    {
      id: 8,
      title: "ComingSoon",
      image: ComingSoon,
      codeURL: "/",
      siteURL: "/",
    },
  ];

  return (
    <div
      name="projects"
      className="flex pt-10 justify-center bg-[#0a192f] text-white items-center w-full h-full pb-20  "
    >
      <div className="max-w-[1000px] w-full px-10 md:px-4">
        <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl font-bold inline border-b-4 border-blue-300">
          Projects
        </h1>
        <p className="py-4 text-center md:text-start">
          These are the projects I have built using the skills outlined above
        </p>
        </div>

        <div>
        {/* SLIDE PROJECTS SHOW  */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-7 md:translate-x-0 justify-start md:justify-center items-center m-auto mt-10">
          <div className=" w-56 h-1 md:w-1 md:h-56 bg-gray-500 rounded-full">
            <span
              className={`w-2 h-2 flex bg-cyan-300 rounded-full -translate-y-0.5 md:-translate-x-0.5 duration-300 
            ${activeProjectShow === 0 && "translate-x-0  md:translate-y-1"} 
            ${activeProjectShow === 1 && "translate-x-8  md:translate-y-8"} 
            ${activeProjectShow === 2 && "translate-x-16  md:translate-y-16"}
            ${activeProjectShow === 3 && "translate-x-24  md:translate-y-24"}
            ${activeProjectShow === 4 && "translate-x-32  md:translate-y-32"}
            ${activeProjectShow === 5 && "translate-x-40  md:translate-y-40"}
            ${activeProjectShow === 6 && "translate-x-48  md:translate-y-48"}
            ${activeProjectShow === 7 && "translate-x-52  md:translate-y-52"}`}
            />
          </div>

          <div
            className="w-[100%] h-full  md:w-fit md:h-fit mt-12 border border-slate-600 rounded-md shadow-sm shadow-blue-300"
            key={projects[activeProjectShow].id}
          >
            <div className="flex md:w-full">
              <img
                src={projects[activeProjectShow].image}
                alt="comming soon project"
                className="rounded-t-md md:h-80 h-64 w-full"
              />
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="font-semibold text-xl md:text-2xl md:font-bold text-cyan-300 w-[80vh]">
                {" "}
                {projects[activeProjectShow].title}
              </p>
              <div className="flex flex-col space-y-3 w-1/2">
                <a
                  href={projects[activeProjectShow].codeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-65 hover:border-cyan-300 duration-500 bg-slate-800 border-2 border-gray-500 rounded-md px-5 py-1 hover:text-cyan-300 hover:opacity-100 text-center"
                >
                  Code
                </a>
                <a
                  href={projects[activeProjectShow].siteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-65 hover:border-cyan-300  duration-500 bg-slate-800 border-2 border-gray-500 rounded-md px-5 py-1 hover:text-cyan-300 hover:opacity-100 text-center"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>

          {/* ARROWS PROJECTS SHOW in medium & Large size */}
          <div className="hidden md:flex md:flex-col space-y-8 w-fit h-fit">
            <FaAngleUp
              size={30}
              onClick={() => {
                if (activeProjectShow >= 1) {
                  setActiveProjectShow(activeProjectShow - 1);
                }
              }}
              className={
                activeProjectShow >= 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />

            <FaAngleDown
              size={30}
              onClick={() => {
                if (activeProjectShow < projects.length - 1) {
                  setActiveProjectShow(activeProjectShow + 1);
                }
              }}
              className={
                activeProjectShow < projects.length - 1
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
                if (activeProjectShow >= 1) {
                  setActiveProjectShow(activeProjectShow - 1);
                }
              }}
              className={
                activeProjectShow >= 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />
             <FaAngleRight
              size={30}
              onClick={() => {
                if (activeProjectShow < projects.length - 1) {
                  setActiveProjectShow(activeProjectShow + 1);
                }
              }}
              className={
                activeProjectShow < projects.length - 1
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }
            />
          </div>
        </div>

        </div>
        {/* ITEMS PROJECTS SHOW  */}
        {/* <div className="w-full h-full flex justify-between items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {projects.map((project) => (
              <div
                className="h-80 w-[50vh] border border-slate-600 rounded-md shadow-sm shadow-blue-300"
                key={project.id}
              >
                <div className="flex">
                  <img
                    src={project.image}
                    alt="comming soon project"
                    className="rounded-t-md h-48 w-full"
                  />
                </div>
                <div className="flex justify-between items-center p-4">
                  <p className="font-bold text-md w-[80vh]"> {project.title}</p>
                  <div className="flex flex-col space-y-3 w-full">
                    <a
                      href={project.codeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-65 hover:border-white duration-500 bg-slate-800 border-2 border-gray-500 rounded-md px-5 py-1 hover:text-white hover:opacity-100 text-center"
                    >
                      Code
                    </a>
                    <a
                      href={project.siteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-65 hover:border-white duration-500 bg-slate-800 border-2 border-gray-500 rounded-md px-5 py-1 hover:text-white hover:opacity-100 text-center"
                    >
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyProjects;
