import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Element } from "react-scroll";
import Loader from "./Loader";

const categories = ["Static", "Front End", "Full Stack"];

const Projects = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  let url = "https://suresh-portfolio-server.onrender.com";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        (url += `/api/project/filter/${selectedCategory}`)
      );



      if (response.data.success) {
        setLoading(false);
        setData(response.data.data);
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  return (
    <Element name="/projects">
      <div className="mx-auto font-Open-sans p-6 bg-gradient-to-r from-pink-500 to-red-600">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">My Projects</h2>
      {loading ? <Loader/> : <>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 m-2 rounded-full ${
                selectedCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
              } hover:bg-blue-700 transition duration-300`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
              key={category}
              className={`px-4 py-2 m-2 rounded-full ${
                selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 transition duration-300`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((project) => (
              <div
                key={project._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
              >
                <img
                  src={url + "/images/" + project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-gray-600 mb-4 font-bold">{project.category}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={project.deployment_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Live URL
                  </a>
                </div>
              </div>
            ))}
          </div>
          </>
      }
      </div>
    </Element>
  );
};

export default Projects;
