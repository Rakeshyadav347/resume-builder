import React from "react";
import NavbarMain from "../Sections/Homepage/NavbarMain";
import Footer from "../Sections/Homepage/Footer";

import Hero from "../Sections/Homepage/Hero";
import ResumePreview from "../Sections/Homepage/ResumePreview";
import ResumeSteps from "../Sections/Homepage/ResumeSteps";
import TemplateSection from "../Sections/Homepage/TemplateSection";
import Ats from "../Sections/Homepage/Ats";
import WhatWeCheck from "../Sections/Homepage/WhatWeCheck";
import Blog from "../Sections/Homepage/Blog";
import Pricing from "../Sections/Homepage/Pricing";
import Testimonials from "../Sections/Homepage/Testimonials";
import FAQ from "../Sections/Homepage/FAQ";

const Home = () => {
  return (
    <>
      <NavbarMain />
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
