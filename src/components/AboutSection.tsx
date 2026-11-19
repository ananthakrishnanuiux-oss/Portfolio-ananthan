"use client";

import React, { useState } from "react";
import { ArrowRight, Download, Sparkles, Palette, Eye } from "lucide-react";
import { soundFx } from "@/lib/soundFx";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ResumeModal from "./ResumeModal";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;
  const [modalOpen, setModalOpen] = useState(false);

  const keyFacts = [
    { label: "Experience", value: "3+ Years", sub: "Web & Mobile Products" },
    { label: "Mentorship", value: "500+", sub: "Designers Trained at Zoople" },
    { label: "Foundation", value: "MCA", sub: "Technical Design Empathy" },
    { label: "Location", value: "Kerala", sub: "India • Available Globally" },
  ];

  // Opens the resume preview modal for viewing (does not download)
  const handleViewResume = () => {
    soundFx.playClick();
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="about"
        className="py-20 sm:py-28 bg-[#080A0D] border-t border-white/5 relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">

            {/* =========================================================================
                LEFT: Minimal Portrait
               ========================================================================= */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative w-full max-w-[340px] group">

                {/* Subtle Glow on Hover */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/15 via-transparent to-emerald-500/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Portrait Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#0E121B] shadow-2xl transition-all duration-300 group-hover:border-amber-500/40">
                  <div className="aspect-[4/4.8] w-full overflow-hidden bg-black/40">
                    <img
                      src="/assets/profile.jpg"
                      alt="Ananthakrishnan K Nair - UI/UX Designer"
                      className="w-full h-full object-cover object-top filter grayscale-[15%] contrast-[105%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                    />
                  </div>

                  {/* Clean Bottom Overlay Pill */}
                  <div className="p-4 bg-[#0D111A]/95 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white tracking-tight">
                        Ananthakrishnan K Nair
                      </div>
                      <div className="text-xs text-amber-300/80 font-mono">
                        UI/UX Designer &amp; Educator
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* =========================================================================
                RIGHT: Minimal Editorial Story & Quick Facts
               ========================================================================= */}
            <div className="md:col-span-7 space-y-6 text-left">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>About Me</span>
              </div>

              {/* Minimal Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Bridging human psychology, scalable design systems, and engineering reality.
              </h2>

              {/* Minimalist Narrative */}
              <div className="space-y-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                <p>
                  I am a UI/UX Designer and Design Educator based in Kerala, India. With a{" "}
                  <strong className="text-amber-300 font-semibold">Master of Computer Applications (MCA)</strong>, I approach interfaces with rare technical empathy—ensuring that every design decision in Figma translates smoothly into clean frontend code.
                </p>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Currently at <strong className="text-white font-medium">Zoople Technologies</strong> in Kochi, I lead digital product design initiatives and mentor aspiring designers. Having trained over <span className="text-emerald-300 font-mono font-medium">500+ students</span>, teaching has refined my instinct for intuitive navigation, heuristic rigor, and WCAG accessibility standards.
                </p>
              </div>

              {/* Minimal Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-1 border-y border-white/5 py-4">
                {keyFacts.map((fact, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {fact.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-mono">
                      {fact.value}
                    </div>
                    <div className="text-[11px] text-zinc-400 leading-tight">
                      {fact.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Action Row with Direct Resume Downloads */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/Ananthakrishnan_K_Nair_Resume.pdf"
                  download="Ananthakrishnan_K_Nair_Resume.pdf"
                  onClick={() => soundFx.playPop()}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-amber-500/20 flex items-center gap-2 cursor-pointer group"
                  title="Download Ananthakrishnan K Nair Resume PDF"
                >
                  <span>Download Resume</span>
                  <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={handleViewResume}
                  className="px-4 py-2.5 rounded-full bg-[#11151D] hover:bg-[#161C26] border border-white/10 hover:border-amber-500/40 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  title="View Resume Online"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => soundFx.playChime()}
                  className="px-4 py-2.5 rounded-full bg-[#11151D] hover:bg-[#161C26] border border-amber-500/30 hover:border-amber-400 text-amber-300 font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Social Links */}
                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="p-2.5 rounded-full bg-[#11151D] border border-white/10 hover:border-sky-400/60 text-zinc-400 hover:text-sky-300 transition-colors cursor-pointer"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                )}

                {personal.behance && (
                  <a
                    href={personal.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="p-2.5 rounded-full bg-[#11151D] border border-white/10 hover:border-amber-400/60 text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
                    title="Behance Portfolio"
                    aria-label="Behance Portfolio"
                  >
                    <Palette className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </>
  );
}