import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
