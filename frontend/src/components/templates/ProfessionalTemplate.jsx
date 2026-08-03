export default function ProfessionalTemplate({ data }) {
  const safeData = data || {};
  const {
    personal = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certificates = [],
    certifications = [],
    languages = [],
    interests = [],
  } = safeData;

  const safeExperience = Array.isArray(experience) ? experience : [];
  const safeEducation = Array.isArray(education) ? education : [];
  const safeSkills = Array.isArray(skills) ? skills : [];
  const safeProjects = Array.isArray(projects) ? projects : [];
  const safeLanguages = Array.isArray(languages) ? languages : [];

  const rawCerts = Array.isArray(certificates) ? certificates : [];
  const rawCertifications = Array.isArray(certifications) ? certifications : [];
  const safeCertificates = [...rawCerts, ...rawCertifications];

  const jobTitle = personal?.jobTitle || personal?.role;
  const address = personal?.address || personal?.location || personal?.city;

  const renderInterests = () => {
    if (Array.isArray(interests) && interests.length > 0) {
      return interests
        .map((item) => (typeof item === "object" && item !== null ? item.name || item.interest : item))
        .filter(Boolean)
        .join(" • ");
    }
    if (typeof interests === "string" && interests.trim().length > 0) {
      return interests;
    }
    return null;
  };

  const formattedInterests = renderInterests();

  return (
    <div className="max-w-[800px] mx-auto bg-white text-slate-800 text-xs shadow-sm min-h-[1056px] grid grid-cols-12">
      {/* Dark Left Sidebar */}
      <aside className="col-span-4 bg-slate-900 text-slate-300 p-6 space-y-6">
        <div>
          <h1 className="text-xl font-bold text-white leading-tight">
            {personal?.fullName || personal?.name || "Your Name"}
          </h1>
          {jobTitle && (
            <p className="text-slate-400 text-xs mt-1">
              {jobTitle}
            </p>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-[11px] text-slate-400 border-t border-slate-800 pt-4">
          {personal?.email && <div className="break-all">{personal.email}</div>}
          {personal?.phone && <div>{personal.phone}</div>}
          {address && <div>{address}</div>}
          {personal?.github && <div className="break-all">{personal.github}</div>}
          {personal?.linkedin && <div className="break-all">{personal.linkedin}</div>}
        </div>

        {/* Skills Section */}
        {safeSkills.length > 0 && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {safeSkills.map((s, i) => {
                const skillLabel = typeof s === "object" && s !== null ? s.name || s.skill || s.title : s;
                return (
                  <span key={i} className="bg-slate-800 text-slate-200 px-2 py-1 rounded">
                    {skillLabel}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Languages & Proficiency Section */}
        {safeLanguages.length > 0 && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Languages
            </h2>
            <div className="space-y-1">
              {safeLanguages.map((lang, i) => {
                if (!lang) return null;
                const isObj = typeof lang === "object";
                const name = isObj ? lang.name || lang.language : lang;
                const level = isObj ? lang.proficiency || lang.level || lang.fluency : null;

                return (
                  <div key={i} className="text-[11px] text-slate-300">
                    <span className="font-medium text-slate-200">{name}</span>
                    {level && <span className="text-slate-400"> ({level})</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {safeCertificates.length > 0 && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Certificates
            </h2>
            <div className="space-y-2">
              {safeCertificates.map((cert, i) => {
                if (!cert) return null;
                const title = cert.title || cert.name;
                const issuer = cert.issuer || cert.organization || cert.authority;
                const date = cert.date || cert.issueDate || cert.year;

                return (
                  <div key={i} className="text-[11px] text-slate-400 space-y-0.5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-200 font-semibold">{title}</span>
                      {date && <span className="text-slate-500 text-[10px]">{date}</span>}
                    </div>
                    {issuer && <div>{issuer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Interests Section */}
        {formattedInterests && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Interests
            </h2>
            <p className="text-[11px] text-slate-400 leading-relaxed whitespace-pre-line">
              {formattedInterests}
            </p>
          </div>
        )}

        {/* EDUCATION SECTION */}
        {safeEducation.length > 0 && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Education
            </h2>
            <div className="space-y-2">
              {safeEducation.map((edu, i) => {
                if (!edu) return null;
                const degree = edu.degree || edu.qualification || edu.title;
                const school = edu.school || edu.institution || edu.university || edu.college;
                const field = edu.fieldOfStudy || edu.major || edu.field;
                const startDate = edu.startDate || edu.startYear || edu.from || edu.year;
                const endDate = edu.endDate || edu.endYear || edu.to;
                const gpa = edu.gpa || edu.grade || edu.cgpa || edu.marks;

                return (
                  <div key={i} className="text-[11px] space-y-0.5">
                    <div className="text-slate-200 font-semibold">
                      {degree} {field ? `in ${field}` : ""}
                    </div>
                    {school && <div className="text-slate-400">{school}</div>}
                    {(startDate || endDate || gpa) && (
                      <div className="text-slate-500 text-[10px]">
                        {startDate && <span>{startDate}</span>}
                        {endDate && <span> - {endDate}</span>}
                        {gpa && <span> • GPA: {gpa}</span>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="col-span-8 p-8 space-y-6">
        {/* Executive Summary */}
        {personal?.summary && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-2">
              Executive Summary
            </h2>
            <p className="text-slate-600 leading-relaxed text-xs whitespace-pre-line">
              {personal.summary}
            </p>
          </section>
        )}

        {/* Experience Section */}
        {safeExperience.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {safeExperience.map((exp, i) => {
                if (!exp) return null;
                const title = exp.title || exp.jobTitle || exp.role || exp.position;
                const company = exp.company || exp.organization;

                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{title || "Role Title"}</span>
                      <span className="text-slate-400 font-normal">
                        {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}
                      </span>
                    </div>
                    {company && (
                      <div className="text-slate-500 font-medium">{company}</div>
                    )}
                    {exp.description && (
                      <p className="text-slate-600 leading-relaxed pt-1 whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {safeProjects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-4">
              Key Projects
            </h2>
            <div className="space-y-4">
              {safeProjects.map((proj, i) => {
                if (!proj) return null;
                const githubUrl = proj.githubLink || proj.github || proj.repoLink || proj.repo;
                const liveUrl = proj.liveLink || proj.demoLink || proj.demo || proj.link || proj.url;

                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center font-bold text-slate-900">
                      <span>{proj.name || proj.title}</span>
                      <div className="flex gap-2 text-xs font-normal">
                        {githubUrl && (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline"
                          >
                            GitHub
                          </a>
                        )}
                        {liveUrl && (
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    {proj.description && (
                      <p className="text-slate-600 leading-relaxed pt-0.5 whitespace-pre-line">
                        {proj.description}
                      </p>
                    )}
                    {(proj.technologies || proj.techStack) && (
                      <div className="text-[11px] text-slate-400 italic">
                        Tech Stack: {proj.technologies || proj.techStack}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}