import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"; // if you're passing resumeId in URL
import { getFresherResumeById } from "../../../allservices/Apiservice";
import { useResume } from "../UserDashboard/ResumeContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function FresherResumePreview() {
  const { resumeData } = useResume(); // fallback if needed
  const { resumeId } = useParams(); // assumes route: /fresherresumepreview/:resumeId
  const [fetchedResume, setFetchedResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const resumeRef = useRef();

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const result = await getFresherResumeById(token, resumeId);
        setFetchedResume(result.data || result); // adjust depending on API response shape
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (resumeId) {
      fetchResume();
    } else {
      setLoading(false);
    }
  }, [resumeId]);

  const resume = fetchedResume || resumeData;

  const handleDownload = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${resume.personalInfo?.firstName || "resume"}_resume.pdf`);
  };

  if (loading) return <p className="text-center mt-10">Loading resume...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Resume Preview</h1>

        {/* Personal Info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">
            Personal Information
          </h2>
          <p>
            <strong>Name:</strong> {resume.personalInfo?.firstName}{" "}
            {resume.personalInfo?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {resume.personalInfo?.email}
          </p>
          <p>
            <strong>Phone:</strong> {resume.personalInfo?.phoneNumber}
          </p>
          <p>
            <strong>Location:</strong> {resume.personalInfo?.city},{" "}
            {resume.personalInfo?.stateOrUnionTerritory},{" "}
            {resume.personalInfo?.country}
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">
            Education
          </h2>
          {resume.education?.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-medium">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p>
                {edu.schoolName} | {edu.location}
              </p>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
              <p>
                <em>{edu.grade}</em>
              </p>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">
            Certificates
          </h2>
          {resume.certificates?.map((cert, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-medium">{cert.certificateName}</p>
              <p>Issued by {cert.issuingOrganization}</p>
              <p>
                {cert.startDate} - {cert.endDate}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {resume.skills?.map((skill, idx) => (
              <li
                key={idx}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {skill.skillCategory} ({skill.proficiency})
              </li>
            ))}
          </ul>
        </section>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Summary</h2>
          <p>{resume.summary}</p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Projects</h2>
          {resume.projects?.map((proj, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-medium">{proj.projectTitle}</p>
              <p>{proj.organizationName}</p>
              <p>
                {proj.startDate} - {proj.endDate}
              </p>
              <p>{proj.description}</p>
              {proj.projectUrl && (
                <a
                  href={proj.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  Project Link
                </a>
              )}
              <p className="text-sm text-gray-600">
                Tools: {proj.toolsAndTechnologies}
              </p>
            </div>
          ))}
        </section>
      </div>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default FresherResumePreview;
