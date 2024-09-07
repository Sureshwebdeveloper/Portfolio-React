import React from "react";
import HomeContainers from "../components/HomeContainers";
import AboutMe from "../components/AboutMe";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full animate-fade-in ">
      <HomeContainers />
      <AboutMe />
      <Certificates />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
