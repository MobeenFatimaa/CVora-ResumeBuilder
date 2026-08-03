import { Sparkles, FileCheck, Layout, Zap, ShieldCheck, Download, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description: "Generate tailored professional summaries and impact-driven bullet points aligned with your target job title.",
    highlight: "AI Smart Generator",
  },
  {
    icon: FileCheck,
    title: "ATS-Friendly Layouts",
    description: "Built with industry-standard typography and clean structure that effortlessly passes ATS parsers.",
    highlight: "Parse Guaranteed",
  },
  {
    icon: Layout,
    title: "Multiple Templates",
    description: "Switch seamlessly between Classic, Modern, and Minimalist resume layouts with one click without losing data.",
    highlight: "1-Click Switcher",
  },
  {
    icon: Zap,
    title: "Live Real-Time Preview",
    description: "See exactly how your resume updates side-by-side as you type in your professional details.",
    highlight: "Instant Render",
  },
  {
    icon: Download,
    title: "Instant PDF Export",
    description: "Download print-ready, high-resolution PDFs formatted strictly to standard A4 page guidelines.",
    highlight: "Vector Sharp PDF",
  },
  {
    icon: ShieldCheck,
    title: "Auto-Saving Local Privacy",
    description: "Your data stays stored safely inside your local browser session so you never lose your progress.",
    highlight: "100% Private",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold px-3.5 py-1.5 rounded-full border border-sky-500/20 uppercase tracking-widest backdrop-blur-sm">
            <Sparkles size={13} /> Powerful Features
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Everything You Need to <span className="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">Land Your Role</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Designed to eliminate formatting hassle while highlighting your professional strengths.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-950/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden"
              >
                {/* Internal Hover Radial Glow */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-sky-500/10 dark:bg-sky-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon & Top Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full font-mono">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Micro Indicator */}
                <div className="pt-2 flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors gap-1">
                  <span>Learn more</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}