import React, { useEffect, useState, useRef } from "react";
import { getResumeById } from "../../../allservices/Apiservice";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { useParams } from "react-router-dom";

export default function ActualResumePreview() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();
  const resumeId = id;

  const resumeRef = useRef();

  console.log("resumeId from params:", resumeId);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await getResumeById(token, resumeId);
        setResume(res.data);
        console.log(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, [resumeId]);

  if (loading) return <p>Loading resume...</p>;
  if (error) return <p className="text-red-600">❌ {error}</p>;
  if (!resume) return <p>No resume found</p>;

  const downloadPDF = async () => {
    const element = resumeRef.current;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save(`${resume.personalInfo.fullName}_Resume.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
      {/* Header */}
      <div ref={resumeRef}>
        <div className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">{resume.personalInfo.fullName}</h1>
          <p className="text-lg text-gray-600">{resume.personalInfo.role}</p>
          <div className="flex gap-6 text-sm text-gray-500 mt-2 flex-wrap">
            <span>{resume.personalInfo.email}</span>
            {resume.personalInfo.linkedin && (
              <span>{resume.personalInfo.linkedin}</span>
            )}
            {resume.personalInfo.website && (
              <span>{resume.personalInfo.website}</span>
            )}
          </div>
        </div>
        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-bold">
                {edu.degree} - {edu.institution}
              </h3>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate} | {edu.location}
              </p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Experiences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
          {resume.experiences.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-bold">
                {exp.position} - {exp.company}
              </h3>
              <p className="text-sm text-gray-600">
                {exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          {resume.skills.map((skill, idx) => (
            <div key={idx}>
              <p className="font-bold">{skill.category}</p>
              <p className="text-gray-600">{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div>
          <h2 className="text-xl font-semibold border-b mb-2">Extras</h2>
          {resume.extras.map((extra, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-bold">{extra.title}</h3>
              <p>{extra.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
