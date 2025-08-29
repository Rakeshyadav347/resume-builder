import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

import Hero from "../Homepage/Hero";
import ResumePreview from "../Homepage/ResumePreview";
import ResumeSteps from "../Homepage/ResumeSteps";
import TemplateSection from "../Homepage/TemplateSection";
import Ats from "../Homepage/Ats";
import WhatWeCheck from "../Homepage/WhatWeCheck";
import Blog from "../Homepage/Blog";
import Pricing from "../Homepage/Pricing";
import Testimonials from "../Homepage/Testimonials";
import FAQ from "../Homepage/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ResumePreview />
      <ResumeSteps />
      <TemplateSection />
      <Ats />
      <WhatWeCheck />
      <Blog />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
