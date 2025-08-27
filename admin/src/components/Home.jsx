import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ResumePreview from "./ResumePreview";
import ResumeSteps from "./ResumeSteps";
import TemplateSection from "./TemplateSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <ResumePreview/>
      <ResumeSteps/>
      <TemplateSection/>
    </>
  );
};

export default Home;
