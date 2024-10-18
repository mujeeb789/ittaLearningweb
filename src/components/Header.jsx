import React, { useState, useEffect } from "react";
import { navs } from "../constants/Navs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import logo1 from "../assets/images/logo.png";

import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolling ? "bg-[#080a54] rounded-b-3xl shadow-lg" : "bg-transparent"
      } text-white`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 py-3 h-[8vh]">
        {/* Mobile and Tablet Menu Button */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <BsThreeDotsVertical size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center mx-auto md:mx-0">
          <img
            alt="Logo"
            src={logo1}
            width={180}
            className="object-contain"
          />
        </div>

        {/* Desktop and Tablet Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navs.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 font-semibold px-3 py-2 rounded hover:scale-110 transition-all duration-300"
                  : "px-3 py-2 rounded hover:text-pink-600 hover:scale-110 transition-all duration-300"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#080a54] shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-6">
            <button
              onClick={toggleSidebar}
              className="text-lg text-slate-300 underline decoration-pink-600 mb-8"
            >
              Close
            </button>
            <nav className="mt-4 text-slate-200 flex flex-col gap-4">
              {navs.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-600 font-semibold hover:underline transition-all duration-300"
                      : "hover:text-pink-600 transition-all duration-300"
                  }
                  onClick={toggleSidebar}
                >
                  {nav.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Backdrop Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </header>
  );
}

export default Header;
