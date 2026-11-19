import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Layers,
  Users,
  Smartphone,
  Eye,
  Sparkles,
  Target,
  Palette,
  Search,
  Workflow,
  Cpu,
  FileQuestion,
  Lightbulb,
  Check,
  ShieldCheck,
  Flame,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const instant = false;

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — UX Case Study | Nantha (UI/UX Designer)`,
    description: project.tagline,
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Next / Previous navigation calculation
  const currentIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === slug);
  const nextProject =
    PORTFOLIO_DATA.projects[(currentIndex + 1) % PORTFOLIO_DATA.projects.length];
  const prevProject =
    PORTFOLIO_DATA.projects[
      (currentIndex - 1 + PORTFOLIO_DATA.projects.length) % PORTFOLIO_DATA.projects.length
    ];

  return (
    <div className="min-h-screen bg-[#080A0D] text-[#FBF7EE] flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      <Navbar />

      <main className="flex-1 pt-24 pb-24 sm:pt-32 sm:pb-32">
        {/* Top Back Nav & Category Tag */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-amber-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>← Back to Selected Works</span>
            </Link>

            <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold font-mono">
              {project.category}
            </span>
          </div>
        </div>

        {/* =========================================================================
            A. PROJECT OVERVIEW
           ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Case Specification // {project.methodology}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-sans font-normal max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl border border-amber-500/25 bg-[#11151D] font-sans text-xs shadow-xl">
            <div>
              <div className="text-[10px] text-amber-400/80 uppercase font-semibold">ROLE &amp; FOCUS</div>
              <div className="text-white mt-1 font-semibold truncate">{project.role}</div>
            </div>
            <div>
              <div className="text-[10px] text-amber-400/80 uppercase font-semibold">TIMELINE</div>
              <div className="text-zinc-200 mt-1">{project.timeline}</div>
            </div>
            <div>
              <div className="text-[10px] text-amber-400/80 uppercase font-semibold">PLATFORM</div>
              <div className="text-emerald-400 font-semibold mt-1">{project.overview.platform}</div>
            </div>
            <div>
              <div className="text-[10px] text-amber-400/80 uppercase font-semibold">TOOLS</div>
              <div className="text-zinc-200 mt-1 truncate">{project.tools.join(" • ")}</div>
            </div>
          </div>

          {/* Hero Interface Preview Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
            <NextImage
              src={project.image}
              alt={`${project.title} High-Fidelity Interface Overview`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#11151D] border border-amber-500/20 text-center space-y-1 shadow-sm">
                <div className="text-xs text-zinc-400 font-sans">{m.label}</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative UX Editorial Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-20 space-y-20">
          {/* =========================================================================
              B. UNDERSTANDING THE PROBLEM
             ========================================================================= */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-medium uppercase text-emerald-400">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>Section B / Understanding the Problem</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              The Product Context &amp; Root Challenge
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              {project.overview.context}. Operating within the constraints of real-world user adoption, the challenge was to eliminate friction and cognitive anxiety for <strong className="text-white">{project.overview.client}</strong> on <strong className="text-white">{project.overview.platform}</strong>.
            </p>

            <div className="p-6 rounded-3xl bg-[#161214] border border-rose-500/35 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500" />
              <div className="text-xs font-semibold uppercase text-rose-400 mb-1">Root Problem Statement:</div>
              <p className="text-base text-white leading-relaxed font-medium">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#101915] border border-emerald-500/35 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <div className="text-xs font-semibold uppercase text-emerald-400 mb-1">Proposed UX Solution:</div>
              <p className="text-base text-zinc-200 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#11151D] border border-amber-500/20 space-y-2">
              <div className="text-xs font-medium text-amber-400 uppercase">Deliverable Commitments:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {project.overview.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* =========================================================================
              C. DISCOVER: USER RESEARCH & EVIDENCE
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#22D3EE]">
              <Search className="w-4 h-4" />
              <span>Section C / Discover: Research Approach &amp; Evidence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Generative Discovery &amp; Competitive Teardown
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              Design begins with active listening. Instead of relying on internal hunches, empirical discovery was conducted using multi-modal inquiry methods:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.research.methods.map((method, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#171A23] border border-[#292D3A] text-xs font-mono text-[#F4F4F5] flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                  <span>{method}</span>
                </div>
              ))}
            </div>

            {project.research.participants && (
              <div className="p-4 rounded-xl bg-[#10131B] border border-[#292D3A] text-xs text-[#A1A1AA] flex items-center gap-3">
                <Users className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Scope of Cohort: {project.research.participants}</span>
              </div>
            )}

            {/* Synthesized User Pain Points */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase text-[#71717A]">Synthesized Pain Points &amp; Evidence:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.research.keyInsights.map((insight, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#171A23] border border-[#292D3A] space-y-2">
                    <span className="text-xs font-mono text-[#A78BFA]">Finding 0{idx + 1}</span>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Teardown */}
            {project.research.competitorAnalysis && (
              <div className="p-6 rounded-2xl bg-[#10131B] border border-[#292D3A] space-y-2">
                <div className="text-xs font-mono text-[#22D3EE] uppercase">Competitive Gap Analysis:</div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.research.competitorAnalysis}
                </p>
              </div>
            )}
          </section>

          {/* =========================================================================
              D. DEFINE: PERSONAS & EMPATHY MAPPING
             ========================================================================= */}
          {project.personas && project.personas.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A78BFA]">
                <Users className="w-4 h-4" />
                <span>Section D / Define: Personas &amp; Journey Mapping</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                Empathy Personas &amp; Target Mental Models
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                Personas were synthesized from direct interview transcripts, ensuring design decisions were always anchored to verified human behaviors rather than abstract user archetypes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.personas.map((persona, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#171A23] border border-[#292D3A] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#292D3A] pb-3">
                      <div>
                        <div className="text-lg font-heading font-bold text-white">{persona.name}</div>
                        <div className="text-xs font-mono text-[#A78BFA]">{persona.role}</div>
                      </div>
                      <span className="text-xs font-mono text-[#71717A]">Persona 0{idx + 1}</span>
                    </div>

                    {persona.quote && (
                      <p className="text-xs text-zinc-300 italic bg-[#10131B] p-3 rounded-lg border border-[#292D3A]">
                        &ldquo;{persona.quote}&rdquo;
                      </p>
                    )}

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-red-400 font-mono uppercase block mb-1">Observed Pain Point:</span>
                        <p className="text-[#A1A1AA] leading-relaxed">{persona.painPoint}</p>
                      </div>
                      <div className="pt-2 border-t border-[#292D3A]/60">
                        <span className="text-emerald-400 font-mono uppercase block mb-1">Target Need / Goal:</span>
                        <p className="text-[#A1A1AA] leading-relaxed">{persona.goal}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =========================================================================
              E. INFORMATION ARCHITECTURE
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#22D3EE]">
              <Workflow className="w-4 h-4" />
              <span>Section E / Information Architecture &amp; Mental Model</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Shallow Structural Hierarchy
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.architecture.description}
            </p>

            {/* Visual Screen Hierarchy Diagram */}
            {project.architecture.hierarchy && (
              <div className="p-6 rounded-2xl bg-[#10131B] border border-[#292D3A] space-y-4">
                <div className="text-xs font-mono text-[#71717A] uppercase">Navigation Tier Model:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.architecture.hierarchy.map((tier, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#171A23] border border-[#292D3A] space-y-2">
                      <div className="text-xs font-mono text-[#A78BFA] font-bold">{tier.level}</div>
                      <ul className="space-y-1 text-xs text-[#A1A1AA]">
                        {tier.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* =========================================================================
              F. USER FLOWS & TASK DECISION MAPS
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A78BFA]">
              <Workflow className="w-4 h-4" />
              <span>Section F / User Flows &amp; Task Decisions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Frictionless Critical Paths
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              By mapping out key user journeys before designing high-fidelity screens, unnecessary steps were pruned, ensuring users achieve their intended task in 3 taps or fewer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.keyFlows.map((flow, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#171A23] border border-[#292D3A] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] font-mono text-xs font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-[#F4F4F5]">{flow}</span>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              G. IDEATION & WIREFRAMING
             ========================================================================= */}
          {project.wireframing && (
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#22D3EE]">
                <Lightbulb className="w-4 h-4" />
                <span>Section G / Ideation &amp; Wireframing</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                Early Explorations &amp; Design Trade-Offs
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                {project.wireframing.approach}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#171A23] border border-[#292D3A] space-y-3">
                  <div className="text-xs font-mono text-[#A78BFA] uppercase font-bold">Trade-Off Analysis:</div>
                  <ul className="space-y-2">
                    {project.wireframing.tradeoffs.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#A1A1AA] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#171A23] border border-[#292D3A] space-y-3">
                  <div className="text-xs font-mono text-[#22D3EE] uppercase font-bold">Key Architectural Decisions:</div>
                  <ul className="space-y-2">
                    {project.wireframing.keyDecisions.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#A1A1AA] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* =========================================================================
              H. UI DESIGN & DESIGN SYSTEM
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A78BFA]">
              <Palette className="w-4 h-4" />
              <span>Section H / UI Design &amp; Token Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Design System &amp; High-Fidelity Specs
            </h2>

            {project.designSystemHighlights && (
              <div className="space-y-4">
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  {project.designSystemHighlights.typography}
                </p>

                {/* Color Palette Swatches */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {project.designSystemHighlights.colors.map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#171A23] border border-[#292D3A] space-y-2">
                      <div
                        className="w-full h-10 rounded-lg border border-white/10 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="text-xs font-bold text-white">{c.name}</div>
                      <div className="text-[11px] font-mono text-[#A78BFA]">{c.hex}</div>
                      <div className="text-[10px] text-[#71717A] truncate">{c.role}</div>
                    </div>
                  ))}
                </div>

                {/* Component Highlight Tags */}
                <div className="p-4 rounded-xl bg-[#10131B] border border-[#292D3A] space-y-2">
                  <div className="text-xs font-mono text-[#71717A] uppercase">Custom Component Variants:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.designSystemHighlights.components.map((comp, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-[#171A23] border border-[#292D3A] text-xs font-mono text-[#F4F4F5]">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* =========================================================================
              I. PROTOTYPE & USABILITY TESTING
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#22D3EE]">
              <Cpu className="w-4 h-4" />
              <span>Section I / Prototype &amp; Usability Validation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Evidence-Based Iteration
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.usabilityTesting.testingMethod}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Usability Findings */}
              <div className="p-6 rounded-2xl bg-[#171A23] border border-amber-500/25 space-y-3">
                <div className="text-xs font-mono uppercase text-amber-400 font-bold">
                  Observed Usability Findings:
                </div>
                <ul className="space-y-3">
                  {project.usabilityTesting.findings.map((f, idx) => (
                    <li key={idx} className="text-xs text-[#A1A1AA] flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Iterations Implemented */}
              <div className="p-6 rounded-2xl bg-[#171A23] border border-[#A78BFA]/30 space-y-3">
                <div className="text-xs font-mono uppercase text-[#A78BFA] font-bold">
                  Design Refinements Implemented:
                </div>
                <ul className="space-y-3">
                  {project.usabilityTesting.iterations.map((iter, idx) => (
                    <li key={idx} className="text-xs text-[#F4F4F5] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0" />
                      <span>{iter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* =========================================================================
              J. FINAL SOLUTION
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A78BFA]">
              <Sparkles className="w-4 h-4" />
              <span>Section J / Final Solution &amp; Interface Polish</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Validated Production Interface ({project.screensCount})
            </h2>

            {project.finalSolution && (
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold text-white">
                  {project.finalSolution.headline}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.finalSolution.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#171A23] border border-[#292D3A] space-y-1.5">
                      <div className="text-xs font-bold text-white font-heading">{hl.title}</div>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">{hl.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* High-Fidelity Showcase Canvas */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#292D3A] shadow-2xl bg-[#10131B]">
              <NextImage
                src={project.image}
                alt={`${project.title} High-Fidelity UI Screens`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>
          </section>

          {/* =========================================================================
              K. OUTCOMES & REFLECTIONS
             ========================================================================= */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#22D3EE]">
              <ShieldCheck className="w-4 h-4" />
              <span>Section K / Outcomes &amp; Key Learnings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Delivered Outcomes &amp; Honest Takeaways
            </h2>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#171A23] border border-[#292D3A] space-y-6">
              {/* Concrete Outcomes */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-[#A78BFA] font-bold">
                  Delivered Outcomes:
                </div>
                <ul className="space-y-2.5">
                  {project.outcomes.map((out, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#F4F4F5] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Designer Takeaways */}
              <div className="pt-5 border-t border-[#292D3A] space-y-3">
                <div className="text-xs font-mono uppercase text-[#71717A] font-bold">
                  Designer Reflections &amp; Lessons Learned:
                </div>
                <ul className="space-y-2.5">
                  {project.learnings.map((learn, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#A1A1AA] italic flex items-start gap-2.5">
                      <span>&ldquo;{learn}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Sequential Project Navigation (Previous / Next) */}
          <section className="pt-12 border-t border-[#1F2332] flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-4 rounded-xl bg-[#0D0F17] hover:bg-[#12141F] border border-[#1F2332] text-left group flex items-center gap-3 w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF1E1E] transition-transform group-hover:-translate-x-1" />
              <div>
                <div className="text-[10px] font-mono text-[#6B7280] uppercase">PREVIOUS CASE STUDY</div>
                <div className="text-xs font-heading font-bold text-white group-hover:text-[#FF1E1E] transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="p-4 rounded-xl bg-[#0D0F17] hover:bg-[#12141F] border border-[#1F2332] text-right group flex items-center gap-3 w-full sm:w-auto justify-end"
            >
              <div>
                <div className="text-[10px] font-mono text-[#6B7280] uppercase">NEXT CASE STUDY</div>
                <div className="text-xs font-heading font-bold text-white group-hover:text-[#FF1E1E] transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#FF1E1E] transition-transform group-hover:translate-x-1" />
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
