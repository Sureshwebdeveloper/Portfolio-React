import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
          <ul className="md:flex md:space-x-6 text-white">
            <li className="my-2 md:my-0">
              <Link to="/" className="block px-2 py-1 hover:bg-gray-700 rounded">Home</Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/upload" className="block px-2 py-1 hover:bg-gray-700 rounded">Upload Project</Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/remove" className="block px-2 py-1 hover:bg-gray-700 rounded">Remove Project</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
