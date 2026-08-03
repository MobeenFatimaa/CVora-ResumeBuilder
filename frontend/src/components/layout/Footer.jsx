

// 1. Define custom SVG components locally
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function KaggleIcon({ className = "w-4 h-4" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.825 23.859h-3.225l-6.875-9.25-2.275 2.137v7.113H3.15V.141h3.325v12.225l8.6-12.225h3.8l-7.225 10.025 7.175 13.693z" />
    </svg>
  );
}

// 2. Main Footer component
export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/MobeenFatimaa", icon: GithubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mobeen-fatima-599a35347/", icon: LinkedinIcon },
    { name: "Kaggle", href: "https://www.kaggle.com/mobeenfatimah", icon: KaggleIcon },
  ];

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg">CVora</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Build ATS-friendly resumes with AI-powered assistance.</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md border border-slate-200 dark:border-slate-700/60 transition"
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} CVora AI Resume Builder. All Rights Reserved. Developed by Mobeen Fatima.
        </div>
      </div>
    </footer>
  );
}