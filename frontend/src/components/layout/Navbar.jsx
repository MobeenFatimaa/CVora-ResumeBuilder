import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Helper function for navigating to section anchors
  const getNavHref = (sectionId) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 font-black text-xl text-slate-900 dark:text-white tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
            CV
          </div>
          <span>CVora</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <a href={getNavHref("features")} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Features
          </a>
          <a href={getNavHref("templates")} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Templates
          </a>
          <a href={getNavHref("how-it-works")} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            How It Works
          </a>
          <a href={getNavHref("contact")} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* ACTIONS (THEME TOGGLE + BUILDER CTA) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/builder"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition"
          >
            <Sparkles size={14} />
            Build Resume
          </Link>
        </div>

      </div>
    </nav>
  );
}