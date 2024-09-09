import { useEffect, useContext } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { StoreContext } from "../context/AuthContext.jsx";

const ProtectedRouter = () => {
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    if (!token || token === "undefined" || token === undefined) {
      localStorage.removeItem("token");
      navigate("/login");
      toast.error("Un Authorized Login Again");
    }
  }, [token, navigate]);

  return (
    <>{localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />}</>
  );
};

export default ProtectedRouter;
