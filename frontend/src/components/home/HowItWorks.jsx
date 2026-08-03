import { UserCheck, Sparkles, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Enter Your Details",
    description: "Fill in your experience, education, and skills using our intuitive form controls and real-time validation.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Optimization",
    description: "Let AI generate high-impact professional summaries and job achievements tailored to your dream role.",
  },
  {
    number: "03",
    icon: Download,
    title: "Export & Apply",
    description: "Choose your favorite template, preview live side-by-side, and export pixel-perfect ATS PDFs instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Ambient background glow for visual interest */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-400/10 dark:bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/20 uppercase tracking-widest">
            Simple Process
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How <span className="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">CVora</span> Works
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Build an interview-ready, ATS-optimized resume in three seamless steps.
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
          
          {/* Subtle connecting line across cards on desktop screens */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -z-0 -translate-y-6" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-950/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 space-y-5 relative shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Watermark Number */}
                  <span className="text-5xl font-black text-slate-200/70 dark:text-slate-800/80 absolute top-6 right-8 font-mono select-none group-hover:text-sky-500/20 transition-colors">
                    {step.number}
                  </span>

                  {/* Icon Badge with Accent Glow */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} />
                  </div>

                  {/* Step Title & Content */}
                  <div className="pt-4 space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Visual Indicator for Progress */}
                <div className="pt-2 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                  <span>Step {step.number}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}