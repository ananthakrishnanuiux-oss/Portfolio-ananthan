export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Mobile App" | "Enterprise Platform" | "E-Commerce Website" | "Design System" | string;
  role: string;
  timeline: string;
  tools: string[];
  methodology: string;
  image: string;
  featured: boolean;
  tagline: string;
  problemStatement: string;
  solutionOverview: string;
  metrics: { label: string; value: string }[];
  overview: {
    client: string;
    context: string;
    platform: string;
    duration: string;
    deliverables: string[];
  };
  research: {
    methods: string[];
    participants?: string;
    keyInsights: string[];
    competitorAnalysis?: string;
  };
  personas?: {
    name: string;
    role: string;
    painPoint: string;
    goal: string;
    quote?: string;
  }[];
  architecture: {
    description: string;
    hierarchy?: { level: string; items: string[] }[];
    keyFlows: string[];
  };
  wireframing?: {
    approach: string;
    tradeoffs: string[];
    keyDecisions: string[];
  };
  designSystemHighlights?: {
    typography: string;
    colors: { name: string; hex: string; role: string }[];
    components: string[];
  };
  screensCount: string;
  usabilityTesting: {
    testingMethod: string;
    findings: string[];
    iterations: string[];
  };
  finalSolution?: {
    headline: string;
    keyHighlights: { title: string; description: string }[];
  };
  outcomes: string[];
  learnings: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ananthakrishnan K Nair",
    displayName: "Nantha",
    monogram: "N",
    title: "UI/UX Designer",
    greeting: "Hi, I'm Nantha.",
    headline: "Designing intuitive digital experiences.",
    description:
      "I'm a UI/UX Designer with 3+ years of experience crafting user-centered digital experiences for web and mobile. I transform complex problems into intuitive interfaces through research, thoughtful interaction design, and purposeful visual design.",
    supportingLine: "Research-led thinking. Purposeful interactions. Thoughtful interfaces.",
    verifiedTools: [
      { name: "Figma", badge: "Primary Craft" },
      { name: "Adobe XD", badge: "Prototyping" },
      { name: "Photoshop", badge: "Visual Design" },
      { name: "Illustrator", badge: "Vector & Icons" },
    ],
    aboutIntro:
      "I'm a UI/UX Designer focused on understanding users, solving product problems, and creating intuitive digital experiences. My approach combines research, structured problem-solving, interaction design, and visual design to make complex experiences simpler and more accessible.",
    mentoringNote:
      "I also enjoy mentoring aspiring designers, sharing practical UX methodologies, and helping newcomers build strong design foundations.",
    location: "Karthika, Mavelikkara, Alappuzha, Kerala, India",
    email: "ananthakrishnanuiux@gmail.com",
    behance: "https://www.behance.net/ananthak7",
    linkedin: "https://www.linkedin.com/in/ananthakrishnan-k-nair",
    availability: "Available for UI/UX Design Roles & Product Opportunities",
    avatar: "/assets/profile.jpg",
    resumeUrl: "/Ananthakrishnan_K_Nair_Resume.pdf",
  },

  stats: [
    { value: "3+", label: "Years Experience", description: "Designing web & mobile digital products" },
    { value: "35+", label: "Screens Designed", description: "Across high-fidelity production prototypes" },
    { value: "100%", label: "User-Centered", description: "Double Diamond & iterative validation" },
    { value: "MCA", label: "Technical Empathy", description: "Master of Computer Application grounding" },
  ],

  designProcess: [
    {
      step: "01",
      name: "Empathize",
      tagline: "Understand users, context, and pain points",
      summary:
        "Generative research to uncover root human behaviors, core friction points, and competitive opportunities before opening a canvas.",
      activities: [
        "User Interviews & Contextual Inquiries",
        "Competitor Teardowns & Feature Matrix",
        "Observational Studies & Diary Logs",
        "Problem Space & Root-Cause Mapping",
      ],
      deliverables: ["Research Synthesis Matrix", "Empathy Maps", "Problem Framing Statements"],
      tools: ["Miro", "Figma", "User Interviews", "Google Forms"],
    },
    {
      step: "02",
      name: "Define",
      tagline: "Identify the core problem and design opportunities",
      summary:
        "Synthesizing qualitative findings into actionable design requirements, persona profiles, journey maps, and structured information architecture.",
      activities: [
        "Data-Backed User Persona Synthesis",
        "Customer Journey & Emotion Curve Mapping",
        "Information Architecture & Navigation Hierarchies",
        "Task Analysis & Critical User Flows",
      ],
      deliverables: ["User Personas", "Journey Maps", "Sitemaps & Task Flowcharts"],
      tools: ["Figma", "Miro", "Whimsical"],
    },
    {
      step: "03",
      name: "Prototype",
      tagline: "Explore solutions, map flows, and develop interfaces",
      summary:
        "Translating abstract flows into iterative wireframes, scalable design systems, and responsive, accessible high-fidelity interfaces.",
      activities: [
        "Rapid Low-Fidelity Wireframing & Sketches",
        "Design Token Taxonomy (Color, Typography, Spacing)",
        "Scalable Component Variants with Auto Layout",
        "High-Fidelity Interface Screens & Interaction States",
      ],
      deliverables: ["Interactive Prototypes", "Design System Library", "High-Fidelity Screens"],
      tools: ["Figma (Auto Layout & Variables)", "Adobe Photoshop", "Illustrator"],
    },
    {
      step: "04",
      name: "Validate",
      tagline: "Test usability, refine interactions, and improve the experience",
      summary:
        "Rigorous usability testing with representative users to validate navigation ergonomics, accessible contrast, and developer handoff specs.",
      activities: [
        "Task-Based Moderated Usability Testing",
        "WCAG 2.1 Contrast & Accessibility Auditing",
        "Component State Documentation (Default, Hover, Error)",
        "Figma Dev Mode Inspection & Engineering Handoff",
      ],
      deliverables: ["Usability Testing Report", "Iteration Action Log", "Developer Handoff Guide"],
      tools: ["Figma Dev Mode", "WCAG Contrast Checkers", "Loom"],
    },
  ],

  uiCraftHighlights: [
    {
      title: "Strict 8pt Spacing Scale",
      description: "Mathematical layout cadence ensuring rhythmic vertical and horizontal balance across all screens.",
      token: "4px / 8px / 16px / 24px / 32px / 48px / 64px",
    },
    {
      title: "WCAG AAA Accessible Contrast",
      description: "Tested contrast ratios ensuring all copy and interactive states remain effortlessly legible in dark mode.",
      token: "Contrast Ratio ≥ 7.0:1 for body copy",
    },
    {
      title: "Comprehensive Component States",
      description: "Engineered states for every interactive element: default, hover, active, focus, disabled, loading, and error.",
      token: "7 Distinct States per Interactive Control",
    },
    {
      title: "Fluid Typography Hierarchy",
      description: "Carefully proportioned type scales pairing Space Grotesk for editorial headings with Inter for high scannability.",
      token: "Space Grotesk + Inter (1.25 Modular Scale)",
    },
  ],

  projects: [
    {
      slug: "bloomwise",
      title: "BloomWise",
      subtitle: "Plant Care Mobile App",
      category: "Mobile App",
      role: "Lead UI/UX Designer & Researcher",
      timeline: "6-Week Design Sprint",
      tools: ["Figma", "Miro", "Photoshop", "Illustrator"],
      methodology: "Double Diamond Design Process",
      image: "/assets/bloomwise.jpg",
      featured: true,
      tagline:
        "Designing a more intuitive plant-care experience that helps users understand plant needs and manage their care routines.",
      problemStatement:
        "Urban plant owners frequently lose houseplants due to inaccurate watering cadences, unnoticed disease infestations, and conflicting care guidelines found on generic web searches. Users feel overwhelmed by botanical jargon and lack confidence in everyday diagnosis.",
      solutionOverview:
        "An intuitive mobile companion featuring an AI-assisted visual scanner for plant health diagnostics, coupled with personalized watering reminders, adaptive light-level tracking, and an interactive care calendar designed for effortless daily adoption.",
      metrics: [
        { label: "High-Fidelity Screens", value: "15+ Screens" },
        { label: "Task Success Rate", value: "92%" },
        { label: "Target Personas", value: "2 Validated" },
        { label: "Navigation Depth", value: "3 Taps Max" },
      ],
      overview: {
        client: "Self-Initiated Concept & Case Study",
        context: "Mobile UX/UI Design Project",
        platform: "iOS & Android Mobile (390 x 844 px)",
        duration: "6 Weeks",
        deliverables: [
          "User Research & Generative Discovery Insights",
          "2 Target User Personas & Empathy Maps",
          "Information Architecture & Task User Flows",
          "Low-Fidelity Wireframes & Structural Iterations",
          "15+ High-Fidelity UI Screens & Interactive Prototype",
          "Design Tokens, Component Library & Usability Test Report",
        ],
      },
      research: {
        methods: [
          "Semi-Structured Interviews with 12 Plant Owners",
          "Competitive Analysis of 3 Market Leaders (Planta, PictureThis, Greg)",
          "7-Day Care Diary Study",
        ],
        participants: "12 participants ranging from first-time balcony owners to seasoned indoor plant hobbyists",
        keyInsights: [
          "Overwatering is the #1 cause of houseplant death, yet owners lack a visual method to estimate soil moisture levels.",
          "Users experience anxiety when leaves turn yellow and struggle to describe subtle symptoms in text-based search engines.",
          "Notification fatigue causes users to dismiss generic reminders; care alerts must feel contextual to local weather and pot size.",
        ],
        competitorAnalysis:
          "Benchmarked Planta, PictureThis, and Greg. Discovered that existing tools either gated fundamental disease detection behind aggressive $40/year paywalls or inundated beginners with dense Latin botanical jargon rather than actionable next steps.",
      },
      personas: [
        {
          name: "Ananya Sharma",
          role: "Busy Urban Professional (Apartment Balcony)",
          painPoint: "Forgets watering schedules amidst tight work deadlines; leaves start wilting before she notices.",
          goal: "Needs lightweight, contextual push reminders and quick visual confirmation that her plants are thriving.",
          quote: "I love having plants around, but between back-to-back meetings, I forget if I watered my Monstera two days ago or five days ago.",
        },
        {
          name: "Vikram Das",
          role: "Gardening Hobbyist & Plant Collector",
          painPoint: "Struggles to diagnose early-stage fungal leaf spots and track specific fertilizer cycles across 25+ species.",
          goal: "Needs accurate camera diagnosis, detailed leaf analysis, and structured growth milestone logs.",
          quote: "When a rare variegated plant shows leaf discoloration, I need to know immediately whether it's root rot, sunburn, or spider mites.",
        },
      ],
      architecture: {
        description:
          "Designed a shallow, 3-level information architecture centered on immediate user action: Scan & Diagnose, My Garden Dashboard, and Adaptive Schedule Calendar.",
        hierarchy: [
          { level: "Primary Navigation", items: ["My Garden (Home)", "Quick Scanner (FAB)", "Care Schedule", "Plant Doctor", "Profile"] },
          { level: "Secondary Views", items: ["Plant Detail Specs", "Watering Calculator", "Disease Treatment Plan", "Growth Journal"] },
          { level: "Action Modals", items: ["Mark Task Complete", "Log Fertilizer", "Add New Species", "Camera Reticle View"] },
        ],
        keyFlows: [
          "Instant Camera Scanning & Species Health Diagnostic Flow",
          "Disease Diagnosis & Step-by-Step Treatment Plan Action",
          "Contextual Watering & Mist Schedule Check-Off",
          "Monthly Growth Milestone & Progress Journaling",
        ],
      },
      wireframing: {
        approach:
          "Explored paper sketches and mid-fidelity Figma wireframes to test whether the camera action should be an embedded bottom-sheet or a permanent center-anchored floating action button.",
        tradeoffs: [
          "Center Floating Button vs Tab Icon: Center button increased scan engagement by 43% during paper prototyping.",
          "Dashboard Layout: Grouping plants by room location proved far more intuitive than alphabetical listing.",
        ],
        keyDecisions: [
          "Elevated the Soil Moisture Gauge to the top of the individual plant card for instant cognitive evaluation.",
          "Integrated single-tap 'Watered Today' action buttons directly on the home garden feed to minimize friction.",
        ],
      },
      designSystemHighlights: {
        typography: "Space Grotesk for energetic headers paired with Inter for high-density botanical care instructions.",
        colors: [
          { name: "Deep Charcoal Canvas", hex: "#0B0D12", role: "Primary Background" },
          { name: "Elevated Surface", hex: "#171A23", role: "Plant Card Container" },
          { name: "Electric Emerald", hex: "#10B981", role: "Healthy Status & Primary Action" },
          { name: "Amber Warning", hex: "#F59E0B", role: "Thirst Alert & Attention Needed" },
          { name: "Violet Accent", hex: "#A78BFA", role: "Pro Diagnostic Features" },
        ],
        components: [
          "Circular Soil Moisture Gauge with Animated Fill",
          "Plant Health Status Badge (Healthy / Thirsty / Critical)",
          "Location Filter Carousel (Balcony, Living Room, Bedroom)",
          "Camera Viewfinder Reticle with Live Bounding Box",
        ],
      },
      screensCount: "15+ High-Fidelity Screens",
      usabilityTesting: {
        testingMethod:
          "Conducted moderated task-based usability testing with 6 participants on an interactive Figma prototype across 3 core user scenarios.",
        findings: [
          "Participants initially missed the 'Disease Check' toggle inside the camera viewfinder when it was placed in the top right corner.",
          "Switching between plant care routines required too many back-and-forth taps when viewing the monthly calendar.",
          "Users overwhelmingly praised the circular soil moisture gauge as the most comforting visual indicator.",
        ],
        iterations: [
          "Repositioned the Disease Check selector directly adjacent to the shutter trigger in thumb-friendly reach zone.",
          "Introduced horizontal swipeable filter pills (All, Balcony, Living Room) directly atop the Care Schedule screen.",
          "Added haptic-inspired micro-animations when tapping 'Mark Watered' for positive reinforcement.",
        ],
      },
      finalSolution: {
        headline: "A Calming, Data-Driven Botanical Experience",
        keyHighlights: [
          {
            title: "Zero-Stress Home Dashboard",
            description: "Surfaces only tasks due today at the top, eliminating care anxiety while celebrating healthy streaks.",
          },
          {
            title: "Sub-Second Health Scanner",
            description: "Instant camera overlay identifying species, common pests, and actionable sunlight recommendations.",
          },
          {
            title: "Adaptive Care Schedules",
            description: "Calculates watering frequencies dynamically based on local humidity, pot size, and seasonal sunlight.",
          },
        ],
      },
      outcomes: [
        "Delivered a comprehensive 15+ screen mobile prototype praised for visual clarity and calm aesthetic balance.",
        "Demonstrated mastery of the Double Diamond framework from generative user discovery to validated prototype.",
        "Achieved 92% task completion rate during final usability evaluation with zero critical path errors.",
      ],
      learnings: [
        "Micro-interactions such as tactile check-offs for daily tasks dramatically increase user habit retention.",
        "Designing with realistic botanical edge cases (e.g. drooping leaves vs yellowing edges) creates genuine product credibility.",
      ],
    },

    {
      slug: "hr-management",
      title: "HRConnect",
      subtitle: "Smart HR Management App",
      category: "Enterprise Platform",
      role: "Lead UI/UX Designer & Product Strategist",
      timeline: "8-Week Enterprise Sprint",
      tools: ["Figma", "Miro", "Adobe XD", "Photoshop"],
      methodology: "Design Thinking Framework (5 Stages)",
      image: "/assets/hr_connect.jpg",
      featured: true,
      tagline:
        "Streamlining complex enterprise workflows, multi-tier approvals, and distributed workforce attendance into a frictionless mobile cockpit.",
      problemStatement:
        "Enterprise human resource operations are fragmented across outdated legacy desktop portals, resulting in delayed leave approvals, inaccurate attendance tracking, and low employee engagement during performance reviews. Department heads spend 45+ minutes daily navigating clunky tables.",
      solutionOverview:
        "A modern, role-aware enterprise mobile suite built for both team members and department executives. Features biometric one-tap check-in, swipe-to-approve leave requests, real-time department headcount telemetry, and clear performance scorecards.",
      metrics: [
        { label: "High-Fidelity Screens", value: "20+ Screens" },
        { label: "Approval Cycle Time", value: "-65% Faster" },
        { label: "Core Enterprise Modules", value: "5 Modules" },
        { label: "WCAG Contrast", value: "AAA Compliant" },
      ],
      overview: {
        client: "Enterprise Workforce Design Initiative",
        context: "B2B Mobile & Tablet Product Design",
        platform: "Enterprise iOS & Android Mobile",
        duration: "8 Weeks",
        deliverables: [
          "Stakeholder & HR Operations Research Synthesis",
          "2 Competitor Teardowns & Architectural Gap Matrix",
          "User Personas, Empathy Maps & Multi-Tier Permission Maps",
          "Information Architecture & Role-Based Navigation Flows",
          "20+ High-Fidelity UI Screens & Enterprise Component Kit",
          "Interactive Figma Prototype & Moderated Usability Evaluation",
        ],
      },
      research: {
        methods: [
          "Contextual Interviews with 8 HR Directors and Department Managers",
          "Competitor Teardowns of BambooHR and Darwinbox",
          "Time-and-Motion Task Studies for Routine Approvals",
        ],
        participants: "HR Managers, Operations Executives, and Distributed Remote Team Members",
        keyInsights: [
          "Department heads process 80% of approvals while away from their desks, yet desktop portals require 6 authentication steps.",
          "Employees find reporting attendance and tracking accrued leave confusing without visual progress rings.",
          "Managers lack an instant snapshot of who is on-site, remote, or out-of-office during morning standup planning.",
        ],
        competitorAnalysis:
          "Evaluated BambooHR and Darwinbox. Mobile apps suffered from cramped tabular navigation, tiny click targets for critical actions, and cumbersome multi-page flows for simple half-day leave requests.",
      },
      personas: [
        {
          name: "Deepa Menon",
          role: "HR Operations Lead & People Director",
          painPoint: "Drowning in endless notification emails for leave requests and manual attendance corrections across 120 employees.",
          goal: "Needs an executive mobile cockpit to batch-approve requests and track department attendance in under 2 minutes.",
          quote: "I just need to glance at my phone at 9 AM and see who is on leave and approve routine requests with a single swipe.",
        },
        {
          name: "Rahul Nair",
          role: "Senior Software Engineer (Hybrid)",
          painPoint: "Never knows exact accrued sick/vacation leave balances and finds formal desktop portals cumbersome on mobile.",
          goal: "Wants a quick, frictionless way to clock in, request planned days off, and see status updates in real time.",
          quote: "Booking two days off shouldn't feel like submitting a government tax return.",
        },
      ],
      architecture: {
        description:
          "Architected role-aware navigation that dynamically adapts visible modules based on whether the authenticated user is an Individual Contributor or a Department Manager.",
        hierarchy: [
          { level: "Manager View", items: ["Executive Cockpit", "Pending Approvals Inbox", "Team Presence", "Directory", "Settings"] },
          { level: "Employee View", items: ["My Desk (Attendance)", "Leave Balance", "Company Directory", "Payslips & Perks"] },
          { level: "Workflow Overlays", items: ["Swipe-to-Approve Drawer", "Leave Application Modal", "Attendance Dispute Flow"] },
        ],
        keyFlows: [
          "1-Tap Biometric Attendance Check-In / Check-Out",
          "Contextual Leave Request Submission with Instant Accrual Calculation",
          "Manager Swipe-to-Approve Batch Request Flow",
          "Department Hierarchy & Instant Peer Communication Shortcuts",
        ],
      },
      wireframing: {
        approach:
          "Designed multi-density layout iterations testing how to display rich enterprise employee data without creating cognitive fatigue.",
        tradeoffs: [
          "Swipe Gesture vs Separate Approve/Reject Buttons: Swipe gestures reduced approval time by 65% in timed usability trials.",
          "Attendance Metrics: Replaced numeric tabular logs with horizontal segmented bar gauges for immediate visual digestion.",
        ],
        keyDecisions: [
          "Built a persistent bottom-anchored summary tray showing active department headcounts and leave balances.",
          "Added instant WhatsApp, Phone, and Email action triggers directly on employee directory cards.",
        ],
      },
      designSystemHighlights: {
        typography: "Space Grotesk with tabular figures for rapid numerical reading across enterprise dashboards.",
        colors: [
          { name: "Deep Charcoal Canvas", hex: "#0B0D12", role: "Interface Canvas" },
          { name: "Elevated Card", hex: "#171A23", role: "Enterprise Component Surface" },
          { name: "Electric Violet", hex: "#A78BFA", role: "Primary Interactive State" },
          { name: "Indigo Accent", hex: "#6366F1", role: "Corporate Badges & Analytics" },
          { name: "Cyan Highlight", hex: "#22D3EE", role: "Real-Time Telemetry & Active Status" },
        ],
        components: [
          "Multi-Segment Attendance Bar Gauge",
          "Swipe-to-Approve Request Card with Micro-Feedback",
          "Department Filter Carousel with Headcount Counters",
          "Employee Directory Quick-Action Card with Communication Shortcuts",
        ],
      },
      screensCount: "20+ High-Fidelity Screens",
      usabilityTesting: {
        testingMethod:
          "Evaluated with 5 enterprise team members and 3 HR department heads across 4 standard enterprise scenarios on Figma mobile prototype.",
        findings: [
          "Leave balance calculations were confusing when displayed only as raw hours rather than available days.",
          "Managers requested direct contact shortcuts (call/message) directly from the employee profile card.",
          "Attendance timeline graphs needed an easier toggle between weekly and monthly overviews.",
        ],
        iterations: [
          "Converted leave balance widgets to dual-readout (Days + Hours accrued) with visual circular progress rings.",
          "Added instant WhatsApp / Call / Email action buttons directly on every employee directory profile.",
          "Introduced segmented pill controls allowing one-tap switching between 7-day and 30-day attendance trends.",
        ],
      },
      finalSolution: {
        headline: "Enterprise Power with Consumer-Grade Elegance",
        keyHighlights: [
          {
            title: "Swipe-to-Approve Inboxes",
            description: "Managers process routine leave, expenses, and schedule modifications in seconds rather than minutes.",
          },
          {
            title: "Real-Time Headcount Radar",
            description: "Immediate department visibility showing remote, in-office, and out-of-office distribution.",
          },
          {
            title: "Biometric Self-Service Check-In",
            description: "Geo-fenced and biometric attendance logging providing total transparency without cumbersome hardware punch cards.",
          },
        ],
      },
      outcomes: [
        "Designed 20+ responsive high-fidelity mobile screens covering all key HR operational facets.",
        "Streamlined the leave approval workflow from 6 distinct desktop steps down to a single contextual swipe gesture.",
        "Engineered an enterprise-grade component system compliant with strict WCAG AAA contrast accessibility.",
      ],
      learnings: [
        "Designing enterprise applications requires balancing high information density with breathing room and whitespace.",
        "Understanding database schemas from my MCA background helped model accurate data states for leave approvals.",
      ],
    },

    {
      slug: "kitchen-store",
      title: "Kitchen Store",
      subtitle: "Home & Kitchen Essentials E-Commerce Platform",
      category: "E-Commerce Website",
      role: "Lead UI/UX Designer & Information Architect",
      timeline: "6-Week Design Sprint",
      tools: ["Figma", "Photoshop", "Illustrator", "Miro"],
      methodology: "Double Diamond & Conversion UX",
      image: "/assets/kitchen_store.jpg",
      featured: true,
      tagline:
        "Designing a modern, high-converting e-commerce web platform for culinary enthusiasts to discover, compare, and shop premium cookware and home appliances.",
      problemStatement:
        "Home cooks and culinary shoppers face friction navigating fragmented kitchenware catalogs, cluttered product comparison tables, and confusing checkout flows, leading to high cart abandonment rates and poor mobile-to-desktop parity.",
      solutionOverview:
        "A visually rich, human-centred e-commerce web experience featuring intuitive category taxonomies (Cookware, Dinnerware, Gadgets, Storage), streamlined quick-view specifications, interactive bundle builders, and a 2-step frictionless checkout.",
      metrics: [
        { label: "Checkout Conversion", value: "+38%" },
        { label: "Cart Abandonment", value: "-45%" },
        { label: "Avg. Session Duration", value: "+2.4m" },
        { label: "Desktop & Mobile Screens", value: "24+ Screens" },
      ],
      overview: {
        client: "Kitchen Store Inc.",
        context: "DTC Kitchen & Home Essentials E-Commerce Platform",
        platform: "Responsive Web (Desktop 1440px & Mobile 390px)",
        duration: "6 Weeks",
        deliverables: [
          "Generative Consumer Research & Buyer Personas",
          "Information Architecture & Taxonomy Reorganization",
          "Product Listing & Faceted Filter Experience",
          "High-Fidelity Desktop & Mobile Prototypes",
          "Checkout Conversion Optimization & Design System",
        ],
      },
      research: {
        methods: [
          "In-Depth Interviews with 12 Avid Home Cooks",
          "Competitive Benchmarking (Williams Sonoma, Sur La Table, Made In)",
          "Usability Testing on Existing Checkout Funnel",
        ],
        participants: "12 participants ranging from newlywed apartment dwellers to experienced home chefs",
        keyInsights: [
          "Shoppers struggle to determine pot/pan compatibility with induction vs gas cooktops without clear visual badges.",
          "Customers desire interactive bundle discounts (e.g., pan + lid + silicone utensil) directly on the product detail page.",
          "A cluttered multi-tier navigation menu caused 62% of users to resort immediately to search rather than exploring categories.",
        ],
        competitorAnalysis:
          "Benchmarked leading cookware brands. Discovered that most platforms suffer from tiny specification text, lack of dimension diagrams, and cumbersome cart confirmation drawers.",
      },
      personas: [
        {
          name: "Meera Krishnan",
          role: "Passionate Home Cook & Food Enthusiast",
          painPoint: "Finds it hard to verify whether ceramic non-stick cookware is oven-safe and toxin-free.",
          goal: "Wants clear visual badges, transparent customer review photos, and fast 1-click reordering.",
          quote: "When I buy quality kitchenware, I want to see how it looks in an actual kitchen and know the exact dimensions.",
        },
        {
          name: "Arjun Verma",
          role: "Modern Apartment Owner & Weekend Baker",
          painPoint: "Gets overwhelmed by massive multi-level menus and hard-to-read product variant selectors.",
          goal: "Needs clean category browsing, curated starter kits, and transparent delivery estimates.",
          quote: "Shopping for kitchen essentials shouldn't feel like navigating a warehouse catalog.",
        },
      ],
      architecture: {
        description:
          "Organized the catalog into 5 primary culinary departments with structured faceted filtering by material (Stainless Steel, Cast Iron, Ceramic), heat source, and capacity.",
        hierarchy: [
          { level: "Primary Departments", items: ["Cookware & Bakeware", "Dinnerware & Cutlery", "Kitchen Gadgets", "Small Appliances", "Storage & Organization"] },
          { level: "Shopping Utilities", items: ["Smart Search with Visual Autocomplete", "Orders", "Wishlist", "Cart Drawer", "User Profile"] },
          { level: "Product Experience", items: ["Quick-View Drawer", "Material Specs", "Oven Compatibility", "Bundle Builder", "Customer Recipes"] },
        ],
        keyFlows: [
          "Visual Department Discovery & Faceted Filter Flow",
          "Interactive Cookware Bundle & Customization Flow",
          "Frictionless 2-Step Express Checkout Flow",
        ],
      },
      wireframing: {
        approach:
          "Explored desktop card layouts with prominent hero banner lifestyle imagery, floating sticky add-to-cart bars, and tabbed product care guides.",
        tradeoffs: [
          "Sticky Add-to-Cart Bar on Desktop: Increased conversion rate by 22% during prototype testing.",
          "Faceted Filters: Left-sidebar persistent filters outperformed dropdown menus for product discovery on desktop.",
        ],
        keyDecisions: [
          "Added prominent material and oven-safety badges directly on product grid cards.",
          "Integrated interactive cooking video snippets and customer recipe reviews on detail pages.",
        ],
      },
      designSystemHighlights: {
        typography: "Space Grotesk for bold editorial headlines paired with Inter for clear pricing and technical specs.",
        colors: [
          { name: "Warm Scarlet Accent", hex: "#E11D48", role: "Primary CTA & Discount Badges" },
          { name: "Honey Amber", hex: "#F59E0B", role: "Rating Stars & Review Highlights" },
          { name: "Kitchen Parchment", hex: "#FCFBF7", role: "Canvas Background" },
          { name: "Deep Charcoal", hex: "#1C1917", role: "Heading & Body Text" },
        ],
        components: [
          "Responsive Product Card with Hover Gallery",
          "Faceted Filter Sidebar with Pill Toggles",
          "Slide-Over Mini Cart Drawer with Free Shipping Bar",
          "Oven & Heat Compatibility Badge Row",
        ],
      },
      screensCount: "24+ Desktop & Mobile Screens",
      usabilityTesting: {
        testingMethod:
          "Moderated task-based testing with 6 users across search, product comparison, and mock checkout on desktop.",
        findings: [
          "Users loved the clean visual hierarchy and large hero images.",
          "Cart slider needed an obvious free shipping progress indicator ($50 threshold).",
          "Mobile filter tray required a fixed 'View Results' sticky footer button.",
        ],
        iterations: [
          "Added animated Free Shipping countdown bar inside the cart drawer.",
          "Simplified checkout form fields from 14 down to 7 essentials with Apple Pay/Google Pay shortcuts.",
        ],
      },
      finalSolution: {
        headline: "A Warm, Aesthetically Inspiring Culinary Marketplace",
        keyHighlights: [
          {
            title: "Frictionless Product Discovery",
            description: "Structured department navigation and instant visual search autocomplete make finding specialty kitchen tools effortless.",
          },
          {
            title: "Rich Culinary Storytelling",
            description: "High-resolution kitchen lifestyle imagery, dimension callouts, and chef care guides instill buying confidence.",
          },
          {
            title: "Optimized 2-Step Checkout",
            description: "Streamlined express payments and transparent shipping calculations reduce cart abandonment by 45%.",
          },
        ],
      },
      outcomes: [
        "Delivered comprehensive 24+ screen responsive design system for desktop and mobile.",
        "Reduced checkout funnel friction, achieving a 38% increase in task completion during prototype testing.",
        "Praised by stakeholders for blending warm lifestyle aesthetics with rigorous e-commerce conversion best practices.",
      ],
      learnings: [
        "E-commerce UX requires a delicate balance between inspiration (large hero photography) and efficiency (scannable specs and filters).",
        "Micro-copy such as 'Oven Safe to 500°F' and 'Dishwasher Friendly' directly answers customer anxiety points before checkout.",
      ],
    },

    {
      slug: "ecoride-rentals",
      title: "EcoRide Rentals",
      subtitle: "Smart & Sustainable Car Rental Platform",
      category: "Web Platform",
      role: "Lead UI/UX Designer & Product Strategist",
      timeline: "5-Week Design Sprint",
      tools: ["Figma", "Photoshop", "Illustrator", "Miro"],
      methodology: "Double Diamond & Service Design",
      image: "/assets/ecoride_rentals.jpg",
      featured: true,
      tagline:
        "Designing a smart, sustainable car rental platform that empowers travelers to effortlessly book premium sports cars and everyday eco-friendly fleets.",
      problemStatement:
        "Car rental platforms often present overwhelming fee structures, clunky multi-step booking forms, lack of transparent EV/fuel telemetry, and poor mobile-to-desktop parity, causing high booking abandonment and consumer friction.",
      solutionOverview:
        "A seamless, modern car rental web experience featuring streamlined location & date pickers, transparent fleet categorisation (Premium Luxury & Normal Eco Fleets), flexible pickup scheduling, and 2-minute booking with zero hidden credit card fees.",
      metrics: [
        { label: "Booking Speed", value: "< 2 Mins" },
        { label: "Fleet Conversion", value: "+32%" },
        { label: "Customer Trust Rating", value: "4.9 ★" },
        { label: "Responsive Screens", value: "22+ Screens" },
      ],
      overview: {
        client: "EcoRide Rentals Mobility Group",
        context: "Modern Car Rental & Sustainable Mobility Platform",
        platform: "Responsive Web (Desktop 1440px & Mobile 390px)",
        duration: "5 Weeks",
        deliverables: [
          "User Journey & Friction Point Mapping",
          "Faceted Fleet Filter Architecture (Premium vs Eco)",
          "Booking Engine & Location Selector Widget",
          "22+ High-Fidelity Responsive Screens",
          "Figma Design System & Interactive Prototype",
        ],
      },
      research: {
        methods: [
          "Interviews with 14 Regular Business and Vacation Travelers",
          "Competitive Usability Audits of Hertz, Turo, and Sixt",
          "Booking Flow Drop-off Funnel Analysis",
        ],
        participants: "14 participants comparing weekend leisure renters and frequent corporate travelers",
        keyInsights: [
          "Users prioritize transparent pricing up front—unexpected insurance add-ons and deposit rules cause 54% of checkout abandons.",
          "Renters want instant clarity between premium sports/luxury performance vs high-efficiency normal/eco vehicles.",
          "Flexible pickup location maps with airport shuttle times dramatically increase booking confidence.",
        ],
        competitorAnalysis:
          "Audited traditional car rental portals. Found clunky calendar inputs, hidden drop-off charges, and zero clarity on vehicle features (e.g., Apple CarPlay, seating capacity, luggage fit).",
      },
      personas: [
        {
          name: "Rohan Mathews",
          role: "Corporate Consultant & Weekend Explorer",
          painPoint: "Frustrated by hidden airport surcharges and confusing vehicle class substitutions.",
          goal: "Wants instant booking confirmation, guaranteed premium vehicle models, and hassle-free keyless pickup.",
          quote: "When I rent a car, I want the exact vehicle I chose with transparent pricing and zero surprises at the counter.",
        },
        {
          name: "Ananya Sen",
          role: "Eco-Conscious Vacationer & Family Traveler",
          painPoint: "Worries about EV range and charging accessibility when traveling across new cities.",
          goal: "Needs transparent EV range telemetry, child seat add-ons, and simple 1-click insurance options.",
          quote: "I prefer driving hybrid or electric vehicles on holiday, but I need clear range specs before booking.",
        },
      ],
      architecture: {
        description:
          "Built an intuitive booking architecture centered around the 'Find Your Perfect Ride' hero engine, faceted fleet comparison, and transparent pricing cards.",
        hierarchy: [
          { level: "Primary Navigation", items: ["Home", "Fleet Catalog", "About", "Become a Provider", "Contact Us", "Login / Signup"] },
          { level: "Fleet Segments", items: ["Premium Sports & Luxury", "Electric & Hybrid (Eco)", "Everyday Standard Sedans", "SUVs & Multi-Seater"] },
          { level: "Booking Utilities", items: ["Pickup / Drop-off Selector", "Calendar Date Picker", "Seating Filter", "Insurance Package Compare"] },
        ],
        keyFlows: [
          "Search & Fleet Filter Flow",
          "Vehicle Detail & Spec Comparison Flow",
          "Fast 2-Step Reservation & Document Verification Flow",
        ],
      },
      wireframing: {
        approach:
          "Prototyped a clean desktop hero search widget with instant location autocomplete, date pickers, and capacity selectors alongside high-impact vehicle photography.",
        tradeoffs: [
          "Unified vs Multi-Page Booking Form: Consolidating location, date, and seating filters into a single hero search card boosted initial search engagement by 41%.",
          "Transparent Price Breakdown: Displaying full daily rates including standard insurance reduced checkout bounce rate by 35%.",
        ],
        keyDecisions: [
          "Added prominent feature badges (Easy Booking, Eco-Friendly Fleet, Flexible Pickup, Affordable Rides) directly on the landing page.",
          "Integrated luggage and passenger capacity visual counters on every vehicle card.",
        ],
      },
      designSystemHighlights: {
        typography: "Space Grotesk for energetic automotive headlines paired with Inter for clean tabular specifications.",
        colors: [
          { name: "Electric Emerald & Teal", hex: "#0D9488", role: "Primary Brand & Eco Accents" },
          { name: "Cobalt Blue", hex: "#2563EB", role: "Search CTA & Action Triggers" },
          { name: "Clean Pearl White", hex: "#FFFFFF", role: "Component Surface" },
          { name: "Deep Charcoal", hex: "#1C1917", role: "Typography & High Contrast Elements" },
        ],
        components: [
          "Hero Booking Widget Card",
          "Vehicle Comparison Grid with Feature Pills",
          "Date & Time Sweep Picker",
          "Transparent Price Matrix Modal",
        ],
      },
      screensCount: "22+ Responsive Screens",
      usabilityTesting: {
        testingMethod:
          "Moderated scenario-based testing with 6 travelers booking weekend getaways and airport pickups.",
        findings: [
          "Users appreciated the explicit 'No Credit Card Fees' reassurance below the search widget.",
          "Date pickers needed clear visual indication of same-day vs multi-day pricing discounts.",
        ],
        iterations: [
          "Added 24/7 Phone Support and No Credit Card Fees badges directly into the booking widget.",
          "Designed a 1-tap car tier switcher between 'Eco Daily' and 'Premium Luxury' directly on the fleet results page.",
        ],
      },
      finalSolution: {
        headline: "A Modern, Transparent Mobility Experience",
        keyHighlights: [
          {
            title: "Instant Hero Search Engine",
            description: "Intuitive pick-up, drop-off, date, and capacity selectors allow travelers to find their ideal vehicle in under 30 seconds.",
          },
          {
            title: "Guaranteed Fleet Transparency",
            description: "Detailed vehicle specifications, real photographs, and carbon emission stats empower confident rental choices.",
          },
          {
            title: "Seamless Provider & Renter Parity",
            description: "Dual-sided onboarding allows fleet owners to list cars while renters enjoy rapid booking confirmation.",
          },
        ],
      },
      outcomes: [
        "Designed 22+ responsive desktop and mobile screens establishing a premium automotive identity.",
        "Reduced booking cycle time from over 7 minutes on legacy platforms down to under 2 minutes.",
        "Praised by users for transparent pricing, eco-conscious fleet options, and sleek UI craftsmanship.",
      ],
      learnings: [
        "In automotive and rental UX, upfront transparency is the single strongest trust driver.",
        "Streamlining the search widget into the hero fold dramatically increases top-of-funnel conversion.",
      ],
    },

    {
      slug: "travelista",
      title: "Travelista",
      subtitle: "Travel Package Booking & Discovery Mobile App",
      category: "Mobile App",
      role: "Lead UI/UX Designer & Product Researcher",
      timeline: "5-Week Mobile Sprint",
      tools: ["Figma", "Photoshop", "Illustrator", "Miro"],
      methodology: "Double Diamond & Discovery-Driven UX",
      image: "/assets/travelista.jpg",
      featured: true,
      tagline:
        "Designing a modern travel companion app that helps wanderlust travelers discover trending destinations, build personalized bucketlists, and book custom holiday packages effortlessly.",
      problemStatement:
        "Travelers struggle with disjointed itinerary planning across flight portals, tour aggregators, and travel blogs, resulting in booking fatigue, hidden seasonal costs, and lack of verified localized destination guides.",
      solutionOverview:
        "An all-in-one mobile experience empowering users to discover seasonal & trending destinations (Taj Mahal, Goa, Kashmir, Manali), build collaborative bucketlists, customize day-by-day travel packages, and book flights, stays, and activities with transparent pricing.",
      metrics: [
        { label: "Package Booking Rate", value: "+36%" },
        { label: "Trip Planning Time", value: "-60%" },
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "High-Fidelity Screens", value: "20+ Screens" },
      ],
      overview: {
        client: "Travelista Global Inc.",
        context: "Consumer Travel & Tour Packaging Mobile App",
        platform: "iOS & Android Mobile (390 x 844 px)",
        duration: "5 Weeks",
        deliverables: [
          "Travel Persona Synthesis & Journey Mapping",
          "Information Architecture & Taxonomy (Destinations, Trip Types, Activities)",
          "Personalized Package Customizer Flow",
          "20+ High-Fidelity UI Screens & Component Library",
          "Interactive Figma Prototype & Usability Testing",
        ],
      },
      research: {
        methods: [
          "Semi-Structured Interviews with 15 Frequent Leisure Travelers",
          "Competitive Teardowns of MakeMyTrip, Airbnb, and Hopper",
          "Diary Study of Vacation Booking Pain Points",
        ],
        participants: "15 participants including solo backpackers, couples, and family holiday planners",
        keyInsights: [
          "Users spend an average of 14 hours browsing fragmented websites before finalizing a vacation package.",
          "Personalized recommendations based on travel style (Adventure, Cultural, Relaxation, Camping) dramatically increase booking confidence.",
          "Visual bucketlists with destination photo grids and price tags keep users engaged long before their travel dates.",
        ],
        competitorAnalysis:
          "Audited traditional travel booking apps. Discovered that existing tools prioritize rigid preset packages with poor visual storytelling and lack transparent cancellation terms.",
      },
      personas: [
        {
          name: "Pooja Nair",
          role: "Adventure Travel Enthusiast & Content Creator",
          painPoint: "Overwhelmed by generic holiday tours that don't match her active hiking and cultural exploration interests.",
          goal: "Wants personalized travel packages, verified seasonal weather insights, and curated bucketlist collections.",
          quote: "I want a trip planner that understands my vibe—whether I want scenic camping in Kashmir or a heritage trail in Mysore.",
        },
        {
          name: "Aditya Sharma",
          role: "Family Vacation Planner & Software Architect",
          painPoint: "Struggles to balance kid-friendly activities with comfortable stays without spending days reading reviews.",
          goal: "Needs transparent package inclusions, flexible date sweeps, and instant 1-tap customer support.",
          quote: "Booking a family package should be transparent and reassuring from the first tap to the boarding gate.",
        },
      ],
      architecture: {
        description:
          "Shallow 4-tab mobile architecture centered around Discovery Feed, Interactive Trip Planner, Saved Bucketlists, and Active Bookings.",
        hierarchy: [
          { level: "Primary Navigation", items: ["Explore (Home)", "Trip Planner", "Bucketlist", "My Bookings", "Profile"] },
          { level: "Discovery Categories", items: ["Trending Destinations", "Trip Types (Trek, Beach, Heritage)", "Seasonal Spots", "Tailored Packages"] },
          { level: "Package Customizer", items: ["Stay Selector", "Activity Add-Ons", "Itinerary Timeline", "Transparent Price Breakdown"] },
        ],
        keyFlows: [
          "Destination Search & Seasonal Filter Flow",
          "Custom Travel Package Customizer Flow",
          "1-Tap Bucketlist Creation & Shared Itinerary Flow",
        ],
      },
      wireframing: {
        approach:
          "Explored immersive card carousels with vibrant destination photography, segmented category pills, and thumb-friendly bottom navigation.",
        tradeoffs: [
          "Interactive Package Builder vs Static Tours: Allowing modular customization of hotels and activities boosted booking intent by 44% in prototype testing.",
          "Bottom Navigation Thumb Zone: Keeping Bucketlist and Explore reachable within thumb sweep reduced cognitive load.",
        ],
        keyDecisions: [
          "Added instant 'Save to Bucketlist' heart buttons directly on every destination card.",
          "Integrated day-by-day visual itinerary cards with real travel times and activity tags.",
        ],
      },
      designSystemHighlights: {
        typography: "Space Grotesk for energetic travel headlines paired with Inter for clear itinerary schedules and pricing.",
        colors: [
          { name: "Emerald Mountain Green", hex: "#10B981", role: "Primary Brand & Eco Exploration" },
          { name: "Golden Sun Amber", hex: "#F59E0B", role: "Ratings, Badges & Highlights" },
          { name: "Sky Azure Blue", hex: "#0EA5E9", role: "Flight & Travel Flow Indicators" },
          { name: "Clean Off-White", hex: "#FCFBF7", role: "Canvas Background" },
        ],
        components: [
          "Destination Spotlight Card with Heart Toggle",
          "Segmented Trip Type Filter Pills",
          "Interactive Day-by-Day Itinerary Step Card",
          "Package Pricing Breakdown Sheet",
        ],
      },
      screensCount: "20+ High-Fidelity Mobile Screens",
      usabilityTesting: {
        testingMethod:
          "Moderated task testing with 6 travelers planning a 5-day holiday package on interactive Figma mobile prototype.",
        findings: [
          "Users loved the visual bucketlists with destination counters.",
          "The package customization step needed clearer itemized cost feedback when swapping hotels.",
        ],
        iterations: [
          "Added dynamic price recalculation pill with '+/- $0' delta badges during hotel and activity selection.",
          "Introduced localized weather & peak season travel tags on each destination profile.",
        ],
      },
      finalSolution: {
        headline: "An Inspiring, Frictionless Gateway to the World",
        keyHighlights: [
          {
            title: "Curated Visual Discovery",
            description: "Vibrant high-resolution imagery and seasonal filters make exploring new domestic and international destinations effortless.",
          },
          {
            title: "Personalized Package Customizer",
            description: "Travelers easily mix and match stays, transport, and handpicked excursions with transparent real-time pricing.",
          },
          {
            title: "Collaborative Bucketlists",
            description: "Organize dream trips into themed folders (Camping, Heritage, Beach) with friends and family.",
          },
        ],
      },
      outcomes: [
        "Engineered 20+ responsive high-fidelity screens praised for vibrant visual aesthetics and intuitive UX flows.",
        "Decreased end-to-end trip package booking time by 60% compared to legacy travel aggregator sites.",
        "Achieved 96% task completion rate and a 4.9/5 satisfaction score in usability validation.",
      ],
      learnings: [
        "Travel UX thrives on visual aspiration combined with absolute price and itinerary transparency.",
        "Giving users ownership of their itinerary through simple add/remove toggles turns browsing into active buying intent.",
      ],
    },

    {
      slug: "learn-leap",
      title: "Learn Leap",
      subtitle: "Gamified Learning & Educational Gaming Mobile App",
      category: "Mobile App",
      role: "Lead UI/UX Designer & Gamification Specialist",
      timeline: "5-Week EdTech Sprint",
      tools: ["Figma", "Illustrator", "Photoshop", "Miro"],
      methodology: "Double Diamond & Gamified Learning UX",
      image: "/assets/learn_leap.jpg",
      featured: true,
      tagline:
        "Designing an interactive mobile learning companion that empowers K-12 students to master science, mathematics, and languages through bite-sized, gamified challenges.",
      problemStatement:
        "Conventional learning apps often feel like digital textbooks—overwhelming students with dry text and rote drills, which leads to high drop-off rates, exam anxiety, and disengagement in foundational subjects like maths and science.",
      solutionOverview:
        "Learn Leap transforms curriculum subjects into rewarding mini-games, dynamic quizzes, and interactive visual quests. Featuring an adaptive learning engine, AI-assisted hints, and streak tracking, students build daily study habits while learning through play.",
      metrics: [
        { label: "Daily Active Learners", value: "92%" },
        { label: "Subject Retention", value: "+44%" },
        { label: "Curriculum Games", value: "35+ Games" },
        { label: "App Store Rating", value: "4.9 ★" },
      ],
      overview: {
        client: "Learn Leap EdTech Labs",
        context: "Gamified K-12 Mobile Learning Application",
        platform: "iOS & Android (Flutter / Native)",
        duration: "5 Weeks",
        deliverables: [
          "Curriculum Gamification Framework",
          "Student & Parent Personas",
          "Interactive Prototypes & Game HUDs",
          "30+ High-Fidelity Mobile Screens & Design System",
        ],
      },
      research: {
        methods: [
          "User Interviews with 18 Students (Ages 8-15)",
          "Survey of 32 Parents and STEM Educators",
          "Competitive Teardown of Duolingo, Prodigy & Kahoot",
          "Game-Loop Usability Testing & Motivation Mapping",
        ],
        participants: "18 primary & middle school students and 32 parent/teacher educators",
        keyInsights: [
          "Students feel overwhelmed when confronted with dense paragraphs; micro-challenges under 3 minutes retain 3x more focus.",
          "Immediate visual feedback (confetti, level badges, unlockable characters) directly stimulates repeat practice in difficult math topics.",
          "Language and science concepts stick significantly faster when paired with drag-and-drop puzzles and sensory cues rather than multiple-choice text.",
        ],
        competitorAnalysis:
          "Existing platforms either lacked structured curricular alignment (too casual) or felt like digitized exam papers with zero playful engagement.",
      },
      architecture: {
        description:
          "Modular gamified architecture: Student Discovery Hub, Subject Quest Arenas, Adaptive Practice Lab, and Parent Progress Insights.",
        hierarchy: [
          { level: "Onboarding & Auth", items: ["Age & Grade Select", "Avatar Creator", "Subject Diagnostic Quiz", "Fast Social Login"] },
          { level: "Home Discovery", items: ["Subject Select (Science, Maths, Language)", "Top Games (Math Mania)", "Daily Quest Streak", "AI Homework Buddy"] },
          { level: "Game Arena", items: ["Space Purge", "Digit Dash", "Word Quest", "Interactive Level Map", "Instant Scoring HUD"] },
          { level: "Growth & Profile", items: ["Mastery Badges", "Weekly XP League", "Skill Tree", "Parent Progress Portal"] },
        ],
        keyFlows: [
          "Seamless Student Onboarding & Diagnostic Placement Flow",
          "Subject Mini-Game Launch & Interactive Challenge Loop",
          "Reward Ceremony, XP Streak Tracking & Progress Dashboard",
        ],
      },
      screensCount: "30+ High-Fidelity Mobile Screens",
      usabilityTesting: {
        testingMethod: "Tested interactive Figma prototype across 2 rounds with 14 student participants.",
        findings: [
          "Younger learners hesitated on wordy tutorials; visual tooltips and animated mascot prompts reduced initial confusion by 80%.",
          "Students were eager to see how close they were to unlocking the next badge during a game.",
        ],
        iterations: [
          "Replaced static instructions with an animated mascot demo before each new mini-game mechanic.",
          "Added a dynamic top-of-screen XP meter in the Game HUD to clearly celebrate streak milestones.",
        ],
      },
      outcomes: [
        "Crafted 30+ production-ready mobile screens with responsive design tokens for iOS and Android.",
        "Boosted concept retention by +44% compared to baseline textbook revision in test cohorts.",
        "Achieved a 92% daily study completion rate driven by positive streak reinforcement.",
      ],
      learnings: [
        "In educational UX, playful mechanics must always serve the pedagogical goal without distracting from core comprehension.",
        "Reward loops should celebrate effort and steady progress rather than penalizing mistakes.",
      ],
    },

    {
      slug: "deep-dive",
      title: "Eco Deep Dive",
      subtitle: "Interactive Marine Life & Ocean Conservation Educational Platform",
      category: "Web Platform",
      role: "Lead UI/UX Designer & Information Architect",
      timeline: "4-Week Web Sprint",
      tools: ["Figma", "Illustrator", "Photoshop", "Miro"],
      methodology: "Information Architecture & Immersive Storytelling UX",
      image: "/assets/deep_dive.jpg",
      featured: true,
      tagline:
        "Designing an immersive educational web platform that helps students and ocean enthusiasts explore marine creatures, vulnerable coral reefs, and oceanic ecosystems.",
      problemStatement:
        "Understanding marine biodiversity and ocean conservation often suffers from fragmented encyclopedic data, dry scientific jargon, and lack of visual engagement, leaving students and nature enthusiasts disconnected from ocean health.",
      solutionOverview:
        "Eco Deep Dive bridges scientific oceanography with captivating digital design—organizing marine species across depth zones, featuring interactive habitat guides (Coral Reefs, Deep Trenches, Mammals), high-res photo galleries, and actionable conservation awareness.",
      metrics: [
        { label: "Species Cataloged", value: "250+ Species" },
        { label: "Engagement Time", value: "+58%" },
        { label: "Ecosystem Zones", value: "7 Habitats" },
        { label: "Conservation Clicks", value: "3.4x Lift" },
      ],
      overview: {
        client: "Marine Life & Ocean Conservation Society",
        context: "Educational Biodiversity Web Portal & Virtual Marine Guide",
        platform: "Responsive Web & Interactive Desktop Portal",
        duration: "4 Weeks",
        deliverables: [
          "Taxonomy & Information Architecture Hierarchy",
          "Interactive Habitat & Depth Explorer Wireframes",
          "Visual Illustration & Photo Asset Design System",
          "24+ High-Fidelity Responsive Web Pages",
        ],
      },
      research: {
        methods: [
          "Interviews with 12 Marine Educators & University Students",
          "Content Sorting & Card Sort Study for 250+ Marine Species",
          "Benchmarking National Geographic, Oceana & Monterey Bay Aquarium",
          "Cognitive Load & Visual Storytelling Assessment",
        ],
        participants: "12 marine science students, environmental educators, and curious young learners",
        keyInsights: [
          "Users retain ecological relationships 2.5x better when species are organized by habitat depth rather than alphabetical lists.",
          "High-impact visual photography paired with concise habitat factoids drives immediate emotional connection to conservation.",
          "Students specifically looked for quick cross-references between creature diet, predators, and endangerment status.",
        ],
        competitorAnalysis:
          "Existing ocean databases were text-dense repositories lacking visual hierarchy, interactive exploration, and responsive modern polish.",
      },
      architecture: {
        description:
          "Layered marine taxonomy architecture structured around ocean depth zones, biological classes, and direct conservation actions.",
        hierarchy: [
          { level: "Global Navigation", items: ["Home", "About Us", "Conservation", "Gallery", "Ecosystem", "Contact Us"] },
          { level: "Taxonomy Hub", items: ["Coral Reefs", "Fish", "Invertebrates", "Marine Mammals", "Microorganisms", "Marine Reptiles", "Sea Turtles"] },
          { level: "Interactive Explorer", items: ["Depth Slider", "Creature 3D Anatomy", "Habitat Mapping", "Diet & Predator Network"] },
          { level: "Action Hub", items: ["Endangered Watchlist", "Ocean Cleanup Missions", "Photo Gallery", "Educational Blog"] },
        ],
        keyFlows: [
          "Deep-Sea Creature Discovery & Habitat Exploration Flow",
          "Multi-Filter Species Search by Depth, Family & Threat Level",
          "Ocean Conservation & Community Action Pledge Flow",
        ],
      },
      screensCount: "24+ High-Fidelity Web Screens",
      usabilityTesting: {
        testingMethod: "Tested high-fidelity Figma web prototype with 10 participants across desktop and tablet.",
        findings: [
          "Users loved the visual depth slider but needed a persistent quick-jump menu to return to specific habitat tiers.",
          "Scientific classification tags were too prominent; users preferred common names first with Latin names as secondary metadata.",
        ],
        iterations: [
          "Added a persistent sticky habitat pill navigation for instant 1-click depth switching.",
          "Refined creature cards to lead with common names, vital size/diet stats, and IUCN conservation badge.",
        ],
      },
      outcomes: [
        "Designed 24+ responsive web pages with rich ocean-blue visual gradients and custom marine illustrations.",
        "Increased average session duration by +58% through interactive habitat discovery.",
        "Generated a 3.4x lift in ocean conservation pledge signups and educational resource downloads.",
      ],
      learnings: [
        "Informational websites succeed when rigorous educational data is packaged within visually delighting micro-interactions.",
        "Color temperature and visual depth gradients evoke subconscious immersion in maritime digital products.",
      ],
    },
  ] as Project[],

  experience: [
    {
      company: "Zoople Technologies",
      location: "Ernakulam, Kerala",
      role: "UI/UX Designer & Trainer",
      period: "July, 2023 - Present",
      current: true,
      summary:
        "Leading product design initiatives for digital interfaces while training and mentoring aspiring digital designers in user-centered design methodologies.",
      achievements: [
        "Designed user-friendly web and mobile interfaces and interactive prototypes using user-centered design principles.",
        "Created wireframes, user flows, high-fidelity UI designs and interactive prototypes to communicate design solutions across diverse project verticals.",
        "Trained 500+ students in UI/UX design, covering Figma, wireframing, prototyping, design systems, and usability testing.",
        "Reviewed and provided critical design feedback on 600+ UI/UX assignments and projects, focusing on usability, accessibility, and visual consistency.",
      ],
      technologies: ["Figma", "User Research", "Design Systems", "Prototyping", "Usability Testing", "Miro"],
    },
    {
      company: "Logiprompt Techno Solutions India Pvt.",
      location: "Trivandrum, Kerala",
      role: "Software Trainee",
      period: "January, 2023 - June, 2023",
      current: false,
      summary:
        "Full-stack web software training, providing foundational empathy for code constraints, component architecture, and developer handoffs.",
      achievements: [
        "Trained in front-end and back-end web development with responsive web design methodologies.",
        "Designed responsive web applications using HTML, CSS, and Bootstrap framework.",
        "Built dynamic web applications utilizing Laravel, PHP, and MySQL database management.",
        "Acquired deep empathy for front-end engineering constraints, enabling accurate developer handoffs and realistic component design.",
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Laravel", "PHP", "MySQL"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Sree Narayan Institute of Technology",
      location: "Kollam, Kerala",
      period: "2020 - 2022",
      highlights: [
        "Advanced studies in computer systems, human-computer interaction, and software design principles.",
        "Bridged technological architecture with human usability.",
      ],
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "IHRD, Mavelikara",
      location: "Alappuzha, Kerala",
      period: "2017 - 2020",
      highlights: [
        "Foundational coursework in computer applications, programming, database architecture, and web systems.",
      ],
    },
  ] as EducationItem[],

  skills: [
    {
      title: "UX Design & Strategy",
      description: "Uncovering user needs and building empathetic, user-validated interaction architectures.",
      skills: [
        { name: "User Research", highlight: true },
        { name: "User Personas & Journey Mapping", highlight: true },
        { name: "Information Architecture", highlight: true },
        { name: "User Flows", highlight: true },
        { name: "Wireframing", highlight: true },
        { name: "Interactive Prototyping", highlight: true },
        { name: "Usability Testing", highlight: true },
        { name: "Design Thinking", highlight: true },
        { name: "Double Diamond Methodology" },
        { name: "Empathy Mapping" },
      ],
    },
    {
      title: "UI Design & Visual Craft",
      description: "Translating brand strategy and user flows into cohesive, aesthetically superior visual products.",
      skills: [
        { name: "Visual Design", highlight: true },
        { name: "Design Systems", highlight: true },
        { name: "Responsive Design", highlight: true },
        { name: "Accessibility (WCAG AAA)", highlight: true },
        { name: "Typography & Hierarchy", highlight: true },
        { name: "8pt Spacing Scale", highlight: true },
        { name: "Component States & Variants", highlight: true },
        { name: "Micro-interactions" },
        { name: "Dark & Light Mode Systems" },
      ],
    },
    {
      title: "Design & Prototyping Tools",
      description: "Industry-standard software used daily for production interface creation and design mentorship.",
      skills: [
        { name: "Figma (Auto Layout & Variables)", highlight: true },
        { name: "Adobe XD", highlight: true },
        { name: "Adobe Photoshop", highlight: true },
        { name: "Adobe Illustrator", highlight: true },
        { name: "Miro", highlight: true },
      ],
    },
    {
      title: "Technical Knowledge & Handoff",
      description: "Engineering background providing deep empathy for code constraints and effortless developer collaboration.",
      skills: [
        { name: "HTML5 & Semantic Markup", highlight: true },
        { name: "CSS3 & Modern Layouts", highlight: true },
        { name: "Bootstrap & Responsive Grids", highlight: true },
        { name: "Developer Handoff & Specs", highlight: true },
        { name: "JavaScript Fundamentals" },
        { name: "Laravel & PHP Basics" },
        { name: "MySQL" },
      ],
    },
  ] as SkillCategory[],
};
