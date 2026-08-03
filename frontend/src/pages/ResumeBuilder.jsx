import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import ResumeForm from "../components/builder/ResumeForm";
import ResumePreview from "../components/preview/ResumePreview";

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <div className="h-[calc(100vh-4rem)] bg-slate-100 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="h-full max-w-[1700px] mx-auto p-4 md:p-6">
        <div className="h-full grid grid-cols-1 lg:grid-cols-[280px_1fr_580px] gap-6 items-start overflow-hidden">

          {/* Sidebar Navigation */}
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Form Editor - Custom Scrollable Container */}
          <div className="h-full overflow-y-auto pr-2 space-y-6">
            <ResumeForm activeSection={activeSection} />
          </div>

          {/* Live Preview Panel */}
          <ResumePreview />

        </div>
      </div>
    </div>
  );
}