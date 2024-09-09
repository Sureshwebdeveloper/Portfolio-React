import axios from 'axios';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../context/AuthContext';
import Loader from "../components/Loaders.jsx";
import { useNavigate } from 'react-router-dom';

const ManageProject = () => {
  const {url,data,setData,fetchProjects,loading,setLoading} = useContext(StoreContext);
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    console.log(id);

    try {
      setLoading(true);
      const response = await axios.delete(`${url}/api/project/projects/${id}`);
        if (response.data.success) {
          setData(projects.filter(project => project._id !== id));
        }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/update/${id}`)
  }

  useEffect(() => {
    
    fetchProjects()
  },[]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {loading ? <Loader/> : 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(project => (
          <div key={project._id} className="bg-white shadow-md rounded p-4">
            <img src={`${url}/images/${project.image}`} alt={project.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            <p className="text-gray-600">{project.category}</p>

            <div className='flex justify-around'>  
              <button
              onClick={() => handleUpdate(project._id)}
              className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900"
            >
             Update
            </button>

            <button
              onClick={() => handleDelete(project._id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
             Delete
            </button>
          
        </div>
          </div>
        ))}
      </div> }
    </div>
  );
};

export default ManageProject;
