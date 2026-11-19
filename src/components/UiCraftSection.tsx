"use client";

import React, { useState } from "react";
import { Users, Monitor, Layers, HeartHandshake, CheckCircle2 } from "lucide-react";
import { soundFx } from "@/lib/soundFx";

export default function UiCraftSection() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const skills = [
    {
      title: "UX Research & Strategy",
      desc: "User interviews, behavioral personas, journey mapping, IA, usability heuristics.",
      icon: Users,
      badge: "Discovery",
    },
    {
      title: "UI & Visual Systems",
      desc: "Pixel-perfect visual design, token systems, micro-interactions, responsive states.",
      icon: Monitor,
      badge: "Craft",
    },
    {
      title: "Prototyping & Motion",
      desc: "Interactive click-through flows, component logic, micro-states, developer handoff.",
      icon: Layers,
      badge: "Fidelity",
    },
    {
      title: "Accessibility (WCAG AAA)",
      desc: "High color contrast, inclusive ergonomics, tactile navigation, screen-reader parity.",
      icon: HeartHandshake,
      badge: "Inclusion",
    },
  ];

  const tools = [
    {
      name: "Figma",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
      tip: "Design Tokens, Auto-Layout & Interactive Prototyping",
    },
    {
      name: "Photoshop",
      badge: "Ps",
      badgeBg: "bg-[#001E36] text-[#31A8FF] border border-[#31A8FF]/30",
      tip: "Visual Assets, Masking & Photo Editing",
    },
    {
      name: "Illustrator",
      badge: "Ai",
      badgeBg: "bg-[#330000] text-[#FF9A00] border border-[#FF9A00]/30",
      tip: "Vector Iconography & Custom Illustrations",
    },
    {
      name: "Miro",
      badge: "Miro",
      badgeBg: "bg-[#FFD02F] text-[#050038] font-bold",
      tip: "Card Sorting, Journey Mapping & Team Co-Creation",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#080A0D] border-b border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-amber-400 uppercase block font-mono">
              CAPABILITIES &amp; TOOLING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              UI/UX Craft &amp; Specialized Competencies
            </h2>
          </div>
          <p className="text-sm text-zinc-300 max-w-md font-normal leading-relaxed md:text-right">
            Grounding product vision into scalable, developer-ready design systems with rigorous accessibility standards.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#11151D] border border-amber-500/20 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-400/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Strip */}
        <div className="p-6 rounded-2xl bg-[#121620] border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🛠️</span>
            <div>
              <div className="text-xs font-bold text-white">Daily Design Stack</div>
              <div className="text-[10px] text-zinc-400">Industry-standard tools for research, UI &amp; vector art</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                onMouseEnter={() => {
                  soundFx.playPop();
                  setActiveTool(tool.name);
                }}
                onMouseLeave={() => setActiveTool(null)}
                className="relative group"
              >
                <div className="px-3.5 py-1.5 rounded-xl bg-[#0A0D12] border border-amber-500/30 hover:border-amber-400 text-xs font-bold text-zinc-200 hover:text-white flex items-center gap-2 transition-all cursor-pointer shadow-xs">
                  {tool.icon && tool.icon}
                  {tool.badge && (
                    <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-bold ${tool.badgeBg}`}>
                      {tool.badge}
                    </span>
                  )}
                  <span>{tool.name}</span>
                </div>

                {activeTool === tool.name && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/90 border border-amber-400 text-[10px] font-semibold text-amber-300 whitespace-nowrap shadow-xl z-20 animate-fade-in pointer-events-none">
                    {tool.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
