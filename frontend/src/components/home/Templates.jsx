import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const templates = [
  {
    id: "classic",
    title: "Classic",
    description: "Clean, traditional layout ideal for corporate and formal roles.",
    badge: "Popular",
    type: "classic",
  },
  {
    id: "modern",
    title: "Modern",
    description: "Sleek and vibrant design featuring structured accent headers.",
    badge: "Trending",
    type: "modern",
  },
  {
    id: "minimal",
    title: "Minimalist",
    description: "Elegant serif typography focusing strictly on content clarity.",
    badge: "Clean",
    type: "minimal",
  },
  {
    id: "professional",
    title: "Professional",
    description: "Polished structure tailored for mid-to-senior level positions.",
    badge: "Corporate",
    type: "professional",
  },
  {
    id: "creative",
    title: "Creative",
    description: "Dynamic layout designed to make standout creative profiles pop.",
    badge: "New",
    type: "creative",
  },
];

export default function Templates() {
  const navigate = useNavigate();
  const { selectedTemplate, setSelectedTemplate } = useResume();

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    navigate("/builder");
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden" id="templates">
      {/* Background Decorator Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold">
            <Sparkles size={14} />
            <span>Tailored Design Layouts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Choose Your Resume Template
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Select from our ATS-optimized, professionally structured templates to build your stand-out resume.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {templates.map((template) => {
            const isSelected = selectedTemplate === template.id;

            return (
              <div
                key={template.id}
                className={`group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-2xl ${
                  isSelected
                    ? "border-blue-600 ring-2 ring-blue-600/20 shadow-blue-500/10"
                    : "border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50"
                }`}
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 uppercase tracking-wider">
                      {template.badge}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                        <Check size={14} /> Active
                      </span>
                    )}
                  </div>

                  {/* Stylized Template Visual Skeleton Preview */}
                  <div className="w-full h-52 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-6 p-4 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between group-hover:border-blue-400/50 transition-colors overflow-hidden relative">
                    
                    {/* Render Visual Layout Variants */}
                    {template.type === "modern" && (
                      <div className="w-full h-full flex flex-col gap-2">
                        <div className="w-full h-8 bg-blue-600 rounded-md p-1.5 flex items-center justify-between">
                          <div className="w-16 h-2 bg-white/90 rounded" />
                          <div className="w-6 h-6 bg-white/20 rounded-full" />
                        </div>
                        <div className="space-y-1.5 pt-1">
                          <div className="w-1/3 h-2 bg-blue-500/60 rounded" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                          <div className="w-4/5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                        </div>
                        <div className="space-y-1.5 pt-1">
                          <div className="w-1/4 h-2 bg-blue-500/60 rounded" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                        </div>
                      </div>
                    )}

                    {template.type === "creative" && (
                      <div className="w-full h-full flex gap-2">
                        <div className="w-1/3 h-full bg-slate-200 dark:bg-slate-700/60 rounded-md p-2 flex flex-col gap-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full" />
                          <div className="w-full h-1.5 bg-slate-400 dark:bg-slate-500 rounded" />
                          <div className="w-3/4 h-1.5 bg-slate-400 dark:bg-slate-500 rounded" />
                        </div>
                        <div className="w-2/3 h-full flex flex-col gap-2 p-1">
                          <div className="w-full h-2 bg-blue-500/60 rounded" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                          <div className="w-5/6 h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                          <div className="w-full h-2 bg-blue-500/60 rounded pt-2" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                        </div>
                      </div>
                    )}

                    {template.type === "minimal" && (
                      <div className="w-full h-full flex flex-col items-center gap-2 pt-1">
                        <div className="w-24 h-2.5 bg-slate-800 dark:bg-slate-200 rounded" />
                        <div className="w-32 h-1.5 bg-slate-400 dark:bg-slate-500 rounded" />
                        <div className="w-full h-px bg-slate-300 dark:bg-slate-700 my-1" />
                        <div className="w-full space-y-1.5 text-left">
                          <div className="w-16 h-2 bg-slate-500/60 rounded" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                          <div className="w-4/5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                        </div>
                      </div>
                    )}

                    {(template.type === "classic" || template.type === "professional") && (
                      <div className="w-full h-full flex flex-col gap-2">
                        <div className="flex justify-between items-center border-b border-slate-300 dark:border-slate-700 pb-2">
                          <div className="space-y-1">
                            <div className="w-20 h-2.5 bg-slate-900 dark:bg-white rounded" />
                            <div className="w-28 h-1.5 bg-slate-400 dark:bg-slate-500 rounded" />
                          </div>
                          {template.type === "classic" && <div className="w-6 h-6 bg-slate-300 dark:bg-slate-700 rounded" />}
                        </div>
                        <div className="space-y-1.5 pt-1">
                          <div className="w-20 h-2 bg-blue-600 rounded" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                          <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded" />
                        </div>
                      </div>
                    )}

                    {/* Preview Label Badge */}
                    <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-sm">
                      {template.title} Layout
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {template.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectTemplate(template.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  Use Template
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}