import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#050b18] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="Resume Maker" className="w-10 h-10 " />
            Resume Maker
          </h2>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/?lang=en-in"
              className="p-2 bg-white/10 rounded-full hover:bg-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://in.linkedin.com/"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-normal text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className=" text-gray-300 hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/templates" className="text-gray-300 hover:text-blue-400">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:text-blue-400">
                Resume Help
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:text-blue-400">
                Cover Letter Help
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:text-blue-400">
                Interview Help
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-normal text-xl mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Forgot Password
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-normal text-xl mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
