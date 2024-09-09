import React, { useEffect } from "react";
import AdminLogin from "./pages/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import ProjectUpload from "./components/ProjectUpload";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRouter from "./utils/ProtectedRouter.jsx";
import ManageProject from "./components/ManageProject.jsx";
import UpdateProject from "./components/ProjectUpdate.jsx";
import Notfound from "./components/Notfound.jsx";


const App = () => {
  const { token,setToken } = useContext(StoreContext);
  console.log("token", token);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    if (token === "undefined" || token === undefined) {
      localStorage.removeItem("token");
      toast.error("Un Authorized Login Again");
    }
  }, []);

  return (
    <>
      {token && <Navbar />}
      <ToastContainer />
      {
        <Routes>
          {!token && <Route path="/" element={<AdminLogin />} />}

          {token && (
            <>
              <Route path="/" element={<ProjectUpload />} />
              <Route path="/manage" element={<ManageProject />} />
              <Route path="/update/:id" element={<UpdateProject />} />
            </>
          )}
         
          <Route path="/:data/*" element={<Notfound />} />

        <Route element={ProtectedRouter}>
            <Route path="/login" element={<Navigate to="/login" />} />
          <Route path="/:data/*" element={<Notfound />} />
        </Route>
      </Routes>
      }
    </>
  );
};

export default App;
