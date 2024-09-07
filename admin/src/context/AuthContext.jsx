import { useState } from "react";
import { createContext } from "react";

export const StoreContext = createContext(null);

const AuthContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const url = "http://localhost:8000";
  const contextValue = {
    loading,
    setLoading,
    authenticated,
    setAuthenticated,
    token,
    setToken,
    url,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default AuthContext;
