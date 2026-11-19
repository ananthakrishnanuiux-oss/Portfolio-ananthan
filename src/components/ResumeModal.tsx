"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  X,
  Download,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Wrench,
  CheckCircle2,
  Printer,
  ExternalLink,
  FileText,
} from "lucide-react";
import { soundFx } from "@/lib/soundFx";

interface ResumeModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen = true, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  if (!isOpen) return null;

  const { personal, experience, education } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0E1218] border-2 border-amber-500/35 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 sm:px-6 py-3.5 border-b border-amber-500/25 bg-[#141923] gap-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm">
              🪔
            </span>
            <div>
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-bold text-white leading-tight">
                {personal.name} — Resume
              </h2>
              <p className="text-[11px] text-amber-300/80 font-mono">
                UI/UX Designer • Kerala, India
              </p>
            </div>
          </div>

          {/* View Mode Toggle & Actions */}
          <div className="flex items-center gap-2">

            {/* View Switcher: Interactive vs Original PDF */}
            <div className="flex items-center bg-[#090C12] p-0.5 rounded-full border border-white/10 text-xs font-mono">
              <button
                onClick={() => {
                  soundFx.playPop();
                  setViewMode("interactive");
                }}
                className={`px-3 py-1 rounded-full transition-all ${viewMode === "interactive"
                    ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 shadow-xs"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                Interactive
              </button>
              <button
                onClick={() => {
                  soundFx.playPop();
                  setViewMode("pdf");
                }}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${viewMode === "pdf"
                    ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 shadow-xs"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                <FileText className="w-3 h-3" />
                <span>Original PDF</span>
              </button>
            </div>

            {/* Open in New Tab */}
            <a
              href="/Ananthakrishnan_K_Nair_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Open PDF in New Tab"
              aria-label="Open PDF in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Direct PDF File Download */}
            <a
              href="/Ananthakrishnan_K_Nair_Resume.pdf"
              download="Ananthakrishnan_K_Nair_Resume.pdf"
              onClick={() => soundFx.playPop()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 transition-colors shadow-xs cursor-pointer"
              title="Download Ananthakrishnan K Nair Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Print CV"
              aria-label="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode 1: Original PDF Viewer */}
        {viewMode === "pdf" && (
          <div className="flex-1 w-full bg-[#080A0D] flex flex-col items-center justify-center min-h-[500px]">
            <iframe
              src="/Ananthakrishnan_K_Nair_Resume.pdf#view=FitH"
              className="w-full flex-1 h-[75vh] border-0"
              title="Ananthakrishnan K Nair Resume PDF Viewer"
            />
          </div>
        )}

        {/* View Mode 2: Interactive Document Content */}
        {viewMode === "interactive" && (
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-sans text-left">
            {/* Header */}
            <div className="border-b border-amber-500/20 pb-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {personal.name}
                  </h1>
                  <div className="text-sm font-bold text-amber-400 mt-0.5">
                    {personal.title} (3+ Years Experience)
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <a href={`mailto:${personal.email}`} className="hover:text-amber-300 transition-colors font-medium">
                      {personal.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                {personal.aboutIntro}
              </p>
            </div>

            {/* Core Competencies & Tools */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-wider text-amber-400 uppercase flex items-center gap-2 font-mono">
                <Wrench className="w-3.5 h-3.5" />
                <span>Core UI/UX Competencies &amp; Tools</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-2">
                  <div className="text-xs font-bold text-white">Verified Design Tools:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {personal.verifiedTools.map((t) => (
                      <span key={t.name} className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-bold text-amber-300 border border-amber-500/30">
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-2">
                  <div className="text-xs font-bold text-white">Core UX Disciplines:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "User Research",
                      "Wireframing & Prototyping",
                      "Design Systems",
                      "Usability Testing",
                      "Information Architecture",
                      "WCAG AAA Accessibility",
                    ].map((d) => (
                      <span key={d} className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-300 border border-white/10">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-wider text-amber-400 uppercase flex items-center gap-2 font-mono">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Experience</span>
              </h3>

              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <div className="text-sm font-bold text-white">{exp.role}</div>
                        <div className="text-xs font-semibold text-amber-300">{exp.company} • {exp.location}</div>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-wider text-amber-400 uppercase flex items-center gap-2 font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-1">
                    <div className="text-sm font-bold text-white">{edu.degree}</div>
                    <div className="text-xs text-amber-300">{edu.institution}</div>
                    <div className="text-[11px] font-mono text-zinc-400">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#141923] border-t border-amber-500/25 flex items-center justify-between">
          <div className="text-xs text-zinc-400">
            Available for remote &amp; on-site product opportunities
          </div>
          <a
            href="/Ananthakrishnan_K_Nair_Resume.pdf"
            download="Ananthakrishnan_K_Nair_Resume.pdf"
            onClick={() => soundFx.playPop()}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
