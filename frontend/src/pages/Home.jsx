import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Templates from "../components/home/Templates";
import HowItWorks from "../components/home/HowItWorks";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="border-b border-slate-200 dark:border-slate-800/80">
        <Hero />
      </div>
      <div className="border-b border-slate-200 dark:border-slate-800/80">
        <Features />
      </div>
      <div className="border-b border-slate-200 dark:border-slate-800/80">
        <Templates />
      </div>
      <div className="border-b border-slate-200 dark:border-slate-800/80">
        <HowItWorks />
      </div>
      <div>
        <CTA />
      </div>
    </main>
  );
}