"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Project } from "@/data/portfolioData";
import { soundFx } from "@/lib/soundFx";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface QuickViewModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function QuickViewModal({ project, onClose }: QuickViewModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "research" | "architecture">("overview");

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1218] border-2 border-amber-500/35 rounded-3xl shadow-2xl overflow-hidden z-10 text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141923] border-b border-amber-500/25">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
              🪔 CASE STUDY BRIEF
            </span>
            <span className="hidden sm:inline text-xs text-zinc-400">
              • {project.category}
            </span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
          {/* Hero Banner with Image & Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-amber-500/30 bg-black shadow-lg">
              <NextImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top"
              />
              <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-amber-500/40 text-xs font-bold text-amber-300">
                {project.timeline}
              </div>
            </div>

            <div className="md:col-span-5 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {project.methodology}
              </div>
              <h2 id="quick-view-title" className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <div className="text-xs text-zinc-400 font-sans">
                {project.subtitle}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.tagline}
              </p>

              {/* Tools row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics 4-Grid Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#141923] border border-amber-500/20 text-center space-y-0.5 shadow-sm">
                <div className="text-[10px] font-semibold text-zinc-400 uppercase">
                  {m.label}
                </div>
                <div className="text-xl font-bold font-mono text-amber-400">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-amber-500/25 pb-2">
            {[
              { id: "overview", label: "Problem & Solution" },
              { id: "research", label: "User Research" },
              { id: "architecture", label: "Architecture & Testing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab.id as any);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-4 animate-fade-in text-sm">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase">The Problem:</div>
                <p className="text-zinc-200 leading-relaxed">{project.problemStatement}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase">The Solution:</div>
                <p className="text-zinc-200 leading-relaxed">{project.solutionOverview}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-zinc-300 uppercase">Key Deliverables:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.overview.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Research */}
          {activeTab === "research" && (
            <div className="space-y-4 animate-fade-in text-sm">
              <div className="p-4 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase">Research Methods &amp; Sample:</div>
                <p className="text-zinc-300 text-xs">Participant Group: {project.research.participants}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.research.methods.map((m, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-zinc-300 uppercase">Key Insights Gathered:</div>
                <ul className="space-y-1.5">
                  {project.research.keyInsights.map((insight, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Architecture & Testing */}
          {activeTab === "architecture" && (
            <div className="space-y-4 animate-fade-in text-sm">
              <div className="p-4 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase">Core Information Architecture:</div>
                <p className="text-xs text-zinc-300">{project.architecture.description}</p>
                <div className="space-y-1 pt-2">
                  {project.architecture.keyFlows.map((flow, idx) => (
                    <div key={idx} className="text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{flow}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-amber-300 uppercase">Usability Testing &amp; Iteration:</div>
                <p className="text-xs text-zinc-400">{project.usabilityTesting.testingMethod}</p>
                <div className="space-y-1 pt-1">
                  {project.usabilityTesting.iterations.map((iter, idx) => (
                    <div key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{iter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#141923] border-t border-amber-500/25 flex items-center justify-between">
          <div className="text-xs text-zinc-400 hidden sm:block">
            Designed by <span className="text-white font-semibold">{project.role}</span>
          </div>

          <Link
            href={`/work/${project.slug}`}
            onClick={() => soundFx.playChime()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20"
          >
            <span>Open Full Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
