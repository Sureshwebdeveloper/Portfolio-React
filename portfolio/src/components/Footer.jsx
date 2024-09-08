import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-center items-center">
      <p className="mr-4">© Developer Suresh {date}</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/suresh-mern-developer/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://github.com/Sureshwebdeveloper/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
