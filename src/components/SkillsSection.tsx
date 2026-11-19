import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="py-24 sm:py-32 bg-black border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
            05 / Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
            Skills &amp; Technical Toolkit
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Documented skills in user research, wireframing, Figma design systems, usability testing, and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-zinc-950/40 space-y-3"
            >
              <h3 className="text-sm font-medium text-white flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[11px] font-mono text-zinc-600">0{idx + 1}</span>
              </h3>

              <p className="text-xs text-zinc-500 leading-relaxed">
                {category.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {category.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                      s.highlight
                        ? "bg-zinc-900 border border-white/20 text-white"
                        : "bg-zinc-950 border border-white/[0.06] text-zinc-400"
                    }`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
