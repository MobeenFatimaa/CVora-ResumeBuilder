export default function ModernTemplate({ data }) {
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
    <div className="max-w-[800px] mx-auto bg-white text-slate-800 text-sm shadow-sm min-h-[1056px] overflow-hidden">
      {/* Header Banner */}
      <header className="bg-blue-600 text-white p-8 space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {personal?.fullName || personal?.name || "Your Name"}
        </h1>
        {jobTitle && (
          <p className="text-blue-100 text-sm font-medium">
            {jobTitle}
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-blue-200 pt-2 border-t border-blue-500/50">
          {personal?.email && <span>{personal.email}</span>}
          {personal?.phone && <span>{personal.phone}</span>}
          {address && <span>{address}</span>}
          {personal?.github && <span>{personal.github}</span>}
          {personal?.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </header>

      <div className="p-8 space-y-6">
        {/* Summary */}
        {personal?.summary && (
          <section>
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              Profile Summary
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 whitespace-pre-line">
              {personal.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {safeExperience.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
              Work History
            </h2>
            <div className="space-y-4">
              {safeExperience.map((exp, i) => {
                if (!exp) return null;
                const title = exp.title || exp.jobTitle || exp.role || exp.position;
                const company = exp.company || exp.organization;

                return (
                  <div key={i} className="border-l-2 border-blue-500 pl-4 space-y-1">
                    <div className="flex justify-between font-bold text-slate-900 text-xs">
                      <span>{title || "Role Title"}</span>
                      <span className="text-blue-600 font-normal">
                        {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}
                      </span>
                    </div>
                    {company && (
                      <div className="text-xs text-slate-500 font-semibold">{company}</div>
                    )}
                    {exp.description && (
                      <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Projects */}
        {safeProjects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
              Key Projects
            </h2>
            <div className="space-y-3">
              {safeProjects.map((proj, i) => {
                if (!proj) return null;
                const githubUrl = proj.githubLink || proj.github || proj.repoLink || proj.repo;
                const liveUrl = proj.liveLink || proj.demoLink || proj.demo || proj.link || proj.url;

                return (
                  <div key={i} className="border-l-2 border-blue-300 pl-4 space-y-1">
                    <div className="flex justify-between items-center font-bold text-slate-900 text-xs">
                      <span>{proj.name || proj.title}</span>
                      <div className="flex gap-2 text-xs font-normal">
                        {githubUrl && (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                          >
                            GitHub
                          </a>
                        )}
                        {liveUrl && (
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    {proj.description && (
                      <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{proj.description}</p>
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

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-2 gap-6 pt-2">
          {safeSkills.length > 0 && (
            <section>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                Core Competencies
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {safeSkills.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium border border-blue-100"
                  >
                    {typeof s === "object" && s !== null ? s.name || s.skill || s.title : s}
                  </span>
                ))}
              </div>
            </section>
          )}

          {safeEducation.length > 0 && (
            <section>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
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
                    <div key={i} className="text-xs space-y-0.5">
                      <div className="font-bold text-slate-800">
                        {degree} {field ? `in ${field}` : ""}
                      </div>
                      {school && <div className="text-slate-500 font-medium">{school}</div>}
                      {(startDate || endDate || gpa) && (
                        <div className="text-[11px] text-blue-600">
                          {startDate && <span>{startDate}</span>}
                          {endDate && <span> - {endDate}</span>}
                          {gpa && <span> • GPA: {gpa}</span>}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Certificates & Languages Grid */}
        {(safeCertificates.length > 0 || safeLanguages.length > 0) && (
          <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-100">
            {safeCertificates.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Certificates
                </h2>
                <div className="space-y-2 text-xs">
                  {safeCertificates.map((cert, i) => {
                    if (!cert) return null;
                    const title = cert.title || cert.name;
                    const issuer = cert.issuer || cert.organization || cert.authority;
                    const certDate =
                      cert.issueDate ||
                      cert.issuedDate ||
                      cert.date ||
                      cert.year ||
                      cert.startDate ||
                      cert.endDate ||
                      cert.completionDate ||
                      cert.issued;

                    return (
                      <div key={i} className="space-y-0.5">
                        <div className="flex justify-between items-baseline font-semibold text-slate-800">
                          <span>{title}</span>
                          {certDate && (
                            <span className="text-[11px] text-blue-600 font-normal shrink-0 ml-2">
                              {certDate}
                            </span>
                          )}
                        </div>
                        {issuer && <div className="text-slate-500 text-[11px]">{issuer}</div>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {safeLanguages.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {safeLanguages.map((lang, i) => {
                    if (!lang) return null;
                    const name = typeof lang === "object" ? lang.name || lang.language : lang;
                    const level = typeof lang === "object" ? lang.proficiency || lang.level || lang.fluency : null;
                    return (
                      <span
                        key={i}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                      >
                        {name} {level ? `(${level})` : ""}
                      </span>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Interests */}
        {formattedInterests && (
          <section className="pt-2 border-t border-slate-100">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              Interests
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
              {formattedInterests}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}