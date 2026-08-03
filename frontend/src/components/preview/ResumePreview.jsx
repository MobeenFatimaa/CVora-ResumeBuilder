import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Download, Layout } from "lucide-react";
import { useResume } from "../../context/ResumeContext";

// Import Modular Template Components
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import CreativeTemplate from "../templates/CreativeTemplate";

export default function ResumePreview() {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResume();
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${resumeData?.personal?.fullName || "Resume"}_CVora`,
  });

  const templates = [
    { id: "classic", label: "Classic" },
    { id: "modern", label: "Modern" },
    { id: "minimal", label: "Minimalist" },
    { id: "professional", label: "Professional" },
    { id: "creative", label: "Creative" },
  ];

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate data={resumeData} />;
      case "minimal":
        return <MinimalTemplate data={resumeData} />;
      case "professional":
        return <ProfessionalTemplate data={resumeData} />;
      case "creative":
        return <CreativeTemplate data={resumeData} />;
      case "classic":
      default:
        return <ClassicTemplate data={resumeData} />;
    }
  };

  return (
    <aside className="h-full bg-slate-200/60 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800/80 p-4 rounded-2xl flex flex-col items-center overflow-y-auto">
      
      {/* TOOLBAR HEADER */}
      <div className="w-full max-w-[800px] mb-4 bg-white dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 sticky top-0 z-20 backdrop-blur-md">
        
        {/* Template Switcher Container */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pl-1 shrink-0 flex items-center gap-1">
            <Layout size={13} /> Template:
          </span>
          <div className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200/80 dark:border-slate-800">
            {templates.map((t) => {
              const isActive = selectedTemplate === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTemplate(t.id)}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-sky-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PDF Export Button */}
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition duration-200 shadow-md shadow-green-600/20 shrink-0"
        >
          <Download size={14} />
          <span>Export PDF</span>
        </button>
      </div>

      {/* PRINTABLE CANVAS */}
      <div className="w-full flex justify-center pb-6">
        <div
          ref={resumeRef}
          className="w-full max-w-[800px] min-h-[1050px] bg-white text-slate-900 p-8 md:p-10 shadow-2xl rounded-sm flex flex-col font-sans text-sm leading-relaxed border border-slate-200/80"
        >
          {renderTemplate()}
        </div>
      </div>
    </aside>
  );
}