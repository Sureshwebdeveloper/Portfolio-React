import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const AuthContext = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const url = "https://suresh-portfolio-server.onrender.com";

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/project/filter/All`);
      if (response.data.success) {
        setData(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    token,
    setToken,
    url,
    fetchProjects,
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    fetchProjects();
  }, [token]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default AuthContext;
