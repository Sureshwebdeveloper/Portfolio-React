import { useEffect, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { StoreContext } from "./StoreContext";

const ProtectedRouter = () => {
  const { authenticated,token } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const localStoragetoken = localStorage.getItem("token");

    if (!token || localStoragetoken === "undefined" || token.length < 10 ||  authenticated(false)) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, [authenticated, navigate]);

  return <>{localStorage.getItem("token") ? <Outlet /> : null}</>;
};

export default ProtectedRouter;
