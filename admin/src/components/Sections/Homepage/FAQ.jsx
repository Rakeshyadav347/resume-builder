import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I use Job Ease on mobile devices?",
      answer: "Yes! Job Ease is fully optimized for mobile devices. You can access all features directly from your phone.",
    },
    {
      question: "Is my data safe with Job Ease?",
      answer: "Absolutely. We use encryption and secure servers to ensure your personal data is always protected.",
    },
    {
      question: "Can I export my resume?",
      answer: "Yes, you can export your resume in PDF and DOCX formats anytime.",
    },
    {
      question: "Do I need to pay to use Job Ease?",
      answer: "We offer both free and premium plans. You can start with the free plan and upgrade if needed.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription anytime with no hidden charges.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">

      <div className="text-center mb-12">
        <span className="mx-auto text-center text-sm font-medium p-2 rounded-full bg-white text-blue-600 border border-blue-600 mb-4 block w-max">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          Frequently Asked Questions
        </h2>
      </div>

    
      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
         >
            <div className="flex justify-between items-center">
              <h3 className=" text-lg text-gray-800 font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FiMinus className="text-gray-600" />
              ) : (
                <FiPlus className="text-gray-600" />
              )}
            </div>

           
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
