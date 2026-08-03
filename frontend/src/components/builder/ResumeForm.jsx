import { useState } from "react";
import { useResume } from "../../context/ResumeContext";

export default function ResumeForm({ activeSection }) {
  const { resumeData, setResumeData } = useResume();
  const [skillInput, setSkillInput] = useState("");

  /* --- Personal Information Handler --- */
  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* --- Education Handlers --- */
  const handleEducationChange = (index, field, value) => {
    const updated = [...(resumeData.education || [])];
    updated[index][field] = value;
    setResumeData({ ...resumeData, education: updated });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...(resumeData.education || []),
        { degree: "", university: "", field: "", startYear: "", endYear: "", cgpa: "" },
      ],
    });
  };

  const removeEducation = (index) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  /* --- Experience Handlers --- */
  const handleExperienceChange = (index, field, value) => {
    const updated = [...(resumeData.experience || [])];
    updated[index][field] = value;
    setResumeData({ ...resumeData, experience: updated });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...(resumeData.experience || []),
        { jobTitle: "", company: "", location: "", startDate: "", endDate: "", description: "" },
      ],
    });
  };

  const removeExperience = (index) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index),
    });
  };

  /* --- Project Handlers --- */
  const handleProjectChange = (index, field, value) => {
    const updated = [...(resumeData.projects || [])];
    updated[index][field] = value;
    setResumeData({ ...resumeData, projects: updated });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...(resumeData.projects || []),
        { title: "", technologies: "", description: "", github: "", live: "" },
      ],
    });
  };

  const removeProject = (index) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== index),
    });
  };

  /* --- Skills Handlers --- */
  const addSkill = () => {
    const skill = skillInput.trim();
    if (!skill) return;
    if (resumeData.skills?.includes(skill)) {
      setSkillInput("");
      return;
    }
    setResumeData({
      ...resumeData,
      skills: [...(resumeData.skills || []), skill],
    });
    setSkillInput("");
  };

  const removeSkill = (index) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  /* --- Certificates Handlers --- */
  const handleCertificateChange = (index, field, value) => {
    const updated = [...(resumeData.certificates || [])];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, certificates: updated });
  };

  const addCertificate = () => {
    setResumeData({
      ...resumeData,
      certificates: [...(resumeData.certificates || []), { name: "", issuer: "", date: "" }],
    });
  };

  const removeCertificate = (index) => {
    setResumeData({
      ...resumeData,
      certificates: resumeData.certificates.filter((_, i) => i !== index),
    });
  };

  /* --- Languages Handlers --- */
  const handleLanguageChange = (index, field, value) => {
    const updated = [...(resumeData.languages || [])];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, languages: updated });
  };

  const addLanguage = () => {
    setResumeData({
      ...resumeData,
      languages: [...(resumeData.languages || []), { name: "", proficiency: "" }],
    });
  };

  const removeLanguage = (index) => {
    setResumeData({
      ...resumeData,
      languages: resumeData.languages.filter((_, i) => i !== index),
    });
  };

  /* --- Interests Handlers --- */
  const handleInterestsChange = (e) => {
    setResumeData({
      ...resumeData,
      interests: e.target.value,
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
      {/* 1. Personal Information Section */}
      {activeSection === "personal" && (
        <div className="space-y-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={resumeData.personal?.fullName || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={resumeData.personal?.email || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={resumeData.personal?.phone || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={resumeData.personal?.address || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={resumeData.personal?.linkedin || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            value={resumeData.personal?.github || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <textarea
            rows="5"
            name="summary"
            placeholder="Professional Summary"
            value={resumeData.personal?.summary || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
        </div>
      )}

      {/* 2. Education Section */}
      {activeSection === "education" && (
        <div className="space-y-6">
          {resumeData.education?.map((edu, index) => (
            <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-xl p-5 space-y-4 bg-gray-50/50 dark:bg-slate-900/50">
              <input
                type="text"
                placeholder="Degree"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={edu.degree || ""}
                onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
              />
              <input
                type="text"
                placeholder="University"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={edu.university || ""}
                onChange={(e) => handleEducationChange(index, "university", e.target.value)}
              />
              <input
                type="text"
                placeholder="Field of Study"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={edu.field || ""}
                onChange={(e) => handleEducationChange(index, "field", e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Start Year"
                  className="border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  value={edu.startYear || ""}
                  onChange={(e) => handleEducationChange(index, "startYear", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="End Year"
                  className="border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  value={edu.endYear || ""}
                  onChange={(e) => handleEducationChange(index, "endYear", e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="CGPA"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={edu.cgpa || ""}
                onChange={(e) => handleEducationChange(index, "cgpa", e.target.value)}
              />
              {resumeData.education.length > 1 && (
                <button type="button" onClick={() => removeEducation(index)} className="text-red-500 font-semibold">Remove Education</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addEducation} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">+ Add Education</button>
        </div>
      )}

      {/* 3. Experience Section */}
      {activeSection === "experience" && (
        <div className="space-y-6">
          {resumeData.experience?.map((exp, index) => (
            <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-xl p-5 space-y-4 bg-gray-50/50 dark:bg-slate-900/50">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={exp.jobTitle || ""}
                onChange={(e) => handleExperienceChange(index, "jobTitle", e.target.value)}
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={exp.company || ""}
                onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={exp.location || ""}
                onChange={(e) => handleExperienceChange(index, "location", e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Start Date"
                  className="border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  value={exp.startDate || ""}
                  onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="End Date"
                  className="border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  value={exp.endDate || ""}
                  onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                />
              </div>
              <textarea
                rows="4"
                placeholder="Description"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={exp.description || ""}
                onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
              />
              {resumeData.experience.length > 1 && (
                <button type="button" onClick={() => removeExperience(index)} className="text-red-500 font-semibold">Remove Experience</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addExperience} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">+ Add Experience</button>
        </div>
      )}

      {/* 4. Projects Section */}
      {activeSection === "projects" && (
        <div className="space-y-6">
          {resumeData.projects?.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-xl p-5 space-y-4 bg-gray-50/50 dark:bg-slate-900/50">
              <input
                type="text"
                placeholder="Project Title"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={project.title || ""}
                onChange={(e) => handleProjectChange(index, "title", e.target.value)}
              />
              <input
                type="text"
                placeholder="Technologies"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={project.technologies || ""}
                onChange={(e) => handleProjectChange(index, "technologies", e.target.value)}
              />
              <textarea
                rows="4"
                placeholder="Description"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={project.description || ""}
                onChange={(e) => handleProjectChange(index, "description", e.target.value)}
              />
              <input
                type="text"
                placeholder="GitHub URL"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={project.github || ""}
                onChange={(e) => handleProjectChange(index, "github", e.target.value)}
              />
              
              {resumeData.projects.length > 1 && (
                <button type="button" onClick={() => removeProject(index)} className="text-red-500 font-semibold">Remove Project</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addProject} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">+ Add Project</button>
        </div>
      )}

      {/* 5. Skills Section */}
      {activeSection === "skills" && (
        <div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill();
                }
              }}
              className="flex-1 border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            />
            <button type="button" onClick={addSkill} className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition">Add Skill</button>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {resumeData.skills?.map((skill, index) => (
              <div key={index} className="bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200 px-4 py-2 rounded-full flex items-center gap-2">
                <span>{skill}</span>
                <button type="button" onClick={() => removeSkill(index)} className="font-bold hover:text-red-500">×</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Certificates Section */}
      {activeSection === "certificates" && (
        <div className="space-y-6">
          {resumeData.certificates?.map((cert, index) => (
            <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-xl p-5 space-y-4 bg-gray-50/50 dark:bg-slate-900/50">
              <input
                type="text"
                placeholder="Certificate Name"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={cert.name || ""}
                onChange={(e) => handleCertificateChange(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Issuer Organization"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={cert.issuer || ""}
                onChange={(e) => handleCertificateChange(index, "issuer", e.target.value)}
              />
              <input
                type="text"
                placeholder="Issue Date / Year"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={cert.date || ""}
                onChange={(e) => handleCertificateChange(index, "date", e.target.value)}
              />
              <button type="button" onClick={() => removeCertificate(index)} className="text-red-500 font-semibold">Remove Certificate</button>
            </div>
          ))}
          <button type="button" onClick={addCertificate} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">+ Add Certificate</button>
        </div>
      )}

      {/* 7. Languages Section */}
      {activeSection === "languages" && (
        <div className="space-y-6">
          {resumeData.languages?.map((lang, index) => (
            <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-xl p-5 space-y-4 bg-gray-50/50 dark:bg-slate-900/50">
              <input
                type="text"
                placeholder="Language (e.g., English, Spanish)"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={lang.name || ""}
                onChange={(e) => handleLanguageChange(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Proficiency (e.g., Native, Fluent, Intermediate)"
                className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                value={lang.proficiency || ""}
                onChange={(e) => handleLanguageChange(index, "proficiency", e.target.value)}
              />
              <button type="button" onClick={() => removeLanguage(index)} className="text-red-500 font-semibold">Remove Language</button>
            </div>
          ))}
          <button type="button" onClick={addLanguage} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">+ Add Language</button>
        </div>
      )}

      {/* 8. Interests Section */}
      {activeSection === "interests" && (
        <div className="space-y-4">
          <label className="block font-semibold dark:text-white">Hobbies & Interests</label>
          <textarea
            rows="4"
            placeholder="Reading, Photography, Traveling..."
            className="w-full border rounded-lg p-3 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            value={resumeData.interests || ""}
            onChange={handleInterestsChange}
          />
        </div>
      )}
    </div>
  );
}