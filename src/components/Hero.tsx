"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, Sparkles, Play, MousePointer, PenTool, Layers, CheckCircle2, Sliders } from "lucide-react";
import { soundFx } from "@/lib/soundFx";

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeChip, setActiveChip] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"design" | "tokens">("design");
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse-follow parallax calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const chips = [
    {
      label: "Design System Architecture",
      sub: "Tokens, Auto Layout & Scales",
      icon: "🎨",
      pos: "top-[-12px] left-[-8px] sm:left-[-20px]",
      x: -18,
      y: -20,
    },
    {
      label: "8pt Spatial Rhythm",
      sub: "Responsive Layout Balance",
      icon: "📐",
      pos: "top-[-10px] right-[-8px] sm:right-[-20px]",
      x: 20,
      y: -22,
    },
    {
      label: "Vector Curves & Precision",
      sub: "Bezier Anchors & Prototyping",
      icon: "🖊️",
      pos: "bottom-[54px] left-[-10px] sm:left-[-22px]",
      x: -16,
      y: 18,
    },
    {
      label: "Kerala Serenity & Soul",
      sub: "Empathetic Human-Centered UX",
      icon: "🌴",
      pos: "bottom-[-12px] right-[-8px] sm:right-[-20px]",
      x: 18,
      y: 20,
    },
  ];

  const colorTokens = [
    { name: "Kasavu Gold", hex: "#F59E0B", bg: "bg-amber-500" },
    { name: "Backwater Emerald", hex: "#10B981", bg: "bg-emerald-500" },
    { name: "Terracotta Clay", hex: "#E07A5F", bg: "bg-[#E07A5F]" },
    { name: "Night Obsidian", hex: "#0F172A", bg: "bg-slate-900 border border-white/20" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-[#080A0D]"
    >
      {/* Background Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      {/* Background Kerala Backwater & Temple Lantern Glows */}
      <div
        className="absolute top-12 left-1/4 w-[650px] h-[650px] rounded-full pointer-events-none blur-[140px] transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.14) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 70%)",
          transform: `translate(${mouseOffset.x * -45}px, ${mouseOffset.y * -45}px)`,
        }}
      />
      <div
        className="absolute bottom-12 right-12 w-[550px] h-[550px] rounded-full pointer-events-none blur-[120px] transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.03) 50%, transparent 70%)",
          transform: `translate(${mouseOffset.x * 35}px, ${mouseOffset.y * 35}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* =========================================================================
              LEFT COLUMN: UI/UX Value Proposition & Designer Credentials (6.5 cols)
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-7 text-left">

            {/* Status & Heritage Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-transparent border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">UI/UX Designer &amp; Design System Architect</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                <span>🌴</span> Kerala, India
              </span>
            </div>

            {/* Main Headline with High-Contrast Typography */}
            <div className="space-y-3.5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.1]">
                Crafting intuitive digital experiences with{" "}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  heritage-rooted empathy &amp; systems.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
                Hello, I&apos;m <strong className="text-amber-300 font-semibold">Ananthakrishnan</strong> — a UI/UX Designer &amp; Educator based in Kerala. With 3+ years architecting web &amp; mobile interfaces and mentoring 500+ designers, I transform complex workflows into effortless, human-centered digital products.
              </p>
            </div>

            {/* Designer Craft Badges */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {[
                { icon: "🎨", text: "Figma Design Systems & Tokens" },
                { icon: "📐", text: "8pt Spatial Rhythm" },
                { icon: "🧠", text: "UX Research & 10 Heuristics" },
                { icon: "✨", text: "Micro-Interactions" },
                { icon: "♿", text: "WCAG AAA Accessibility" },
              ].map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="px-2.5 py-1 rounded-lg bg-[#11151F]/80 border border-white/10 text-zinc-300 text-[11px] font-medium flex items-center gap-1.5 hover:border-amber-500/40 hover:text-amber-300 transition-colors cursor-default"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </span>
              ))}
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {[
                { num: "3+ Yrs", label: "Product Design", sub: "Web & Mobile Ecosystems" },
                { num: "500+", label: "Designers Mentored", sub: "At Zoople Technologies" },
                { num: "35+", label: "Figma UI Systems", sub: "Reusable Tokens & Autolayout" },
                { num: "MCA", label: "Computer Apps", sub: "Design-Dev Technical Literacy" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[#10141D]/90 border border-amber-500/20 hover:border-amber-500/50 transition-colors shadow-xs group"
                >
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono group-hover:scale-105 transition-transform origin-left">
                    {m.num}
                  </div>
                  <div className="text-[11px] font-bold text-white leading-tight mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-[9px] text-zinc-400 leading-tight">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* UX Journal Exploration Link in Left Column */}
            <div className="pt-1">
              <a
                href="/ux-journal"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11151D]/80 hover:bg-[#161C26] border border-white/10 hover:border-emerald-500/40 text-zinc-400 hover:text-emerald-300 text-xs font-mono transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Explore UX Journal &amp; Heuristics Playbook →</span>
              </a>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3D Interactive Canvas + Action CTAs Placed Beneath It
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center justify-center space-y-6">

            {/* 3D Canvas Box Container */}
            <div className="relative w-full flex items-center justify-center">

              {/* Ambient Golden & Emerald Backlight Glow */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-emerald-500/20 to-amber-600/30 blur-2xl pointer-events-none animate-lantern-glow" />

              {/* 3D Tilt Artwork Canvas Container */}
              <div
                className="relative w-full max-w-[500px] rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-[#0B0F17] shadow-2xl shadow-black/90 group transition-transform duration-200 ease-out"
                style={{
                  transform: `perspective(1200px) rotateX(${mouseOffset.y * -14}deg) rotateY(${mouseOffset.x * 14}deg) scale3d(1.02, 1.02, 1.02)`,
                }}
              >
                {/* Figma-Style Canvas Header Bar */}
                <div className="px-4 py-2.5 bg-[#0D121B] border-b border-amber-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 ml-2 hidden sm:inline">
                      kerala-travel-os.fig
                    </span>
                  </div>

                  {/* Canvas Mode Tabs */}
                  <div className="flex items-center gap-1 bg-[#131926] p-0.5 rounded-lg border border-white/5 text-[10px] font-mono">
                    <button
                      onClick={() => {
                        soundFx.playPop();
                        setActiveTab("design");
                      }}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "design"
                          ? "bg-amber-500/20 text-amber-300 font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Design
                    </button>
                    <button
                      onClick={() => {
                        soundFx.playPop();
                        setActiveTab("tokens");
                      }}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "tokens"
                          ? "bg-amber-500/20 text-amber-300 font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Tokens
                    </button>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="hidden sm:inline">Auto Layout</span>
                  </div>
                </div>

                {/* Main Artwork Stage */}
                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#07090E]">
                  {/* Dark Theme Hero Artwork */}
                  <img
                    src="/assets/hero_uiux_kerala_dark.jpg"
                    alt="Dark Theme UI/UX Design Ecosystem with Kerala Vibe: Glassmorphic Dashboard, Mobile App, Wireframe Blueprints, and Design System"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dynamic Mouse Shimmer Sheen */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-amber-300/10 pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: Math.abs(mouseOffset.x) + 0.1,
                    }}
                  />

                  {/* Dark Ambient Edge Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-black/30 pointer-events-none" />

                  {/* Floating Interactive Tokens Drawer */}
                  {activeTab === "tokens" && (
                    <div className="absolute inset-x-3 bottom-3 p-3 rounded-2xl bg-[#0C1018]/95 backdrop-blur-xl border border-amber-500/40 shadow-2xl z-20 animate-fadeIn">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                          <Sliders className="w-3 h-3" /> Design Tokens • Color &amp; Scales
                        </span>
                        <span className="text-[9px] font-mono text-zinc-400">WCAG AAA</span>
                      </div>

                      <div className="grid grid-cols-4 gap-2">
                        {colorTokens.map((token, tIdx) => (
                          <div key={tIdx} className="text-left">
                            <div className={`w-full h-5 rounded-md ${token.bg} mb-1 shadow-inner`} />
                            <div className="text-[9px] font-bold text-white truncate leading-tight">
                              {token.name}
                            </div>
                            <div className="text-[8px] font-mono text-zinc-400">
                              {token.hex}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Canvas Footer Strip */}
                <div className="p-3.5 bg-[#0D121B] border-t border-amber-500/20 flex items-center justify-between z-10">
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                      <span>🪔</span> UI/UX CRAFT • KERALA SOUL
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      Glassmorphic Systems • 8pt Rhythm • Wireframes
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono text-emerald-300 font-bold">
                      3D PARALLAX
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Micro-Interactions Chips (Parallax 3D Depth Layers) */}
              {chips.map((chip, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    soundFx.playPop();
                    setActiveChip(idx);
                  }}
                  onMouseLeave={() => setActiveChip(null)}
                  className={`absolute z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E131C]/95 backdrop-blur-md border border-amber-500/40 shadow-xl transition-all duration-300 cursor-pointer ${
                    chip.pos
                  } ${
                    activeChip === idx
                      ? "scale-110 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] bg-[#141A26]"
                      : "opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    transform: `translate(${mouseOffset.x * chip.x}px, ${mouseOffset.y * chip.y}px)`,
                  }}
                >
                  <span className="text-sm">{chip.icon}</span>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-white leading-tight">
                      {chip.label}
                    </div>
                    <div className="text-[8px] font-medium text-amber-300 leading-tight">
                      {chip.sub}
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* =========================================================================
                CTAs PLACED DIRECTLY BENEATH THE IMAGE CONTENT ON RIGHT HAND SIDE
               ========================================================================= */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1 w-full z-20">
              <a
                href="#contact"
                onClick={() => soundFx.playChime()}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-sm transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center gap-2 group hover:gap-3 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="px-5 sm:px-6 py-3.5 rounded-full bg-[#11151D] hover:bg-[#1A202C] border border-amber-500/30 hover:border-amber-400 text-amber-300 font-semibold text-sm transition-all duration-300 shadow-xs flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-amber-400" />
                </div>
                <span>Explore Works</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
