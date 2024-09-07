import React from "react";
import profile from "../assets/profile_picture.png";
import { Element } from "react-scroll";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutMe = () => {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 80 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Node JS", level: 70 },
    { name: "Express JS", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "Version Control", level: 85 },
    { name: "UI/UX Principles", level: 70 }
  ];

  return (
    <Element name="/about">
      <div className="mx-auto p-6 bg-gradient-to-r from-blue-200 to-purple-600  flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center">
        <img
            src={profile}
            alt="Profile"
            className="rounded-3xl shadow-2xl w-[300px] h-[340px] bg-slate-400 object-center"
          />
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I am a Full Stack Developer. I am open to work and willing to take on
            new challenges. I have hands-on experience in various technologies.
          </p>
          <h3 className="text-2xl font-semibold mb-2">My Skills</h3>
          <ul className="flex flex-wrap justify-center md:justify-start">
            {skills.map((skill, index) => (
              <li key={index} className="m-4 flex flex-col items-center">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#6a1b9a",
                      trailColor: "#d6d6d6"
                    })}
                  />
                </div>
                <span className="block text-lg font-semibold mt-2">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
