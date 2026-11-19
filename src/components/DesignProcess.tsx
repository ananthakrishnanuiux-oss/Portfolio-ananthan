"use client";

import React, { useState } from "react";
import {
  Search,
  Target,
  Lightbulb,
  Layers,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Compass,
  FileText,
  ShieldCheck,
  Users,
  BarChart3,
  GitFork,
  Layout,
  Smartphone,
  Eye,
  Grid,
  List,
  Sparkles,
  Check,
} from "lucide-react";
import { soundFx } from "@/lib/soundFx";

interface SubActivity {
  letter: string;
  name: string;
  desc: string;
  nested?: {
    num: string;
    name: string;
    desc: string;
  }[];
}

interface ProcessStage {
  id: number;
  num: string;
  phase: string;
  title: string;
  duration: string;
  mindset: string;
  coreQuestion: string;
  badgeColor: string;
  accentColor: string;
  icon: React.ElementType;
  subActivities: SubActivity[];
  deliverables: string[];
  mockupType: "empathy" | "define" | "ideate" | "prototype" | "test";
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 0,
    num: "1",
    phase: "DISCOVER",
    title: "Empathize",
    duration: "Week 01",
    mindset: "Listen without bias to real users and stakeholders to discover root motivations and cognitive friction.",
    coreQuestion: "What are the core business objectives, who are we designing for, and where does existing friction occur?",
    badgeColor: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    accentColor: "#F59E0B",
    icon: Search,
    subActivities: [
      {
        letter: "a",
        name: "Stakeholder Interview",
        desc: "In-depth conversations with product owners, business leads, and domain experts to align on vision, business KPIs, technical constraints, and project scope.",
      },
      {
        letter: "b",
        name: "User Research",
        desc: "Holistic mixed-method research capturing user behavior, environmental context, and emotional triggers.",
        nested: [
          {
            num: "i",
            name: "Qualitative Research",
            desc: "1-on-1 contextual inquiry, open-ended interviews, and diary studies uncovering tacit needs and emotional blockers.",
          },
          {
            num: "ii",
            name: "Quantitative Research",
            desc: "Data-driven behavioral analytics, survey distribution, churn funnel audits, and statistical pattern recognition.",
          },
        ],
      },
      {
        letter: "c",
        name: "Competitive analysis/SWOT",
        desc: "Heuristic evaluation of direct & indirect market competitors, mapping Strengths, Weaknesses, Opportunities, and Threats to spot market gaps.",
      },
    ],
    deliverables: [
      "Stakeholder Alignment Matrix",
      "Qualitative Interview Synthesis",
      "Quantitative Survey Benchmarks",
      "Competitive SWOT Analysis Report",
    ],
    mockupType: "empathy",
  },
  {
    id: 1,
    num: "2",
    phase: "SYNTHESIZE",
    title: "Define",
    duration: "Week 02",
    mindset: "Synthesize disparate research signals into actionable behavioral archetypes and clear problem boundaries.",
    coreQuestion: "What is the primary user friction point, and how do we frame the core opportunity for design?",
    badgeColor: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    accentColor: "#10B981",
    icon: Target,
    subActivities: [
      {
        letter: "a",
        name: "User Persona",
        desc: "Data-grounded archetypes encapsulating demographic context, behavioral patterns, intrinsic goals, and technology comfort levels.",
      },
      {
        letter: "b",
        name: "Empathy Mapping",
        desc: "Synthesizing research into Says, Thinks, Does, and Feels quadrants to anchor team consensus in true user psychology.",
      },
      {
        letter: "c",
        name: "User Journey Mapping",
        desc: "Visualizing the end-to-end user path across discovery, evaluation, and completion, pinpointing emotional drop-off valleys.",
      },
    ],
    deliverables: [
      "Primary & Secondary Personas",
      "4-Quadrant Empathy Maps",
      "End-to-End User Journey Maps",
      "Actionable Problem Statement",
    ],
    mockupType: "define",
  },
  {
    id: 2,
    num: "3",
    phase: "STRUCTURE",
    title: "Ideate",
    duration: "Week 03",
    mindset: "Diverge on rapid structural concepts before converging on intuitive navigation taxonomies and streamlined flows.",
    coreQuestion: "How should tasks and information be organized so users accomplish their intent with minimum cognitive effort?",
    badgeColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
    accentColor: "#06B6D4",
    icon: Lightbulb,
    subActivities: [
      {
        letter: "a",
        name: "Brain Storming",
        desc: "Fast, unconstrained divergent ideation sprints, Crazy 8s exercises, and collaborative problem-solving workshops.",
      },
      {
        letter: "b",
        name: "Card Sorting & Affinity Mapping",
        desc: "Validating user mental models with open and closed card sorting to cluster features into natural categories.",
      },
      {
        letter: "c",
        name: "Task Flow",
        desc: "Linear step-by-step pathways designed for singular specific user goals (e.g., checkout, quick booking, search filter).",
      },
      {
        letter: "d",
        name: "UserFlow",
        desc: "Comprehensive decision-tree architectures detailing alternate routes, validation loops, and system error-handling states.",
      },
      {
        letter: "e",
        name: "Information Architecture",
        desc: "Global navigation sitemaps, hierarchical content categorization, and intuitive labeling systems with zero dead ends.",
      },
    ],
    deliverables: [
      "Brainstorming Sketches",
      "Affinity Diagram Clusters",
      "Linear Task Flow Specs",
      "Branching User Flow Maps",
      "Information Architecture Sitemap",
    ],
    mockupType: "ideate",
  },
  {
    id: 3,
    num: "4",
    phase: "CRAFT",
    title: "Prototype",
    duration: "Week 04",
    mindset: "Iterate from low-fidelity grayscale wireframes to pixel-perfect, accessible high-fidelity design systems.",
    coreQuestion: "How does the layout, visual hierarchy, spacing, and micro-interaction deliver clarity and delight?",
    badgeColor: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    accentColor: "#A855F7",
    icon: Layers,
    subActivities: [
      {
        letter: "a",
        name: "Wireframe",
        desc: "Iterative architectural schematics establishing content hierarchy and UI density before styling.",
        nested: [
          {
            num: "i",
            name: "Low Fidelity",
            desc: "Rapid paper sketches and structural wireframes prioritizing screen layout, visual hierarchy, and core element placement.",
          },
          {
            num: "ii",
            name: "Mid Fidelity",
            desc: "Digital auto-layout wireframes validating 8pt spatial rhythm, responsive touch targets, and interaction logic.",
          },
        ],
      },
      {
        letter: "b",
        name: "Visual Design",
        desc: "High-fidelity production interfaces: WCAG AAA color contrast tokens, refined typography scales, scalable component libraries, and interactive micro-states.",
      },
    ],
    deliverables: [
      "Low-Fidelity Paper Sketches",
      "Mid-Fidelity Wireframes",
      "High-Fidelity UI Screens",
      "8pt Grid Design System Tokens",
    ],
    mockupType: "prototype",
  },
  {
    id: 4,
    num: "5",
    phase: "VALIDATE",
    title: "Test",
    duration: "Week 05",
    mindset: "Evaluate interfaces with real users through empirical usability tests, validating task success and friction reduction.",
    coreQuestion: "Do real users complete target flows frictionlessly, and does the design achieve measurable business outcomes?",
    badgeColor: "text-rose-400 bg-rose-500/15 border-rose-500/30",
    accentColor: "#F43F5E",
    icon: FlaskConical,
    subActivities: [
      {
        letter: "a",
        name: "Usability Testing",
        desc: "Moderated and unmoderated usability sessions testing user task completion rates, hesitation drop-offs, System Usability Scale (SUS) scores, and actionable feedback loops.",
      },
    ],
    deliverables: [
      "Moderated Usability Session Recordings",
      "System Usability Scale (SUS) Scorecard",
      "Friction & Drop-off Heatmap Analysis",
      "Design QA & Developer Handoff Specs",
    ],
    mockupType: "test",
  },
];

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"interactive" | "roadmap">("interactive");
  const [protoSubTab, setProtoSubTab] = useState<"low" | "mid" | "high">("high");

  const currentStage = PROCESS_STAGES[activeStep];

  const handleNext = () => {
    soundFx.playClick();
    setActiveStep((prev) => (prev + 1) % PROCESS_STAGES.length);
  };

  const handlePrev = () => {
    soundFx.playClick();
    setActiveStep((prev) => (prev - 1 + PROCESS_STAGES.length) % PROCESS_STAGES.length);
  };

  // Render Visual Artifact Blueprint corresponding to the stage
  const renderDeliverableMockup = (type: ProcessStage["mockupType"]) => {
    switch (type) {
      case "empathy":
        return (
          <div className="p-5 rounded-2xl bg-[#0D1017] border border-amber-500/30 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-amber-400 font-bold flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>RESEARCH SYNTHESIS // ARTIFACT</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                Mixed-Method Active
              </span>
            </div>

            {/* Stakeholder & User Research Cards */}
            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-3 rounded-xl bg-[#141923] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">
                  a. Stakeholder Interview
                </span>
                <p className="text-[11px] text-zinc-300">
                  Target: 35% reduction in checkout drop-off &amp; unified brand language.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#141923] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold block">
                  b. User Research
                </span>
                <p className="text-[11px] text-zinc-300">
                  Qual: 18 deep interviews. Quant: 240+ responses analyzed.
                </p>
              </div>
            </div>

            {/* SWOT Matrix Micro Blueprint */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-zinc-400">
                <span>c. Competitive Analysis &amp; SWOT Matrix</span>
                <span className="text-amber-400 font-bold">Market Opportunity</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300">
                  <span className="font-bold block mb-0.5">Strengths (Ours)</span>
                  Clean visual hierarchy &amp; 1-click checkout flow.
                </div>
                <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/20 text-rose-300">
                  <span className="font-bold block mb-0.5">Competitor Weakness</span>
                  Cluttered listings &amp; hidden delivery charges.
                </div>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] text-zinc-400">
              <span>Standard: Heuristic Evaluation</span>
              <span className="text-emerald-400 font-bold">✓ Empirical Foundation</span>
            </div>
          </div>
        );

      case "define":
        return (
          <div className="p-5 rounded-2xl bg-[#0D1017] border border-emerald-500/30 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>PERSONA &amp; JOURNEY BLUEPRINT</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                Primary Persona
              </span>
            </div>

            {/* User Persona Profile */}
            <div className="p-3.5 rounded-xl bg-[#141923] border border-emerald-500/20 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-sm shrink-0">
                AP
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">Anjali P. (32)</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-white/10 text-zinc-300">
                    a. User Persona
                  </span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  Tech-forward professional seeking transparent pricing and zero multi-step checkout friction.
                </p>
              </div>
            </div>

            {/* Empathy Mapping & Journey Mapping */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">
                  b. Empathy Mapping
                </span>
                <span className="text-zinc-400 text-[10px] block">Thinks &amp; Feels:</span>
                <p className="text-zinc-300 text-[10px] italic">
                  &ldquo;I want clear total costs before filling out payment details.&rdquo;
                </p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">
                  c. Journey Mapping
                </span>
                <span className="text-zinc-400 text-[10px] block">Friction Valley:</span>
                <p className="text-zinc-300 text-[10px]">
                  Drop-off identified at step 3. Target: eliminate redundant steps.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Goal: Seamless Decision Velocity</span>
              <span className="text-emerald-400 font-bold">100% User Centered</span>
            </div>
          </div>
        );

      case "ideate":
        return (
          <div className="p-5 rounded-2xl bg-[#0D1017] border border-cyan-500/30 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>IA &amp; USER FLOW VISUALIZER</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                Taxonomy Validated
              </span>
            </div>

            {/* Task Flow vs User Flow */}
            <div className="p-3.5 rounded-xl bg-[#141923] border border-cyan-500/20 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>c. Task Flow &bull; d. UserFlow Architecture</span>
                <span className="text-emerald-400 font-bold">Optimal 3-Click Path</span>
              </div>

              {/* Node Sequence */}
              <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                <div className="p-1.5 px-2 rounded-md bg-black/60 border border-white/10 text-white text-center">
                  Search
                </div>
                <span className="text-zinc-500">&rarr;</span>
                <div className="p-1.5 px-2 rounded-md bg-black/60 border border-white/10 text-white text-center">
                  Filter
                </div>
                <span className="text-zinc-500">&rarr;</span>
                <div className="p-1.5 px-2 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-center font-bold">
                  Product
                </div>
                <span className="text-zinc-500">&rarr;</span>
                <div className="p-1.5 px-2 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center font-bold">
                  Success
                </div>
              </div>
            </div>

            {/* Information Architecture & Card Sorting */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-purple-400 font-bold block">
                  b. Card Sorting
                </span>
                <p className="text-zinc-300 text-[10px]">
                  32 features sorted by users into 4 frictionless category silos.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">
                  e. Info Architecture
                </span>
                <p className="text-zinc-300 text-[10px]">
                  Max depth: 3 levels. Persistent breadcrumbs &amp; global search.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Mental Model: Zero Cognitive Stall</span>
              <span className="text-emerald-400 font-bold">IA Specs Approved</span>
            </div>
          </div>
        );

      case "prototype":
        return (
          <div className="p-5 rounded-2xl bg-[#0D1017] border border-purple-500/30 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-purple-400 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>WIREFRAME &amp; VISUAL DESIGN</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setProtoSubTab("low");
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-all ${
                    protoSubTab === "low"
                      ? "bg-zinc-700 text-white font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  Low-Fi
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setProtoSubTab("mid");
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-all ${
                    protoSubTab === "mid"
                      ? "bg-zinc-700 text-white font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  Mid-Fi
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setProtoSubTab("high");
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-all ${
                    protoSubTab === "high"
                      ? "bg-purple-600 text-white font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  Visual
                </button>
              </div>
            </div>

            {/* Wireframe Preview Canvas */}
            <div className="p-3.5 rounded-xl bg-[#141923] border border-purple-500/20 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>
                  {protoSubTab === "low" && "a.i. Wireframe — Low Fidelity (Structure)"}
                  {protoSubTab === "mid" && "a.ii. Wireframe — Mid Fidelity (Auto-Layout)"}
                  {protoSubTab === "high" && "b. Visual Design (Production UI)"}
                </span>
                <span className="text-purple-400 font-bold font-mono">
                  {protoSubTab === "high" ? "8pt Grid • WCAG AAA" : "Layout Skeleton"}
                </span>
              </div>

              {protoSubTab === "low" && (
                <div className="p-3 rounded-lg bg-black/60 border border-dashed border-zinc-600 space-y-2">
                  <div className="h-3 w-1/3 bg-zinc-600 rounded"></div>
                  <div className="h-8 bg-zinc-800 rounded flex items-center justify-center text-[10px] text-zinc-400">
                    [ Hero Banner &bull; Content Hierarchy Skeleton ]
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-zinc-800/80 rounded border border-zinc-700 text-[9px] flex items-center justify-center text-zinc-400">
                      Card 1
                    </div>
                    <div className="h-10 bg-zinc-800/80 rounded border border-zinc-700 text-[9px] flex items-center justify-center text-zinc-400">
                      Card 2
                    </div>
                    <div className="h-10 bg-zinc-800/80 rounded border border-zinc-700 text-[9px] flex items-center justify-center text-zinc-400">
                      Card 3
                    </div>
                  </div>
                </div>
              )}

              {protoSubTab === "mid" && (
                <div className="p-3 rounded-lg bg-black/60 border border-zinc-500 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-zinc-300 pb-1 border-b border-zinc-700">
                    <span className="font-bold">Logo</span>
                    <span className="text-zinc-500">Nav items &bull; Search &bull; Account</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-700 text-[10px] text-zinc-300 flex justify-between">
                    <span>Clean Form Field (48px Touch Target)</span>
                    <span className="text-emerald-400 font-mono">Verified 8pt</span>
                  </div>
                  <div className="h-7 rounded bg-zinc-700 text-white text-[10px] font-bold flex items-center justify-center">
                    Primary CTA (Accessible State)
                  </div>
                </div>
              )}

              {protoSubTab === "high" && (
                <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent border border-amber-500/30 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-bold text-white flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Production Interface</span>
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">Contrast 9.4:1 AAA</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0A0D12] border border-amber-500/20 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Kasavu Gold Token</div>
                      <div className="text-[9px] text-zinc-400">#F59E0B &bull; Primary Accent</div>
                    </div>
                    <button className="px-3 py-1 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-[10px] font-extrabold shadow-sm">
                      Interactive CTA
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Figma Components: Auto-Layout 5.0</span>
              <span className="text-emerald-400 font-bold">Dev-Ready Tokens</span>
            </div>
          </div>
        );

      case "test":
        return (
          <div className="p-5 rounded-2xl bg-[#0D1017] border border-rose-500/30 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-rose-400 font-bold flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>USABILITY BENCHMARK SCORECARD</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                a. Usability Testing
              </span>
            </div>

            {/* Empirical Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[9px] text-zinc-400 block font-mono">SUS SCORE</span>
                <span className="text-xl font-black text-emerald-400 font-mono mt-0.5 block">88.5</span>
                <span className="text-[8px] text-emerald-400 font-bold">Grade A+ Usable</span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[9px] text-zinc-400 block font-mono">COMPLETION</span>
                <span className="text-xl font-black text-white font-mono mt-0.5 block">95%</span>
                <span className="text-[8px] text-zinc-400">Task Success</span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[9px] text-zinc-400 block font-mono">TIME DROP</span>
                <span className="text-xl font-black text-amber-400 font-mono mt-0.5 block">-68%</span>
                <span className="text-[8px] text-zinc-400">Time-on-Task</span>
              </div>
            </div>

            {/* Test Insights Card */}
            <div className="p-3.5 rounded-xl bg-[#141923] border border-rose-500/20 space-y-1">
              <div className="text-[10px] font-bold text-rose-300 uppercase flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tested Usability Findings:</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Participants completed core booking and purchasing journeys in under 75 seconds with zero assistance. Micro-copy refinements eliminated checkout hesitation.
              </p>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Moderated &amp; Unmoderated Sessions</span>
              <span className="text-emerald-400 font-bold">Ready for Production</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#090C10] border-b border-amber-500/20 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold font-mono">
              <span>🌿</span> DISCIPLINED METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              UX Design Process
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              A structured 5-stage human-centred framework transitioning from initial stakeholder alignment and user discovery to structured architecture, high-fidelity prototypes, and usability testing.
            </p>
          </div>

          {/* View Mode Switcher + Step Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="flex items-center bg-[#121620] p-1 rounded-xl border border-amber-500/30">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode("interactive");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "interactive"
                    ? "bg-amber-500 text-stone-950 font-bold shadow-xs"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Interactive Studio View"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Sprint Studio</span>
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode("roadmap");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === "roadmap"
                    ? "bg-amber-500 text-stone-950 font-bold shadow-xs"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Full Roadmap Matrix"
              >
                <List className="w-3.5 h-3.5" />
                <span>Full Outline</span>
              </button>
            </div>

            {viewMode === "interactive" && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-[#121620] border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Previous Design Stage"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-amber-400/90 px-1">
                  0{activeStep + 1}/0{PROCESS_STAGES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-[#121620] border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Next Design Stage"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            MODE 1: INTERACTIVE SPRINT STUDIO
           ========================================================================= */}
        {viewMode === "interactive" ? (
          <div>
            {/* Top Stepper Track with 5 Stages */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
              {PROCESS_STAGES.map((stage, idx) => {
                const isActive = activeStep === idx;
                const IconComp = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveStep(idx);
                    }}
                    className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-[#161C26] border-amber-400 shadow-xl shadow-amber-500/15 -translate-y-1"
                        : "bg-[#0E1117] border-amber-500/20 hover:border-amber-500/40 hover:bg-[#121620]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-bold ${isActive ? "text-amber-400" : "text-zinc-400"}`}>
                        {stage.num}. {stage.title}
                      </span>
                      <IconComp
                        className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-zinc-500"}`}
                      />
                    </div>

                    <div className="text-sm font-extrabold text-white leading-tight">
                      {stage.title}
                    </div>

                    <div className="text-[10px] text-amber-300/80 font-mono mt-1">
                      {stage.subActivities.length} Core Areas
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Deep-Dive Card */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#11151D] border-2 border-amber-500/35 shadow-2xl relative overflow-hidden transition-all duration-500 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* Left 7 Columns: Stage Activities Matching Image Exact Hierarchy */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Header Badges */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentStage.badgeColor}`}>
                        STAGE {currentStage.num} &bull; {currentStage.phase}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>Duration: {currentStage.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                      <span>{currentStage.num}. {currentStage.title}</span>
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                      {currentStage.mindset}
                    </p>
                  </div>

                  {/* Guiding Question Box */}
                  <div className="p-4 rounded-2xl bg-black/45 border border-amber-500/25 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      <span>Sprint Inquiry Objective:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium italic leading-relaxed">
                      &ldquo;{currentStage.coreQuestion}&rdquo;
                    </p>
                  </div>

                  {/* Core Sub-Activities (Exact matching from image: a, b, c, i, ii) */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider flex items-center justify-between">
                      <span>Stage Activities &amp; Sub-disciplines:</span>
                      <span className="text-[11px] text-amber-400 font-mono">
                        {currentStage.subActivities.length} key components
                      </span>
                    </div>

                    <div className="space-y-3">
                      {currentStage.subActivities.map((act, actIdx) => (
                        <div
                          key={actIdx}
                          className="p-4 rounded-2xl bg-[#141923] border border-amber-500/20 space-y-2 hover:border-amber-500/40 transition-colors"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {act.letter}
                            </span>
                            <div className="space-y-1 flex-1">
                              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                <span>{act.name}</span>
                              </h4>
                              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                                {act.desc}
                              </p>
                            </div>
                          </div>

                          {/* Nested Sub-bullet points if any (e.g. i, ii) */}
                          {act.nested && act.nested.length > 0 && (
                            <div className="mt-2.5 ml-8 pl-3 border-l-2 border-amber-500/30 space-y-2 pt-1">
                              {act.nested.map((nestedItem, nIdx) => (
                                <div key={nIdx} className="space-y-0.5">
                                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                                    <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 border border-amber-500/25">
                                      {nestedItem.num}
                                    </span>
                                    <span>{nestedItem.name}</span>
                                  </div>
                                  <p className="text-[11px] text-zinc-300 pl-6 leading-relaxed">
                                    {nestedItem.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right 5 Columns: Visual Deliverables & Mockups */}
                <div className="lg:col-span-5 space-y-5">
                  
                  {/* Dynamic Artifact Mockup */}
                  <div>
                    <div className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-2 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Tangible Deliverable Artifact:</span>
                    </div>
                    {renderDeliverableMockup(currentStage.mockupType)}
                  </div>

                  {/* Documented Deliverables */}
                  <div className="p-4 rounded-2xl bg-[#0E1218] border border-amber-500/20 space-y-2.5 text-left">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Stage Deliverables Documented:</span>
                    </div>
                    <div className="space-y-1.5">
                      {currentStage.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Step Advance */}
                  <div className="pt-2 flex justify-between items-center text-xs">
                    <button
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Stage</span>
                    </button>

                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer group"
                    >
                      <span>Advance to {PROCESS_STAGES[(activeStep + 1) % PROCESS_STAGES.length].title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
              MODE 2: COMPLETE PROCESS ROADMAP (Exact 5-Stage Outline from Image)
             ========================================================================= */
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROCESS_STAGES.map((stage, idx) => {
                const IconComp = stage.icon;
                return (
                  <div
                    key={stage.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveStep(idx);
                      setViewMode("interactive");
                    }}
                    className="p-6 rounded-3xl bg-[#11151D] border border-amber-500/25 hover:border-amber-400/80 transition-all duration-300 text-left space-y-4 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 group"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 font-mono font-bold text-sm">
                          {stage.num}
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {stage.title}
                        </h3>
                      </div>
                      <IconComp className="w-5 h-5 text-amber-400/80 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Sub-activities List matching Image */}
                    <div className="space-y-2.5">
                      {stage.subActivities.map((act, actIdx) => (
                        <div key={actIdx} className="space-y-1">
                          <div className="flex items-start gap-2 text-xs font-semibold text-zinc-200">
                            <span className="text-amber-400 font-mono font-bold">{act.letter}.</span>
                            <span>{act.name}</span>
                          </div>

                          {/* Nested (e.g. i, ii) */}
                          {act.nested && (
                            <div className="ml-5 pl-2.5 border-l border-amber-500/25 space-y-1">
                              {act.nested.map((nest, nIdx) => (
                                <div key={nIdx} className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                                  <span className="font-mono text-amber-400/80">{nest.num}.</span>
                                  <span>{nest.name}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-amber-400/90 font-mono">
                      <span>Click to open deep dive</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}

              {/* Complete Process Summary Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#131822] to-[#0A0D12] border-2 border-dashed border-amber-500/30 text-left space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                    <span>✓</span> FULL SPRINT GOVERNANCE
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Double Diamond &bull; Agile Delivery
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    Every stage feeds empirical evidence into the next: Discovering truth through interviews, Defining focus with personas, Ideating structure with IA, Crafting accessible prototypes, and Validating with live testing.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>WCAG AAA &bull; 8pt Grid</span>
                  <span className="text-emerald-400 font-bold">Zero Dev Drift</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            BOTTOM SPRINT PILLARS
           ========================================================================= */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Stakeholder Aligned", sub: "Clear KPIs & technical feasibility" },
            { label: "Empirical User Research", sub: "Qualitative & quantitative rigor" },
            { label: "8pt Mathematical Grid", sub: "WCAG AAA accessible design systems" },
            { label: "Validated Usability", sub: "Tested with real target users" },
          ].map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="p-3.5 rounded-2xl bg-[#0E1217] border border-amber-500/20 flex items-center gap-2.5 text-left"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">{pillar.label}</div>
                <div className="text-[10px] text-zinc-400">{pillar.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
