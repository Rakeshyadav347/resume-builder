import React from "react";

const templates = [1, 2, 3]; // Placeholder for multiple templates

const TemplateCard = () => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mx-auto">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-blue-600 rounded-full mr-4"></div>
      <div>
        <h3 className="font-semibold">Madhusudhan</h3>
        <p className="text-gray-500 text-sm">Product Designer</p>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold mb-1">Education</h4>
      <p className="text-gray-600 text-sm">
        University
        <br />
        Aug 2022 | Location
      </p>
      <p className="text-gray-600 text-sm mt-1">
        College
        <br />
        Aug 2022 | Location
      </p>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold mb-1">Experience</h4>
      <p className="text-gray-600 text-sm">
        Company · Product Designer
        <br />
        Aug 2022 - Present
        <br />
        Collaborated with cross-functional teams including product managers and
        developers to create user-friendly interfaces for web applications.
      </p>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold mb-1">Skill</h4>
      <p className="text-gray-600 text-sm">
        Design: User Interviews, Affinity Diagramming, Card Sorting, Information
        Architecture, A/B Testing, Design Handoff
        <br />
        Tools: Figma, Sketch, Adobe XD, HTML/CSS, Zeplin
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-1">Extras</h4>
      <p className="text-gray-600 text-sm">
        10K Designer Member
        <br />
        Winner Of Design Contest
      </p>
    </div>
  </div>
);

const TemplateSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="mx-auto text-center text-sm font-medium p-2 rounded-full bg-white text-blue-600 border border-blue-600 mb-4 block w-max">
        STYLISH TEMPLATES
      </h2>
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16">
        Modern Templates Made To Impress
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {templates.map((_, index) => (
          <TemplateCard key={index} />
        ))}
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        View All Template →
      </button>
    </div>
  );
};

export default TemplateSection;
