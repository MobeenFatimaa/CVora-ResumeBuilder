export default function ClassicTemplate({ data }) {
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
    <div className="max-w-[800px] mx-auto bg-white text-slate-800 text-xs shadow-sm min-h-[1056px] p-8 space-y-6">
      {/* Header */}
      <header className="border-b border-slate-300 pb-4 text-center space-y-1">
        <h1 className="text-2xl font-serif font-bold text-slate-900 tracking-wide uppercase">
          {personal?.fullName || personal?.name || "Your Name"}
        </h1>
        {jobTitle && (
          <p className="text-slate-600 font-medium text-sm italic">
            {jobTitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-slate-600 text-[11px] pt-1">
          {personal?.email && <span>{personal.email}</span>}
          {personal?.phone && <span>• {personal.phone}</span>}
          {address && <span>• {address}</span>}
          {personal?.github && <span>• {personal.github}</span>}
          {personal?.linkedin && <span>• {personal.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section>
          <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {safeExperience.length > 0 && (
        <section>
          <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">
            Experience
          </h2>
          <div className="space-y-3">
            {safeExperience.map((exp, i) => {
              if (!exp) return null;
              const title = exp.title || exp.jobTitle || exp.role || exp.position;
              const company = exp.company || exp.organization;

              return (
                <div key={i} className="space-y-0.5">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{title || "Role Title"}</span>
                    <span className="text-slate-500 font-normal">
                      {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}
                    </span>
                  </div>
                  {company && (
                    <div className="text-slate-600 italic font-medium">{company}</div>
                  )}
                  {exp.description && (
                    <p className="text-slate-700 leading-relaxed pt-1 whitespace-pre-line">
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
          <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">
            Projects
          </h2>
          <div className="space-y-3">
            {safeProjects.map((proj, i) => {
              if (!proj) return null;
              const githubUrl = proj.githubLink || proj.github || proj.repoLink || proj.repo;
              const liveUrl = proj.liveLink || proj.demoLink || proj.demo || proj.link || proj.url;

              return (
                <div key={i} className="space-y-0.5">
                  <div className="flex justify-between items-center font-bold text-slate-900">
                    <span>{proj.name || proj.title}</span>
                    <div className="flex gap-2 text-[11px] font-normal">
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-600 underline"
                        >
                          GitHub
                        </a>
                      )}
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-600 underline"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  {proj.description && (
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">{proj.description}</p>
                  )}
                  {(proj.technologies || proj.techStack) && (
                    <div className="text-[11px] text-slate-500 italic">
                      Tech Stack: {proj.technologies || proj.techStack}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Skills & Education */}
      <div className="grid grid-cols-2 gap-6">
        {safeSkills.length > 0 && (
          <section>
            <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {safeSkills.map((s, i) => (
                <span key={i} className="text-slate-700">
                  {typeof s === "object" && s !== null ? s.name || s.skill || s.title : s}
                  {i < safeSkills.length - 1 ? " •" : ""}
                </span>
              ))}
            </div>
          </section>
        )}

        {safeEducation.length > 0 && (
          <section>
            <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">
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
                  <div key={i} className="space-y-0.5">
                    <div className="font-bold text-slate-900">
                      {degree} {field ? `in ${field}` : ""}
                    </div>
                    {school && <div className="text-slate-600 font-medium">{school}</div>}
                    {(startDate || endDate || gpa) && (
                      <div className="text-[11px] text-slate-500">
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

      {/* Certificates & Languages */}
      {(safeCertificates.length > 0 || safeLanguages.length > 0) && (
        <div className="grid grid-cols-2 gap-6 pt-2">
          {safeCertificates.length > 0 && (
            <section>
              <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">
                Certificates
              </h2>
              <div className="space-y-1.5">
                {safeCertificates.map((cert, i) => {
                  if (!cert) return null;
                  const issuer = cert.issuer || cert.organization;
                  const certDate = cert.date || cert.issueDate || cert.year;

                  return (
                    <div key={i} className="text-slate-700">
                      <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-slate-900">{cert.title || cert.name}</span>
                        {certDate && <span className="text-[11px] text-slate-500">{certDate}</span>}
                      </div>
                      {issuer && <div className="text-[11px] text-slate-500">{issuer}</div>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {safeLanguages.length > 0 && (
            <section>
              <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">
                Languages
              </h2>
              <div className="space-y-1">
                {safeLanguages.map((lang, i) => {
                  if (!lang) return null;
                  const name = typeof lang === "object" ? lang.name || lang.language : lang;
                  const level = typeof lang === "object" ? lang.proficiency || lang.level || lang.fluency : null;
                  return (
                    <div key={i} className="text-slate-700">
                      <span>{name}</span>
                      {level && <span className="text-slate-500"> ({level})</span>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Interests */}
      {formattedInterests && (
        <section>
          <h2 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">
            Interests
          </h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {formattedInterests}
          </p>
        </section>
      )}
    </div>
  );
}