import React, { useContext, useState } from "react";
import axios from "axios";
import { StoreContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProjectUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Static",
    github_url: "",
    deployment_url: "",
    image: null,
  });

  const [message, setMessage] = useState("");

  const { url } = useContext(StoreContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("github_url", formData.github_url);
    formDataToSend.append("deployment_url", formData.deployment_url);
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.post(
        `${url}/api/project/add`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        setMessage(response.data.message);
        toast.success(response.data.message);
        setFormData({
          title:"",
          image:"",
          github_url:"",
          deployment_url:"",
          category:"",
          image:null
        }
        );
        // Handle successful upload, e.g., clear form, show success message, etc.
      }
    } catch (error) {
      console.error("Error uploading project:", error);
      if (error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Project</h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Static">Static</option>
              <option value="Front End">Front End</option>
              <option value="Full Stack">Full Stack</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="github_url"
              className="block text-lg font-medium text-gray-700"
            >
              GitHub URL
            </label>
            <input
              type="url"
              id="github_url"
              name="github_url"
              value={formData.github_url}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="deployment_url"
              className="block text-lg font-medium text-gray-700"
            >
              Deployment URL
            </label>
            <input
              type="url"
              id="deployment_url"
              name="deployment_url"
              value={formData.deployment_url}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Project Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Upload Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectUpload;
