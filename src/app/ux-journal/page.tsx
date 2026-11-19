"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KeralaAtmosphere from "@/components/KeralaAtmosphere";
import { soundFx } from "@/lib/soundFx";
import {
  Search,
  ArrowLeft,
  X,
  Check,
  Copy,
  Sparkles,
  Zap,
  Heart,
  Brain,
  UserCheck,
  ShieldCheck,
  Layers,
  Compass,
  Shield,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronDown,
  ChevronUp,
  Flame,
  Workflow,
  Lightbulb,
  Diamond,
  Users,
  Timer,
  Repeat,
  Target,
  User,
  Palette,
} from "lucide-react";

interface MinimalNote {
  id: string;
  name: string;
  category:
    | "attention"
    | "emotional"
    | "cognitive"
    | "identity"
    | "trust"
    | "laws"
    | "heuristics"
    | "wcag"
    | "key-principles"
    | "persona"
    | "ui-fundamentals"
    | "design-thinking"
    | "double-diamond"
    | "hcd"
    | "design-sprint"
    | "lean-ux";
  categoryLabel: string;
  stage?: string;
  stageGoal?: string;
  whatIsIt?: string;
  keyPoints?: string[];
  whyImportant?: string;
  origin?: string;
  uxTakeaway?: string;
  exampleBullets?: string[];
  text: string;
  example: string;
}

const MINIMAL_NOTES: MinimalNote[] = [
  // ==========================================
  // 0. UX PERSONA FRAMEWORK & TYPES (21 Notes - From Persona Reference Guide)
  // ==========================================
  {
    id: "persona-customer",
    name: "Customer Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents the overall customer or account.",
    uxTakeaway: "Design unified billing management, transparent subscription tiers, and executive summary dashboards demonstrating business return.",
    text: "Represents the overall customer or account.",
    example: "Small business owner using accounting software",
    keyPoints: [
      "Represents the overall paying customer, subscriber, or account holder.",
      "Balances business goals, subscription budgets, and operational value.",
      "Focuses on relationship longevity, ROI, and contract renewal."
    ]
  },
  {
    id: "persona-buyer",
    name: "Buyer Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents the purchaser or decision-maker.",
    uxTakeaway: "Provide downloadable spec sheets, enterprise tier comparisons, security certifications, and ROI calculators.",
    text: "Represents the purchaser or decision-maker.",
    example: "Procurement Manager",
    keyPoints: [
      "Evaluates cost, contractual terms, security, and enterprise compliance.",
      "May not use the product daily, but controls purchasing approval.",
      "Requires clear ROI validation, transparent pricing, and SLA terms."
    ]
  },
  {
    id: "persona-user",
    name: "User Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents the end user.",
    uxTakeaway: "Optimize day-to-day usability, keyboard shortcuts, fast data entry, and high-frequency action discoverability.",
    text: "Represents the end user.",
    example: "Customer Support Agent using a CRM",
    keyPoints: [
      "Interacts with the product directly on a daily, task-oriented basis.",
      "Prioritizes speed of completion, ergonomic efficiency, and minimal friction.",
      "Experiences pain points directly when workflows are cumbersome."
    ]
  },
  {
    id: "persona-seller",
    name: "Seller Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents the salesperson or advisor.",
    uxTakeaway: "Create interactive guided demo environments, frictionless quote generation, and shareable feature walkthroughs.",
    text: "Represents the salesperson or advisor.",
    example: "SaaS Account Executive",
    keyPoints: [
      "Uses product insights, demos, and collateral to drive external client sales.",
      "Needs rapid access to product feature highlights and case studies.",
      "Values demo sandboxes and streamlined customer onboarding flows."
    ]
  },
  {
    id: "persona-influencer",
    name: "Influencer Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Influences the purchase but doesn't make the final decision.",
    uxTakeaway: "Offer comprehensive documentation, free sandbox trials, technical benchmarks, and shareable internal pitch decks.",
    text: "Influences the purchase but doesn't make the final decision.",
    example: "IT Manager recommending software",
    keyPoints: [
      "Researches and benchmarks tools to recommend to internal leadership.",
      "Champions product adoption without having direct budget authorization.",
      "Focuses on technical compatibility, team productivity, and scalability."
    ]
  },
  {
    id: "persona-decision-maker",
    name: "Decision-Maker Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Has final approval authority.",
    uxTakeaway: "Surface executive dashboards, macro performance analytics, compliance seals, and strategic milestone tracking.",
    text: "Has final approval authority.",
    example: "CIO, CEO, Director",
    keyPoints: [
      "Holds the ultimate sign-off power for budget, vendor, and tooling approval.",
      "Demands high-level strategic alignment, security audits, and risk mitigation.",
      "Values executive summaries over detailed technical minutiae."
    ]
  },
  {
    id: "persona-negative",
    name: "Negative Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents people you do not want as customers.",
    uxTakeaway: "Set clear positioning gates, pricing barriers, and explicit capability descriptions to prevent churn and customer dissatisfaction.",
    text: "Represents people you do not want as customers.",
    example: "Students using a product intended for enterprises",
    keyPoints: [
      "Identifies demographic segments or behaviors that drain support resources.",
      "Helps marketing and product teams avoid misaligned feature requests.",
      "Protects product positioning by qualifying out low-fit prospects."
    ]
  },
  {
    id: "persona-icp",
    name: "Ideal Customer Profile (ICP)",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Defines the ideal company/account rather than an individual.",
    uxTakeaway: "Tailor onboarding experiences, industry-specific terminology, and integrations to the target organizational profile.",
    text: "Defines the ideal company/account rather than an individual.",
    example: "Mid-market healthcare companies with 500-2000 employees",
    keyPoints: [
      "Focuses on firmographic criteria like company size, industry, revenue, and geography.",
      "Guides product architecture toward vertical-specific compliance and workflows.",
      "Aligns cross-functional marketing, sales, and design roadmaps."
    ]
  },
  {
    id: "persona-stakeholder",
    name: "Stakeholder Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents anyone affected by the purchase or project.",
    uxTakeaway: "Implement robust role-based access control (RBAC), exportable audit logs, and GDPR/SOC2 compliance documentation.",
    text: "Represents anyone affected by the purchase or project.",
    example: "Legal, Finance, Security teams",
    keyPoints: [
      "Not direct users, but hold veto power or compliance criteria.",
      "Care deeply about regulatory adherence, data privacy, and governance.",
      "Require transparent audit trails and permission controls."
    ]
  },
  {
    id: "persona-administrator",
    name: "Administrator Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Manages and configures the product.",
    uxTakeaway: "Build intuitive admin portals, SCIM/SAML directory sync, batch user provisioning, and clear permission matrices.",
    text: "Manages and configures the product.",
    example: "System Administrator",
    keyPoints: [
      "Configures workspace settings, SSO integrations, permissions, and security.",
      "Needs bulk management tools, user provisioning, and error diagnostic logs.",
      "Strives to keep system uptime and team productivity high with minimal hassle."
    ]
  },
  {
    id: "persona-champion",
    name: "Champion Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Internal advocate who promotes your solution.",
    uxTakeaway: "Empower champions with shareable invite links, team onboarding templates, and visible productivity scorecards.",
    text: "Internal advocate who promotes your solution.",
    example: "Team Lead pushing for adoption",
    keyPoints: [
      "Enthusiastic internal power user who persuades teammates and leadership.",
      "Takes pride in demonstrating workflow efficiency gains to peers.",
      "Needs enablement resources, community access, and early feature previews."
    ]
  },
  {
    id: "persona-gatekeeper",
    name: "Gatekeeper Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Controls access to decision-makers.",
    uxTakeaway: "Craft scannable one-pagers, clear pricing overviews, and concise demo links that can be evaluated in under 30 seconds.",
    text: "Controls access to decision-makers.",
    example: "Executive Assistant, Procurement Officer",
    keyPoints: [
      "Filters out unwanted solicitations and schedules high-priority reviews.",
      "Prioritizes brevity, clear credibility signals, and professional legitimacy.",
      "Needs easy-to-forward summaries and clean introductory material."
    ]
  },
  {
    id: "persona-support",
    name: "Support Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Provides customer support after purchase.",
    uxTakeaway: "Build unified customer timeline views, contextual support ticket integrations, and impersonation/troubleshooting sandboxes.",
    text: "Provides customer support after purchase.",
    example: "Customer Success Manager",
    keyPoints: [
      "Monitors customer health, troubleshoots user issues, and guides retention.",
      "Needs visibility into user behavior logs, error tickets, and feature adoption.",
      "Aims to turn frustrated users into loyal brand advocates."
    ]
  },
  {
    id: "persona-technical",
    name: "Technical Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Evaluates technical fit and feasibility.",
    uxTakeaway: "Provide clean API reference docs, code snippet copy buttons, interactive request explorers, and error status code tables.",
    text: "Evaluates technical fit and feasibility.",
    example: "Solutions Architect",
    keyPoints: [
      "Inspects API architecture, SDK documentation, webhooks, and latency.",
      "Validates database schema compatibility and security encryption standards.",
      "Values interactive API playgrounds, postman collections, and dev docs."
    ]
  },
  {
    id: "persona-executive",
    name: "Executive Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Focuses on strategic outcomes.",
    uxTakeaway: "Design clean executive summary views, exportable PDF reports, and real-time high-level KPI scorecards.",
    text: "Focuses on strategic outcomes.",
    example: "COO, VP Operations",
    keyPoints: [
      "Translates product capability into organizational efficiency and bottom-line growth.",
      "Reviews macro dashboards, resource utilization, and cost reductions.",
      "Has very little time to drill into micro-level operational tasks."
    ]
  },
  {
    id: "persona-procurement",
    name: "Procurement Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Focuses on contracts, pricing, compliance.",
    uxTakeaway: "Offer transparent invoice history, standardized enterprise order forms, and direct compliance packet downloads.",
    text: "Focuses on contracts, pricing, compliance.",
    example: "Procurement Manager",
    keyPoints: [
      "Negotiates pricing terms, master service agreements (MSAs), and payment cycles.",
      "Requires structured vendor risk questionnaires and insurance documents.",
      "Strives for budget predictability and strict contractual safeguards."
    ]
  },
  {
    id: "persona-partner",
    name: "Partner Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Represents resellers, distributors, or implementation partners.",
    uxTakeaway: "Provide partner portal consoles, client switching mechanisms, and comprehensive co-branding customization tools.",
    text: "Represents resellers, distributors, or implementation partners.",
    example: "Consulting Partner",
    keyPoints: [
      "Extends product reach by packaging, implementing, or reselling solutions.",
      "Needs multi-tenant client management, white-label options, and co-marketing kits.",
      "Relies on certification programs and robust implementation playbooks."
    ]
  },
  {
    id: "persona-candidate",
    name: "Candidate Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Used in recruitment and HR.",
    uxTakeaway: "Design mobile-friendly application forms, 1-click LinkedIn resume imports, and transparent interview pipeline updates.",
    text: "Used in recruitment and HR.",
    example: "Senior Software Engineer applicant",
    keyPoints: [
      "Evaluates company culture, career development, compensation, and team mission.",
      "Experiences the employer brand through careers pages and application portals.",
      "Values transparent hiring stages and frictionless application submissions."
    ]
  },
  {
    id: "persona-employee",
    name: "Employee Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Used for internal tools and workplace design.",
    uxTakeaway: "Build accessible internal workflows, offline-capable field experiences, and unified single sign-on (SSO) dashboards.",
    text: "Used for internal tools and workplace design.",
    example: "Remote employee, field worker",
    keyPoints: [
      "Interacts with internal portals, intranet, benefits, and operational tools.",
      "Needs reliable access across devices, especially in remote or field settings.",
      "Avoids tool fatigue when internal systems are consolidated and intuitive."
    ]
  },
  {
    id: "persona-audience",
    name: "Audience Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Used in content marketing and communications.",
    uxTakeaway: "Optimize article readability, provide curated reading recommendations, and ensure frictionless newsletter signup.",
    text: "Used in content marketing and communications.",
    example: "Startup founder reading industry content",
    keyPoints: [
      "Consumes educational content, newsletters, podcasts, and case studies.",
      "Seeks answers to emerging industry trends and actionable best practices.",
      "May not be ready to purchase today, but builds brand trust over time."
    ]
  },
  {
    id: "persona-proto",
    name: "Proto Persona",
    category: "persona",
    categoryLabel: "Persona",
    stage: "Persona Types",
    whatIsIt: "Assumption-based persona created before research.",
    uxTakeaway: "Highlight assumptions visually, define research questions to test hypotheses, and update artifacts as real user data arrives.",
    text: "Assumption-based persona created before research.",
    example: "Initial hypothesis about target users",
    keyPoints: [
      "Drafted quickly by stakeholders based on internal knowledge and assumptions.",
      "Serves as an initial brainstorming hypothesis before conducting user interviews.",
      "Must be iteratively tested, refined, and validated with empirical user research."
    ]
  },

  // ==========================================
  // 1. UI DESIGN FUNDAMENTALS (7 Notes - From UI Design Reference Sheet)
  // ==========================================
  {
    id: "ui-color-theory",
    name: "Color Theory",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "Mastering color wheel harmonies, color psychology, and contrast ratios to build intentional, accessible digital interfaces.",
    uxTakeaway: "Apply the 60-30-10 rule (60% neutral canvas, 30% structural elements, 10% accent CTAs) and guarantee a minimum 4.5:1 contrast ratio against both light and dark backgrounds.",
    text: "Mastering color wheel harmonies, color psychology, and contrast ratios to build intentional, accessible digital interfaces.",
    example: "Recommended Tools: Coolors, Adobe Color, Contrast Checker",
    keyPoints: [
      "Color Wheel Basics: Primary, secondary, and tertiary colors.",
      "Color Schemes: Monochromatic, complementary, analogous, and triadic.",
      "Emotional Impact: Red = urgency, Blue = trust, Green = success.",
      "Accessibility: Maintain 4.5:1 contrast ratios for text readability (WCAG AA).",
      "UI Use Cases: Primary colors (CTAs, highlights), Neutral colors (backgrounds, text), Accent colors (icons, notifications)."
    ],
    exampleBullets: [
      "Primary Colors: Core interactive CTAs and active state highlights",
      "Neutral Colors: Background surfaces, structural dividers, and body copy",
      "Accent Colors: Alert badges, active icons, and notification indicators",
      "Essential Tools: Coolors, Adobe Color, Contrast Checker"
    ]
  },
  {
    id: "ui-typography",
    name: "Typography",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "The deliberate arrangement of type to balance legibility, readability, visual hierarchy, and brand personality.",
    uxTakeaway: "Golden rule: Typography = UI tone + clarity. Limit your UI to at most 2-3 typefaces and vary font weights along a mathematical modular scale.",
    text: "The deliberate arrangement of type to balance legibility, readability, visual hierarchy, and brand personality.",
    example: "Golden rule: Typography = UI tone + clarity",
    keyPoints: [
      "Font Families: Serif (formal, editorial), Sans-serif (modern, digital screens), Monospace (code, data).",
      "Font Hierarchy: Headings (H1, H2..), Subheadings, Body, and Captions using different weights, sizes, and spacing for clarity.",
      "Line Height & Letter Spacing: Improves readability. Ideal line height = 1.4-1.6x font size.",
      "Best Practices: Use no more than 2-3 typefaces in a design; avoid tiny fonts (<14px for body text on web)."
    ],
    exampleBullets: [
      "Serif: Formal, literary, traditional publications",
      "Sans-serif: Modern, clean, high-legibility interfaces",
      "Monospace: Code editors, financial tables, tabular data",
      "Ideal Line Height: 1.4-1.6x font size (e.g. 16px body with 24px line-height)"
    ]
  },
  {
    id: "ui-spacing-whitespace",
    name: "Spacing (White Space)",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "Intentional negative space inside and around components that organizes visual relationships, prevents clutter, and directs user attention.",
    uxTakeaway: "Negative space is an active functional element. Stick strictly to an 8pt grid scale to establish consistent visual cadence and ensure smooth developer handoffs.",
    text: "Intentional negative space inside and around components that organizes visual relationships, prevents clutter, and directs user attention.",
    example: "8pt Grid Scale: 8px (compact), 16px (standard), 24px (relaxed), 32px (container margins)",
    keyPoints: [
      "Types of Spacing: Internal spacing (padding within elements) and External spacing (margin between elements).",
      "8pt Grid System: Base all spacing on 8px increments (8, 16, 24, 32, 40, 48px). Makes designs more consistent and scalable.",
      "Importance: Prevents clutter, creates visual breathing room, and dramatically improves usability and task focus."
    ],
    exampleBullets: [
      "Internal Spacing: Padding placed inside cards, button boundaries, and inputs",
      "External Spacing: Margin separating adjacent cards and layout sections",
      "8pt Grid System: 8, 16, 24, 32, 48px increments for consistent rhythm",
      "Core Value: Eliminates clutter, provides visual breathing room, elevates focus"
    ]
  },
  {
    id: "ui-iconography",
    name: "Iconography",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "A unified system of graphic symbols designed to communicate actions, reinforce adjacent typography, and aid instant comprehension.",
    uxTakeaway: "Icons should clarify rather than confuse. Maintain identical stroke weights across your icon set and always include text labels for non-universal actions.",
    text: "A unified system of graphic symbols designed to communicate actions, reinforce adjacent typography, and aid instant comprehension.",
    example: "Recommended Resources: Feather Icons, Heroicons, FontAwesome",
    keyPoints: [
      "Types: Line icons (lightweight, modern), Solid icons (bold, high-emphasis), Duotone icons (layered depth).",
      "Purpose: Communicate actions, reinforce text, or stand alone for quick comprehension.",
      "Best Practices: Be consistent in line thickness, style, and size. Don't rely solely on icons—add text labels when necessary. Keep icons simple and recognizable."
    ],
    exampleBullets: [
      "Line Icons: Outline glyphs for toolbars, search bars, and utility links",
      "Solid Icons: Filled glyphs for active bottom navs and primary status icons",
      "Duotone Icons: Two-tone styling for dashboard categories and feature cards",
      "Design Rules: Consistent line thickness, simple geometry, clear text labels"
    ]
  },
  {
    id: "ui-visual-hierarchy-balance",
    name: "Visual Hierarchy & Balance",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "Structuring elements by size, contrast, color, and placement to guide the user's eye and maintain visual equilibrium.",
    uxTakeaway: "Structure screens around how humans scan: use F-Patterns for dense data/articles and Z-Patterns for landing pages, ensuring primary CTAs command highest visual dominance.",
    text: "Structuring elements by size, contrast, color, and placement to guide the user's eye and maintain visual equilibrium.",
    example: "Visual scan: F-Pattern (scanning text rows and headers) vs. Z-Pattern (scanning hero landing pages)",
    keyPoints: [
      "Visual Hierarchy: Guides users' eyes using size, contrast, color, and placement (e.g. CTA buttons larger and bolder than secondary actions).",
      "Symmetrical Balance: Evenly weighted layout (safe, structured, classic).",
      "Asymmetrical Balance: Uneven distribution of visual weight that still feels stable (more dynamic, modern).",
      "Z-Pattern & F-Pattern: Natural eye-scanning patterns used in layout design to maximize readability and action discovery."
    ],
    exampleBullets: [
      "Visual Hierarchy: Scale, color saturation, high contrast, strategic placement",
      "Symmetrical Balance: Classic, centered, evenly weighted layout architecture",
      "Asymmetrical Balance: Dynamic visual tension with balanced perceived weights",
      "Eye Scanning: Z-Pattern for landing flows, F-Pattern for dashboards and reading"
    ]
  },
  {
    id: "ui-design-systems-atomic",
    name: "Design Systems & Atomic Design",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "A scalable ecosystem of reusable components, design tokens, and guidelines structured through Brad Frost's modular Atomic Design methodology.",
    uxTakeaway: "Break complex interfaces into reusable atomic building blocks. Changes made to atoms (tokens, icons, buttons) automatically cascade through molecules and full pages.",
    text: "A scalable ecosystem of reusable components, design tokens, and guidelines structured through Brad Frost's modular Atomic Design methodology.",
    example: "Design System References: Google Material Design, IBM Carbon, Salesforce Lightning",
    keyPoints: [
      "Design Systems: Reusable components + guidelines (e.g. buttons, forms, grids) that help product teams design faster and with uncompromising consistency.",
      "Industry Benchmarks: Google Material Design, IBM Carbon, Salesforce Lightning.",
      "Atomic Design (Brad Frost): Modular breakdown into 5 stages—Atoms, Molecules, Organisms, Templates, and Pages."
    ],
    exampleBullets: [
      "Atoms: Fundamental elements (color tokens, buttons, form inputs, typography)",
      "Molecules: Simple functional combinations of atoms (input + label + submit button)",
      "Organisms: Distinct, complex sections (navigation header, card grid, modal)",
      "Templates & Pages: Structural page layouts populated with live content"
    ]
  },
  {
    id: "ui-components-patterns",
    name: "Others (Grids, Buttons, Feedback, Containers)",
    category: "ui-fundamentals",
    categoryLabel: "UI Fundamentals",
    stage: "UI Design Fundamentals",
    whatIsIt: "Core structural and interactive components: responsive layout grids, button state machines, system feedback loops, and content grouping containers.",
    uxTakeaway: "Every interactive element must provide instant visual feedback across all 4 interaction states (Default, Hover, Active, Disabled) within clean responsive grid constraints.",
    text: "Core structural and interactive components: responsive layout grids, button state machines, system feedback loops, and content grouping containers.",
    example: "Component states: Default -> Hover (:hover) -> Active (:active) -> Disabled",
    keyPoints: [
      "Grids & Layouts: Columns, gutters, margins, and responsive breakpoints for consistent multi-device alignment.",
      "Buttons & States: Exhaustive state handling across Default, Hover, Active, and Disabled.",
      "Feedback: Real-time visual cues like loading spinners, success banners, and contextual error notices.",
      "Cards & Containers: Modular design components engineered to group related content into distinct, scannable units."
    ],
    exampleBullets: [
      "Grids & Layouts: Multi-column responsive grids with standardized gutters",
      "Button States: Default (idle), Hover (visual lift), Active (pressed), Disabled",
      "System Feedback: Spinners, progress bars, toast alerts, error boundaries",
      "Cards & Containers: Grouping related attributes within bordered surfaces"
    ]
  },

  // ==========================================
  // 1. THE KEY PRINCIPLES OF UX DESIGN (10 Notes - From Image Guide)
  // ==========================================
  {
    id: "principle-ucd",
    name: "1. User-Centered Design (UCD)",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Focus on designing with the user's needs, goals, and behaviors in mind. Understand your audience through research and ensure the design addresses their pain points.",
    uxTakeaway: "Conduct generative research early and continually test with real users so products solve verified problems rather than internal team assumptions.",
    text: "Focus on designing with the user's needs, goals, and behaviors in mind. Understand your audience through research and ensure the design addresses their pain points.",
    example: "Conducting user interviews and creating personas to tailor a healthcare app specifically for seniors who struggle with complex terminology and small fonts.",
    keyPoints: [
      "Focus on designing with the user's needs, goals, and behaviors in mind.",
      "Understand your audience through research and contextual inquiry.",
      "Ensure the design directly addresses verified user pain points."
    ]
  },
  {
    id: "principle-usability",
    name: "2. Usability",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Ensure the product is easy to use, intuitive, and efficient. The user should be able to learn how to use it quickly and complete tasks with minimal effort.",
    uxTakeaway: "Minimize friction and cognitive effort so users can achieve their goals quickly without encountering obstacles or needing tutorials.",
    text: "Ensure the product is easy to use, intuitive, and efficient. The user should be able to learn how to use it quickly and complete tasks with minimal effort.",
    example: "Streamlining a checkout process into 3 simple, guided steps with smart address autocompletion and instant card validation.",
    keyPoints: [
      "Ensure the product is easy to use, intuitive, and efficient.",
      "Users should learn how to navigate the product quickly on their first visit.",
      "Complete primary tasks with minimal steps and zero unnecessary effort."
    ]
  },
  {
    id: "principle-consistency",
    name: "3. Consistency",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Maintain uniformity across design elements and interactions, so users can predict actions and feel familiar with the interface, improving ease of use.",
    uxTakeaway: "Use consistent UI design systems, terminology, and interaction models across all screens to accelerate familiarity and reduce errors.",
    text: "Maintain uniformity across design elements and interactions, so users can predict actions and feel familiar with the interface, improving ease of use.",
    example: "Standardizing primary CTA buttons with the exact same gold styling, padding, and hover states across every page.",
    keyPoints: [
      "Maintain uniformity across design elements, terminology, and interactions.",
      "Users can predict outcomes based on established visual patterns.",
      "Familiarity improves usability and reduces the cognitive learning curve."
    ]
  },
  {
    id: "principle-accessibility",
    name: "4. Accessibility",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Design for inclusivity by considering the needs of users with different abilities (visual, auditory, motor, etc.), ensuring your product is usable by all.",
    uxTakeaway: "Adhere to WCAG guidelines to guarantee universal digital access for everyone, including those with permanent, temporary, or situational disabilities.",
    text: "Design for inclusivity by considering the needs of users with different abilities (visual, auditory, motor, etc.), ensuring your product is usable by all.",
    example: "Ensuring 4.5:1 text contrast ratios, providing descriptive alt text for all images, and enabling full keyboard navigation without a mouse.",
    keyPoints: [
      "Design for inclusivity by considering diverse abilities (visual, auditory, motor, cognitive).",
      "Ensure contrast, font sizing, and keyboard navigation meet accessibility standards.",
      "Create digital experiences that are fully usable by all people without exclusion."
    ]
  },
  {
    id: "principle-feedback",
    name: "5. Feedback",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Provide immediate and clear feedback to users about their actions, such as loading indicators or confirmation messages, helping them understand the system's response.",
    uxTakeaway: "Never leave users in doubt about whether their tap or click succeeded; provide instant visual, auditory, or haptic confirmation.",
    text: "Provide immediate and clear feedback to users about their actions, such as loading indicators or confirmation messages, helping them understand the system's response.",
    example: "Displaying a subtle progress spinner during file upload, followed immediately by an emerald success banner and chime sound.",
    keyPoints: [
      "Provide immediate and unambiguous feedback for every user interaction.",
      "Use loading spinners, skeleton screens, and progress bars during latency.",
      "Display clear confirmation messages upon successful task completion."
    ]
  },
  {
    id: "principle-interaction-design",
    name: "6. Interaction Design",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Create intuitive, seamless interactions that feel natural to the user. Ensure that every click, touch, or swipe leads to a predictable outcome.",
    uxTakeaway: "Design natural physical affordances, clear microinteractions, and smooth transitions that behave predictably and delight the user.",
    text: "Create intuitive, seamless interactions that feel natural to the user. Ensure that every click, touch, or swipe leads to a predictable outcome.",
    example: "Designing swipe-to-archive gestures with spring-physics resistance and subtle haptic feedback when managing list items on mobile.",
    keyPoints: [
      "Create intuitive, seamless interactions that feel organic and effortless.",
      "Ensure every click, touch, or swipe produces a predictable, expected outcome.",
      "Eliminate sudden jarring UI shifts with smooth transitions and microinteractions."
    ]
  },
  {
    id: "principle-performance",
    name: "7. Performance",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Optimize for speed and responsiveness. A fast, smooth experience without lag or delays enhances the overall user experience and keeps users engaged.",
    uxTakeaway: "Performance is a fundamental UX feature; sub-400ms responses prevent user fatigue, boost conversion rates, and build trust.",
    text: "Optimize for speed and responsiveness. A fast, smooth experience without lag or delays enhances the overall user experience and keeps users engaged.",
    example: "Compressing assets, lazy-loading offscreen imagery, and achieving sub-100ms server responses to prevent user bounce.",
    keyPoints: [
      "Optimize for speed, lightweight code, and instantaneous responsiveness.",
      "A fast, lag-free experience dramatically enhances user engagement and retention.",
      "Even beautiful designs fail when plagued by slow load times and sluggish interactions."
    ]
  },
  {
    id: "principle-user-control",
    name: "8. User Control & Freedom",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Allow users to undo actions and make choices freely without constraints, giving them control over their experience while still guiding them when needed.",
    uxTakeaway: "Empower users with clear emergency exits, undo options, and easy cancellation so they feel confident exploring without fear of mistakes.",
    text: "Allow users to undo actions and make choices freely without constraints, giving them control over their experience while still guiding them when needed.",
    example: "Providing a floating 'Undo' toast message after archiving an email, allowing users to reverse accidental actions with 1 click.",
    keyPoints: [
      "Allow users to undo actions and make choices freely without unwanted constraints.",
      "Provide visible 'emergency exits' to leave unwanted states without tedious processes.",
      "Keep users in control of their experience while offering supportive guidance."
    ]
  },
  {
    id: "principle-iterative-design",
    name: "9. Iterative Design",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Continuously test, refine, and improve the design based on user feedback, ensuring the product evolves to better meet user needs over time.",
    uxTakeaway: "Great design is an ongoing loop of prototyping, usability testing, and refinement that turns user insights into continuous improvements.",
    text: "Continuously test, refine, and improve the design based on user feedback, ensuring the product evolves to better meet user needs over time.",
    example: "Conducting monthly usability testing sessions on sign-up funnels to identify drop-off causes and incrementally lift conversion.",
    keyPoints: [
      "Continuously test, refine, and improve the design based on real user feedback.",
      "Treat design as an evolving cycle rather than a one-time handoff.",
      "Ensure the product evolves sustainably to meet shifting user needs over time."
    ]
  },
  {
    id: "principle-emotional-impact",
    name: "10. Emotional Impact",
    category: "key-principles",
    categoryLabel: "Key Principles of UX",
    stage: "Key Principles",
    whatIsIt: "Design to delight users, making the experience enjoyable and emotionally engaging. Small touches like animations or personalized content can create positive feelings.",
    uxTakeaway: "Go beyond utility to create delight; personalized touches, joyful animations, and polite empty states forge deep brand loyalty.",
    text: "Design to delight users, making the experience enjoyable and emotionally engaging. Small touches like animations or personalized content can create positive feelings.",
    example: "Displaying celebratory confetti microinteractions and an encouraging message when a user finishes their onboarding setup.",
    keyPoints: [
      "Design to delight users, making interactions enjoyable and emotionally engaging.",
      "Use thoughtful touches like smooth animations, micro-delights, and personalization.",
      "Evoke positive sentiment and lasting brand trust through empathetic design."
    ]
  },

  // ==========================================
  // 2. LAWS OF UX (12 Notes - Formatted as in Image / Study Guide)
  // ==========================================
  {
    id: "law-hicks",
    name: "Hick's Law",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Decision & Memory",
    whatIsIt: "The more choices a user has, the longer it takes them to decide.",
    uxTakeaway: "Simplify decision-making by limiting options. For example, don't show 20 buttons on a homepage—group or prioritize them.",
    text: "The more choices a user has, the longer it takes them to decide.",
    example: "Simplify decision-making by limiting options. For example, don't show 20 buttons on a homepage—group or prioritize them.",
    keyPoints: [
      "The more choices a user has, the longer it takes them to decide.",
      "Simplify decision-making by limiting options.",
      "Don't show 20 buttons on a homepage—group or prioritize them."
    ]
  },
  {
    id: "law-millers",
    name: "Miller's Law",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Decision & Memory",
    whatIsIt: "The average person can hold about 7 ± 2 items in their working memory.",
    uxTakeaway: "Don't overload users with information. Chunk content into manageable groups (like navigation menus or steps in a process).",
    text: "The average person can hold about 7 ± 2 items in their working memory.",
    example: "Don't overload users with information. Chunk content into manageable groups (like navigation menus or steps in a process).",
    keyPoints: [
      "The average person can hold about 7 ± 2 items in their working memory.",
      "Don't overload users with information.",
      "Chunk content into manageable groups (like navigation menus or steps in a process)."
    ]
  },
  {
    id: "law-fitts",
    name: "Fitts's Law",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Interaction & Speed",
    whatIsIt: "The time to acquire a target is a function of the distance to and size of the target.",
    uxTakeaway: "Make important buttons bigger and easier to reach—especially on mobile.",
    text: "The time to acquire a target is a function of the distance to and size of the target.",
    example: "Make important buttons bigger and easier to reach—especially on mobile.",
    keyPoints: [
      "Target acquisition time is a function of target distance and size.",
      "Make important buttons bigger and easier to reach—especially on mobile.",
      "Place primary conversion buttons in natural resting thumb regions."
    ]
  },
  {
    id: "law-jakobs",
    name: "Jakob's Law",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Interaction & Speed",
    whatIsIt: "Users expect your product to work like other products they already know.",
    uxTakeaway: "Stick to established conventions (like the shopping cart icon, hamburger menu, etc.).",
    text: "Users expect your product to work like other products they already know.",
    example: "Stick to established conventions (like the shopping cart icon, hamburger menu, etc.).",
    keyPoints: [
      "Users expect your product to work like other products they already know.",
      "Stick to established conventions (like the shopping cart icon, hamburger menu, etc.).",
      "Do not reinvent standard layout elements like top-right carts or header logos."
    ]
  },
  {
    id: "law-proximity",
    name: "Law of Proximity (Gestalt Principle)",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Perception & Complexity",
    whatIsIt: "Objects that are close together are perceived as a group.",
    uxTakeaway: "Group related elements together to improve scannability and comprehension.",
    text: "Objects that are close together are perceived as a group.",
    example: "Group related elements together to improve scannability and comprehension.",
    keyPoints: [
      "Objects that are close together are perceived as a group.",
      "Group related elements together to improve scannability and comprehension.",
      "Place labels directly above inputs and use spacing to separate distinct blocks."
    ]
  },
  {
    id: "law-teslers",
    name: "Tesler's Law (Law of Conservation of Complexity)",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Perception & Complexity",
    whatIsIt: "There's a certain amount of complexity in any system. It must be handled either by the system or the user.",
    uxTakeaway: "Hide or handle complexity in the backend so the user doesn't have to deal with it.",
    text: "There's a certain amount of complexity in any system. It must be handled either by the system or the user.",
    example: "Hide or handle complexity in the backend so the user doesn't have to deal with it.",
    keyPoints: [
      "There is an irreducible amount of complexity in any system.",
      "Complexity must be handled either by the system or the user.",
      "Hide or handle complexity in the backend so the user doesn't have to deal with it."
    ]
  },
  {
    id: "law-doherty",
    name: "Doherty Threshold",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Interaction & Speed",
    whatIsIt: "Productivity soars when a computer and its users interact at less than 400ms.",
    uxTakeaway: "Aim for fast feedback and loading times to keep users engaged.",
    text: "Productivity soars when a computer and its users interact at less than 400ms.",
    example: "Aim for fast feedback and loading times to keep users engaged.",
    keyPoints: [
      "Productivity soars when a computer and its users interact at less than 400ms.",
      "Aim for fast feedback and loading times to keep users engaged.",
      "Show skeleton screens and progress loaders when operations take longer."
    ]
  },
  {
    id: "law-von-restorff",
    name: "Von Restorff Effect (Isolation Effect)",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Perception & Complexity",
    whatIsIt: "Items that stand out are more likely to be remembered.",
    uxTakeaway: "Use contrast, size, or color to highlight key actions (e.g., primary CTA vs. secondary).",
    text: "Items that stand out are more likely to be remembered.",
    example: "Use contrast, size, or color to highlight key actions (e.g., primary CTA vs. secondary).",
    keyPoints: [
      "Items that stand out visually are more likely to be remembered.",
      "Use contrast, size, or color to highlight key actions (e.g., primary CTA vs. secondary).",
      "Highlight 'Recommended' packages in pricing grids with distinct badges."
    ]
  },
  {
    id: "law-zeigarnik",
    name: "Zeigarnik Effect",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Decision & Memory",
    whatIsIt: "People remember unfinished or interrupted tasks better than completed ones.",
    origin: "Named after psychologist Bluma Zeigarnik, who noticed that waiters remembered unpaid orders better than paid ones.",
    uxTakeaway: "Use progress steppers, checklist indicators, and completion percentages (e.g., '80% complete') during onboarding to motivate users to finish.",
    text: "People remember unfinished or interrupted tasks better than completed ones.",
    example: "Visual progress percentages and steppers on onboarding pages motivate users to finish incomplete profiles.",
    keyPoints: [
      "People remember unfinished or interrupted tasks better than completed ones.",
      "Origin: Named after psychologist Bluma Zeigarnik, who noticed that waiters remembered unpaid orders better than paid ones.",
      "Leverage completion percentages to motivate users to finish multi-step forms."
    ]
  },
  {
    id: "law-similarity",
    name: "Law of Similarity",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Perception & Complexity",
    whatIsIt: "Matching looks, matching roles. Users perceive shapes, colors, or sizes that look visually similar as serving identical roles in functionality.",
    uxTakeaway: "Maintain consistent styling across links and action buttons so users instinctively recognize interactive items.",
    text: "Matching looks, matching roles. Users perceive shapes, colors, or sizes that look visually similar as serving identical roles in functionality.",
    example: "Designing active hyperlinks with identical blue text instantly teaches users what is tap-responsive.",
    keyPoints: [
      "Elements that look visually similar are assumed to share identical functionality.",
      "Ensure all clickable links and action buttons follow uniform styles.",
      "Separate interactive elements clearly from decorative text."
    ]
  },
  {
    id: "law-common-region",
    name: "Law of Common Region",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Perception & Complexity",
    whatIsIt: "Borders make boundaries. Items placed inside a shared enclosed container are perceived as part of an isolated, unified context.",
    uxTakeaway: "Use distinct card containers and borders to segment unrelated elements in complex dashboard interfaces.",
    text: "Borders make boundaries. Items placed inside a shared enclosed container are perceived as part of an isolated, unified context.",
    example: "Social media newsfeeds pack posts into separate bordered cards to distinguish distinct threads easily.",
    keyPoints: [
      "Items placed inside a shared enclosed container are perceived as a unified context.",
      "Use cards and panels to group related modules and controls.",
      "Borders help users parse complex dashboard layouts without confusion."
    ]
  },
  {
    id: "law-aesthetic-usability",
    name: "Aesthetic-Usability Effect",
    category: "laws",
    categoryLabel: "UX Laws",
    stage: "Perception & Complexity",
    whatIsIt: "Beauty builds system trust. Users perceive visually attractive layouts as more functional, highly intuitive, and vastly easier to interact with.",
    uxTakeaway: "Invest in polished visual craftsmanship, typography, and contrast—users are far more forgiving of minor hiccups in handsome interfaces.",
    text: "Beauty builds system trust. Users perceive visually attractive layouts as more functional, highly intuitive, and vastly easier to interact with.",
    example: "Exquisite application design masks system hiccups because users are far more forgiving of handsome interfaces.",
    keyPoints: [
      "Visually attractive layouts are perceived as more functional and intuitive.",
      "Users are significantly more forgiving of minor system flaws in beautiful interfaces.",
      "Polished craftsmanship builds immediate brand credibility and trust."
    ]
  },

  // ==========================================
  // 2. 10 USABILITY HEURISTICS (From NN/g - nngroup.com)
  // ==========================================
  {
    id: "heuristic-1",
    name: "1. Visibility of System Status",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Users know the current system status, they learn the outcome of their prior interactions and determine next steps.",
    uxTakeaway: "The application should consistently keep users informed about system events via quick, relevant feedback.",
    text: "Users know the current system status, they learn the outcome of their prior interactions and determine next steps.",
    example: "File upload widgets display progressive loading percentages to prove the computer is actively working.",
    keyPoints: [
      "Users know the current system status at all times.",
      "They learn the outcome of prior interactions immediately.",
      "Provides clear context so users can confidently determine next steps."
    ]
  },
  {
    id: "heuristic-2",
    name: "2. Match Between the System and the Real World",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Use language and concepts familiar to the user.",
    uxTakeaway: "Speak the user's language. Avoid code jargon. Use common words, real metaphors, and symbols that mirror physical objects.",
    text: "Use language and concepts familiar to the user.",
    example: "Operating systems represent deleted files with a trash can icon because we know how physical bins operate.",
    keyPoints: [
      "Use language and concepts familiar to the user.",
      "Avoid internal technical jargon and cryptic database codes.",
      "Follow real-world conventions and mirror physical workflows."
    ]
  },
  {
    id: "heuristic-3",
    name: "3. User Control and Freedom",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Users often perform actions by mistake. They need a clearly marked \"emergency exit\" to leave the unwanted action without having to go through an extended process.",
    uxTakeaway: "Offer clear emergency exits. Provide a straightforward way out of accidental actions without forcing complex multi-step setups.",
    text: "Users often perform actions by mistake. They need a clearly marked \"emergency exit\" to leave the unwanted action without having to go through an extended process.",
    example: "Displaying an 'Undo' popup button immediately after an email is archived solves accidental clicks instantly.",
    keyPoints: [
      "Users often perform actions by mistake.",
      "Provide a clearly marked 'emergency exit' to leave unwanted states.",
      "Never force users through extended processes to reverse an action."
    ]
  },
  {
    id: "heuristic-4",
    name: "4. Consistency and Standards",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Use consistent design and terminology throughout the design.",
    uxTakeaway: "Follow established conventions. Ensure identical words, actions, and graphic icons always trigger the same behaviors across different pages.",
    text: "Use consistent design and terminology throughout the design.",
    example: "Do not swap standard checkout button colors or placement designs from one screen to the next.",
    keyPoints: [
      "Use consistent design and terminology throughout the product.",
      "Ensure identical words and visual icons trigger the same behavior everywhere.",
      "Follow established industry and operating system conventions."
    ]
  },
  {
    id: "heuristic-5",
    name: "5. Error Prevention",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Design interfaces to minimize the chance of errors.",
    uxTakeaway: "Stop errors before they happen. Remove mistake-prone options, add helpful limits, and present validation warnings dynamically as fields get populated.",
    text: "Design interfaces to minimize the chance of errors.",
    example: "Disabling future calendar dates when booking a birthdate prevents users from submitting invalid dates.",
    keyPoints: [
      "Design interfaces to minimize the chance of errors before they occur.",
      "Use smart input constraints, date pickers, and input masking.",
      "Require confirmation before executing destructive or irreversible tasks."
    ]
  },
  {
    id: "heuristic-6",
    name: "6. Recognition Rather than Recall",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Humans have limited short-term memories. Interfaces that promote recognition reduce the amount of cognitive effort required from users.",
    uxTakeaway: "Keep choices visible. Decrease memory stress by displaying standard options, buttons, and navigation elements on screen instead of hiding them inside menus.",
    text: "Humans have limited short-term memories. Interfaces that promote recognition reduce the amount of cognitive effort required from users.",
    example: "Search bars displaying 'Recent Queries' directly beneath the field help users search without forcing them to recall past inputs.",
    keyPoints: [
      "Humans have strictly limited short-term memories.",
      "Promote recognition to reduce cognitive effort required from users.",
      "Keep actions, options, and critical navigation visible on screen."
    ]
  },
  {
    id: "heuristic-7",
    name: "7. Flexibility and Efficiency of Use",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Flexible processes can be carried out in different ways, so that people can pick whichever method works for them.",
    uxTakeaway: "Support both novices & pros. Incorporate flexible speed pathways so advanced users work incredibly fast, while keeping default layouts beginner-friendly.",
    text: "Flexible processes can be carried out in different ways, so that people can pick whichever method works for them.",
    example: "Allow entry-level users to edit documents via traditional dropdown menus, while power users employ instant system keyboard hotkeys (Cmd+C, Cmd+V).",
    keyPoints: [
      "Flexible processes can be carried out in different ways.",
      "People can pick whichever method works best for them.",
      "Cater to both novice and experienced power users simultaneously."
    ]
  },
  {
    id: "heuristic-8",
    name: "8. Aesthetic and Minimalist Design",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Interfaces should not contain information that is irrelevant or rarely needed.",
    uxTakeaway: "Keep screens clutter-free. Display only what is necessary. Extra decorations and words compete for visual focus, decreasing product readability.",
    text: "Interfaces should not contain information that is irrelevant or rarely needed.",
    example: "Search engines strip away widgets, side banners, and side links to keep users focused on their queries.",
    keyPoints: [
      "Interfaces should not contain irrelevant or rarely needed information.",
      "Every extra element dilutes the visibility of primary content.",
      "Use whitespace and clean typography to highlight priority workflows."
    ]
  },
  {
    id: "heuristic-9",
    name: "9. Help Users Recognize, Diagnose, and Recover from Errors",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
    uxTakeaway: "Explain the fix plainly. Write error messages in simple human language. Define the exact issue and suggest an immediate button or path to fix it.",
    text: "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
    example: "Say 'Invalid file size. Files must stay under 5MB' rather than displaying cryptic 'Unexpected Error Code: 4018'.",
    keyPoints: [
      "Express error messages in plain language without cryptic error codes.",
      "Precisely indicate the problem and highlight the affected field.",
      "Constructively suggest a concrete solution to recover immediately."
    ]
  },
  {
    id: "heuristic-10",
    name: "10. Help and Documentation",
    category: "heuristics",
    categoryLabel: "10 Heuristics",
    stage: "10 Heuristics",
    whatIsIt: "It's best if the system doesn't need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.",
    uxTakeaway: "Make guides searchable. Provide contextual, easy-to-search support files. Ensure information is localized to help users resolve problems instantly.",
    text: "It's best if the system doesn't need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.",
    example: "Add a small floating help bubble adjacent to complex checkout form entries, resolving confusion on-site.",
    keyPoints: [
      "Best if the system requires no additional explanation.",
      "Provide documentation when necessary to help users complete tasks.",
      "Ensure help is easily searchable, task-focused, and concise."
    ]
  },

  // ==========================================
  // 3. THE WCAG POUR FRAMEWORK & ACCESSIBILITY (From Image 1)
  // ==========================================
  {
    id: "wcag-perceivable",
    name: "1. Perceivable",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "POUR",
    whatIsIt: "Users must be able to recognize and ingest information through their active senses. Content cannot be invisible to all of their senses.",
    whyImportant: "Ensures users with visual or auditory impairments can absorb digital content through alternative sensory modes.",
    text: "Users must be able to recognize and ingest information through their active senses. Content cannot be invisible to all of their senses.",
    example: "Text Alternatives (alt text) for screen readers, video captions/transcripts, resizable text, and high contrast ratio (at least 4.5:1).",
    keyPoints: [
      "Text Alternatives: Provide alt text for non-text content (images, videos).",
      "Time-based Media: Offer captions for videos and transcripts for audio.",
      "Adaptable: Allow content to be presented in different ways (e.g., resizing text).",
      "Distinguishable: Ensure good contrast and clear fonts for easy readability."
    ]
  },
  {
    id: "wcag-operable",
    name: "2. Operable",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "POUR",
    whatIsIt: "Users must be able to mechanically navigate and control all user interface actions without mouse-only barriers.",
    whyImportant: "Guarantees that people with motor disabilities, tremors, or keyboard-only navigators can operate every interactive component.",
    text: "Users must be able to mechanically navigate and control all user interface actions without mouse-only barriers.",
    example: "Keyboard accessibility for all links/buttons, adjustable transaction timers, no seizure flashes (>3/sec), and clear focus outlines.",
    keyPoints: [
      "Keyboard Accessibility: Ensure all functionality is accessible via keyboard.",
      "Enough Time: Give users enough time for interactions (e.g., time limits should be adjustable).",
      "Seizures: Avoid elements that could trigger seizures (e.g., flashing lights).",
      "Navigable: Provide clear navigation with visible links and logical structure."
    ]
  },
  {
    id: "wcag-understandable",
    name: "3. Understandable",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "POUR",
    whatIsIt: "Users must be able to comprehend the language, actions, and layout patterns of the interface.",
    whyImportant: "Prevents disorientation and cognitive strain, enabling users of all backgrounds and abilities to complete workflows smoothly.",
    text: "Users must be able to comprehend the language, actions, and layout patterns of the interface.",
    example: "Straightforward readable text explaining jargon, consistent navigation menus across all subpages, and step-by-step form error assistance.",
    keyPoints: [
      "Readable Text: Use clear language and define jargon.",
      "Predictable: Ensure consistent and expected UI behavior.",
      "Input Assistance: Provide error messages with helpful corrections for forms."
    ]
  },
  {
    id: "wcag-robust",
    name: "4. Robust",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "POUR",
    whatIsIt: "The system must stay compatible with diverse devices, browsers, and assistive tools as technology updates.",
    whyImportant: "Semantic, standardized markup ensures current and future assistive tools (screen readers, braille displays) parse the page accurately.",
    text: "The system must stay compatible with diverse devices, browsers, and assistive tools as technology updates.",
    example: "Standardized electrical outlets accept plugs from any manufacturer; clean semantic HTML ensures screen readers process pages correctly.",
    keyPoints: [
      "Compatibility: Ensure content works across different browsers and assistive tech.",
      "Error-Free Code: Use clean, semantic HTML/CSS/JS for consistent interpretation."
    ]
  },
  {
    id: "wcag-level-a",
    name: "1. Level A (Minimum)",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "Criteria",
    whatIsIt: "Critical requirements that must be met for accessibility. If a site doesn't meet Level A, it's considered unusable by many users with disabilities.",
    whyImportant: "The absolute baseline tier. Without Level A conformance, users relying on assistive technologies are completely blocked from the website.",
    text: "Critical requirements that must be met for accessibility. If a site doesn't meet Level A, it's considered unusable by many users with disabilities.",
    example: "Example: Text alternatives for images.",
    keyPoints: [
      "Critical requirements that must be met for accessibility.",
      "If a site doesn't meet Level A, it's considered unusable by many users with disabilities.",
      "Baseline: Text alternatives for images, basic keyboard navigation."
    ]
  },
  {
    id: "wcag-level-aa",
    name: "2. Level AA (Mid-range)",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "Criteria",
    whatIsIt: "Important requirements that address common accessibility barriers. Most websites should aim to meet Level AA.",
    whyImportant: "Level AA is the globally recognized legal benchmark adopted by international legislation (ADA, Section 508, EU Web Accessibility Directive).",
    text: "Important requirements that address common accessibility barriers. Most websites should aim to meet Level AA.",
    example: "Example: Text contrast ratio of 4.5:1 for normal text.",
    keyPoints: [
      "Important requirements that address common accessibility barriers.",
      "Most websites should aim to meet Level AA (industry & legal standard).",
      "Mandates 4.5:1 text contrast ratio for normal text and clear visual focus outlines."
    ]
  },
  {
    id: "wcag-level-aaa",
    name: "3. Level AAA (Highest)",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "Criteria",
    whatIsIt: "Enhanced accessibility features for the most complex or challenging needs. Meeting AAA is optional and difficult to achieve for most websites.",
    whyImportant: "Provides comprehensive digital independence for people with profound, severe, or combined sensory and physical disabilities.",
    text: "Enhanced accessibility features for the most complex or challenging needs. Meeting AAA is optional and difficult to achieve for most websites.",
    example: "Example: Sign language interpretation for video content.",
    keyPoints: [
      "Enhanced accessibility features for the most complex or challenging needs.",
      "Meeting AAA is optional and difficult to achieve for most websites.",
      "Mandates 7:1 contrast ratio and sign language interpretation for video content."
    ]
  },
  {
    id: "wcag-legal-compliance",
    name: "Legal Compliance",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "Importance",
    whatIsIt: "Many countries have laws that require digital accessibility (e.g., ADA in the U.S., Equality Act in the UK, EU Directive on Web Accessibility). Following WCAG guidelines helps ensure compliance.",
    uxTakeaway: "Design and audit for WCAG 2.1 AA from the onset to mitigate costly accessibility lawsuits and maintain regulatory compliance.",
    text: "Many countries have laws that require digital accessibility. Following WCAG guidelines helps ensure legal compliance.",
    example: "Compliance with ADA Title III and EU Web Accessibility Directive protects organisations from civil litigation and public boycotts.",
    keyPoints: [
      "Many countries have laws that require digital accessibility (ADA, Equality Act, EU Directive).",
      "Following WCAG guidelines helps ensure compliance and avoid severe legal exposure.",
      "Required for public sector, government, education, and enterprise vendor procurement."
    ]
  },
  {
    id: "wcag-inclusive-design",
    name: "Inclusive Design",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "Importance",
    whatIsIt: "By adhering to WCAG, websites and apps become accessible to people with various disabilities, ensuring that everyone has equal access to information and services.",
    uxTakeaway: "Accessibility empowers all humans with digital independence. Inclusive products never leave any user behind.",
    text: "By adhering to WCAG, websites and apps become accessible to people with various disabilities, ensuring equal access.",
    example: "Screen reader support, closed captions, and keyboard navigation give users with permanent or situational disabilities equal digital access.",
    keyPoints: [
      "By adhering to WCAG, websites and apps become accessible to people with various disabilities.",
      "Ensures that everyone has equal access to information, educational resources, and digital services.",
      "Treats accessibility as a fundamental human right in the modern software landscape."
    ]
  },
  {
    id: "wcag-improved-usability",
    name: "Improved Usability",
    category: "wcag",
    categoryLabel: "WCAG Accessibility",
    stage: "Importance",
    whatIsIt: "Accessibility improvements often enhance the overall user experience, making interfaces more intuitive for all users, not just those with disabilities.",
    uxTakeaway: "Accessible design is simply great design. High contrast, clean typographic hierarchies, and clear feedback make apps faster for everyone.",
    text: "Accessibility improvements often enhance the overall user experience, making interfaces more intuitive for all users.",
    example: "Subtitles originally developed for hearing-impaired users are used by over 80% of mobile users commuting in noisy environments.",
    keyPoints: [
      "Accessibility improvements often enhance the overall user experience.",
      "Makes interfaces more intuitive, responsive, and readable for all users, not just those with disabilities.",
      "High contrast, descriptive alt text, and logical tab sequences benefit all visitors."
    ]
  },

  // ==========================================
  // 4. DESIGN METHODOLOGIES (30 Notes Total)
  // ==========================================

  // --- Design Thinking Process (18 Notes - From UX Design Process Guide) ---
  {
    id: "dt-overview",
    name: "Design Thinking: 5-Stage Framework",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "Quick Reference",
    stageGoal: "Understand users' needs, identify real problems, explore solutions, make them tangible, and validate with real people in an iterative loop.",
    whatIsIt: "A 5-stage human-centered, non-linear problem-solving framework consisting of: 1. Empathize, 2. Define, 3. Ideate, 4. Prototype, and 5. Test.",
    keyPoints: [
      "Empathize = Understand the user.",
      "Define = Understand the problem.",
      "Ideate = Find possible solutions.",
      "Prototype = Make the solutions tangible.",
      "Test = Check whether the solutions work."
    ],
    whyImportant: "UX design is not strictly linear. After testing, you discover new problems and return to Define, Ideate, or Prototype. This continuous improvement is called iterative design.",
    text: "A 5-stage human-centered framework: Empathize &rarr; Define &rarr; Ideate &rarr; Prototype &rarr; Test. It is non-linear and iterative—testing observations continuously feed back to refine earlier stages.",
    example: "Testing an ordering flow reveals checkout confusion, looping designers back to redefine the problem and prototype a simplified guest checkout.",
    exampleBullets: [
      "Stage 1: Empathize &rarr; Uncover why users abandon carts.",
      "Stage 2: Define &rarr; Formulate problem: 'High fees and slow forms cause drop-off'.",
      "Stage 3: Ideate &rarr; Brainstorm 1-click payments and transparent fees.",
      "Stage 4: Prototype &rarr; Build clickable wireframes.",
      "Stage 5: Test &rarr; Validate with 5 users and iterate on feedback."
    ]
  },
  {
    id: "dt-stakeholder-interview",
    name: "Stakeholder Interview",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "1. Empathize",
    stageGoal: "Understand users' needs, behaviors, motivations, frustrations, and expectations before designing a product.",
    whatIsIt: "An interview conducted with people who have an interest in or influence over the product.",
    keyPoints: [
      "Business Owners: Overall vision, revenue targets, and ROI.",
      "Product Managers: Feature roadmaps, priorities, and project milestones.",
      "Developers: Technical limitations, APIs, and infrastructure constraints.",
      "Marketing Teams: Target demographics and brand positioning.",
      "Customer Support Teams: Frequent user pain points and support tickets.",
      "Project Managers: Delivery scope, timeline, and resource allocation."
    ],
    whyImportant: "To understand business objectives, project expectations, technical limitations, and product requirements before wireframing.",
    text: "Interviews conducted with business owners, PMs, developers, marketing, and support to align project goals, technical constraints, and customer expectations.",
    example: "While designing a food delivery application, you interview the business owner and discover:",
    exampleBullets: [
      "The business wants to increase online orders.",
      "Customers frequently abandon their carts.",
      "Delivery tracking is an important customer expectation.",
      "The company wants to reduce customer support calls."
    ]
  },
  {
    id: "dt-qualitative-research",
    name: "Qualitative User Research",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "1. Empathize",
    stageGoal: "Collect information directly from users to understand their behaviors, needs, problems, and expectations.",
    whatIsIt: "Research that focuses on understanding WHY users behave in a particular way. It explores users' opinions, feelings, motivations, and experiences.",
    keyPoints: [
      "User Interviews: Having direct 1-on-1 conversations with users.",
      "Focus Groups: Discussing product concepts with a small group of users.",
      "Contextual Inquiry: Observing users in their actual environment.",
      "Field Studies: Studying users in their natural surroundings.",
      "Diary Studies: Asking users to record their experiences over time."
    ],
    whyImportant: "Reveals the deeper human motivations and emotional friction behind user behaviors that analytics data cannot explain.",
    text: "Qualitative research focuses on understanding WHY users behave in a particular way by exploring opinions, feelings, motivations, and live experiences.",
    example: "You ask users: 'Why do you abandon your food delivery cart?' Users respond:",
    exampleBullets: [
      "Delivery charges are too high.",
      "Checkout requires too many steps.",
      "Delivery time is unclear."
    ]
  },
  {
    id: "dt-quantitative-research",
    name: "Quantitative User Research",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "1. Empathize",
    stageGoal: "Collect measurable numerical evidence to quantify the scale of user problems.",
    whatIsIt: "Research that focuses on understanding WHAT users do and HOW MANY users do it by collecting measurable numerical data.",
    keyPoints: [
      "Online Surveys & Questionnaires: Scalable multiple-choice user feedback.",
      "Website Analytics & Usage Statistics: Traffic, session duration, and click maps.",
      "Conversion Rate Analysis: Percentage of users completing key milestones.",
      "Funnel Analysis: Tracking drop-off at every step of multi-page workflows.",
      "Difference: Qualitative understands why; Quantitative measures what and how often."
    ],
    whyImportant: "Provides statistical proof of user drop-offs to prioritize high-impact design fixes with stakeholders.",
    text: "Quantitative research collects measurable numerical data to discover WHAT users do and HOW MANY do it, providing statistical proof of issues.",
    example: "Analytics tracking reveals:",
    exampleBullets: [
      "65% of all users abandon checkout.",
      "40% leave because of delivery charges.",
      "25% leave during account registration.",
      "20% leave because of payment issues."
    ]
  },
  {
    id: "dt-competitive-swot",
    name: "Competitive Analysis / SWOT",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "1. Empathize",
    stageGoal: "Benchmark industry rivals to uncover proven patterns and strategic opportunities.",
    whatIsIt: "Studying competing products to understand their strengths, weaknesses, features, and market opportunities.",
    keyPoints: [
      "What to Analyze: Features, Navigation & IA, UX, Visual Design, Pricing, Customer Reviews, USPs.",
      "Strengths: Internal advantages of a product.",
      "Weaknesses: Internal limitations of a product.",
      "Opportunities: External possibilities for improvement.",
      "Threats: External risks or competition."
    ],
    whyImportant: "Locates market opportunities where competitors fall short so your product can stand out.",
    text: "Studying competing products across features, navigation IA, UX, visual design, and pricing using SWOT to discover strategic product opportunities.",
    example: "For a food delivery application, you compare Swiggy, Zomato, and your proposed product:",
    exampleBullets: [
      "Competitors offer real-time tracking (Strength).",
      "Users complain about hidden delivery charges (Weakness).",
      "Opportunity: Design completely upfront transparent pricing to earn user trust."
    ]
  },
  {
    id: "dt-user-persona",
    name: "User Persona",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "2. Define",
    stageGoal: "Convert research findings into clear user problems and identify what needs to be solved.",
    whatIsIt: "A fictional representation of your target user based on actual user research. It helps designers understand who they are designing for.",
    keyPoints: [
      "Name and Profile: Realistic demographic archetype.",
      "Age & Occupation: Professional context and lifestyle.",
      "Background: Daily environment and tech comfort level.",
      "Goals & Needs: What the user is trying to accomplish.",
      "Frustrations (Pain Points): Specific blockers and annoyances.",
      "Behaviors & Motivations: Why they choose certain products."
    ],
    whyImportant: "It prevents designers from designing based only on personal assumptions and aligns the entire team around real user needs.",
    text: "A fictional representation of the target user based on actual user research (goals, needs, pain points, motivations) to guide design decisions.",
    example: "Ananya, 26, a working professional:",
    exampleBullets: [
      "Goals: Order food quickly, find affordable restaurants, track deliveries.",
      "Pain Points: Hidden charges, complicated checkout, unreliable delivery estimates.",
      "Needs: Transparent pricing, simple ordering, accurate tracking."
    ]
  },
  {
    id: "dt-empathy-mapping",
    name: "Empathy Mapping",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "2. Define",
    stageGoal: "Synthesize research to understand a user's emotional experience beyond surface statements.",
    whatIsIt: "An empathy map is a visualization tool used to understand a user's thoughts, feelings, actions, and words.",
    keyPoints: [
      "1. Says: What does the user verbally express?",
      "2. Thinks: What might the user be thinking internally?",
      "3. Does: What physical actions or workarounds does the user perform?",
      "4. Feels: What emotions (frustration, anxiety, excitement) does the user experience?",
      "Pains & Gains: Underlying user struggles vs desired emotional payoff."
    ],
    whyImportant: "It helps designers understand the user's experience beyond just what they verbally say, revealing latent unvoiced needs.",
    text: "A 4-quadrant visualization tool (Says, Thinks, Does, Feels, plus Pains & Gains) to deeply understand user emotions and motivations.",
    example: "Food Delivery App Empathy Map:",
    exampleBullets: [
      "Says: 'Delivery charges are too high.'",
      "Thinks: 'Am I paying too much?'",
      "Does: Compares prices across apps.",
      "Feels: Frustrated and uncertain."
    ]
  },
  {
    id: "dt-user-journey-mapping",
    name: "User Journey Mapping",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "2. Define",
    stageGoal: "Map the entire experience timeline to pinpoint exact points of user struggle.",
    whatIsIt: "A visual representation of the complete experience a user goes through while interacting with a product or service.",
    keyPoints: [
      "Journey Stages: Chronological phases of the user experience.",
      "User Actions: What the user physically does at each touchpoint.",
      "Touchpoints: Screens, notifications, hardware, and physical staff.",
      "Thoughts & Emotions: Emotional highs and lows throughout the journey.",
      "Pain Points: Friction points causing hesitation or abandonment.",
      "Opportunities: Actionable design ideas to fix friction."
    ],
    whyImportant: "It helps identify where users struggle and where the product experience needs urgent improvement.",
    text: "Visual representation of the complete experience a user goes through while interacting with a product or service, pinpointing friction points.",
    example: "Ordering Food Journey & Stage Pain Points:",
    exampleBullets: [
      "1. Discover: User opens the app &rarr; Pain point: Too many choices.",
      "2. Search: User finds a restaurant &rarr; Pain point: Poor filters.",
      "3. Select: User adds food to cart &rarr; Pain point: Unclear pricing.",
      "4. Checkout: User makes payment &rarr; Pain point: Too many steps.",
      "5. Delivery: User tracks the order &rarr; Pain point: Inaccurate updates."
    ]
  },
  {
    id: "dt-brainstorming",
    name: "Brainstorming",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "3. Ideate",
    stageGoal: "Generate, organize, and explore different ideas to solve the identified user problems rather than immediately choosing one.",
    whatIsIt: "A creative technique used to generate multiple ideas for solving a particular problem.",
    keyPoints: [
      "Crazy 8s: Sketch eight distinct ideas in eight minutes.",
      "Mind Mapping: Visually connect related ideas branching from a core theme.",
      "Brainwriting: Participants independently write ideas on cards and exchange.",
      "How Might We (HMW): Convert problems into positive opportunity questions."
    ],
    whyImportant: "It encourages creative thinking and prevents designers from settling prematurely on the first obvious solution.",
    text: "Creative techniques (Crazy 8s, Mind Mapping, Brainwriting, HMW) used to generate multiple ideas for solving a particular problem.",
    example: "Problem: Users abandon checkout because it takes too long. Possible solutions:",
    exampleBullets: [
      "Guest checkout option without account creation.",
      "One-click payment via saved default cards/UPI.",
      "Pre-saved multiple delivery addresses.",
      "Simplified 1-page checkout summary.",
      "Multiple localized digital payment options."
    ]
  },
  {
    id: "dt-card-sorting",
    name: "Card Sorting",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "3. Ideate",
    stageGoal: "Understand how users naturally organize information to build intuitive navigation.",
    whatIsIt: "A research method used to understand how users naturally organize and categorize information.",
    keyPoints: [
      "Open Card Sorting: Users create and label their own categories.",
      "Closed Card Sorting: Users organize cards into predefined categories.",
      "Hybrid Card Sorting: Users can use existing categories or create new ones."
    ],
    whyImportant: "It helps create intuitive navigation, menus, and information architecture that mirror users' natural mental models.",
    text: "A research method used to understand how users naturally organize and categorize information (Open, Closed, Hybrid).",
    example: "For a food delivery application, users organize items into:",
    exampleBullets: [
      "Pizza, Burger, Sandwich &rarr; Fast Food.",
      "Juice, Milkshake, Soft Drinks &rarr; Beverages.",
      "Cake, Ice Cream &rarr; Desserts."
    ]
  },
  {
    id: "dt-affinity-mapping",
    name: "Affinity Mapping",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "3. Ideate",
    stageGoal: "Transform scattered research observations into organized, meaningful design insights.",
    whatIsIt: "A technique used to organize large amounts of research observations into meaningful groups based on similarities.",
    keyPoints: [
      "1. Collect research observations from interviews and field tests.",
      "2. Write each observation on an individual sticky note.",
      "3. Group similar observations together.",
      "4. Identify common themes across clusters.",
      "5. Give each group a meaningful, actionable title."
    ],
    whyImportant: "It helps transform scattered research findings into meaningful, prioritized insights for the team.",
    text: "A technique used to organize large amounts of research observations into meaningful groups based on similarities.",
    example: "User research findings sorted into actionable clusters:",
    exampleBullets: [
      "Findings: Delivery charges expensive, hidden fees appear at checkout, discounts hard to find, checkout too long.",
      "Group 1: Pricing Issues.",
      "Group 2: Discount Discovery.",
      "Group 3: Checkout Problems."
    ]
  },
  {
    id: "dt-task-flow",
    name: "Task Flow",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "3. Ideate",
    stageGoal: "Map the linear steps required to complete one specific task and remove unnecessary actions.",
    whatIsIt: "A task flow represents the steps a user follows to complete one specific task. It focuses on a single goal and the sequence of actions required.",
    keyPoints: [
      "Focuses on a single goal.",
      "Linear progression without branching or decisions.",
      "Identifies the minimum required screens.",
      "Removes unnecessary steps."
    ],
    whyImportant: "It helps designers understand the steps required to complete a task and remove unnecessary actions.",
    text: "A task flow represents the linear steps a user follows to complete one specific task without branches or decisions.",
    example: "Ordering Food Task Flow (Linear 6 Steps):",
    exampleBullets: [
      "Open App &rarr; Search Restaurant &rarr; Select Food &rarr; Add to Cart &rarr; Checkout &rarr; Order Confirmed."
    ]
  },
  {
    id: "dt-user-flow",
    name: "User Flow",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "3. Ideate",
    stageGoal: "Map complete decision points, branches, and alternative pathways across the product.",
    whatIsIt: "A user flow is a visual representation of the different paths users can take while interacting with a product. Unlike task flows, user flows include decisions, branches, and alternative paths.",
    keyPoints: [
      "Includes multiple decisions and branches.",
      "Visualizes alternative user pathways.",
      "Covers edge cases and error handling.",
      "Maps end-to-end user navigation."
    ],
    whyImportant: "It helps designers understand navigation, decision points, and different user scenarios before designing screens.",
    text: "A visual representation of the different paths, decisions, branches, and alternative flows users can take.",
    example: "Food Delivery Checkout User Flow:",
    exampleBullets: [
      "1. User adds food to cart & proceeds to checkout.",
      "2. Is the user logged in? &rarr; Yes: Continue to payment / No: Login or guest checkout.",
      "3. Select payment method.",
      "4. Payment successful? &rarr; Yes: Order confirmation / No: Retry payment."
    ]
  },
  {
    id: "dt-information-architecture",
    name: "Information Architecture (IA)",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "3. Ideate",
    stageGoal: "Structure digital content so users can navigate and locate items without confusion.",
    whatIsIt: "The process of organizing and structuring information within a digital product so users can easily find what they need.",
    keyPoints: [
      "Content Organization: Structuring data into logical groups.",
      "Hierarchy: Levels of depth from main screens to sub-items.",
      "Navigation: Menus, bottom bars, and contextual links.",
      "Categorization: Segmenting items into clear buckets.",
      "Labeling: Writing intuitive, recognizable terminology.",
      "Search Structure: Filters, sorting, and predictive search."
    ],
    whyImportant: "It ensures information is structured logically and users can navigate the product without confusion.",
    text: "The process of organizing and structuring information within a digital product so users can easily find what they need.",
    example: "Food Delivery App IA Structure:",
    exampleBullets: [
      "Home &rarr; Restaurants, Orders, Profile.",
      "Restaurants &rarr; Categories, Food Items, Restaurant Details.",
      "Orders &rarr; Active Tracking, Past Orders, Invoices."
    ]
  },
  {
    id: "dt-wireframing",
    name: "Wireframe (Low-Fi & Mid-Fi)",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "4. Prototype",
    stageGoal: "Convert ideas into visual and interactive representations of the product before actual development.",
    whatIsIt: "A wireframe is a basic structural representation of a website or application screen. It focuses on layout, content placement, and functionality rather than visual styling.",
    keyPoints: [
      "Low-Fidelity: Simple, rough sketch of the interface with basic shapes, boxes, and placeholder text. Purpose: Quickly explore layout ideas.",
      "Mid-Fidelity: More detailed representation with accurate spacing, realistic copy, defined UI components, basic typography, and grayscale colors.",
      "Purpose of Mid-Fi: Refine the layout and establish interface structure before visual styling."
    ],
    whyImportant: "Enables designers to test layouts, spacing, and content placement rapidly without wasting time on visual polish.",
    text: "A wireframe is a basic structural representation of a screen focusing on layout, content placement, and functionality rather than visual styling.",
    example: "Food Delivery Wireframe Levels:",
    exampleBullets: [
      "Low-Fidelity: A rough sketch showing where the logo, search bar, restaurant list, and navigation bar will appear.",
      "Mid-Fidelity: Grayscale screen with accurate 16px margins, card dimensions, button sizes, and typography hierarchy."
    ]
  },
  {
    id: "dt-visual-design",
    name: "Visual Design (UI Design)",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "4. Prototype",
    stageGoal: "Apply visual styling, brand aesthetics, and UI systems to turn wireframes into finished products.",
    whatIsIt: "The process of applying the visual appearance and styling to the interface. This is where the wireframe becomes a polished user interface.",
    keyPoints: [
      "Main Elements: Colors, Typography, Icons, Images, Buttons, Spacing, Layout, Shadows, Borders, Design System, UI Components.",
      "Design System: Maintaining consistency across buttons, badges, chips, and modals.",
      "Accessibility: High text contrast and legible font sizes."
    ],
    whyImportant: "Purpose: Create a visually appealing, consistent, and usable interface that builds brand trust and delight.",
    text: "The process of applying visual appearance and styling to the interface, where the wireframe becomes a polished user interface.",
    example: "Transforming grayscale food delivery wireframes with:",
    exampleBullets: [
      "Brand colors (warm appetite-inducing palette).",
      "High-resolution restaurant food photography.",
      "Styled tactile checkout buttons.",
      "Custom brand typography and consistent spacing.",
      "Designed navigation and status indicator components."
    ]
  },
  {
    id: "dt-usability-testing",
    name: "Usability Testing",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "5. Test",
    stageGoal: "Evaluate the design by observing real users interacting with it and identifying usability problems.",
    whatIsIt: "A research method where real users interact with a product or prototype while researchers observe their behavior. You give users specific tasks and evaluate how easily they complete them.",
    keyPoints: [
      "1. Moderated Testing: A researcher guides the session and asks questions.",
      "2. Unmoderated Testing: Users complete tasks independently on their own time.",
      "3. Remote Testing: Testing conducted online via screen sharing.",
      "4. In-person Testing: Testing conducted face-to-face in a usability lab.",
      "5. A/B Testing: Comparing two design variations to evaluate which performs better."
    ],
    whyImportant: "Testing helps determine whether your design actually solves users' real problems or creates unintended friction.",
    text: "A research method where real users interact with a product or prototype while researchers observe their behavior.",
    example: "You give a participant this task: 'Order a chicken biryani from your preferred restaurant.' You observe:",
    exampleBullets: [
      "Can they find the restaurant?",
      "Can they locate the food item?",
      "Can they add it to their cart?",
      "Can they complete checkout?",
      "Do they face any confusion?"
    ]
  },
  {
    id: "dt-usability-metrics-iteration",
    name: "Usability Metrics & Iteration",
    category: "design-thinking",
    categoryLabel: "Design Thinking",
    stage: "5. Test",
    stageGoal: "Measure task performance objectively and execute the continuous improvement iteration cycle.",
    whatIsIt: "Evaluating usability metrics to determine success and driving the continuous improvement cycle called iteration.",
    keyPoints: [
      "Task Success Rate: Percentage of users who complete a task.",
      "Time on Task: Time taken to complete a task.",
      "Error Rate: Number of mistakes users make.",
      "Task Completion Rate: How successfully tasks are completed.",
      "User Satisfaction: How satisfied users are with the experience.",
      "The 6-Step Iteration Loop: 1. Identify usability problems &rarr; 2. Analyze user feedback &rarr; 3. Prioritize issues &rarr; 4. Improve the design &rarr; 5. Create an updated prototype &rarr; 6. Test again."
    ],
    whyImportant: "Continuous improvement through iteration transforms raw usability test feedback into an optimized, polished product.",
    text: "Measuring usability metrics (success rate, time on task, error rate) and running the 6-step iteration loop to continually refine design.",
    example: "Food Delivery Iteration Result:",
    exampleBullets: [
      "1. Usability test finds users struggle with hidden delivery charges.",
      "2. Team prioritizes fee transparency and redesigns cart summary with clear itemized breakdown.",
      "3. Retest proves cart completion increases by 35% and user satisfaction scores rise to 4.8/5."
    ]
  },

  // --- Double Diamond Process (24 Notes - From Double Diamond UX Design Guide PDF) ---
  {
    id: "dd-framework-overview",
    name: "Double Diamond: 4-Stage UX Process",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "Quick Reference",
    stageGoal: "Understand user problems, identify the right problem to solve, explore possible solutions, and develop an effective product or service.",
    whatIsIt: "A design methodology developed by the UK Design Council. It shapes problem-solving through two alternating types of thinking: Divergent Thinking (exploring many possibilities) and Convergent Thinking (narrowing down to the most appropriate direction).",
    keyPoints: [
      "1. Discover (Divergent): Understand the users and explore the problems.",
      "2. Define (Convergent): Analyze research and identify the actual problem.",
      "3. Develop (Divergent): Generate ideas and create possible solutions.",
      "4. Deliver (Convergent): Test, refine, and finalize the best solution.",
      "First Diamond = Problem Space (Discover & Define). Focuses on identifying the right problem.",
      "Second Diamond = Solution Space (Develop & Deliver). Focuses on developing the right solution."
    ],
    whyImportant: "The process is iterative: designers can revisit an earlier stage when new evidence emerges. It guarantees you design the right thing before designing things right.",
    text: "A 4-stage framework developed by the UK Design Council alternating between divergent exploration and convergent execution across the Problem Space and Solution Space.",
    example: "Double Diamond Lifecycle for Food Delivery:",
    exampleBullets: [
      "Discover (Divergent): Research why users drop out of ordering.",
      "Define (Convergent): Identify that hidden checkout fees cause 60% abandonment.",
      "Develop (Divergent): Brainstorm transparent pricing models & 1-click checkout.",
      "Deliver (Convergent): Test prototypes, validate usability, and launch."
    ]
  },
  {
    id: "dd-discover-stakeholder",
    name: "Stakeholder Interview",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "1. Discover",
    stageGoal: "Understand users' needs, behaviors, motivations, expectations, and challenges before deciding what problem needs to be solved.",
    whatIsIt: "A structured conversation with people who have an interest in, or influence over, a product or project.",
    keyPoints: [
      "Stakeholders include: Business owners, Product managers, Developers, Marketing teams, Customer support teams, Project managers, and Clients.",
      "Why do we do it: Understand business objectives, project requirements, target audience, budget and timelines, technical limitations, business challenges, and expected outcomes.",
      "Output: Stakeholder interview notes, business requirements, and project goals."
    ],
    whyImportant: "Stakeholder findings reveal the business perspective and serve as starting points for further research, not proof of what users actually need.",
    text: "Structured interviews with business owners, PMs, developers, and support teams to align business objectives, constraints, and success criteria.",
    example: "Food Delivery Application: During a stakeholder interview, a business owner explains:",
    exampleBullets: [
      "The company wants to increase online orders.",
      "Customers frequently abandon their shopping carts.",
      "Delivery-related complaints are increasing.",
      "The company wants to improve customer retention."
    ]
  },
  {
    id: "dd-discover-user-research-qual",
    name: "Qualitative User Research",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "1. Discover",
    stageGoal: "Understand WHY users behave in a particular way by exploring thoughts, emotions, motivations, and live experiences.",
    whatIsIt: "Research that focuses on understanding the underlying human reasons, feelings, and emotional friction behind user actions.",
    keyPoints: [
      "1. User Interviews: Conversations with users about their needs and experiences.",
      "2. Focus Groups: Discussions with a small group about a product or topic.",
      "3. Contextual Inquiry: Observing and interviewing users in their actual environment.",
      "4. Field Studies: Studying people as they perform real-world activities.",
      "5. Diary Studies: Asking users to document experiences over time.",
      "Output: Interview notes, observations, and qualitative research insights."
    ],
    whyImportant: "Reveals qualitative depth that analytics data cannot explain—uncovering hidden frustrations and unspoken user expectations.",
    text: "Qualitative research explores why users behave in a particular way through interviews, focus groups, contextual inquiries, field studies, and diary studies.",
    example: "You interview frequent food delivery users: 'Why do you sometimes leave an order without completing payment?' Users explain:",
    exampleBullets: [
      "Delivery charges are too expensive.",
      "Checkout requires too many steps.",
      "Delivery time is unclear.",
      "Payment methods are limited."
    ]
  },
  {
    id: "dd-discover-user-research-quant",
    name: "Quantitative User Research",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "1. Discover",
    stageGoal: "Measure WHAT users do, HOW MANY users do it, and HOW OFTEN it happens using numerical data.",
    whatIsIt: "Research using measurable numerical information to identify the statistical scale and frequency of usability problems.",
    keyPoints: [
      "Common methods: Online surveys, Structured questionnaires, Website & mobile app analytics, Conversion-rate analysis, Funnel analysis, Behavioral data.",
      "Qualitative vs. Quantitative: Qual explains WHY users behave & focuses on experiences; Quant measures WHAT users do & focuses on numbers.",
      "Qual uses interviews/observations (rich descriptive insights); Quant uses surveys/analytics (measurable findings).",
      "Output: Survey results, analytics reports, and measurable behavioral findings."
    ],
    whyImportant: "Identifies the statistical scale and drop-off points of usability problems to guide data-driven design priorities.",
    text: "Quantitative research measures user behavior at scale using analytics funnels, conversion rates, surveys, and structured behavioral metrics.",
    example: "Food Delivery Analytics Report:",
    exampleBullets: [
      "60% of users abandon checkout.",
      "35% exit after seeing delivery charges.",
      "20% leave during account registration.",
      "15% experience payment failures."
    ]
  },
  {
    id: "dd-discover-competitor-swot",
    name: "Competitor Analysis & SWOT",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "1. Discover",
    stageGoal: "Study existing products that solve similar problems to understand established patterns, weaknesses, and market opportunities.",
    whatIsIt: "A systematic evaluation of competing products across features, information architecture, visual design, pricing, checkout, and customer sentiment.",
    keyPoints: [
      "What designers analyze: Product features, navigation & IA, UX & visual design, pricing & checkout, customer reviews & satisfaction, unique value.",
      "SWOT Analysis: 1. Strengths (internal product advantages), 2. Weaknesses (internal product limitations), 3. Opportunities (external possibilities for improvement), 4. Threats (external risks and competition).",
      "Output: Competitor comparison, feature analysis, SWOT analysis, and opportunity areas."
    ],
    whyImportant: "Prevents reinventing the wheel and uncovers strategic gaps where your product can provide superior user value.",
    text: "Analyzing competing services and conducting SWOT analysis to identify established UX patterns, competitive weaknesses, and differentiators.",
    example: "Comparing Swiggy, Zomato, and other delivery apps:",
    exampleBullets: [
      "Strength: Simplified 1-click ordering flow.",
      "Weakness: Limited restaurant coverage in suburban areas.",
      "Opportunity: Transparent fee breakdown before the checkout screen.",
      "Threat: Well-established market competitors with existing loyalty subscriptions."
    ]
  },
  {
    id: "dd-discover-field-observation",
    name: "Field Observation & Deliverables",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "1. Discover",
    stageGoal: "Watch users perform relevant activities in their natural environment and synthesize initial findings for the Define stage.",
    whatIsIt: "Directly observing people in real-world contexts to uncover behaviors, unarticulated habits, and friction points that users forget to mention in interviews.",
    keyPoints: [
      "Why is it important: What people do in context often differs from what they say they do in interviews.",
      "Activities: Collect observations, organize survey/analytics, highlight recurring issues, record unexpected patterns.",
      "Discover Deliverables: Stakeholder interview report, Qual/Quant research data, Competitor & SWOT report, Field observation notes, Initial user insights."
    ],
    whyImportant: "Contextual observation grounds the entire design process in real-world behavioral truth rather than sanitized boardroom assumptions.",
    text: "Field observation involves studying users in natural environments, revealing habits and friction points they omit in formal interviews.",
    example: "Observing employees ordering lunch during 30-minute office breaks:",
    exampleBullets: [
      "Users are in an extreme hurry and repeat orders from familiar restaurants.",
      "They actively compare delivery time estimates across apps.",
      "They strongly prefer apps that require the fewest checkout steps."
    ]
  },
  {
    id: "dd-define-affinity-mapping",
    name: "Affinity Mapping",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Analyze research findings, identify the most important user problems, and create a clear problem definition.",
    whatIsIt: "A method that organizes large amounts of research information into thematic groups based on similarities to reveal recurring patterns.",
    keyPoints: [
      "How does it work: 1. Collect observations from research &rarr; 2. Write each on a sticky note &rarr; 3. Group similar observations together &rarr; 4. Identify recurring patterns &rarr; 5. Give each group a clear name &rarr; 6. Derive meaningful insights.",
      "Output: Affinity map and key research themes."
    ],
    whyImportant: "Turns scattered, qualitative research notes into structured, actionable themes that guide design decisions.",
    text: "Affinity mapping clusters research findings into thematic groups to identify major friction clusters and user pain points.",
    example: "Food Delivery Research Affinity Groups:",
    exampleBullets: [
      "Pricing Issues: High delivery fees, unexpected service charges.",
      "Discount Discovery: Promo codes and restaurant offers are difficult to find.",
      "Checkout Problems: Too many repetitive steps to complete an order.",
      "Payment Problems: Limited payment methods and frequent gateway timeouts."
    ]
  },
  {
    id: "dd-define-user-persona",
    name: "User Persona",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Create a research-based representation of an important target user group to communicate who the team is designing for.",
    whatIsIt: "A semi-fictional archetype based on empirical user research that embodies the goals, needs, behaviors, and pain points of target users.",
    keyPoints: [
      "What does a persona contain: Name and profile, age and occupation, background, goals and needs, frustrations and pain points, behaviors and motivations, relevant tech usage.",
      "Why is it important: Personas keep design decisions connected to target users' real needs instead of team assumptions.",
      "Output: User persona document."
    ],
    whyImportant: "Provides a reliable human benchmark that aligns cross-functional engineering, design, and product decisions.",
    text: "Research-grounded persona communicating user demographics, core motivations, technical habits, and everyday frustrations.",
    example: "Persona: Ananya, Age 26, Working Professional",
    exampleBullets: [
      "Goals: Order food quickly during work breaks, find affordable meals, track delivery accurately.",
      "Pain Points: Unexpected delivery charges at checkout, complicated multi-step ordering, unreliable delivery estimates.",
      "Needs: Transparent upfront pricing, simple 2-click ordering, accurate real-time GPS tracking."
    ]
  },
  {
    id: "dd-define-empathy-mapping",
    name: "Empathy Mapping",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Establish deep shared understanding of what users say, think, do, and feel during their product experience.",
    whatIsIt: "A collaborative visualization tool that maps four emotional quadrants: Says, Thinks, Does, and Feels (along with pains and gains).",
    keyPoints: [
      "1. Says: What the user verbally expresses during interviews.",
      "2. Thinks: What the user may be thinking but not saying aloud.",
      "3. Does: The observable physical actions the user performs.",
      "4. Feels: The underlying emotions the user experiences.",
      "Output: Empathy map document."
    ],
    whyImportant: "Reveals the emotional discrepancies between what users say and what they actually feel or do in practice.",
    text: "Empathy mapping reveals both practical behaviors and unspoken emotional feelings across the user's journey.",
    example: "Food Delivery App Empathy Quadrants:",
    exampleBullets: [
      "Says: 'The delivery fee is too high.'",
      "Thinks: 'Is there a cheaper alternative on another platform?'",
      "Does: Compares prices across multiple food delivery apps simultaneously.",
      "Feels: Frustrated, suspicious, and uncertain about final pricing."
    ]
  },
  {
    id: "dd-define-journey-mapping",
    name: "User Journey Mapping",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Visualize the end-to-end experience a user has across a series of interactions with a product or service.",
    whatIsIt: "A chronological timeline tracking journey stages, user touchpoints, emotional highs/lows, friction points, and design opportunities.",
    keyPoints: [
      "Typical components: Journey stages, user actions and touchpoints, thoughts and emotions, pain points, and design opportunities.",
      "Output: User journey map."
    ],
    whyImportant: "Shows where users struggle throughout the entire service ecosystem, rather than examining isolated screens in a vacuum.",
    text: "User journey mapping visualizes chronological steps, emotional state changes, touchpoint obstacles, and design opportunities.",
    example: "Food Delivery Journey Stages & Opportunities:",
    exampleBullets: [
      "Discover: Opens app &rarr; Pain: Too many choices &rarr; Opportunity: Personalized suggestions.",
      "Search: Finds restaurant &rarr; Pain: Poor filters &rarr; Opportunity: Dietary & price filter chips.",
      "Select: Adds food &rarr; Pain: Unclear pricing &rarr; Opportunity: Transparent cost breakdown in cart.",
      "Checkout: Makes payment &rarr; Pain: Too many steps &rarr; Opportunity: 1-click simplified checkout.",
      "Delivery: Tracks order &rarr; Pain: Inaccurate updates &rarr; Opportunity: Real-time driver map tracking."
    ]
  },
  {
    id: "dd-define-problem-statement",
    name: "Problem Statement",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Clearly describe the core difficulty a target user faces, what they need, and why it matters.",
    whatIsIt: "A concise, actionable articulation of the user problem grounded in research findings and user needs.",
    keyPoints: [
      "Common format: [User] needs a way to [achieve a goal] because [reason or insight].",
      "Why is it important: A clear problem statement focuses the team on a specific, high-impact user need.",
      "Output: Problem statement document."
    ],
    whyImportant: "Prevents scope creep and keeps the team from leaping into premature solutions before agreeing on the core problem.",
    text: "A structured statement defining who the user is, what objective they need to achieve, and the core insight behind their struggle.",
    example: "Food Delivery Problem Statement:",
    exampleBullets: [
      "User: Busy working professionals.",
      "Need: Need a faster and more transparent food ordering process.",
      "Insight: Because complicated checkout steps and unexpected charges cause frustration and abandoned orders."
    ]
  },
  {
    id: "dd-define-hmw",
    name: "How Might We (HMW)",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Transform defined user problems into open-ended design opportunity questions to fuel creative ideation.",
    whatIsIt: "A framing technique that turns negative user pain points into optimistic, generative questions without dictating specific solutions.",
    keyPoints: [
      "Transforms a user problem into an open-ended design opportunity question.",
      "Guides ideation without prematurely selecting a rigid solution.",
      "Output: How Might We opportunity question list."
    ],
    whyImportant: "Bridges the convergent Define stage to the divergent Develop stage, opening up multiple possible solution angles.",
    text: "How Might We reframes pain points into optimistic prompts that inspire creative brainstorming across multidisciplinary teams.",
    example: "Problem: Users abandon orders because checkout is complicated. HMW Questions:",
    exampleBullets: [
      "How might we make checkout faster?",
      "How might we remove unnecessary steps?",
      "How might we display delivery costs earlier?",
      "How might we help returning customers reorder quickly?",
      "How might we simplify payment selection?"
    ]
  },
  {
    id: "dd-define-prioritization",
    name: "Problem Prioritization & Brief",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "2. Define",
    stageGoal: "Evaluate and prioritize which problems should be addressed first when time, budget, and engineering resources are limited.",
    whatIsIt: "A systematic scoring process evaluating problems against impact and feasibility criteria to finalize the formal project design brief.",
    keyPoints: [
      "Common criteria: 1. User impact, 2. Frequency and severity, 3. Business value, 4. Technical feasibility, 5. Implementation effort, 6. Urgency.",
      "Define Deliverables: Affinity map, user personas & empathy maps, journey maps, problem statement, HMW questions, prioritized problem list, and final design brief."
    ],
    whyImportant: "Guarantees the product team focuses limited engineering capacity on solving the highest-value user friction.",
    text: "Prioritizing problems based on user impact, frequency, business ROI, and feasibility to produce the final design brief.",
    example: "Prioritization Decision: If evidence shows checkout complexity causes 60% drop-off while dark mode is an aesthetic preference:",
    exampleBullets: [
      "Checkout redesign receives top priority (high impact, high business value).",
      "Theme customization is deferred to a future roadmap cycle."
    ]
  },
  {
    id: "dd-develop-brainstorming",
    name: "Brainstorming & SCAMPER",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Generate multiple ideas, explore alternatives, and create prototypes that address the defined problems.",
    whatIsIt: "A creative divergence process using structured ideation techniques to explore many possible ways to solve the problem before settling on one.",
    keyPoints: [
      "1. Crazy 8s: Sketch eight distinct ideas in eight minutes.",
      "2. Mind Mapping: Visually connect related ideas.",
      "3. Brainwriting: Team members generate ideas independently on paper.",
      "4. Group Brainstorming: Collaboratively generate solutions.",
      "5. SCAMPER: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, and Reverse/Rearrange.",
      "Output: Brainstorming notes and initial concepts."
    ],
    whyImportant: "Prevents designers from settling on the first obvious idea without exploring more effective creative alternatives.",
    text: "Generating a broad spectrum of conceptual solutions using Crazy 8s, Mind Mapping, Brainwriting, and the SCAMPER framework.",
    example: "Problem: Users abandon checkout because it takes too long. Brainstormed ideas:",
    exampleBullets: [
      "Guest checkout (no mandatory account creation).",
      "One-click instant payment with biometric verification.",
      "Saved delivery addresses with automatic GPS detection.",
      "Multiple local payment options (UPI, digital wallets, cash).",
      "Quick 1-tap reorder from order history.",
      "Automatic coupon and discount application at cart."
    ]
  },
  {
    id: "dd-develop-card-sorting",
    name: "Card Sorting",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Understand how users naturally group information and name categories to design intuitive menus and navigation.",
    whatIsIt: "A user research method where participants organize information topics into logical categories that make sense to them.",
    keyPoints: [
      "1. Open Card Sorting: Users organize items into categories and name the categories themselves.",
      "2. Closed Card Sorting: Users sort items into predefined, fixed categories.",
      "3. Hybrid Card Sorting: Users sort into existing categories but can also create new ones.",
      "Output: Card sorting findings and categorization patterns."
    ],
    whyImportant: "Creates navigation structures that mirror users' real-world mental models rather than an internal corporate database schema.",
    text: "Card sorting reveals how users naturally group and label product categories to build intuitive navigation taxonomies.",
    example: "Food Delivery Menu Sorting:",
    exampleBullets: [
      "Users group Pizza, Burger, and Sandwich under 'Fast Food'.",
      "Users group Juice and Milkshake under 'Beverages'.",
      "Users group Cake and Ice Cream under 'Desserts'."
    ]
  },
  {
    id: "dd-develop-ia",
    name: "Information Architecture (IA)",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Organize and structure information so users can find features and content easily with minimal cognitive effort.",
    whatIsIt: "The structural blueprint of content, categorization, hierarchy, and navigation throughout an application or digital service.",
    keyPoints: [
      "Main components: Content organization, visual hierarchy, navigation systems, categorization & labeling, and search structure.",
      "Output: Information architecture diagram or sitemap."
    ],
    whyImportant: "Provides a logical structural framework so users never feel lost, confused, or disoriented within the digital service.",
    text: "Information architecture blueprints the hierarchy, categorization, content organization, and search pathways across the product.",
    example: "Food Delivery App IA Structure:",
    exampleBullets: [
      "Home &rarr; Restaurants &rarr; Food Categories &rarr; Restaurant Details &rarr; Food Items.",
      "Orders &rarr; Active Tracking, Past Orders, Repeat Order.",
      "Profile &rarr; Saved Addresses, Payment Methods, Help & Support."
    ]
  },
  {
    id: "dd-develop-task-flow",
    name: "Task Flow",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Map the typical sequence of steps needed to complete a specific user goal without complex branching logic.",
    whatIsIt: "A linear diagram displaying the step-by-step path a user takes from initiating a task to its successful completion.",
    keyPoints: [
      "Focuses on a single specific user objective.",
      "Helps simplify user actions and eliminate unnecessary friction steps.",
      "Output: Task flow diagram."
    ],
    whyImportant: "Clarifies the core functional path before introducing conditional rules and edge cases.",
    text: "Task flow maps the sequential linear actions required to accomplish a specific user goal efficiently.",
    example: "Ordering Food Task Flow:",
    exampleBullets: [
      "Open App &rarr; Search Restaurant &rarr; Select Food &rarr; Add to Cart &rarr; Checkout &rarr; Order Confirmed."
    ]
  },
  {
    id: "dd-develop-user-flow",
    name: "User Flow",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Map alternative paths, decisions, edge cases, and branches that users might take when interacting with a product.",
    whatIsIt: "A comprehensive flow diagram capturing user decision nodes, authentication states, system responses, and error recovery routes.",
    keyPoints: [
      "Represents alternative paths, decisions, and branches.",
      "Captures decision points and possible scenarios beyond one ideal sequence.",
      "Output: User flow diagram."
    ],
    whyImportant: "Ensures no user gets trapped in dead ends or unhandled error states during complex digital interactions.",
    text: "User flows map out decision nodes, edge cases, authentication checks, error retries, and conditional branches.",
    example: "Food Delivery Checkout User Flow:",
    exampleBullets: [
      "1. User adds food to cart.",
      "2. User proceeds to checkout.",
      "3. If logged in, proceed to payment; otherwise, login or use guest checkout.",
      "4. User selects payment method.",
      "5. If payment succeeds, show order confirmation; otherwise, offer a retry."
    ]
  },
  {
    id: "dd-develop-wireframing",
    name: "Wireframing (Low-Fi & Mid-Fi)",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Create visual representations focusing on layout, content structure, hierarchy, and functionality before detailed styling.",
    whatIsIt: "Schematic structural layouts that establish spatial organization, content positioning, and interactive controls without color or styling distractions.",
    keyPoints: [
      "1. Low-Fidelity Wireframes: Rough sketches, basic shapes, placeholder text, minimal detail. Purpose: Explore alternative layouts quickly.",
      "2. Mid-Fidelity Wireframes: More accurate spacing, realistic copy, defined UI components, clear hierarchy, grayscale styling. Purpose: Refine interface structure before final styling.",
      "Output: Low- and mid-fidelity wireframes."
    ],
    whyImportant: "Enables rapid structural experimentation and team alignment without wasting time on visual polish or pixel-perfection.",
    text: "Wireframes define spatial hierarchy, content blocks, and interactive touchpoints from rapid paper sketches to precise grayscale digital layouts.",
    example: "Food Delivery Wireframe Progression:",
    exampleBullets: [
      "Low-Fi: Paper sketches testing 3 different bottom-navigation vs top-search bar layout concepts.",
      "Mid-Fi: Digital grayscale screens detailing restaurant card proportions, coupon inputs, and checkout total summaries."
    ]
  },
  {
    id: "dd-develop-ui-design",
    name: "Visual Design (UI Design)",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Transform wireframes into consistent, polished, accessible, and branded user interfaces.",
    whatIsIt: "The detailed visual design phase where typography, colors, iconography, component libraries, and visual hierarchy are applied.",
    keyPoints: [
      "Key elements: Colors & typography, icons & photography, buttons & navigation, spacing & layout grids, borders & shadows, reusable component libraries.",
      "Why is it important: Supports clarity, consistency, WCAG accessibility, and effortless ease of use.",
      "Output: High-fidelity UI designs and a centralized design system."
    ],
    whyImportant: "Creates an emotionally engaging, trustworthy, and accessible product aesthetic that reinforces brand identity.",
    text: "Visual design applies typography, color palettes, spacing grids, and component libraries to turn wireframes into production-ready interfaces.",
    example: "Food Delivery Visual Design Application:",
    exampleBullets: [
      "Replacing grayscale placeholders with high-resolution food photography.",
      "Applying warm appetite-inducing primary CTA colors with AAA contrast ratios.",
      "Standardizing reusable food item cards, quantity steppers, and price pills."
    ]
  },
  {
    id: "dd-develop-prototyping-testing",
    name: "Prototyping & Early Concept Testing",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "3. Develop",
    stageGoal: "Demonstrate how the product behaves and test alternative design concepts with users before engineering builds.",
    whatIsIt: "Building interactive, clickable prototypes (in Figma) and conducting comparative concept tests to evaluate user comprehension.",
    keyPoints: [
      "Interactive Prototyping: Connects screens with button clicks, transitions, dropdowns, forms, and microinteractions.",
      "Early Concept Testing: Evaluates proposed solutions (e.g., multi-step checkout vs. single-page accordion) with users before finalizing.",
      "Develop Deliverables: Brainstorming ideas, card sorting findings, IA sitemap, task/user flows, wireframes, UI screens, design system, interactive prototypes, and concept test findings."
    ],
    whyImportant: "Validates usability and interaction design before writing costly production code, dramatically reducing engineering rework.",
    text: "Clickable prototypes demonstrate real app behavior, allowing designers to conduct comparative concept tests and refine interaction flows early.",
    example: "Concept Testing A/B Checkout Prototypes:",
    exampleBullets: [
      "Design A: Multi-step checkout wizard across 3 separate screens.",
      "Design B: Single-page checkout with collapsible sections.",
      "Result: Users complete Design B 40% faster with fewer navigation mistakes."
    ]
  },
  {
    id: "dd-deliver-usability-testing",
    name: "Usability Testing & Metrics",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "4. Deliver",
    stageGoal: "Evaluate solutions, identify usability problems, refine the design, and prepare the most effective solution for launch.",
    whatIsIt: "Observing real users as they perform specific tasks with the prototype to identify points of confusion, hesitation, and error.",
    keyPoints: [
      "Testing types: 1. Moderated (researcher guides), 2. Unmoderated (independent), 3. Remote (online), 4. In-Person (face to face), 5. Comparative (evaluating alternatives), plus A/B testing.",
      "Important usability metrics: Task Success Rate (% completing task), Time on Task, Error Rate (frequency of mistakes), Misclick Rate, User Satisfaction (CSAT/SUS), Perceived Task Difficulty.",
      "Output: Usability testing report."
    ],
    whyImportant: "Empirically reveals where the design succeeds or fails with real humans, replacing subjective internal opinions with objective data.",
    text: "Observing users perform representative tasks while measuring success rates, time on task, error frequency, and satisfaction scores.",
    example: "Food Delivery Usability Test Task: 'Order a chicken biryani from your preferred restaurant and complete checkout.'",
    exampleBullets: [
      "Can users find the restaurant and food item?",
      "Can they add it to the cart and apply discounts?",
      "Do they understand the total price breakdown?",
      "Can they complete payment without error or confusion?"
    ]
  },
  {
    id: "dd-deliver-feedback-iteration",
    name: "Feedback Analysis & Design Iteration",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "4. Deliver",
    stageGoal: "Organize testing observations, identify friction patterns, prioritize issues, and iteratively improve the design.",
    whatIsIt: "The continuous refinement loop of transforming usability test findings into prioritized design revisions and re-testing them.",
    keyPoints: [
      "Common activities: Collect feedback, review session recordings, identify recurring issues, assess severity, prioritize improvements, recommend changes.",
      "The 5-Step Iteration Sequence: 1. Problem (identify user struggle) &rarr; 2. Improvement (devise clearer UI) &rarr; 3. Update (revise screen & prototype) &rarr; 4. Retest (test with users again) &rarr; 5. Validate (compare with baseline).",
      "Output: Usability findings, prioritized issue list, updated screens, and improved prototype."
    ],
    whyImportant: "Design is inherently iterative. Testing exposes flaws; disciplined iteration systematically cures them before release.",
    text: "Analyzing test feedback, prioritizing issues by severity, and executing the 5-step iteration sequence to polish user flows.",
    example: "Food Delivery Iteration Loop in Action:",
    exampleBullets: [
      "1. Problem: Users struggle to find the checkout button on mobile.",
      "2. Improvement: Make the button a sticky bottom-docked element with high-contrast text.",
      "3. Update: Revise Figma components and interactive prototype.",
      "4. Retest: Ask 5 new participants to order biryani.",
      "5. Validate: 100% of participants spot the button within 2 seconds."
    ]
  },
  {
    id: "dd-deliver-accessibility-handoff",
    name: "Accessibility, Handoff & Launch",
    category: "double-diamond",
    categoryLabel: "Double Diamond",
    stage: "4. Deliver",
    stageGoal: "Ensure WCAG accessibility compliance, share specifications with developers, and monitor post-launch performance.",
    whatIsIt: "Auditing accessibility standards, packaging development-ready design tokens and Figma files, and establishing continuous improvement tracking.",
    keyPoints: [
      "Accessibility audit areas: Text readability, color contrast, button & touch target sizes (min 48px), keyboard navigation, screen reader compatibility, clear form labels, error messages.",
      "Design handoff materials: Final UI screens, reusable components & design system, color/typography tokens, spacing guidelines, component states, exportable assets, design specs.",
      "Post-launch activities: Monitor analytics, gather feedback, track usability issues, measure conversion & retention, review support complaints, release updated designs.",
      "Deliver Deliverables: Usability report, prioritized issues, accessibility audit, final UI screens & prototype, design system & handoff package, launch feedback & future roadmap."
    ],
    whyImportant: "Ensures flawless technical implementation without ambiguity, while establishing a continuous improvement pipeline for long-term product success.",
    text: "Auditing accessibility, providing developers with structured design tokens and Figma specs, and monitoring conversion analytics post-launch.",
    example: "Food Delivery Delivery & Launch Evolution:",
    exampleBullets: [
      "Accessibility: Increased item description contrast to 4.8:1 and enlarged quantity steppers to 48px touch targets.",
      "Handoff: Engineers receive annotated Figma specs with auto-layout parameters and interaction states.",
      "Post-Launch: Checkout conversion increases by 28% in month 1; analytics track and resolve international card payment drop-offs."
    ]
  },

  // --- Human Centered Design (HCD) (3 Notes) ---
  {
    id: "hcd-overview",
    name: "Human Centered Design (HCD)",
    category: "hcd",
    categoryLabel: "Human Centered Design",
    stage: "Core Philosophy",
    stageGoal: "Design systems tailored to natural human physical ergonomics, cognitive limits, and emotional contexts.",
    whatIsIt: "An ISO 9241-210 standard design philosophy placing human ergonomics, physical contexts, and emotional needs at the core of every development decision.",
    keyPoints: [
      "Active user involvement throughout all project phases.",
      "Ergonomic, physical, and psychological context awareness.",
      "Continuous iterative refinement driven by empirical evaluation."
    ],
    whyImportant: "Creates products that fit natural human capabilities rather than forcing humans to adapt to technology.",
    text: "An ISO 9241-210 standard design philosophy placing human ergonomics, physical contexts, and emotional needs at the core of every development decision.",
    example: "OXO Good Grips Kitchen Tools:",
    exampleBullets: [
      "Designed thick, non-slip rubber handles to help arthritic cooks.",
      "Unintentionally created an ergonomic universal hit loved by all cooks worldwide."
    ]
  },
  {
    id: "hcd-triad",
    name: "The HCD Balance Triad",
    category: "hcd",
    categoryLabel: "Human Centered Design",
    stage: "Evaluation Triad",
    stageGoal: "Harmonize human desirability, technical feasibility, and commercial business viability.",
    whatIsIt: "Sustainable solutions must intersect Desirability (what humans love), Feasibility (what tech can build), and Viability (what business can sustain).",
    keyPoints: [
      "Desirability: Does this solve a genuine human pain point?",
      "Feasibility: Can our tech stack realistically deliver this reliably?",
      "Viability: Does this contribute to a sustainable, profitable business model?"
    ],
    whyImportant: "A product failing any single pillar either gets abandoned by users, fails to ship, or goes bankrupt.",
    text: "Sustainable solutions must intersect Desirability (what humans love), Feasibility (what tech can build), and Viability (what business can sustain).",
    example: "Apple Pay Mobile Payments:",
    exampleBullets: [
      "Desirability: Biometric FaceID made checkout effortless for consumers.",
      "Feasibility: Standard NFC chips enabled compatibility with card terminals.",
      "Viability: Seamless bank integration created profitable transaction margins."
    ]
  },
  {
    id: "hcd-inclusive",
    name: "Universal & Inclusive Design",
    category: "hcd",
    categoryLabel: "Human Centered Design",
    stage: "Inclusivity",
    stageGoal: "Build for extreme user constraints to create cleaner experiences for everyone.",
    whatIsIt: "Designing for users with situational, temporary, or permanent limitations consistently yields cleaner, more intuitive systems for every user.",
    keyPoints: [
      "Permanent Limitations: Users with motor, visual, or hearing disabilities.",
      "Temporary Limitations: Users with an injured arm or eye surgery recovery.",
      "Situational Limitations: Users carrying groceries, driving, or in bright sun."
    ],
    whyImportant: "Inclusive design elevates overall usability, accessibility compliance, and market reach.",
    text: "Designing for users with situational, temporary, or permanent limitations consistently yields cleaner, more intuitive systems for every user.",
    example: "Closed Video Captioning:",
    exampleBullets: [
      "Originally engineered for the deaf community.",
      "Now utilized by over 80% of mobile users on noisy commutes without headphones."
    ]
  },

  // --- Google Design Sprint (3 Notes) ---
  {
    id: "gds-overview",
    name: "Google Design Sprint",
    category: "design-sprint",
    categoryLabel: "Google Design Sprint",
    stage: "Sprint Overview",
    stageGoal: "Answer critical business questions through rapid prototyping and testing with 5 customers in 5 days.",
    whatIsIt: "A 5-day time-boxed framework created by Jake Knapp at Google Ventures to validate high-stakes product ideas and test prototypes with 5 users without coding.",
    keyPoints: [
      "Compressed timeline: Go from problem to tested prototype in 40 hours.",
      "Zero code: Build realistic interactive facade prototypes using Figma.",
      "Direct user testing: Validate hypotheses on Friday with 5 real users."
    ],
    whyImportant: "Answers critical business questions in days rather than spending months in development.",
    text: "A 5-day time-boxed framework created by Jake Knapp at Google Ventures to validate high-stakes product ideas and test prototypes with 5 users without coding.",
    example: "Slack Team Onboarding:",
    exampleBullets: [
      "Validated their cross-platform team onboarding walkthrough in a single 5-day sprint.",
      "Resolved critical drop-offs prior to public rollout."
    ]
  },
  {
    id: "gds-schedule",
    name: "The 5-Day Sprint Schedule",
    category: "design-sprint",
    categoryLabel: "Google Design Sprint",
    stage: "Sprint Rhythm",
    stageGoal: "Execute the structured Monday-to-Friday schedule to move from inquiry to verified insight.",
    whatIsIt: "The 5-day structured sprint schedule moving from understanding to testing in 40 hours.",
    keyPoints: [
      "Monday: Map problem, interview internal experts, pick target.",
      "Tuesday: Sketch competing ideas using Crazy 8s.",
      "Wednesday: Decide the winning solution and construct a storyboard.",
      "Thursday: Build a realistic interactive facade prototype.",
      "Friday: Interview 5 target users and watch them test live."
    ],
    whyImportant: "Keeps cross-functional teams intensely focused without endless meetings.",
    text: "Mon: Map problem & pick target. Tue: Sketch competing ideas. Wed: Decide best direction. Thu: Build realistic prototype. Fri: Test with 5 users.",
    example: "Blue Bottle Coffee Online Store:",
    exampleBullets: [
      "Built a simulated online storefront in 4 days.",
      "Tested with 5 drinkers on Friday, proving customers needed flavor tags over bean origin details."
    ]
  },
  {
    id: "gds-decider-rule",
    name: "The 'Decider' & 5-User Rule",
    category: "design-sprint",
    categoryLabel: "Google Design Sprint",
    stage: "Sprint Rules",
    stageGoal: "Break political deadlock with a Decider and uncover 85% of usability flaws with 5 users.",
    whatIsIt: "Avoid endless debate by empowering a single designated Decider, and test with 5 representative users to uncover roughly 85% of core usability flaws.",
    keyPoints: [
      "The Decider: Senior leader who breaks ties and makes final directional calls.",
      "The 5-User Rule: Usability research proves testing with 5 users finds 85% of issues.",
      "Live Observation: Entire sprint team watches tests live from an adjacent room."
    ],
    whyImportant: "Eliminates endless political debate and delivers immediate empirical evidence.",
    text: "Avoid endless debate by empowering a single designated Decider, and test with 5 representative users to uncover roughly 85% of core usability flaws.",
    example: "Insurance Quote Flow Testing:",
    exampleBullets: [
      "Testing with 5 drivers proved that 4 abandoned the form when asked for VIN numbers upfront.",
      "Moved VIN input to the final step, cutting quote drop-offs by 50%."
    ]
  },

  // --- Lean UX (3 Notes) ---
  {
    id: "lean-overview",
    name: "Lean UX Framework",
    category: "lean-ux",
    categoryLabel: "Lean UX",
    stage: "Framework",
    stageGoal: "Replace heavy design documentation with rapid experiments and measurable user outcomes.",
    whatIsIt: "Pioneered by Jeff Gothelf, Lean UX applies Lean Startup thinking (Build &ndash; Measure &ndash; Learn) to design, replacing heavy spec docs with rapid experiments.",
    keyPoints: [
      "Outcomes over Deliverables: Measure user behavior changes, not document thickness.",
      "Collaborative Design: Designers, engineers, and PMs co-create from day one.",
      "Continuous Discovery: Research is an ongoing weekly rhythm, not a one-off phase."
    ],
    whyImportant: "Dramatically reduces waste and ensures the team only builds features users actually use.",
    text: "Pioneered by Jeff Gothelf, Lean UX applies Lean Startup thinking (Build &ndash; Measure &ndash; Learn) to design, replacing heavy spec docs with rapid experiments.",
    example: "Car Subscription Smoke Test:",
    exampleBullets: [
      "Instead of writing a 60-page spec for a new booking filter.",
      "Shipped a 1-day clickable test to measure genuine user interest."
    ]
  },
  {
    id: "lean-hypotheses",
    name: "Hypotheses Over Requirements",
    category: "lean-ux",
    categoryLabel: "Lean UX",
    stage: "Scientific Method",
    stageGoal: "Frame feature ideas as testable hypotheses backed by measurable behavioral signals.",
    whatIsIt: "Frame features as testable assumptions: 'We believe [outcome] will occur if [users] can achieve [action], proven when [metric] changes.'",
    keyPoints: [
      "Template: We believe [outcome] will occur if [users] can achieve [action] with [feature].",
      "Validation Criterion: Proven when we observe [measurable metric change].",
      "Pivot or Persevere: Iterate or discard features based on objective data."
    ],
    whyImportant: "Removes emotional bias and personal ego from product decision-making.",
    text: "Frame features as testable assumptions: 'We believe [outcome] will occur if [users] can achieve [action], proven when [metric] changes.'",
    example: "Subscription Pause Experiment:",
    exampleBullets: [
      "Hypothesis: 'We believe churn will drop 15% if subscribers can pause membership for 30 days.'",
      "Result: Validated when 400 members paused instead of cancelling."
    ]
  },
  {
    id: "lean-mvp-feedback",
    name: "MVP & Continuous Discovery",
    category: "lean-ux",
    categoryLabel: "Lean UX",
    stage: "Continuous Discovery",
    stageGoal: "Deploy the smallest viable experiment that produces empirical learning in production.",
    whatIsIt: "Deploy the minimum viable experiment that produces validated learning. Measure live behavioral telemetry in production rather than debating in conference rooms.",
    keyPoints: [
      "Smoke Tests: Fake-door buttons or landing pages testing demand before coding.",
      "Concierge MVPs: Manually fulfilling backend steps to test willingness to pay.",
      "Telemetry & Analytics: Real-time event tracking measuring actual behavior."
    ],
    whyImportant: "Discovers market truth in real production environments with minimal capital.",
    text: "Deploy the minimum viable experiment that produces validated learning. Measure live behavioral telemetry in production rather than debating in conference rooms.",
    example: "Dropbox Validation Video:",
    exampleBullets: [
      "Proved massive market demand with a 3-minute conceptual video demo.",
      "Collected 75,000 email signups overnight before building cloud sync servers."
    ]
  },

  // ==========================================
  // 4. ATTENTION HIJACKERS (8 Notes)
  // ==========================================
  {
    id: "color-priming",
    name: "Color Priming",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Colors affect emotions. Blue = trust. Red = urgency. UX uses this to direct feeling within 100ms.",
    example: "Banking apps use calm blue for trust, while flash sales use red to spark immediate action.",
  },
  {
    id: "fomo-triggers",
    name: "FOMO Triggers",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Limited-time offers. 'Only 3 left.' Triggers scarcity fear and impulse decision-making.",
    example: "Booking sites showing 'Only 2 rooms left at this price' with an active booking timer.",
  },
  {
    id: "anchoring-bias",
    name: "Anchoring Bias",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Show high prices first so the next one looks like a deal. The first number seen becomes the baseline.",
    example: "A pricing page showing an $89/mo Premium plan first makes the $29/mo Standard plan feel like a bargain.",
  },
  {
    id: "chunking",
    name: "Chunking",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Breaking info into digestible pieces. Working memory can only hold 4 or 5 pieces of information at once.",
    example: "Splitting a 16-digit credit card into groups of 4 (4242 •••• •••• 4242) makes verification effortless.",
  },
  {
    id: "visual-hierarchy",
    name: "Visual Hierarchy",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Big, bold, top = important. Our eyes follow predictable scanning patterns (F-patterns and Z-patterns).",
    example: "Large 40px headings paired with bold, brightly colored action buttons guide the eye immediately.",
  },
  {
    id: "serial-position-effect",
    name: "Serial Position Effect",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "First and last items get remembered best (combines Primacy Effect and Recency Effect).",
    example: "Placing 'Home' on the far left and 'Profile' or 'Cart' on the far right of mobile navigation bars.",
  },
  {
    id: "microcopy-nudges",
    name: "Microcopy Nudges",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Button text that pushes behavior: 'Yes, I want results' vs generic 'Submit'.",
    example: "Using 'Get My Free Recipe Guide' instead of a plain, uninspiring 'Submit' button.",
  },
  {
    id: "color-emotion-association",
    name: "Color-Emotion Association",
    category: "attention",
    categoryLabel: "Attention Hijackers",
    text: "Not just priming—culture matters. White = purity in West, mourning in East.",
    example: "In Asian financial markets, red represents market growth and good fortune, while green means decline.",
  },

  // ==========================================
  // 5. EMOTIONAL LEVERS (10 Notes)
  // ==========================================
  {
    id: "loss-aversion",
    name: "Loss Aversion",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "We fear losing more than we desire gaining. The pain of losing $50 hurts twice as much as the joy of winning $50.",
    example: "Reminding users before cancellation: 'You will forfeit your 30 earned reward points if you leave.'",
  },
  {
    id: "mirror-neurons",
    name: "Mirror Neurons Activation",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "Faces trigger empathy. Our brain's mirror neurons fire when seeing human faces, mirroring observed emotions.",
    example: "Donation and medical pages showing authentic human faces looking directly at the donation form.",
  },
  {
    id: "narrative-transportation",
    name: "Narrative Transportation",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "People immersed in a story change beliefs without noticing. Storytelling disarms analytical skepticism.",
    example: "Case studies structured as a customer journey: Problem faced &rarr; Breakthrough discovery &rarr; Happy outcome.",
  },
  {
    id: "social-proof",
    name: "Social Proof",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "'3,000 people already signed up.' Herd behavior drives safety in numbers during ambiguous decisions.",
    example: "Showing 'Joined by 10,000+ designers' or customer star ratings right beside sign-up forms.",
  },
  {
    id: "cognitive-dissonance",
    name: "Cognitive Dissonance",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "When users act against their values, they change beliefs to justify it. People hate internal contradiction.",
    example: "Post-purchase confirmation screens reassuring buyers: 'Great choice! You just saved 4 hours this week.'",
  },
  {
    id: "empathy-mapping",
    name: "Empathy Mapping",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "UX personas built from emotional pain points. Mapping what users Say, Think, Do, and Feel grounds design in real psychology.",
    example: "Uncovering that elderly users feel nervous about entering card numbers on mobile, leading to biometric touch pay.",
  },
  {
    id: "peak-end-rule",
    name: "Peak-End Rule",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "We judge experiences by peak moments and endings. People remember the most intense moment and the final step.",
    example: "Mailchimp's cheerful celebration high-five animation when an email campaign is successfully launched.",
  },
  {
    id: "emotional-contagion",
    name: "Emotional Contagion",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "The mood of content spreads to users. Visual tone, colors, and writing voice subconsciously transfer their mood.",
    example: "A meditation app using soothing forest green gradients and gentle phrasing to calm breathing.",
  },
  {
    id: "gratification-loops",
    name: "Gratification Loops",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "Dopamine hits from likes, rewards, swipes. Rewarding positive actions triggers dopamine and builds enjoyable product habits.",
    example: "Learn Leap educational app rewarding kids with celebratory audio chimes and star bursts upon solving a quiz.",
  },
  {
    id: "fear-of-regret",
    name: "Fear of Regret",
    category: "emotional",
    categoryLabel: "Emotional Levers",
    text: "Highlight what users might miss out on if they don't act. Anticipated regret prompts people to take positive action today.",
    example: "Travel packages reminding travelers: 'Flight prices for this weekend historically increase by 20% tonight.'",
  },

  // ==========================================
  // 6. COGNITIVE SHORTCUTS (8 Notes)
  // ==========================================
  {
    id: "heuristic-processing",
    name: "Heuristic Processing",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "Users make snap decisions. Design must align with instinct. People use quick mental shortcuts to act fast.",
    example: "Checkout payment fields styled to look like familiar physical credit cards with chip emblems.",
  },
  {
    id: "affordance",
    name: "Affordance",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "Buttons should look clickable. Physical appearance (shadows, rounded borders, elevation) communicates operation.",
    example: "Buttons with gentle drop shadows and hover animations that visibly press down when tapped.",
  },
  {
    id: "gestalt-principles",
    name: "Gestalt Principles",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "Our brain groups elements: proximity, similarity, closure. Items close together or sharing style are seen as unified.",
    example: "Keeping a label 4px away from its input box, and 24px away from the next question.",
  },
  {
    id: "default-bias",
    name: "Default Bias",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "People stick with the pre-selected option. Over 80% of users leave default settings unchanged.",
    example: "Pre-selecting 'Eco-Friendly Electric Vehicle' in EcoRide Rentals or pre-checking 'Standard Delivery'.",
  },
  {
    id: "confirmation-bias",
    name: "Confirmation Bias",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "Users look for info that agrees with what they already believe. People seek out proof that confirms expectations.",
    example: "Review filters with quick tags like 'Easy to clean' and 'Great battery life' letting buyers confirm questions.",
  },
  {
    id: "satisficing",
    name: "Satisficing",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "We choose the first good-enough option. Users pick the very first option that meets their basic threshold.",
    example: "Top-ranked search results receive over 70% of clicks because users stop scrolling as soon as an adequate option appears.",
  },
  {
    id: "cognitive-load-theory",
    name: "Cognitive Load Theory",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "Simpler interfaces reduce mental strain. Removing clutter leaves users with full mental energy for the primary task.",
    example: "Removing banners, extra links, and ads from checkout pages so users focus solely on paying.",
  },
  {
    id: "endowment-effect",
    name: "Endowment Effect",
    category: "cognitive",
    categoryLabel: "Cognitive Shortcuts",
    text: "People value things more once they own them (even virtually). Customization creates personal psychological attachment.",
    example: "3D car configurators where users choose paint color and wheels before clicking buy.",
  },

  // ==========================================
  // 7. IDENTITY SHAPERS (10 Notes)
  // ==========================================
  {
    id: "commitment-consistency",
    name: "Commitment Consistency",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Once we commit publicly, we stick to it. People have a strong drive to match actions with promises already made.",
    example: "Goal-tracking apps encouraging users to share their weekly goal with friends or workout partners.",
  },
  {
    id: "self-determination-theory",
    name: "Self-Determination Theory",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Tap into autonomy, competence, and relatedness. Motivation thrives when users feel capable and in control.",
    example: "Learning apps offering customizable learning paths (Autonomy) and skill milestone badges (Competence).",
  },
  {
    id: "digital-mirroring",
    name: "Digital Mirroring",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Use language/images that reflect the user's identity. Subculture reflection builds instant subconscious belonging.",
    example: "A creator portfolio tool displaying case studies and terminology tailored to freelance designers.",
  },
  {
    id: "avatars",
    name: "Avatars",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Users pour identity into digital representations. Customizable avatars act as personal digital stand-ins.",
    example: "Collaboration and gaming tools allowing users to personalize avatars, badges, and workspaces.",
  },
  {
    id: "reputation-scores",
    name: "Reputation Scores",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Social points = perceived self-worth. Visible points, badges, and status tiers motivate helpful contributions.",
    example: "GitHub contribution streak graphs and community forum reputation badges.",
  },
  {
    id: "feedback-loops",
    name: "Feedback Loops",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Behavior > data > feedback > behavior. Seeing real-time data about your habits empowers you to improve.",
    example: "Fitness bands showing step counts and sleep quality rings that encourage evening walks.",
  },
  {
    id: "personal-history-tracking",
    name: "Personal History Tracking",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "'You've been with us since 2022.' Celebrating the journey spent with a product creates emotional loyalty.",
    example: "Spotify Wrapped and year-in-review summaries that celebrate the user's unique music journey.",
  },
  {
    id: "first-person-language",
    name: "First-Person Language",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "'I want to improve' vs 'Help improve'. First-person pronouns make users feel personal ownership.",
    example: "Buttons reading 'Create My Account' consistently outperform 'Create Your Account' in conversion tests.",
  },
  {
    id: "behavioral-confirmation",
    name: "Behavioral Confirmation",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "UI nudges users to act in ways that reinforce identities. Positive labels inspire living up to the role.",
    example: "EcoRide Rentals highlighting 'Sustainable Traveler' status to encourage users to choose EV cars.",
  },
  {
    id: "ethical-dissonance",
    name: "Ethical Dissonance",
    category: "identity",
    categoryLabel: "Identity Shapers",
    text: "Subtle tension makes users reframe their behavior. Highlighting gaps between values and actions inspires change.",
    example: "Showing carbon emissions alongside flight options so travelers can choose lower-emission routes.",
  },

  // ==========================================
  // 8. TRUST MANIPULATION (10 Notes)
  // ==========================================
  {
    id: "security-cues",
    name: "Security Cues",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Padlocks, HTTPS—triggers safety perception. Visible security symbols ease anxiety during checkout.",
    example: "Placing a small padlock icon right beside the CVV card input with '256-Bit SSL Encrypted'.",
  },
  {
    id: "ux-writing-tone",
    name: "UX Writing Tone",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Warm, formal, technical? Tone builds trust. Consistent voice signals reliability and competence.",
    example: "Healthcare apps using warm clarity: 'Your doctor received your message and will reply today.'",
  },
  {
    id: "trust-badges",
    name: "Trust Badges",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "'As seen on Forbes' or 'Trusted by 100k+.' Third-party logos borrow credibility from respected institutions.",
    example: "Displaying partner logos, ISO certifications, and verified app store ratings on landing pages.",
  },
  {
    id: "transparency-illusion",
    name: "Transparency Illusion",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Give some info to appear honest. Showing fee breakdowns upfront builds deep trust and prevents abandonment.",
    example: "Showing exact taxes and delivery fees on the product page before the user clicks 'Proceed to Pay'.",
  },
  {
    id: "conversational-uis",
    name: "Conversational UIs",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Chatbots that feel like humans. Friendly back-and-forth dialogue makes self-service support feel approachable.",
    example: "Customer support assistants that ask clarifying questions with instant one-tap reply pills.",
  },
  {
    id: "reviews-as-legitimacy",
    name: "Reviews as Legitimacy",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Even fake ones work psychologically. Real reviews from past customers act as an instant vote of confidence.",
    example: "Displaying 4.8 / 5.0 star summaries with customer photos and verified purchase tags.",
  },
  {
    id: "professional-typography",
    name: "Professional Typography",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Fonts matter. Comic Sans breaks trust. Clean, well-spaced typography communicates technical rigor and authority.",
    example: "Modern grotesk fonts (Inter, Space Grotesk) with generous line heights and sharp contrast.",
  },
  {
    id: "speed-equals-competence",
    name: "Speed = Competence",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Fast load = reliable product. Sub-second response times subconsciously signal engineering excellence.",
    example: "Instant page transitions with skeleton loaders that give immediate visual feedback.",
  },
  {
    id: "permission-design",
    name: "Permission Design",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "Asking for permission makes brands feel ethical. Explaining WHY access is needed before prompts boosts consent.",
    example: "Showing a friendly card: 'Allow location to see nearby rental cars' before triggering the OS prompt.",
  },
  {
    id: "onboarding-trust-builders",
    name: "Onboarding Trust Builders",
    category: "trust",
    categoryLabel: "Trust Manipulation",
    text: "First experience = lasting impression. The first 60 seconds permanently anchors how quality is perceived.",
    example: "A 3-step welcome walkthrough that lets users accomplish an immediate win before asking for payment.",
  },
];

// Double Diamond Stage Section Groupings (as in the 17-page PDF study guide)
const DOUBLE_DIAMOND_SECTIONS = [
  {
    id: "Quick Reference",
    stageKey: "Quick Reference",
    mainHeading: "Double Diamond: 4-Stage UX Process & Framework",
    subtitle: "UK Design Council Methodology • Divergent & Convergent Thinking • Problem Space & Solution Space",
    goal: "Understand user problems, identify the right problem to solve, explore possible solutions, and develop an effective product or service.",
    badge: "Framework & Core Principles",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
  {
    id: "1. Discover",
    stageKey: "1. Discover",
    mainHeading: "1. DISCOVER — Understand the Users and Their Problems",
    subtitle: "The First Diamond • Problem Space • Divergent Thinking (Explore Many Possibilities)",
    goal: "Understand users' needs, behaviors, motivations, expectations, and challenges before deciding what problem needs to be solved.",
    badge: "Diamond 1 — Divergent (Explore)",
    badgeColor: "border-sky-500/30 text-sky-300 bg-sky-500/10",
  },
  {
    id: "2. Define",
    stageKey: "2. Define",
    mainHeading: "2. DEFINE — Identify the Actual Problem",
    subtitle: "The First Diamond • Problem Space • Convergent Thinking (Focus on Key Direction)",
    goal: "Analyze research findings, identify the most important user problems, and create a clear problem definition.",
    badge: "Diamond 1 — Convergent (Focus)",
    badgeColor: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10",
  },
  {
    id: "3. Develop",
    stageKey: "3. Develop",
    mainHeading: "3. DEVELOP — Explore and Create Solutions",
    subtitle: "The Second Diamond • Solution Space • Divergent Thinking (Explore Many Solutions)",
    goal: "Generate multiple ideas, explore alternatives, and create prototypes that address the defined problems.",
    badge: "Diamond 2 — Divergent (Explore)",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
  },
  {
    id: "4. Deliver",
    stageKey: "4. Deliver",
    mainHeading: "4. DELIVER — Test, Refine, and Finalize the Solution",
    subtitle: "The Second Diamond • Solution Space • Convergent Thinking (Focus & Execute)",
    goal: "Evaluate solutions, identify usability problems, refine the design, and prepare the most effective solution for implementation or launch.",
    badge: "Diamond 2 — Convergent (Focus)",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
];

// Design Thinking Stage Section Groupings (as in the 12-page PDF study guide)
const DESIGN_THINKING_SECTIONS = [
  {
    id: "Quick Reference",
    stageKey: "Quick Reference",
    mainHeading: "Design Thinking: 5-Stage Human-Centered Framework",
    subtitle: "Non-Linear Problem-Solving Framework • Continuous Iterative Loop",
    goal: "Understand users' needs, identify real problems, explore solutions, make them tangible, and validate with real people in an iterative loop.",
    badge: "Framework Overview",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
  {
    id: "1. Empathize",
    stageKey: "1. Empathize",
    mainHeading: "1. EMPATHIZE — Understand the User",
    subtitle: "Empathy Stage • User & Stakeholder Research",
    goal: "Understand users' needs, behaviors, motivations, expectations, and challenges before deciding what problem needs to be solved.",
    badge: "Stage 1",
    badgeColor: "border-sky-500/30 text-sky-300 bg-sky-500/10",
  },
  {
    id: "2. Define",
    stageKey: "2. Define",
    mainHeading: "2. DEFINE — Understand the Problem",
    subtitle: "Define Stage • Research Synthesis & Problem Definition",
    goal: "Analyze research findings, identify the most important user problems, and create a clear problem definition.",
    badge: "Stage 2",
    badgeColor: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10",
  },
  {
    id: "3. Ideate",
    stageKey: "3. Ideate",
    mainHeading: "3. IDEATE — Find Possible Solutions",
    subtitle: "Ideation Stage • Brainstorming & Information Architecture",
    goal: "Generate multiple ideas, explore alternatives, and create user flows that address the defined problems.",
    badge: "Stage 3",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
  },
  {
    id: "4. Prototype",
    stageKey: "4. Prototype",
    mainHeading: "4. PROTOTYPE — Make Solutions Tangible",
    subtitle: "Prototyping Stage • Wireframing to UI Design Systems",
    goal: "Build low-fidelity and high-fidelity representations of proposed solutions to validate user flows.",
    badge: "Stage 4",
    badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10",
  },
  {
    id: "5. Test",
    stageKey: "5. Test",
    mainHeading: "5. TEST — Check Whether the Solutions Work",
    subtitle: "Testing Stage • Usability Metrics & 6-Step Iteration Loop",
    goal: "Evaluate solutions, identify usability problems, and iteratively refine the design with real user feedback.",
    badge: "Stage 5",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
];

// UX Persona Framework Section Grouping (from Persona Reference Guide)
const PERSONA_SECTIONS = [
  {
    id: "Persona",
    stageKey: "Persona",
    mainHeading: "UX Persona Framework & 21 Persona Types",
    subtitle: "Research-based representations of target audiences, customers, and organizational stakeholders",
    badge: "User Research & Strategy",
    badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10",
  },
];

// UI Design Fundamentals Section Grouping (from Visual Design Reference Guide)
const UI_FUNDAMENTALS_SECTIONS = [
  {
    id: "UI Fundamentals",
    stageKey: "UI Design Fundamentals",
    mainHeading: "UI Design Fundamentals",
    subtitle: "Essential Principles for Visual Design, Typography, Color Systems, Spacing, and Component Architecture",
    goal: "Master color theory, typographical scale, 8pt spatial rhythm, visual hierarchy, and atomic design systems to create polished, accessible, and scalable digital interfaces.",
    badge: "Visual Design System",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
  },
];

// Key Principles of UX Section Grouping (from User Experience Design Guide)
const KEY_PRINCIPLES_SECTIONS = [
  {
    id: "Key Principles",
    stageKey: "Key Principles",
    mainHeading: "The Key Principles of User Experience (UX) Design",
    subtitle: "10 Foundational Principles for Designing Intuitive, Accessible, and High-Performance Digital Experiences",
    goal: "Ground digital design in human needs, seamless usability, systematic consistency, clear feedback, and emotional resonance.",
    badge: "Foundational UX Guide",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
];

// WCAG Section Groupings (as in the WCAG POUR reference)
const WCAG_SECTIONS = [
  {
    id: "POUR",
    stageKey: "POUR",
    mainHeading: "1. The POUR Principles (Four Foundation Pillars of WCAG)",
    subtitle: "Web Content Accessibility Guidelines (WCAG) • Four Core Principles for Digital Accessibility",
    goal: "The guidelines are organized around four principles—POUR—which ensure that content is Perceivable, Operable, Understandable, and Robust for people with diverse sensory, motor, and cognitive abilities.",
    badge: "POUR Principles",
    badgeColor: "border-sky-500/30 text-sky-300 bg-sky-500/10",
  },
  {
    id: "Criteria",
    stageKey: "Criteria",
    mainHeading: "2. WCAG Success Criteria Levels",
    subtitle: "Three Conformance Tiers in WCAG 2.1 • Level A, Level AA, and Level AAA",
    goal: "The WCAG 2.1 guidelines are divided into three levels of conformance to establish testable benchmarks across baseline, industry standard, and specialized accessibility needs.",
    badge: "Conformance Tiers",
    badgeColor: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10",
  },
  {
    id: "Importance",
    stageKey: "Importance",
    mainHeading: "3. Why WCAG is Important",
    subtitle: "Three Essential Value Pillars: Legal Compliance, Inclusive Design, and Improved Usability",
    goal: "Adhere to international accessibility mandates, ensure universal digital access, and universally elevate product usability.",
    badge: "Core Rationale",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
  },
];

// 10 Usability Heuristics Section Grouping (from NN/g - nngroup.com)
const HEURISTICS_SECTIONS = [
  {
    id: "10 Heuristics",
    stageKey: "10 Heuristics",
    mainHeading: "10 Usability Heuristics for User Interface Design (nngroup.com)",
    subtitle: "Jakob Nielsen's 10 General Principles for Interaction Design • Broad Rules of Thumb",
    goal: "Evaluate user interfaces to eliminate usability roadblocks, improve user control, and lower cognitive burden.",
    badge: "10 Heuristics",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
  },
];

// Laws of UX Section Groupings (Cognitive & Behavioral Principles)
const LAWS_SECTIONS = [
  {
    id: "Decision & Memory",
    stageKey: "Decision & Memory",
    mainHeading: "1. Decision-Making & Memory Constraints",
    subtitle: "Cognitive Limits on Choice Architecture, Working Memory, and Task Completion",
    goal: "Simplify decision-making by limiting options, chunking information, and keeping users motivated to complete tasks.",
    badge: "Cognitive Limits",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
  {
    id: "Interaction & Speed",
    stageKey: "Interaction & Speed",
    mainHeading: "2. Ergonomics, Familiarity & Response Speed",
    subtitle: "Physical Touch Targets, Sub-400ms System Responsiveness, and Mental Models",
    goal: "Make key buttons effortlessly reachable, provide instant feedback, and align with user habits.",
    badge: "Interaction & Speed",
    badgeColor: "border-sky-500/30 text-sky-300 bg-sky-500/10",
  },
  {
    id: "Perception & Complexity",
    stageKey: "Perception & Complexity",
    mainHeading: "3. Visual Perception, Isolation & System Complexity",
    subtitle: "Gestalt Grouping, Visual Prominence, and Law of Conservation of Complexity",
    goal: "Structure related elements together, isolate primary call-to-actions, and offload system complexity into the backend.",
    badge: "Perception & Complexity",
    badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10",
  },
];

// Reusable Minimal & Rich Note Card Component
function NoteCard({
  note,
  copiedId,
  onCopy,
}: {
  note: MinimalNote;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}) {
  return (
    <div
      onClick={() =>
        onCopy(
          `${note.name}\n${note.whatIsIt || note.text}\n${
            note.origin ? `Origin: ${note.origin}\n` : ""
          }${
            note.keyPoints && note.keyPoints.length > 0
              ? `Key Principles:\n${note.keyPoints.map((k) => `• ${k}`).join("\n")}\n`
              : ""
          }${note.whyImportant ? `Why Important: ${note.whyImportant}\n` : ""}${
            note.uxTakeaway ? `UX Takeaway: ${note.uxTakeaway}\n` : ""
          }${note.example ? `Example: ${note.example}` : ""}`,
          note.id
        )
      }
      className="p-5 rounded-2xl bg-[#0F1219] border border-white/10 hover:border-amber-400/60 transition-all cursor-pointer group text-left relative flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Header Row: Category + Stage Badge + Copy Button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-amber-400/90 uppercase font-bold tracking-wider">
              {note.categoryLabel}
            </span>
            {note.stage && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                {note.stage}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onCopy(
                `${note.name}\n${note.whatIsIt || note.text}\n${
                  note.origin ? `Origin: ${note.origin}\n` : ""
                }${note.uxTakeaway ? `UX Takeaway: ${note.uxTakeaway}\n` : ""}${
                  note.example ? `Example: ${note.example}` : ""
                }`,
                note.id
              );
            }}
            className="text-[10px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer shrink-0"
            title="Copy note"
          >
            {copiedId === note.id ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copied</span>
              </>
            ) : (
              <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
          {note.name}
        </h2>

        {/* Stage Goal if available */}
        {note.stageGoal && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed font-sans">
            <strong className="text-amber-300 font-mono text-[11px] block uppercase tracking-wider mb-0.5">
              Goal:
            </strong>
            {note.stageGoal}
          </div>
        )}

        {/* What is it / What it says / Heuristic Principle / Purpose */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
            {note.category === "laws"
              ? "What it says:"
              : note.category === "heuristics"
              ? "Heuristic Principle:"
              : note.category === "wcag"
              ? "Guideline Overview:"
              : note.category === "key-principles"
              ? "Core Principle:"
              : note.category === "persona"
              ? "Purpose / Role:"
              : note.category === "ui-fundamentals"
              ? "Concept & Role:"
              : note.whatIsIt
              ? "What is it?"
              : "Summary:"}
          </span>
          <p className="text-xs text-zinc-200 font-normal leading-relaxed">
            {note.whatIsIt || note.text}
          </p>
        </div>

        {/* Origin if available (e.g. Zeigarnik Effect) */}
        {note.origin && (
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed font-sans">
            <strong className="text-amber-300 font-mono text-[10px] block uppercase tracking-wider mb-0.5">
              Origin:
            </strong>
            {note.origin}
          </div>
        )}

        {/* Key Components & Methods / Key Principles */}
        {note.keyPoints && note.keyPoints.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-bold block">
              {note.category === "wcag"
                ? "Key Principles & Criteria:"
                : note.category === "laws" || note.category === "heuristics" || note.category === "key-principles"
                ? "Key Points:"
                : note.category === "persona"
                ? "Key Attributes:"
                : note.category === "ui-fundamentals"
                ? "Core Fundamentals & Rules:"
                : "Key Components & Methods:"}
            </span>
            <ul className="space-y-1.5">
              {note.keyPoints.map((pt, idx) => (
                <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                  <span className="text-amber-400 shrink-0 mt-0.5 text-xs">&bull;</span>
                  <span className="leading-snug text-zinc-300/95">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Why is it important? */}
        {note.whyImportant && (
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 font-bold block">
              Why is it important?
            </span>
            <p className="text-xs text-zinc-300/95 leading-relaxed">
              {note.whyImportant}
            </p>
          </div>
        )}
      </div>

      {/* UX Takeaway / Real Example Box */}
      {(note.uxTakeaway || note.example || (note.exampleBullets && note.exampleBullets.length > 0)) && (
        <div className="pt-2">
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-2">
            {note.category === "ui-fundamentals" ? (
              <>
                {note.uxTakeaway && (
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono font-bold text-amber-400/90 uppercase tracking-wider">
                      UI Design Best Practice:
                    </div>
                    <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                      {note.uxTakeaway}
                    </p>
                  </div>
                )}
                {note.example && (
                  <div className="space-y-1 pt-1.5 border-t border-white/5">
                    <div className="text-[9px] font-mono font-bold text-emerald-400/90 uppercase tracking-wider">
                      Reference & Use Cases:
                    </div>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {note.example}
                    </p>
                  </div>
                )}
              </>
            ) : note.category === "persona" ? (
              <>
                {note.example && (
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono font-bold text-emerald-400/90 uppercase tracking-wider">
                      Target Profile & Example:
                    </div>
                    <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                      {note.example}
                    </p>
                  </div>
                )}
                {note.uxTakeaway && (
                  <div className="space-y-1 pt-1.5 border-t border-white/5">
                    <div className="text-[9px] font-mono font-bold text-amber-400/90 uppercase tracking-wider">
                      UX Design Focus:
                    </div>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {note.uxTakeaway}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                {note.uxTakeaway && (
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono font-bold text-amber-400/90 uppercase tracking-wider">
                      UX Takeaway:
                    </div>
                    <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                      {note.uxTakeaway}
                    </p>
                  </div>
                )}
                {note.example && note.example !== note.uxTakeaway && (
                  <div className="space-y-1 pt-1.5 border-t border-white/5">
                    <div className="text-[9px] font-mono font-bold text-emerald-400/90 uppercase tracking-wider">
                      Real Example:
                    </div>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {note.example}
                    </p>
                  </div>
                )}
                {!note.uxTakeaway && note.example && (
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono font-bold text-amber-400/90 uppercase tracking-wider">
                      Real Example:
                    </div>
                    <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                      {note.example}
                    </p>
                  </div>
                )}
              </>
            )}
            {note.exampleBullets && note.exampleBullets.length > 0 && (
              <ul className="space-y-1 pt-1">
                {note.exampleBullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-zinc-300/90 flex items-start gap-1.5">
                    <span className="text-amber-400/80 shrink-0 mt-0.5">&bull;</span>
                    <span className="font-mono text-[11px] leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function UxJournalPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Desktop Left Sidebar Collapse/Expand State
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  // Dropdown Accordion States
  const [methodologiesDropdownOpen, setMethodologiesDropdownOpen] = useState<boolean>(true);
  const [influenceDropdownOpen, setInfluenceDropdownOpen] = useState<boolean>(true);

  // Stage Filter State (Design Thinking & Double Diamond)
  const [selectedStage, setSelectedStage] = useState<string>("all");

  // Mobile Dropdown State
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState<boolean>(false);

  // Automatically reset stage filter when category changes
  React.useEffect(() => {
    setSelectedStage("all");
  }, [activeCategory]);

  // Top Standalone Categories
  const TOP_CATEGORIES = [
    { id: "all", label: "All Notes", icon: Sparkles, count: MINIMAL_NOTES.length },
    {
      id: "ui-fundamentals",
      label: "UI Design Fundamentals",
      icon: Palette,
      count: MINIMAL_NOTES.filter((n) => n.category === "ui-fundamentals").length,
    },
    {
      id: "persona",
      label: "Persona",
      icon: User,
      count: MINIMAL_NOTES.filter((n) => n.category === "persona").length,
    },
    {
      id: "key-principles",
      label: "Key Principles of UX",
      icon: Target,
      count: MINIMAL_NOTES.filter((n) => n.category === "key-principles").length,
    },
    {
      id: "laws",
      label: "UX Laws",
      icon: Layers,
      count: MINIMAL_NOTES.filter((n) => n.category === "laws").length,
    },
    {
      id: "heuristics",
      label: "10 Heuristics",
      icon: Compass,
      count: MINIMAL_NOTES.filter((n) => n.category === "heuristics").length,
    },
    {
      id: "wcag",
      label: "WCAG Accessibility",
      icon: Shield,
      count: MINIMAL_NOTES.filter((n) => n.category === "wcag").length,
    },
  ];

  // Options inside "Design Methodologies" Dropdown
  const METHODOLOGY_CATEGORIES = [
    {
      id: "design-thinking",
      label: "Design Thinking Process",
      icon: Lightbulb,
      count: MINIMAL_NOTES.filter((n) => n.category === "design-thinking").length,
    },
    {
      id: "double-diamond",
      label: "Double Diamond Process",
      icon: Diamond,
      count: MINIMAL_NOTES.filter((n) => n.category === "double-diamond").length,
    },
    {
      id: "hcd",
      label: "Human Centered Design (HCD)",
      icon: Users,
      count: MINIMAL_NOTES.filter((n) => n.category === "hcd").length,
    },
    {
      id: "design-sprint",
      label: "Google Design Sprint",
      icon: Timer,
      count: MINIMAL_NOTES.filter((n) => n.category === "design-sprint").length,
    },
    {
      id: "lean-ux",
      label: "Lean UX",
      icon: Repeat,
      count: MINIMAL_NOTES.filter((n) => n.category === "lean-ux").length,
    },
  ];

  // Options inside "Influence Triggers" Dropdown
  const INFLUENCE_CATEGORIES = [
    { id: "attention", label: "Attention Hijackers", icon: Zap, count: 8 },
    { id: "emotional", label: "Emotional Levers", icon: Heart, count: 10 },
    { id: "cognitive", label: "Cognitive Shortcuts", icon: Brain, count: 8 },
    { id: "identity", label: "Identity Shapers", icon: UserCheck, count: 10 },
    { id: "trust", label: "Trust Manipulation", icon: ShieldCheck, count: 10 },
  ];

  const totalMethodologyCount = METHODOLOGY_CATEGORIES.reduce((acc, c) => acc + c.count, 0);
  const totalInfluenceCount = INFLUENCE_CATEGORIES.reduce((acc, c) => acc + c.count, 0);

  const isMethodologyCategory = (catId: string) =>
    ["design-thinking", "double-diamond", "hcd", "design-sprint", "lean-ux"].includes(catId);

  const isInfluenceCategory = (catId: string) =>
    ["attention", "emotional", "cognitive", "identity", "trust"].includes(catId);

  const isMethodologyActive =
    activeCategory === "methodologies" || isMethodologyCategory(activeCategory);

  const isInfluenceActive =
    activeCategory === "influence" || isInfluenceCategory(activeCategory);

  const allCategoriesList = [
    ...TOP_CATEGORIES,
    {
      id: "methodologies",
      label: "Design Methodologies (All)",
      icon: Workflow,
      count: totalMethodologyCount,
    },
    ...METHODOLOGY_CATEGORIES,
    {
      id: "influence",
      label: "Influence Triggers (All)",
      icon: Flame,
      count: totalInfluenceCount,
    },
    ...INFLUENCE_CATEGORIES,
  ];

  const handleCopy = (text: string, id: string) => {
    soundFx.playChime();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredNotes = useMemo(() => {
    return MINIMAL_NOTES.filter((note) => {
      if (activeCategory === "all") {
        // match all
      } else if (activeCategory === "methodologies") {
        if (!isMethodologyCategory(note.category)) return false;
      } else if (activeCategory === "influence") {
        if (!isInfluenceCategory(note.category)) return false;
      } else if (note.category !== activeCategory) {
        return false;
      }

      // Stage filtering inside Design Thinking, Double Diamond, WCAG & UX Laws
      if (
        (activeCategory === "design-thinking" ||
          activeCategory === "double-diamond" ||
          activeCategory === "wcag" ||
          activeCategory === "laws") &&
        selectedStage !== "all"
      ) {
        if (!note.stage || !note.stage.startsWith(selectedStage)) {
          return false;
        }
      }

      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        return (
          note.name.toLowerCase().includes(q) ||
          note.text.toLowerCase().includes(q) ||
          note.example.toLowerCase().includes(q) ||
          note.categoryLabel.toLowerCase().includes(q) ||
          (note.whatIsIt && note.whatIsIt.toLowerCase().includes(q)) ||
          (note.whyImportant && note.whyImportant.toLowerCase().includes(q)) ||
          (note.origin && note.origin.toLowerCase().includes(q)) ||
          (note.uxTakeaway && note.uxTakeaway.toLowerCase().includes(q)) ||
          (note.stageGoal && note.stageGoal.toLowerCase().includes(q)) ||
          (note.keyPoints && note.keyPoints.some((kp) => kp.toLowerCase().includes(q))) ||
          (note.exampleBullets && note.exampleBullets.some((eb) => eb.toLowerCase().includes(q)))
        );
      }
      return true;
    });
  }, [activeCategory, selectedStage, searchQuery]);

  const activeCategoryObj =
    allCategoriesList.find((c) => c.id === activeCategory) || allCategoriesList[0];
  const ActiveIcon = activeCategoryObj.icon;

  return (
    <div className="min-h-screen bg-[#080A0D] text-[#FBF7EE] flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950 relative">
      <KeralaAtmosphere enableEmbers={false} />

      {/* Top Navbar */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#080A0D]/95 backdrop-blur-md border-b border-amber-500/20">
        <Navbar />
      </header>

      {/* =========================================================================
          WHOLE-PAGE DOCKED LAYOUT
          (Full-Height Left Sidebar Docked to Window Edge + Right Notes Area)
         ========================================================================= */}
      <div className="flex-1 flex w-full relative">
        
        {/* =========================================================================
            WHOLE-PAGE LEFT SIDEBAR MENU (Sticky, Full Height, Collapsible)
           ========================================================================= */}
        <aside
          className={`hidden md:flex flex-col shrink-0 border-r border-white/10 bg-[#0A0D14] sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto transition-all duration-300 z-30 select-none ${
            sidebarOpen ? "w-64 p-4" : "w-16 p-2 items-center"
          }`}
        >
          {/* Sidebar Top: Title + Collapse/Expand Button */}
          <div
            className={`flex items-center pb-3 mb-3 border-b border-white/10 w-full ${
              sidebarOpen ? "justify-between" : "justify-center"
            }`}
          >
            {sidebarOpen && (
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                <span>UX Topics</span>
              </div>
            )}

            <button
              onClick={() => {
                soundFx.playClick();
                setSidebarOpen(!sidebarOpen);
              }}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {sidebarOpen ? (
                <PanelLeftClose className="w-4 h-4" />
              ) : (
                <PanelLeftOpen className="w-4 h-4 text-amber-400" />
              )}
            </button>
          </div>

          {/* Topics Category Navigation */}
          <nav className="flex flex-col gap-1 w-full flex-1" aria-label="UX Topics">
            {/* Top Categories */}
            {TOP_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat.id);
                    setSelectedStage("all");
                  }}
                  title={`${cat.label} (${cat.count})`}
                  className={`w-full rounded-xl transition-all cursor-pointer flex items-center ${
                    sidebarOpen ? "px-3 py-2.5 justify-between" : "p-2.5 justify-center"
                  } ${
                    isActive
                      ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? "text-stone-950" : "text-amber-400/80"
                      }`}
                    />
                    {sidebarOpen && (
                      <span className="text-xs truncate font-medium text-left">
                        {cat.label}
                      </span>
                    )}
                  </div>

                  {sidebarOpen && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${
                        isActive
                          ? "bg-black/25 text-stone-950 font-bold"
                          : "bg-white/10 text-zinc-400"
                      }`}
                    >
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Design Methodologies Dropdown Accordion in Side Menu */}
            <div className="pt-1.5 w-full">
              {sidebarOpen ? (
                <div
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isMethodologyActive
                      ? "border-amber-500/40 bg-amber-500/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setMethodologiesDropdownOpen(!methodologiesDropdownOpen);
                    }}
                    className={`w-full px-3 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isMethodologyActive
                        ? "text-amber-300 font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                    title="Design Methodologies"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Workflow
                        className={`w-4 h-4 shrink-0 ${
                          isMethodologyActive ? "text-amber-400" : "text-amber-400/80"
                        }`}
                      />
                      <span className="text-xs font-semibold truncate">
                        Design Methodologies
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                          isMethodologyActive
                            ? "bg-amber-500/20 text-amber-300 font-bold"
                            : "bg-white/10 text-zinc-400"
                        }`}
                      >
                        {totalMethodologyCount}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          methodologiesDropdownOpen ? "rotate-180 text-amber-400" : "text-zinc-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Options */}
                  {methodologiesDropdownOpen && (
                    <div className="p-1 space-y-0.5 border-t border-white/5 bg-black/35">
                      {/* All Design Methodologies option */}
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setActiveCategory("methodologies");
                          setSelectedStage("all");
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-[11px] font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          activeCategory === "methodologies"
                            ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="truncate">All Methodologies</span>
                        <span className="text-[10px] opacity-75">{totalMethodologyCount}</span>
                      </button>

                      {/* 5 Requested Methodology Options */}
                      {METHODOLOGY_CATEGORIES.map((sub) => {
                        const isSubActive = activeCategory === sub.id;
                        const SubIcon = sub.icon;

                        return (
                          <button
                            key={sub.id}
                            onClick={() => {
                              soundFx.playClick();
                              setActiveCategory(sub.id);
                              setSelectedStage("all");
                            }}
                            className={`w-full px-2.5 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isSubActive
                                ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                                : "text-zinc-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <SubIcon
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  isSubActive ? "text-stone-950" : "text-amber-400/80"
                                }`}
                              />
                              <span className="truncate text-left text-xs font-medium">
                                {sub.label}
                              </span>
                            </div>
                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${
                                isSubActive
                                  ? "bg-black/25 text-stone-950 font-bold"
                                  : "bg-white/5 text-zinc-400"
                              }`}
                            >
                              {sub.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                /* Collapsed Icon-only Rail View */
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSidebarOpen(true);
                    setMethodologiesDropdownOpen(true);
                  }}
                  title="Design Methodologies (Click to expand)"
                  className={`p-2.5 rounded-xl transition-all cursor-pointer flex justify-center w-full ${
                    isMethodologyActive
                      ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Workflow
                    className={`w-4 h-4 shrink-0 ${
                      isMethodologyActive ? "text-stone-950" : "text-amber-400"
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Influence Triggers Dropdown Accordion in Side Menu */}
            <div className="pt-1.5 w-full">
              {sidebarOpen ? (
                <div
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isInfluenceActive
                      ? "border-amber-500/40 bg-amber-500/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setInfluenceDropdownOpen(!influenceDropdownOpen);
                    }}
                    className={`w-full px-3 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isInfluenceActive
                        ? "text-amber-300 font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                    title="Influence Triggers"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Flame
                        className={`w-4 h-4 shrink-0 ${
                          isInfluenceActive ? "text-amber-400" : "text-amber-400/80"
                        }`}
                      />
                      <span className="text-xs font-semibold truncate">
                        Influence Triggers
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                          isInfluenceActive
                            ? "bg-amber-500/20 text-amber-300 font-bold"
                            : "bg-white/10 text-zinc-400"
                        }`}
                      >
                        {totalInfluenceCount}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          influenceDropdownOpen ? "rotate-180 text-amber-400" : "text-zinc-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Options */}
                  {influenceDropdownOpen && (
                    <div className="p-1 space-y-0.5 border-t border-white/5 bg-black/35">
                      {/* All Influence Triggers option */}
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setActiveCategory("influence");
                          setSelectedStage("all");
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-[11px] font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          activeCategory === "influence"
                            ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="truncate">All Influence Triggers</span>
                        <span className="text-[10px] opacity-75">{totalInfluenceCount}</span>
                      </button>

                      {/* 5 Requested Sub-Options */}
                      {INFLUENCE_CATEGORIES.map((sub) => {
                        const isSubActive = activeCategory === sub.id;
                        const SubIcon = sub.icon;

                        return (
                          <button
                            key={sub.id}
                            onClick={() => {
                              soundFx.playClick();
                              setActiveCategory(sub.id);
                              setSelectedStage("all");
                            }}
                            className={`w-full px-2.5 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isSubActive
                                ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                                : "text-zinc-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <SubIcon
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  isSubActive ? "text-stone-950" : "text-amber-400/80"
                                }`}
                              />
                              <span className="truncate text-left text-xs font-medium">
                                {sub.label}
                              </span>
                            </div>
                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${
                                isSubActive
                                  ? "bg-black/25 text-stone-950 font-bold"
                                  : "bg-white/5 text-zinc-400"
                              }`}
                            >
                              {sub.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                /* Collapsed Icon-only Rail View */
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSidebarOpen(true);
                    setInfluenceDropdownOpen(true);
                  }}
                  title="Influence Triggers (Click to expand)"
                  className={`p-2.5 rounded-xl transition-all cursor-pointer flex justify-center w-full ${
                    isInfluenceActive
                      ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Flame
                    className={`w-4 h-4 shrink-0 ${
                      isInfluenceActive ? "text-stone-950" : "text-amber-400"
                    }`}
                  />
                </button>
              )}
            </div>
          </nav>

          {/* Sidebar Bottom Footer Summary */}
          {sidebarOpen && (
            <div className="pt-3 mt-3 border-t border-white/5 text-[10px] font-mono text-zinc-400 text-left px-1">
              <span>{MINIMAL_NOTES.length} minimal notes &bull; with real examples</span>
            </div>
          )}
        </aside>

        {/* =========================================================================
            RIGHT MAIN CONTENT AREA (Takes Full Remaining Width)
           ========================================================================= */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 sm:py-10 text-left">
          
          {/* Simple Return Link */}
          <div className="pb-4">
            <Link
              href="/"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Portfolio</span>
            </Link>
          </div>

          {/* Mobile Collapsible Topic Picker (< md screens) */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileTopicsOpen(!mobileTopicsOpen);
              }}
              className="w-full px-4 py-3 rounded-xl bg-[#0F1219] border border-amber-500/30 flex items-center justify-between text-xs font-mono font-bold text-white cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-2 min-w-0">
                <ActiveIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">Topic: {activeCategoryObj.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 shrink-0">
                  {activeCategoryObj.count}
                </span>
              </div>
              <span className="text-amber-400 text-xs font-mono ml-2 shrink-0">
                {mobileTopicsOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            {mobileTopicsOpen && (
              <div className="mt-2 p-2 rounded-xl bg-[#0F1219] border border-white/10 space-y-1.5 animate-in fade-in duration-150 shadow-xl">
                {/* Standalone Top Categories */}
                {TOP_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveCategory(cat.id);
                        setSelectedStage("all");
                        setMobileTopicsOpen(false);
                      }}
                      className={`w-full px-3 py-2.5 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-amber-500 text-stone-950 font-bold"
                          : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{cat.label}</span>
                      </div>
                      <span className="text-[10px] opacity-75">{cat.count}</span>
                    </button>
                  );
                })}

                {/* Design Methodologies Group in Mobile */}
                <div className="pt-1.5 border-t border-white/10">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-amber-400" />
                    <span>Design Methodologies ({totalMethodologyCount})</span>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCategory("methodologies");
                      setSelectedStage("all");
                      setMobileTopicsOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                      activeCategory === "methodologies"
                        ? "bg-amber-500 text-stone-950 font-bold"
                        : "text-zinc-400 hover:bg-white/5"
                    }`}
                  >
                    <span>All Design Methodologies</span>
                    <span className="text-[10px] opacity-75">{totalMethodologyCount}</span>
                  </button>

                  {METHODOLOGY_CATEGORIES.map((sub) => {
                    const isSubActive = activeCategory === sub.id;
                    const SubIcon = sub.icon;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => {
                          soundFx.playClick();
                          setActiveCategory(sub.id);
                          setSelectedStage("all");
                          setMobileTopicsOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          isSubActive
                            ? "bg-amber-500 text-stone-950 font-bold"
                            : "text-zinc-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <SubIcon className="w-3.5 h-3.5" />
                          <span>{sub.label}</span>
                        </div>
                        <span className="text-[10px] opacity-75">{sub.count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Influence Triggers Group in Mobile */}
                <div className="pt-1.5 border-t border-white/10">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Influence Triggers ({totalInfluenceCount})</span>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCategory("influence");
                      setSelectedStage("all");
                      setMobileTopicsOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                      activeCategory === "influence"
                        ? "bg-amber-500 text-stone-950 font-bold"
                        : "text-zinc-400 hover:bg-white/5"
                    }`}
                  >
                    <span>All Influence Triggers</span>
                    <span className="text-[10px] opacity-75">{totalInfluenceCount}</span>
                  </button>

                  {INFLUENCE_CATEGORIES.map((sub) => {
                    const isSubActive = activeCategory === sub.id;
                    const SubIcon = sub.icon;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => {
                          soundFx.playClick();
                          setActiveCategory(sub.id);
                          setSelectedStage("all");
                          setMobileTopicsOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          isSubActive
                            ? "bg-amber-500 text-stone-950 font-bold"
                            : "text-zinc-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <SubIcon className="w-3.5 h-3.5" />
                          <span>{sub.label}</span>
                        </div>
                        <span className="text-[10px] opacity-75">{sub.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Minimal Header */}
          <div className="space-y-1.5 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                UX Field Notes
              </span>

              {/* Quick toggle indicator for collapsed sidebar */}
              {!sidebarOpen && (
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSidebarOpen(true);
                  }}
                  className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <PanelLeftOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Expand Side Menu</span>
                </button>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              UX Journal
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal">
              Essential UI design fundamentals, persona frameworks, cognitive triggers, UX laws, key principles, WCAG accessibility, and NN/g heuristics with practical real-world examples.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notes (e.g. Color Theory, Typography, Spacing, Iconography, Hierarchy, Persona, Heuristics)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#11141C] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 font-sans shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Status Line */}
          <div className="text-xs text-zinc-400 pb-2 mb-4 border-b border-white/5 flex items-center justify-between">
            <span>
              Showing <strong className="text-white">{filteredNotes.length}</strong> notes in{" "}
              <span className="text-amber-300 font-mono font-bold">{activeCategoryObj.label}</span>
            </span>

            {(activeCategory !== "all" || searchQuery !== "") && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory("all");
                  setSelectedStage("all");
                  setSearchQuery("");
                }}
                className="text-amber-400 hover:text-amber-300 font-mono text-[11px] cursor-pointer"
              >
                Show All Notes
              </button>
            )}
          </div>

          {/* Design Thinking Stage Filter Bar */}
          {activeCategory === "design-thinking" && (
            <div className="mb-6 p-3.5 rounded-2xl bg-[#0F1219] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                  Design Thinking Stages (Study Guide)
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  Select Stage to Filter
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: "all", label: "All Stages", count: 18 },
                  { id: "1. Empathize", label: "1. Empathize", count: 4 },
                  { id: "2. Define", label: "2. Define", count: 3 },
                  { id: "3. Ideate", label: "3. Ideate", count: 6 },
                  { id: "4. Prototype", label: "4. Prototype", count: 2 },
                  { id: "5. Test", label: "5. Test", count: 2 },
                  { id: "Quick Reference", label: "Quick Reference", count: 1 },
                ].map((stg) => {
                  const isStgActive = selectedStage === stg.id;
                  return (
                    <button
                      key={stg.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedStage(stg.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isStgActive
                          ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                          : "bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{stg.label}</span>
                      <span className={`text-[10px] ${isStgActive ? "text-stone-950 font-bold" : "text-zinc-500"}`}>
                        ({stg.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* WCAG Conformance & Principles Filter Bar */}
          {activeCategory === "wcag" && (
            <div className="mb-6 p-3.5 rounded-2xl bg-[#0F1219] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                  WCAG 2.1 Conformance & Principles
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  Select Section to Filter
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: "all", label: "All WCAG Topics", count: 10 },
                  { id: "POUR", label: "1. POUR Principles", count: 4 },
                  { id: "Criteria", label: "2. Success Criteria Levels", count: 3 },
                  { id: "Importance", label: "3. Why WCAG is Important", count: 3 },
                ].map((stg) => {
                  const isStgActive = selectedStage === stg.id;
                  return (
                    <button
                      key={stg.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedStage(stg.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isStgActive
                          ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                          : "bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{stg.label}</span>
                      <span
                        className={`text-[10px] ${
                          isStgActive ? "text-stone-950 font-bold" : "text-zinc-500"
                        }`}
                      >
                        ({stg.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Laws of UX Category Filter Bar */}
          {activeCategory === "laws" && (
            <div className="mb-6 p-3.5 rounded-2xl bg-[#0F1219] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                  Laws of UX (Psychology Categories)
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  Select Category to Filter
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: "all", label: "All UX Laws", count: 12 },
                  { id: "Decision & Memory", label: "1. Decision & Memory", count: 3 },
                  { id: "Interaction & Speed", label: "2. Interaction & Speed", count: 3 },
                  { id: "Perception & Complexity", label: "3. Perception & Complexity", count: 6 },
                ].map((stg) => {
                  const isStgActive = selectedStage === stg.id;
                  return (
                    <button
                      key={stg.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedStage(stg.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isStgActive
                          ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                          : "bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{stg.label}</span>
                      <span
                        className={`text-[10px] ${
                          isStgActive ? "text-stone-950 font-bold" : "text-zinc-500"
                        }`}
                      >
                        ({stg.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Double Diamond Stage Filter Bar */}
          {activeCategory === "double-diamond" && (
            <div className="mb-6 p-3.5 rounded-2xl bg-[#0F1219] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                  Double Diamond Stages (Study Guide)
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  Select Stage to Filter
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: "all", label: "All Stages", count: 24 },
                  { id: "1. Discover", label: "1. Discover", count: 5 },
                  { id: "2. Define", label: "2. Define", count: 7 },
                  { id: "3. Develop", label: "3. Develop", count: 7 },
                  { id: "4. Deliver", label: "4. Deliver", count: 4 },
                  { id: "Quick Reference", label: "Quick Reference", count: 1 },
                ].map((stg) => {
                  const isStgActive = selectedStage === stg.id;
                  return (
                    <button
                      key={stg.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedStage(stg.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isStgActive
                          ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                          : "bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{stg.label}</span>
                      <span
                        className={`text-[10px] ${
                          isStgActive ? "text-stone-950 font-bold" : "text-zinc-500"
                        }`}
                      >
                        ({stg.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredNotes.length === 0 && (
            <div className="p-10 text-center rounded-2xl bg-[#0F1219] border border-white/10 space-y-3">
              <Search className="w-7 h-7 text-amber-400 mx-auto" />
              <h3 className="text-sm font-bold text-white">No notes matched your search</h3>
              <p className="text-xs text-zinc-400">
                Try another search term or click &ldquo;Show All Notes&rdquo;.
              </p>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory("all");
                  setSelectedStage("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold font-mono"
              >
                Show All Notes
              </button>
            </div>
          )}

          {/* Notes Content Presentation (Section-Grouped for Methodologies or Flat Grid) */}
          {activeCategory === "ui-fundamentals" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {UI_FUNDAMENTALS_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.category === "ui-fundamentals"
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-4">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} Fundamentals
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Core Focus:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "persona" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {PERSONA_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.category === "persona"
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-4">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} Persona Types
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Dual Definition Banners (From Guide Image) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                        {/* What is a Persona? */}
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider block">
                            What is Persona?
                          </span>
                          <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                            A persona is a fictional but research-based representation of a group of people who share similar characteristics, behaviors, goals, needs, and challenges. Personas help teams understand and design for real people without having to think about every individual customer or user separately.
                          </p>
                        </div>

                        {/* Simple Definition */}
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                          <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider block">
                            Simple Definition
                          </span>
                          <p className="text-xs text-emerald-200/90 leading-relaxed font-sans">
                            A persona is a realistic profile that represents a typical member of a target audience.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "key-principles" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {KEY_PRINCIPLES_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.stage && n.stage.startsWith(sec.stageKey)
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} {sectionNotes.length === 1 ? "Principle" : "Principles"}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Core Focus:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "double-diamond" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {DOUBLE_DIAMOND_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.stage && n.stage.startsWith(sec.stageKey)
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} {sectionNotes.length === 1 ? "Topic" : "Topics"}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Stage Goal:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "design-thinking" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {DESIGN_THINKING_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.stage && n.stage.startsWith(sec.stageKey)
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} {sectionNotes.length === 1 ? "Topic" : "Topics"}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Stage Goal:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "wcag" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {WCAG_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.stage && n.stage.startsWith(sec.stageKey)
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} {sectionNotes.length === 1 ? "Topic" : "Topics"}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Section Focus:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "heuristics" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {HEURISTICS_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.stage && n.stage.startsWith(sec.stageKey)
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} {sectionNotes.length === 1 ? "Heuristic" : "Heuristics"}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Heuristic Focus:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : activeCategory === "laws" && searchQuery.trim() === "" ? (
            <div className="space-y-12">
              {LAWS_SECTIONS.map((sec) => {
                const sectionNotes = filteredNotes.filter(
                  (n) => n.stage && n.stage.startsWith(sec.stageKey)
                );

                if (sectionNotes.length === 0) return null;

                return (
                  <section key={sec.id} className="space-y-5 text-left">
                    {/* Main Stage Heading */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1219] border border-amber-500/25 shadow-lg relative overflow-hidden space-y-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`text-[11px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${sec.badgeColor}`}
                        >
                          {sec.badge}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {sectionNotes.length} {sectionNotes.length === 1 ? "Law" : "Laws"}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          {sec.mainHeading}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
                          {sec.subtitle}
                        </p>
                      </div>

                      {/* Goal Callout Banner */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                          Law Focus:
                        </span>
                        <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
                          {sec.goal}
                        </p>
                      </div>
                    </div>

                    {/* Section Content Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionNotes.map((note) => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          copiedId={copiedId}
                          onCopy={handleCopy}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            /* Minimal & Rich Structured Notes Grid (Standard Grid) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  copiedId={copiedId}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          )}

        </main>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
