import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("Home");
  const [hidden, setHidden] = useState(false);

  console.log(active);

  const handleScroll = () => {
     if(window.scrollY > 30){
      setSticky(true)
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleMenu = (link) => {    
    setActive(link)
    setHidden(!hidden)

  }

  useEffect(() => {
    handleScroll();
  }, []);

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About Me",
      path: "/about",
      offset: -90,
    },
    {
      link: "Certificate",
      path: "/certificate",
      offset: -86,
    },
    {
      link: "projects",
      path: "/projects",
      offset: -90,
    },
    {
      link: "contact",
      path: "/contact",
    },
  ];



  return (
    <header className="w-full bg-transparent font-Montserrat fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-20">
      <nav
        className={`py-4 lg:24 px-4  ${
          sticky
            ? "sticky top-0 left-0 right-0 drop-shadow-md bg-[#ffffff] z-0"
            : "bg-[#00000016]"
        }`}
      >
        <div className="flex justify-around items-center gap-8">
          <Link
            to={"/"}
            className="text-2xl font-bold text-orange-500 items-center gap-2"
          >
            <b>Full Stack </b>
            <b className={"text-black"}>Developer</b>
          </Link>

          {!hidden ? (
            <RiMenu3Fill
              className="absolute right-6 md:hidden text-xl font-bold"
              onClick={() => setHidden(true)}
            />
          ) : (
            <RiCloseFill
              className="absolute right-6 md:hidden text-xl font-bold text-white z-10"
              onClick={() => setHidden(false)}
            />
          )}

          {/* For Sm Menu */}
          {hidden && (
            <ul
              className={` ${
                hidden ? "block" : "hidden"
              } bg-[#000000] h-screen md:hidden absolute right-0 w-[40%] pt-16 text-center top-0 space-y-4`}
            >
              {navItems.map(({ link, path, offset }) => {
                return (
                  <Link
                    key={path}
                    to={path}
                    smooth={true}
                    offset={offset}
                    duration={400}
                    className={`block text-base uppercase cursor-pointer text-white mt-4 font-bold ${
                      active === link ? "text-[#ff4410fa]" : ""
                    }`}
                  >
                    <li
                      onClick={() => handleMenu(link) }
                      className={`${
                        active === link
                          ? "underline underline-offset-2 underline-orange-600"
                          : ""
                      } hover:text-[#ff4410fa]`}
                    >
                      {link}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}

          {/* For Lg Menu */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path, offset }) => {
              return (
                <Link
                  key={path}
                  to={path}
                  smooth={true}
                  offset={offset}
                  duration={400}
                  className={`block text-base uppercase cursor-pointer  font-bold ${
                    active === link ? "text-[#ff4410fa]" : ""
                  }`}
                >
                  <li
                    onClick={() => setActive(link)}
                    className={`${
                      active === link
                        ? "underline underline-offset-2 underline-orange-600"
                        : ""
                    } hover:text-[#ff4410fa]`}
                  >
                    {link}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
