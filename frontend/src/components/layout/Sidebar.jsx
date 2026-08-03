import {
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Wrench,
  Award,
  Languages,
  Heart,
  Sparkles,
} from "lucide-react";

const menu = [
  { id: "personal", title: "Personal", icon: User },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "projects", title: "Projects", icon: FolderGit2 },
  { id: "skills", title: "Skills", icon: Wrench },
  { id: "certificates", title: "Certificates", icon: Award },
  { id: "languages", title: "Languages", icon: Languages },
  { id: "interests", title: "Interests", icon: Heart },
];

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="h-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm rounded-2xl p-4 flex flex-col justify-between overflow-y-auto">
      <div className="space-y-6">
        {/* Header Title */}
        <div className="px-2 pt-1 flex items-center justify-between">
          <h2 className="text-xl font-black bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
            CVora
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded-full border border-sky-500/20">
            Builder
          </span>
        </div>

        {/* Section Navigation Links */}
        <nav className="space-y-1.5">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-white" : "text-slate-500 dark:text-slate-400"}
                />
                <span>{item.title}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Accent */}
      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2.5">
          <Sparkles size={16} className="text-sky-600 dark:text-sky-400 shrink-0" />
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
            Auto-saving to browser storage
          </p>
        </div>
      </div>
    </aside>
  );
}