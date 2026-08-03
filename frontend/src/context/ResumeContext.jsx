import { createContext, useContext, useState, useEffect } from "react";

const ResumeContext = createContext();

const initialData = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    summary: "",
    photo: "",
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certificates: [],
  languages: [],
  interests: "",
};

export const ResumeProvider = ({ children }) => {
  // Read from localStorage on initial load
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem("cvora_resume_data");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem("cvora_template") || "classic";
  });

  // Auto-save resumeData whenever it updates
  useEffect(() => {
    localStorage.setItem("cvora_resume_data", JSON.stringify(resumeData));
  }, [resumeData]);

  // Auto-save selectedTemplate whenever it changes
  useEffect(() => {
    localStorage.setItem("cvora_template", selectedTemplate);
  }, [selectedTemplate]);

  // Helper to reset data
  const clearResumeData = () => {
    setResumeData(initialData);
    localStorage.removeItem("cvora_resume_data");
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        selectedTemplate,
        setSelectedTemplate,
        clearResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);