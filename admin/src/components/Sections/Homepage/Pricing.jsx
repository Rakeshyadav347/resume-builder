import React from "react";
import { TiTick } from "react-icons/ti"; 

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      tagline: "For Career-Focused Professionals",
      price: "₹0",
      period: "per month",
      buttonStyle: "border border-black text-black hover:bg-black hover:text-white",
      features: [
        "AI-Powered Resume Suggestions",
        "Full ATS Score Report & Insights",
        "Resume Review by Experts",
        "Export in PDF & DOCX Formats",
        "Auto Tailoring for Job Descriptions",
        "Priority Email Support",
      ],
    },
    {
      name: "Basic",
      tagline: "For Smart Job Seekers",
      price: "₹499",
      period: "per month",
      popular: true,
      buttonStyle: "border border-black text-black hover:bg-black hover:text-white",
      features: [
        "Create Unlimited Resumes",
        "Access All Professional Templates",
        "Export in PDF Format",
        "Resume Customization per Job",
        "LinkedIn Profile Tips",
        "Standard Email Support",
      ],
    },
    {
      name: "Pro",
      tagline: "For Career-Focused Professionals",
      price: "₹999",
      period: "per month",
      buttonStyle: "border border-black text-black hover:bg-black hover:text-white",
      features: [
        "AI-Powered Resume Suggestions",
        "Full ATS Score Report & Insights",
        "Resume Review by Experts",
        "Export in PDF & DOCX Formats",
        "Auto Tailoring for Job Descriptions",
        "Priority Email Support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      {/* Section Header */}
      <div className="mb-12">
        <span className="mx-auto text-center text-sm font-medium p-2 rounded-full bg-white text-blue-600 border border-blue-600 mb-4 block w-max">
          OUR PRICING PLANS
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          Get Started Within Your Budget
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-5 text-left bg-[#F4F4F4] rounded-2xl shadow-md border-2 hover:border-black hover:shadow-xl transition duration-300`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-4 right-4 text-xs font-bold text-white bg-blue-600 px-2 py-1 rounded">
                Popular
              </span>
            )}

            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>
            <p className="text-2xl font-bold">{plan.price}</p>
            <p className="text-gray-500 text-sm mb-6">{plan.period}</p>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-full font-semibold transition ${plan.buttonStyle}`}
            >
              Get started
            </button>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <TiTick size={22} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
