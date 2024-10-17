import React, { useState } from "react";
import { navs } from "../constants/Navs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="relative ">
      <div className="px-5 h-[9vh]  bg-[#080a54]  w-full overflow-y-hidden items-center  text-white  flex justify-between">
        <button className="sm:hidden" onClick={toggleSidebar}>
          <BsThreeDotsVertical />
        </button>

        <div>
          <img alt="" src={logo} width={80} />
        </div>
        <nav className=" hidden md:flex lg:gap-10  ">
          {navs.map((item, index) => (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-pink-600 p-1 rounded-sm lg:p-10  hover:scale-125 hover:underline underline-offset-8  hover:decoration-pink-700 hover:transition-all duration-500"
                  : "p-1 rounded-sm lg:p-10  hover:scale-125 hover:underline underline-offset-8  hover:decoration-pink-700 hover:transition-all duration-500 "
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div
          onClick={toggleSidebar}
          className={`fixed top-0 right-0 flex h-full w-full bg-black/30 backdrop-blur-sm transform ${
            isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="bg-[#080a54] h-full flex-end w-64 p-6 shadow-lg">
            <button
              onClick={toggleSidebar}
              className=" text-lg p-4 focus:outline-none underline-offset-[10px] text-slate-300 decoration-pink-600 decoration-2 underline"
            >
              Close
            </button>
            <nav className="mt-8 text-slate-200 flex flex-col gap-4">
              {navs.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-pink-600 p-1 rounded-sm lg:p-10  hover:scale-125 hover:underline underline-offset-8  hover:decoration-pink-700 hover:transition-all duration-500"
                      : "p-1 rounded-sm lg:p-10  hover:scale-110 hover:underline underline-offset-8  hover:decoration-pink-700 hover:transition-all duration-500 "
                  }
                >
                  {nav.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
