import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import userimg from "../../../assets/user-img.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="w-full h-24 shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center h-full px-5">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Resume Maker"
            className="w-10 h-10 ml-5 lg:ml-20"
          />
          <h1 className=" hidden md:block text-2xl font-semibold text-black md:text-3xl">
            Resume Maker
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-10 ml-40 mr-10">
          <ul className="flex gap-10 text-lg text-gray-700 font-normal items-center">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/templates" className="hover:text-blue-500">
                Templates
              </Link>
            </li>
            {/* 
            <li className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 hover:text-blue-500"
              >
                Resources <FaChevronDown className="text-xs" />
              </button>
              {resourcesOpen && (
                <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-3 w-40 "> */}
            <li>
              <Link to="/resources" className="block hover:text-blue-500 ">
                Resources
              </Link>
            </li>
            {/* <li>
                    <Link
                      to="/resource-detail"
                      className="block hover:text-blue-500"
                    >
                      Resource Detail
                    </Link>
                  </li>
                </ul>
              )}
            </li> */}

            <li>
              <Link to="/pricing" className="hover:text-blue-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
             <li>
            <Link
              to="/login-as"
              className="flex items-center justify-center gap-2 px-5 py-2 w-full bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              <FaUserCircle className="text-xl" /> Log In
            </Link>
          </li>
          </ul>

         
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <img src={userimg} alt="user" className="w-10 h-10 rounded-full" />
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col text-gray-700 font-medium px-6 py-4 space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/templates"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Templates
              </Link>
            </li>

            <li>
              <Link
                to="/resources"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              {/* <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 hover:text-blue-500 w-full"
              >
                Resources <FaChevronDown className="text-xs" />
              </button>
              {resourcesOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/resource-detail"
                      className="block hover:text-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Resource Detail
                    </Link>
                  </li>
                </ul>
              )} */}
            </li>

            <li>
              <Link
                to="/pricing"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/login-as"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-2 w-full bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              >
                <FaUserCircle className="text-xl" /> Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
