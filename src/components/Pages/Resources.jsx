import React from "react";
import Navbar from "../../components/Sections/Templates/Navbar";

import Footer from "../../components/Sections/Homepage/Footer";

import ResourceDetails from "../Sections/ResourcePage/ResourceDetails";
import Resource from "../Sections/ResourcePage/Resource";

const Resources = () => {
  return (
    <>
      <Navbar/>
      <Resource/>
      <ResourceDetails />
      <Footer />
    </>
  );
};

export default Resources;
