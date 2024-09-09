import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  const { url, } = useContext(StoreContext);
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    category: "",
    github_url: "",
    deployment_url: "",
  });

  const params = useParams();
  const id = params.id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${url}/api/project/projects/${id}`,
        project
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setProject({
          title: "",
          category: "",
          github_url: "",
          deployment_url: "",
        });
        navigate("manage");
      } else {
        toast.error("Failed to update project");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the project");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            id="category"
            value={project.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Select</option>
            <option value="Static">Static</option>
            <option value="Front End">Front End</option>
            <option value="Full Stack">Full Stack</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">GitHub URL</label>
          <input
            type="text"
            name="github_url"
            value={project.github_url}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Deployment URL</label>
          <input
            type="text"
            name="deployment_url"
            value={project.deployment_url}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
