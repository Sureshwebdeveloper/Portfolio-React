import axios from "axios";
import React, { useState } from "react";
import { Element } from "react-scroll";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "HTML & Css",
      organization: "Meta",
      image: "html_css.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/6QFBUHU3A2QX",
      style: "size-[100px]  object-contain rounded-lg mb-4",
    },
    {
      id: 2,
      title: "Javascript",
      organization: "Meta",
      image: "js.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/EQQZZDPFWLDX",
      style: "size-[100px]  object-contain rounded-lg mb-4",
    },
    {
      id: 3,
      title: "React Js",
      organization: "Meta",
      image: "react.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/T27CKHJJF6PT",
      style: "size-[100px]  object-contain rounded-lg mb-4",
    },
    {
      id: 4,
      title: "Version Controll",
      organization: "Meta",
      image: "github_1.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/T27CKHJJF6PT",
      style: "size-[100px]  object-contain rounded-lg mb-4",
    },
    {
      id: 5,
      title: "Principals Of UI/UX",
      organization: "Meta",
      image: "figma.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/T27CKHJJF6PT",
      style: "size-[100px]  object-contain rounded-lg mb-4",
    },
    {
      id: 6,
      title: "Full Stack Basic",
      organization: "Great Learning",
      image: "mern-img.png",
      url: "sgirogi",
      style: "w-[130px] h-[110px]",
    },
    {
      id: 7,
      title: "Authentication Mern",
      organization: "Guvi",
      image: "mern-img.png",
      url: "sgirogi",
      style: "size-[130px] h-[110px]",
    },
  ];

  return (
    <Element name="/certificate">
    <div className=" mx-auto p-6 bg-gradient-to-r from-blue-300 to-orange-300 ">
      <h2 className="text-3xl font-bold mb-6 text-center">My Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-[#ffffffa4] p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
          >
            <div className="w-full flex justify-center mx-auto">
              <img
                src={certificate.image}
                alt={certificate.title}
                className={certificate.style}
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              {certificate.title}
            </h3>
            <p className="text-center text-orange-600 font-bold text-xl">
              {certificate.organization}
            </p>
            <div className="flex justify-center pt-3">
            <div className="px-7 py-2 rounded-md bg-black text-white">
              <a href={certificate.url} target="blank">Cetrificate</a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div></Element>
  );
};

export default Certificates;
