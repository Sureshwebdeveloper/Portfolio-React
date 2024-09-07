import React, { useEffect } from "react";
import AdminLogin from "./pages/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import ProjectUpload from "./components/ProjectUpload";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const { token, authenticated } = useContext(StoreContext);
  console.log("token", token);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  return (
    <>
      {token && <Navbar />}
      <ToastContainer />
      {
        <Routes>
          {!token && <Route path="/" element={<AdminLogin />} />}
          {/* {<Route path="/" element={<AdminLogin />} />} */}
          {token && authenticated && (
            <Route path="/" element={<ProjectUpload />} />
          )}
        </Routes>
      }
    </>
  );
};

export default App;
