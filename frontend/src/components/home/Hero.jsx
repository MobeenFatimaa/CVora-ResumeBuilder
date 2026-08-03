import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2, FileText, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-[85vh] flex items-center relative overflow-hidden transition-colors duration-300">
      
      {/* Sky Blue Bubbles Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute -top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-sky-300/40 dark:bg-sky-500/25 blur-2xl sm:blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-12 w-64 h-64 sm:w-80 sm:h-80 bg-sky-400/35 dark:bg-sky-400/20 blur-2xl sm:blur-3xl rounded-full" />
        <div className="absolute -bottom-10 left-1/3 w-56 h-56 bg-sky-200/50 dark:bg-sky-600/20 blur-xl sm:blur-2xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Headline & Copy */}
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-sky-500/20 backdrop-blur-sm">
            <Sparkles size={14} />
            AI-Powered Resume Builder
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.15]">
            Build an <span className="text-sky-600 dark:text-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-300 dark:to-blue-400 bg-clip-text text-transparent">ATS-Friendly</span> Resume in Minutes
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            Create stunning resumes with AI-generated summaries, professional templates, real-time live preview, and instant A4 PDF exports.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/builder"
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold px-7 py-3.5 rounded-xl transition shadow-lg shadow-sky-600/25 flex items-center gap-2"
            >
              Get Started
            </Link>
            <a
              href="#templates"
              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-semibold px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm transition shadow-sm"
            >
              View Templates
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-sky-600 dark:text-sky-400" /> No Signup Required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-sky-600 dark:text-sky-400" /> 100% Free Export</span>
          </div>
        </div>

        {/* Right Side: Realistic Resume Preview UI Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[440px] bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl relative space-y-4 transition-colors">
            {/* Mock Header */}
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-600/20 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-200 dark:border-sky-500/30">
                  MF
                </div>
                <div>
                  <div className="h-3 w-28 bg-slate-900 dark:bg-white/90 rounded font-semibold text-xs flex items-center px-1 text-white dark:text-slate-900">
                    Mobeen Fatima
                  </div>
                  <div className="h-2 w-20 bg-slate-300 dark:bg-slate-600 rounded mt-1.5" />
                </div>
              </div>
              <span className="text-[10px] bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded font-mono border border-green-500/20 flex items-center gap-1 font-medium">
                <Download size={10} /> ATS Ready
              </span>
            </div>

            {/* Mock Skeleton Sections */}
            <div className="space-y-3 pt-1">
              <div className="space-y-1.5">
                <div className="h-2.5 w-24 bg-sky-500/60 rounded" />
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-2 w-4/5 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>

              <div className="space-y-2 pt-2">
                <div className="h-2.5 w-28 bg-sky-500/60 rounded" />
                <div className="bg-slate-100 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex justify-between">
                    <div className="h-2.5 w-32 bg-slate-700 dark:bg-slate-300 rounded" />
                    <div className="h-2.5 w-12 bg-slate-400 dark:bg-slate-600 rounded" />
                  </div>
                  <div className="h-2 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
                </div>
              </div>

              {/* Mock Skill Tags */}
              <div className="space-y-1.5 pt-1">
                <div className="h-2.5 w-16 bg-sky-500/60 rounded" />
                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "Tailwind CSS", "Data Analytics", "Python", "JavaScript"].map((s, i) => (
                    <span key={i} className="text-[10px] bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-300/60 dark:border-slate-700 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute -bottom-3 -right-3 bg-sky-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-sky-400">
              <FileText size={12} /> Live Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}