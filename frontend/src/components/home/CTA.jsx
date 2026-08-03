import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Ready to Craft Your Professional Resume?
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Create an ATS-optimized, high-impact resume in minutes with live preview and instant PDF export.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            to="/builder"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl transition shadow-lg"
          >
            Build My Resume Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}