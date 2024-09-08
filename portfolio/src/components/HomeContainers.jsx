import React from "react";
import profile from "../assets/profile_transparent.png";
import { Element, Link } from "react-scroll";
import resume from "../../public/FullStack_Developer_Suresh-Resume.pdf";

const HomeContainers = () => {
  return (
    <Element name="/">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#ECFDF5] min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 animate-gradient-x ">
        <div className="text-center pt-20 md:pt-0 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Hey, I'm Suresh</h1>
          <h2 className="text-3xl text-center md:ml-10 font-semibold text-white mb-6">
            Mern Stack Developer
          </h2>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" smooth={true} duration={400}>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg  hover:bg-blue-700">
                Contact
              </button>
            </Link>
            <a href={resume} download="Suresh_Resume.pdf">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 ">
                My Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-3xl shadow-2xl drop-shadow-2xl  border-[#00000043] border-2 w-[300px] h-[340px] object-center"
          />
        </div>
      </div>
    </Element>
  );
};

export default HomeContainers;
