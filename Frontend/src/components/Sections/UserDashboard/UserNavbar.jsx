import React from 'react'
import logo from "../../../assets/logo.png";
const UserNavbar = () => {
  return (
    <>
   <nav className="w-full h-24 shadow-md bg-white fixed top-0 left-0 z-50 flex items-center">
        <div className="flex items-center gap-2 px-6 lg:px-20">
          <img
            src={logo}
            alt="Resume Maker"
            className="w-10 h-10"
          />
          <h1 className="hidden md:block text-2xl font-semibold text-black md:text-3xl">
            Resume Maker
          </h1>
        </div>
      </nav>
      </>
  )
}

export default UserNavbar