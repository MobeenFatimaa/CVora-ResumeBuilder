export default function CreativeTemplate({ data }) {
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
      {/* Header Banner */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white p-6 rounded-2xl shadow-sm space-y-2">
        <h1 className="text-3xl font-black tracking-tight">
          {personal?.fullName || personal?.name || "Your Name"}
        </h1>
        {jobTitle && (
          <p className="text-purple-100 font-medium text-sm tracking-wide">
            {jobTitle}
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-purple-100 pt-2 border-t border-white/20">
          {personal?.email && <span>{personal.email}</span>}
          {personal?.phone && <span>{personal.phone}</span>}
          {address && <span>{address}</span>}
          {personal?.github && <span>{personal.github}</span>}
          {personal?.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </header>

      {/* Profile Summary */}
      {personal?.summary && (
        <section className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
          <h2 className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
            About Me
          </h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {personal.summary}
          </p>
        </section>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column (Skills, Languages, Education, Certs) */}
        <aside className="col-span-4 space-y-5">
          {/* Skills */}
          {safeSkills.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {safeSkills.map((s, i) => {
                  const skillLabel = typeof s === "object" && s !== null ? s.name || s.skill || s.title : s;
                  return (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-800 font-medium px-2.5 py-0.5 rounded-full text-[10px]"
                    >
                      {skillLabel}
                    </span>
                  );
                })}
              </div>
            </section>
          )}

          {/* Languages */}
          {safeLanguages.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Languages
              </h2>
              <div className="space-y-1">
                {safeLanguages.map((lang, i) => {
                  if (!lang) return null;
                  const name = typeof lang === "object" ? lang.name || lang.language : lang;
                  const level = typeof lang === "object" ? lang.proficiency || lang.level || lang.fluency : null;
                  return (
                    <div key={i} className="text-slate-700 text-[11px]">
                      <span className="font-semibold text-slate-800">{name}</span>
                      {level && <span className="text-slate-500"> ({level})</span>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* EDUCATION SECTION */}
          {safeEducation.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider">
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
                    <div key={i} className="space-y-0.5 text-[11px]">
                      <div className="font-bold text-slate-900">
                        {degree} {field ? `in ${field}` : ""}
                      </div>
                      {school && <div className="text-slate-600 font-medium">{school}</div>}
                      {(startDate || endDate || gpa) && (
                        <div className="text-purple-600 font-medium text-[10px]">
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

          {/* Certificates */}
          {safeCertificates.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Certificates
              </h2>
              <div className="space-y-2">
                {safeCertificates.map((cert, i) => {
                  if (!cert) return null;
                  const issuer = cert.issuer || cert.organization;
                  const certDate = cert.date || cert.issueDate || cert.year;

                  return (
                    <div key={i} className="space-y-0.5 text-[11px]">
                      <div className="flex justify-between items-baseline font-bold text-slate-800">
                        <span>{cert.title || cert.name}</span>
                        {certDate && <span className="text-purple-600 text-[10px] font-normal">{certDate}</span>}
                      </div>
                      {issuer && <div className="text-slate-500">{issuer}</div>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Interests */}
          {formattedInterests && (
            <section className="space-y-1">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Interests
              </h2>
              <p className="text-slate-600 leading-relaxed text-[11px] whitespace-pre-line">
                {formattedInterests}
              </p>
            </section>
          )}
        </aside>

        {/* Right Column (Experience & Projects) */}
        <main className="col-span-8 space-y-6">
          {/* Experience */}
          {safeExperience.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider border-b border-purple-100 pb-1">
                Experience
              </h2>
              <div className="space-y-4">
                {safeExperience.map((exp, i) => {
                  if (!exp) return null;
                  const title = exp.title || exp.jobTitle || exp.role || exp.position;
                  const company = exp.company || exp.organization;

                  return (
                    <div key={i} className="space-y-0.5 border-l-2 border-purple-400 pl-3">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{title || "Role Title"}</span>
                        <span className="text-purple-600 font-medium text-[11px]">
                          {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}
                        </span>
                      </div>
                      {company && (
                        <div className="text-slate-500 font-semibold">{company}</div>
                      )}
                      {exp.description && (
                        <p className="text-slate-600 leading-relaxed pt-0.5 whitespace-pre-line">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Key Projects */}
          {safeProjects.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider border-b border-purple-100 pb-1">
                Featured Projects
              </h2>
              <div className="space-y-3">
                {safeProjects.map((proj, i) => {
                  if (!proj) return null;
                  const githubUrl = proj.githubLink || proj.github || proj.repoLink || proj.repo;
                  const liveUrl = proj.liveLink || proj.demoLink || proj.demo || proj.link || proj.url;

                  return (
                    <div key={i} className="space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex justify-between items-center font-bold text-slate-900">
                        <span>{proj.name || proj.title}</span>
                        <div className="flex gap-2 text-xs font-normal">
                          {githubUrl && (
                            <a
                              href={githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-purple-600 underline hover:text-purple-800"
                            >
                              GitHub
                            </a>
                          )}
                          {liveUrl && (
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-purple-600 underline hover:text-purple-800"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      {proj.description && (
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">{proj.description}</p>
                      )}
                      {(proj.technologies || proj.techStack) && (
                        <div className="text-[10px] text-purple-700 font-medium pt-0.5">
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
    </div>
  );
}