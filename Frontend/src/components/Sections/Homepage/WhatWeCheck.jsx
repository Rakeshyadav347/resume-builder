import React from 'react';
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineSummarize } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { LuBookText } from "react-icons/lu";
import { BiCustomize } from "react-icons/bi";
import { LuBookCheck } from "react-icons/lu";
import { MdFormatAlignJustify } from "react-icons/md";
import { LuALargeSmall } from "react-icons/lu";
import { VscBook } from "react-icons/vsc";

const WhatWeCheck = () => {
  const cards = [
    {
      id: '1',
      icon: <RiContactsLine size={30} className="text-gray-600" />,
      title: "Contact Information",
      desc: "Your contact information should be clear and easily findable. Include at least two methods: phone and email.",
    },
    {
      id: '2',
      icon: <MdOutlineSummarize size={30} className="text-gray-600" />,
      title: "Summary Statement",
      desc: "A professional summary or resume objective is your first chance to grab the hiring manager’s attention. Including your top skills and achievements with keywords from the job description is essential.",
    },
    {
      id: '3',
      icon: <TiTick size={30} className="text-gray-600" />,
      title: "Quantifiable Results",
      desc: "Our resume scanner lets you enter a job title and provides content suggestions featuring industry-specific keywords, skills and certifications that demonstrate your suitability for the role.",
    },
    {
      id: '4',
      icon: <LuBookText size={30} className="text-gray-600" />,
      title: "Comprehensiveness",
      desc: "A well-written resume must always include contact information, an opening statement, a skills list, a work history section, and education.",
    },
    {
      id: '5',
      icon: <LuBookCheck size={30} className="text-gray-600" />,
      title: "Spelling & Grammar",
      desc: "A professional resume must be error-free. Our ATS Resume Checker catches any typo that needs to be fixed.",
    },
    {
      id: '6',
      icon: <BiCustomize size={30} className="text-gray-600" />,
      title: "Customization",
      desc: "Our resume scanner lets you enter a job title and provides content suggestions featuring industry-specific keywords, skills and certifications that demonstrate your suitability for the role.",
    },
    {
      id: '7',
      icon: <VscBook size={30} className="text-gray-600" />,
      title: "Word Choice",
      desc: "Action verbs convey a sense of proactiveness and leave a lasting impact. Avoid personal pronouns and filler words to maintain a professional tone.",
    },
    {
      id: '8',
      icon: <MdFormatAlignJustify size={30} className="text-gray-600" />,
      title: "Formatting",
      desc: "Autoformats your resume into the popular combination format but has drag-and-drop sections for easy customization.",
    },
    {
      id: '9',
      icon: <LuALargeSmall size={30} className="text-gray-600" />,
      title: "Length",
      desc: "Scans long bullet points and suggests ways to revise and improve your descriptions. This maximizes readability for hiring managers and makes it easier to pass ATS scans.",
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-2">What We Check</h2>
      <p className="text-gray-500 text-base text-center mb-10">
        Our ATS Resume Checker grades your existing or freshly built resume and provides <br /> feedback on the following criteria:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 border-2 rounded-xl border-gray-300 bg-white hover:shadow-lg transition flex flex-col items-start"
          >
            <div className="mb-4 p-3 bg-gray-100 rounded-full shadow-sm">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeCheck;
