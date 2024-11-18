import React from "react";
import PortfolioLogo from "../assets/PortfolioLogo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, setVisible, setPrevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href =
      "mailto:oussama.deghfel@gmail.com?subject=Inquiry from Your Portfolio Website&body=Hello Oussama,%0D%0A%0D%0AMy name is [Your Name], and I came across your portfolio website. I am reaching out regarding [specific purpose, e.g., a frontend development opportunity, a potential collaboration, or to ask for advice].%0D%0A%0D%0AI would love to discuss [briefly describe what you want to discuss or need assistance with].%0D%0A%0D%0ALooking forward to connecting with you!%0D%0A%0D%0AThank you,%0D%0A[Your Name]%0D%0A[Your Contact Information]";
  };

  return (
    <>
      <div
        className={`fixed w-screen h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ${
          visible ? "visible" : "invisible"
        }`}
        // className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"
      >
        {" "}
        <div className="flex">
          <img
            // className="hover:translate-x-3 duration-500 "
            src={PortfolioLogo}
            alt="Portfolio OussamaLogo"
            style={{ width: "150px" }}
          />
        </div>
        {/* Large&Medium Sizes NavBar Menu */}
        <ul className="hidden md:flex">
          <li className="hover:text-blue-400 hover:font-bold">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:font-bold">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:font-bold">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:font-bold">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-blue-400 hover:font-bold">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
        {/* Web Bar */}
        <div onClick={handleClick} className="md:hidden z-10 flex">
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>
        {/* Mobile Menu*/}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl hover:text-[#0af192]">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#0af192]">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#0af192]">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#0af192]">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#0af192]">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full font-bold text-gray-300"
              href="https://www.linkedin.com/in/oussama-deghfel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full font-bold text-gray-300"
              href="https://github.com/OussamaDeghfel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#85b4ab]">
            <a
              className="flex justify-between items-center w-full font-bold text-gray-300"
              href="/"
              onClick={handleEmailClick}
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>

      <div className="w-fit h-fit flex translate-y-20 md:hidden ">
        <ul className="flex space-x-10">
          <li className="bg-blue-600 py-2">
            <a
              className="flex justify-between items-center w-full font-bold text-gray-300"
              href="https://www.linkedin.com/in/oussama-deghfel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="bg-[#333333] py-2">
            <a
              className="flex justify-between items-center w-full font-bold text-gray-300"
              href="https://github.com/OussamaDeghfel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="bg-[#85b4ab] py-2">
            <a
              className="flex justify-between items-center w-full font-bold text-gray-300"
              href="/"
              onClick={handleEmailClick}
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
