import React, { useState } from "react";

function Project({ onPrevious, onFinish }) {
  const [projects, setProjects] = useState([
    {
      title: "",
      organization: "",
      role: "",
      link: "",
      startDate: "",
      endDate: "",
      description: "",
      tools: [],
      toolInput: "",
    },
  ]);

  // Handle input change
  const handleChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  // Add tool (tags like Github, React, etc.)
  const handleAddTool = (index) => {
    const newProjects = [...projects];
    if (newProjects[index].toolInput.trim() !== "") {
      newProjects[index].tools.push(newProjects[index].toolInput.trim());
      newProjects[index].toolInput = "";
      setProjects(newProjects);
    }
  };

  // Remove tool
  const handleRemoveTool = (index, toolIndex) => {
    const newProjects = [...projects];
    newProjects[index].tools.splice(toolIndex, 1);
    setProjects(newProjects);
  };

  // Add another project
  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        organization: "",
        role: "",
        link: "",
        startDate: "",
        endDate: "",
        description: "",
        tools: [],
        toolInput: "",
      },
    ]);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">Project</h2>
        <p className="text-gray-600 mb-6">
          Let’s start with the basics. To ensure employers can reach you, input at least your degree, courses name, and duration.
        </p>

        {projects.map((project, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            {/* Project Title & Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Organization / Client Name (Optional)"
                value={project.organization}
                onChange={(e) =>
                  handleChange(index, "organization", e.target.value)
                }
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Role & Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Role / Position in Project"
                value={project.role}
                onChange={(e) => handleChange(index, "role", e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="url"
                placeholder="Project URL / Live Link (Optional)"
                value={project.link}
                onChange={(e) => handleChange(index, "link", e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="date"
                value={project.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="date"
                value={project.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Description */}
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="border rounded-lg p-2 w-full mb-4"
              rows={3}
            />

            {/* Tools & Technologies */}
            <div>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Add Tool (e.g. React, GitHub)"
                  value={project.toolInput}
                  onChange={(e) =>
                    handleChange(index, "toolInput", e.target.value)
                  }
                  className="border rounded-lg p-2 flex-1"
                />
                <button
                  type="button"
                  onClick={() => handleAddTool(index)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>

              {/* Display Tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {tool}
                    <button
                      type="button"
                      onClick={() => handleRemoveTool(index, toolIndex)}
                      className="text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Add Another Project */}
        <button
          onClick={handleAddProject}
          className="w-full py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 mb-6"
        >
          + Add Another Project
        </button>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            Previous
          </button>
          <button
            onClick={() => onFinish(projects)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
