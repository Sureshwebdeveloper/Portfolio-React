import React, { useState } from "react";
import axios from "axios";

const RemoveProject = () => {
  const [projectId, setProjectId] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProjectId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/removeProject", { id: projectId });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error removing project. Please try again.");
      console.error("There was an error removing the project:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Remove Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="projectId" className="block text-lg font-medium text-gray-700">
            Project ID
          </label>
          <input
            type="text"
            id="projectId"
            name="projectId"
            value={projectId}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Remove Project
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-lg">{message}</p>}
    </div>
  );
};

export default RemoveProject;
