import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-black border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
              04 / Career Record
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
              Experience &amp; Education
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed pt-1">
              Employment history in digital interface design and computer applications degrees.
            </p>
          </div>

          {/* Timeline Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Experience Group */}
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Work Experience
              </div>

              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-zinc-950/40 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                      <span className="text-zinc-500">{exp.period} • {exp.location}</span>
                      {exp.current && (
                        <span className="text-zinc-300">● Present</span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-white">
                        {exp.role}
                      </h3>
                      <div className="text-xs text-zinc-400 font-mono">
                        {exp.company}
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Group */}
            <div className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                Academic Qualifications
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/40 space-y-2"
                  >
                    <div className="text-[11px] font-mono text-zinc-500">
                      {edu.period} • {edu.location}
                    </div>
                    <h3 className="text-sm font-medium text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-xs text-zinc-400">
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
