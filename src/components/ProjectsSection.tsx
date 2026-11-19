"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { soundFx } from "@/lib/soundFx";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import QuickViewModal from "./QuickViewModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = ["All", "Mobile App", "Enterprise Platform", "Web Platform", "E-Commerce Website"];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  const INITIAL_ROW_LIMIT = 6;
  const hasMoreProjects = filteredProjects.length > INITIAL_ROW_LIMIT;
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, INITIAL_ROW_LIMIT);

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 bg-[#080A0D] border-b border-amber-500/20 relative">
        {/* Soft Ambient Kerala Gold & Green Radial Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

          {/* =========================================================================
              SECTION HEADER in Kerala Kasavu Gold & Dark Obsidian
             ========================================================================= */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <span>🪔</span> FEATURED CASE STUDIES • SELECTED WORKS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Selected Works &amp; Product Systems
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal leading-relaxed">
                Empirical UX research, scalable design systems, and business impact across mobile applications, enterprise portals, and consumer web platforms.
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-amber-300/80 bg-[#121620] px-3.5 py-1.5 rounded-full border border-amber-500/25">
                Showing {visibleProjects.length} of {filteredProjects.length} {activeCategory === "All" ? "Case Studies" : "Projects"}
              </span>
            </div>
          </div>

          {/* =========================================================================
              CATEGORY FILTER PILLS
             ========================================================================= */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 sm:mb-12 no-scrollbar">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? PORTFOLIO_DATA.projects.length
                  : PORTFOLIO_DATA.projects.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat);
                    setIsExpanded(false);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md shadow-amber-500/20 font-extrabold"
                      : "bg-[#11141B] text-zinc-300 hover:text-amber-300 hover:bg-[#161B24] border border-amber-500/20"
                  }`}
                >
                  <span>{cat === "All" ? "All Projects" : cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? "bg-stone-950 text-amber-300" : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              COMPACT REFINED 3-COLUMN PROJECTS GRID
             ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleProjects.map((project, index) => {
              const isEcoRide = project.slug === "ecoride-rentals" || project.slug === "solar-sync";
              const isFlora = project.slug === "bloomwise";
              const isHr = project.slug === "hr-management";
              const isKitchen = project.slug === "kitchen-store" || project.slug === "design-system";
              const isTravelista = project.slug === "travelista" || project.slug === "finflow";
              const isLearnLeap = project.slug === "learn-leap" || project.slug === "ayurcare";
              const isDeepDive = project.slug === "deep-dive" || project.slug === "eco-deep-dive";

              const isRevealedCard = index >= INITIAL_ROW_LIMIT;

              return (
                <article
                  key={project.slug}
                  onClick={() => {
                    soundFx.playChime();
                    setSelectedProject(project);
                  }}
                  className={`group cursor-pointer rounded-2xl bg-[#11151D] border border-amber-500/25 hover:border-amber-400 p-3.5 sm:p-4 shadow-xl hover:shadow-[0_12px_35px_rgba(245,158,11,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                    isRevealedCard ? "animate-dropdown-card" : ""
                  }`}
                >
                  {/* Visual Preview Container */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden p-2 select-none border border-amber-500/30 flex items-center justify-center bg-gradient-to-br from-[#161B24] via-[#121620] to-[#0D1017]">

                    {/* CARD VISUAL 1: EcoRide Rentals */}
                    {isEcoRide && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/ecoride_rentals.jpg"
                          alt="EcoRide Rentals - Smart & Sustainable Car Rental Platform"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px] font-bold">
                          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            🚗 EcoRide Rentals
                          </span>
                          <span className="bg-[#10B981] text-white px-1.5 py-0.2 rounded-full text-[8px] font-black">
                            Car Rental
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CARD VISUAL 2: Flora / BloomWise */}
                    {isFlora && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-[185px] h-[115px] rounded-t-xl bg-[#161C26] border border-emerald-500/40 shadow-lg p-2.5 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center justify-between text-[7px] text-zinc-400">
                            <span className="font-bold text-emerald-400 flex items-center gap-1">
                              🌿 Flora Catalog
                            </span>
                            <span className="text-amber-400 font-mono">9:41</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-lg overflow-hidden bg-emerald-950 shrink-0 border border-emerald-500/40">
                              <img
                                src="/assets/bloomwise.jpg"
                                alt="Monstera"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="space-y-0.5 min-w-0 text-left">
                              <div className="text-[9px] font-bold text-white truncate">
                                Monstera Deliciosa
                              </div>
                              <span className="inline-block text-[6px] font-bold text-emerald-300 bg-emerald-500/20 px-1 py-0.2 rounded-xs">
                                Verified Health 98%
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-[6px]">
                            <div className="p-0.5 bg-black/40 rounded text-center text-zinc-300">
                              💧 2x/week
                            </div>
                            <div className="p-0.5 bg-black/40 rounded text-center text-zinc-300">
                              ☀️ High Light
                            </div>
                          </div>
                          <div className="py-0.5 rounded-xs bg-emerald-500 text-[6px] font-bold text-center text-stone-950">
                            4,200+ Verified Plants
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CARD VISUAL 3: HRConnect */}
                    {isHr && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/hr_connect.jpg"
                          alt="HRConnect Smart HR Management App"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px] font-bold">
                          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            👥 HRConnect
                          </span>
                          <span className="bg-[#3B82F6] text-white px-1.5 py-0.2 rounded-full text-[8px] font-black">
                            HR Portal
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CARD VISUAL 4: Kitchen Store */}
                    {isKitchen && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/kitchen_store.jpg"
                          alt="Kitchen Store - Home & Kitchen Essentials E-Commerce"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px] font-bold">
                          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            🍳 Kitchen Store
                          </span>
                          <span className="bg-[#EF4444] text-white px-1.5 py-0.2 rounded-full text-[8px] font-black">
                            E-Commerce
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CARD VISUAL 5: Travelista */}
                    {isTravelista && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/travelista.jpg"
                          alt="Travelista - Travel Package Booking Mobile App"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px] font-bold">
                          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            ✈️ Travelista
                          </span>
                          <span className="bg-[#10B981] text-white px-1.5 py-0.2 rounded-full text-[8px] font-black">
                            Travel App
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CARD VISUAL 6: Learn Leap */}
                    {isLearnLeap && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/learn_leap.jpg"
                          alt="Learn Leap - Gamified Learning & Education Mobile App"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px] font-bold">
                          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            🎮 Learn Leap
                          </span>
                          <span className="bg-[#8B5CF6] text-white px-1.5 py-0.2 rounded-full text-[8px] font-black">
                            EdTech App
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CARD VISUAL 7: Eco Deep Dive */}
                    {isDeepDive && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src="/assets/deep_dive.jpg"
                          alt="Eco Deep Dive - Marine Life & Ocean Conservation Platform"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[9px] font-bold">
                          <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            🌊 Eco Deep Dive
                          </span>
                          <span className="bg-[#0284C7] text-white px-1.5 py-0.2 rounded-full text-[8px] font-black">
                            Educational Web
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Generic Fallback */}
                    {!isEcoRide && !isFlora && !isHr && !isKitchen && !isTravelista && !isLearnLeap && !isDeepDive && project.image && (
                      <div className="relative w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                    {/* Top Right Category Pill Badge */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-xs text-[9px] font-bold text-amber-300 border border-amber-500/40 shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Compact Bottom Info Area */}
                  <div className="pt-3 px-1 pb-0.5 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {project.timeline}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mt-1 font-normal">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Card Footer: Metrics Pill + Circular Arrow */}
                    <div className="pt-3 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[9px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                          {project.metrics?.[0]?.value || "15+ Screens"}
                        </span>
                        <span className="text-[9px] font-semibold text-zinc-400 hidden sm:inline">
                          {project.metrics?.[0]?.label || "Validated"}
                        </span>
                      </div>

                      {/* Circular Action Arrow */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* =========================================================================
              VIEW MORE / SEE ALL DROPDOWN TOGGLE (Drop down cards after 2nd row)
             ========================================================================= */}
          {hasMoreProjects && (
            <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsExpanded((prev) => !prev);
                }}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#121620] hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/35 hover:border-amber-400 font-bold text-xs sm:text-sm shadow-md transition-all duration-300 cursor-pointer"
                aria-expanded={isExpanded}
              >
                <span>
                  {isExpanded
                    ? "Show Less Works"
                    : `See All Case Studies (${filteredProjects.length - INITIAL_ROW_LIMIT} More)`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-amber-400 group-hover:text-stone-950 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
                />
              </button>
              <p className="text-[11px] text-zinc-400 mt-2 font-medium">
                {isExpanded
                  ? `Showing all ${filteredProjects.length} case studies`
                  : `Showing 6 of ${filteredProjects.length} case studies • Click to drop down`}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Quick View Modal for Full Case Study Review */}
      {selectedProject && (
        <QuickViewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
