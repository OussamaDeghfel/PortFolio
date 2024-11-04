import ComingSoon from "../../assets/projects/ComingSoon.jpg";
import MovieSite from "../../assets/projects/MovieSite.jpg";
import JobFinder from "../../assets/projects/JobFinder.jpg";
import FooDy from "../../assets/projects/FooDy.png";
import IPAddressTracker from "../../assets/projects/IPAddressTracker.jpg";
import EcomQuickBuy from "../../assets/projects/EcomQuickBuy.jpg";
import LandingPage from "../../assets/projects/landingPage.jpg";

const MyProjects = () => {
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
      siteURL: "https://ip-address-tracker-two-ochre.vercel.app/",
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
      codeURL: "",
      siteURL: "",
    },
    {
      id: 8,
      title: "ComingSoon",
      image: ComingSoon,
      codeURL: "",
      siteURL: "",
    },
    {
      id: 9,
      title: "ComingSoon",
      image: ComingSoon,
      codeURL: "",
      siteURL: "",
    },
  ];

  return (
    <div
      name="projects"
      className="flex pt-10 justify-center bg-[#0a192f] text-white items-center w-full h-full pb-40"
    >
      <div>
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
        <div className="w-full h-full flex justify-between items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
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
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
