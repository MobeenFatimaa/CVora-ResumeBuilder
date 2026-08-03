import { Layout } from "lucide-react";

const TEMPLATES = [
  { id: "classic", name: "Classic", desc: "Traditional & ATS standard" },
  { id: "modern", name: "Modern", desc: "Bold headers & accent colors" },
  { id: "minimal", name: "Minimal", desc: "Clean serif typography" },
  { id: "professional", name: "Professional", desc: "Executive dark sidebar" },
  { id: "creative", name: "Creative", desc: "Vibrant card-based grid" },
];

export default function TemplateSelector({ activeTemplate, onSelectTemplate }) {
  return (
    <div className="space-y-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
        <Layout size={14} className="text-blue-500" />
        Select Template Style
      </div>

      <div className="grid grid-cols-1 gap-2">
        {TEMPLATES.map((t) => {
          const isActive = activeTemplate === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTemplate(t.id)}
              className={`text-left p-3 rounded-lg border transition text-xs flex justify-between items-center ${
                isActive
                  ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold"
                  : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">{t.desc}</div>
              </div>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}