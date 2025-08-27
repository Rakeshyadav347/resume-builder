import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ResumePreview from "./ResumePreview";
import ResumeSteps from "./ResumeSteps";
import TemplateSection from "./TemplateSection";
import Ats from "./Ats";
import WhatWeCheck from "./WhatWeCheck";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <ResumePreview/>
      <ResumeSteps/>
      <TemplateSection/>
      <Ats/>
      <WhatWeCheck/>
    </>
  );
};

export default Home;
