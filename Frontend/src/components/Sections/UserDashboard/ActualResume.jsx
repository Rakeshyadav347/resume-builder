import React, { useState } from "react";
import { createResume } from "../../../allservices/Apiservice";
import { useNavigate } from "react-router-dom";

export default function ResumeForm({ token }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      role: "",
      email: "",
      website: "",
      linkedin: "",
    },
    education: [
      {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
    skills: [{ category: "", items: [""] }],
    extras: [{ title: "", description: "" }],
    experiences: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        description: "",
      },
    ],
    status: "draft",
  });

  // Handle simple field change
  const handleChange = (e, path) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => {
      const updated = { ...prev };
      let ref = updated;
      for (let i = 0; i < path.length - 1; i++) ref = ref[path[i]];
      ref[path[path.length - 1]] = value;
      return updated;
    });
  };

  // Add new item to dynamic arrays
  const addField = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await createResume(token, formData);
      alert("Resume created successfully!");

      if (res?.data?._id) {
        navigate(`/actualresumepreview/${res.data._id}`);
        // 🔑 go to preview page
      }
      console.log("✅ Saved Resume:", res);
    } catch (err) {
      console.error("❌ Error creating resume:", err);
      alert("Failed to create resume");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Resume Builder</h2>

      {/* Personal Info */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.personalInfo.fullName}
            onChange={(e) => handleChange(e, ["personalInfo", "fullName"])}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Role (e.g. Software Engineer)"
            value={formData.personalInfo.role}
            onChange={(e) => handleChange(e, ["personalInfo", "role"])}
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.personalInfo.email}
            onChange={(e) => handleChange(e, ["personalInfo", "email"])}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Website"
            value={formData.personalInfo.website}
            onChange={(e) => handleChange(e, ["personalInfo", "website"])}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="LinkedIn"
            value={formData.personalInfo.linkedin}
            onChange={(e) => handleChange(e, ["personalInfo", "linkedin"])}
            className="border p-2 rounded col-span-2"
          />
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Education</h3>
        {formData.education.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                handleChange(e, ["education", idx, "institution"])
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, ["education", idx, "degree"])}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) => handleChange(e, ["education", idx, "startDate"])}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="End Date"
              value={edu.endDate}
              onChange={(e) => handleChange(e, ["education", idx, "endDate"])}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={edu.location}
              onChange={(e) => handleChange(e, ["education", idx, "location"])}
              className="border p-2 rounded col-span-2"
            />
            <textarea
              placeholder="Description"
              value={edu.description}
              onChange={(e) =>
                handleChange(e, ["education", idx, "description"])
              }
              className="border p-2 rounded col-span-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addField("education", {
              institution: "",
              degree: "",
              startDate: "",
              endDate: "",
              location: "",
              description: "",
            })
          }
          className="text-blue-600"
        >
          + Add Education
        </button>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Experience</h3>
        {formData.experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(e, ["experiences", idx, "company"])}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) =>
                handleChange(e, ["experiences", idx, "position"])
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) =>
                handleChange(e, ["experiences", idx, "startDate"])
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleChange(e, ["experiences", idx, "endDate"])}
              className="border p-2 rounded"
            />
            <label className="col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                checked={exp.isCurrent}
                onChange={(e) =>
                  handleChange(e, ["experiences", idx, "isCurrent"])
                }
              />
              Currently Working
            </label>
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) =>
                handleChange(e, ["experiences", idx, "description"])
              }
              className="border p-2 rounded col-span-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addField("experiences", {
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              isCurrent: false,
              description: "",
            })
          }
          className="text-blue-600"
        >
          + Add Experience
        </button>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Skills</h3>
        {formData.skills.map((skill, idx) => (
          <div key={idx} className="mb-4">
            <input
              type="text"
              placeholder="Skill Category (e.g. Programming)"
              value={skill.category}
              onChange={(e) => handleChange(e, ["skills", idx, "category"])}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Skill Items (comma separated)"
              value={skill.items.join(", ")}
              onChange={(e) => {
                const items = e.target.value.split(",").map((s) => s.trim());
                setFormData((prev) => {
                  const updated = { ...prev };
                  updated.skills[idx].items = items;
                  return updated;
                });
              }}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("skills", { category: "", items: [""] })}
          className="text-blue-600"
        >
          + Add Skill
        </button>
      </section>

      {/* Extras */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Extras</h3>
        {formData.extras.map((extra, idx) => (
          <div key={idx} className="mb-4">
            <input
              type="text"
              placeholder="Title (e.g. Volunteer Work)"
              value={extra.title}
              onChange={(e) => handleChange(e, ["extras", idx, "title"])}
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Description"
              value={extra.description}
              onChange={(e) => handleChange(e, ["extras", idx, "description"])}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("extras", { title: "", description: "" })}
          className="text-blue-600"
        >
          + Add Extra
        </button>
      </section>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Resume
        </button>
      </div>
    </form>
  );
}
