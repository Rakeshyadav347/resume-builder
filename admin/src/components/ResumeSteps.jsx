// ResumeSteps.jsx
import React from "react";
import {
  FaUserAlt,
  FaRegFileAlt,
  FaInfoCircle,
  FaDownload,
} from "react-icons/fa";
import step1Img from "../assets/login.png";
import step2Img from "../assets/templates.png";
import step3Img from "../assets/info.png";
import step4Img from "../assets/ats.png";

function ResumeSteps() {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description:
        "Start your journey to career success by creating a free account. You'll get instant access to professional resume templates, intelligent editing tools, and expert guidance—everything you need to craft a standout resume quickly and confidently.",
      img: step1Img,
      icon: <FaUserAlt className="text-white w-5 h-5" />,
      button1: "Log In to Your Account",
      button2: "Sign Up to Get Started",
    },
    {
      id: 2,
      title: "Choose Your Template",
      description:
        "Choose the resume template that best fits your personality, profession, and goals. Whether you prefer a modern, creative, or classic style, our professionally designed templates help you showcase your strengths and make a strong first impression—customize it in minutes, no design skills needed.",
      img: step2Img,
      icon: <FaRegFileAlt className="text-white w-5 h-5" />,
      tags: [
        "Professional",
        "Modern",
        "Creative",
        "Minimalist",
        "Elegant",
        "Classic",
        "Clean",
        "Majestic",
        "Corporate",
        "Advanced",
      ],
    },
    {
      id: 3,
      title: "Add Your Information",
      description:
        "Add your personal and professional details to start building a resume that truly reflects you. Our smart builder guides you step by step to ensure a polished, job-ready resume.",
      img: step3Img,
      icon: <FaInfoCircle className="text-white w-5 h-5" />,
      tags: [
        "Personal Info",
        "Experience",
        "Certificate",
        "Skills",
        "Education",
        "Summary",
        "Project",
      ],
    },
    {
      id: 4,
      title: "Download Your Resume",
      description:
        "Your resume is ready! Download it in your preferred format and start applying with confidence. Professionally formatted and tailored to your strengths, your resume is designed to make a lasting impression on recruiters.",
      img: step4Img,
      icon: <FaDownload className="text-white w-5 h-5" />,
      tags: ["PDF", "Microsoft Word"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F2F6FB] to-[#E7EBF0]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="mx-auto text-center text-sm font-medium p-2 rounded-full bg-white text-blue-600 border border-blue-600 mb-4 block w-max">
          HOW IT WORKS
        </h2>
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          Easy Steps for Build Resume
        </h1>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full relative flex justify-center">
              <img
                src={step.img}
                alt={`Step ${step.id}`}
                className="relative w-full rounded-xl shadow-lg border border-gray-200"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full">
              {/* Step Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 p-2 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-blue-600 font-semibold text-lg">
                  STEP {step.id}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-4">{step.description}</p>

              {/* Buttons box */}
              {step.button1 && (
                <div className="inline-block border-2 border-blue-600 p-6 rounded-lg mb-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
                      {step.button1}
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition">
                      {step.button2}
                    </button>
                  </div>
                </div>
              )}

              {/* Tags box */}
              {step.tags && (
                <div className="inline-block border-2 border-blue-600 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 border-2  border-gray-300 text-gray-700 rounded-xl hover:bg-blue-600 hover:text-white transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResumeSteps;
