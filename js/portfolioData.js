/**
 * Portfolio Data Store (Vanilla JS)
 * Strictly English only (0 Malayalam characters)
 * No personal phone numbers.
 */

window.PORTFOLIO_DATA = {
  personal: {
    name: "Ananthakrishnan K Nair",
    displayName: "Nantha",
    title: "Senior UI/UX Designer & Educator",
    headline: "Designing intuitive digital experiences with heritage-rooted empathy & systems.",
    aboutIntro:
      "I am a UI/UX Designer and Design Educator based in Kerala, India, holding a Master of Computer Applications (MCA). My computer science background gives me a unique advantage: I design with deep technical empathy, bridging Figma auto layout and design tokens with clean frontend code reality.",
    location: "Karthika, Mavelikkara, Alappuzha, Kerala, India",
    email: "ananthakrishnanuiux@gmail.com",
    behance: "https://www.behance.net/ananthak7",
    linkedin: "https://www.linkedin.com/in/ananthakrishnan-k-nair",
    availability: "Available for UI/UX Design Roles & Product Opportunities",
    avatar: "assets/profile.jpg",
    resumeUrl: "Ananthakrishnan_K_Nair_Resume.pdf",
    verifiedTools: [
      { name: "Figma", badge: "Design Systems & Prototyping" },
      { name: "Photoshop", badge: "Visual Art & Masking" },
      { name: "Illustrator", badge: "Vector Iconography" },
      { name: "Adobe XD", badge: "Screen Flows" },
      { name: "Miro", badge: "IA & Co-Creation" }
    ]
  },

  stats: [
    { value: "3+ Yrs", label: "Product Design", sub: "Web & Mobile Ecosystems" },
    { value: "500+", label: "Designers Mentored", sub: "At Zoople Technologies" },
    { value: "35+", label: "Figma UI Systems", sub: "Reusable Tokens & Auto Layout" },
    { value: "MCA", label: "Computer Apps", sub: "Design-Dev Technical Literacy" }
  ],

  projects: [
    {
      id: "hr-connect",
      title: "HR Connect — Mobile HR & Workforce Suite",
      subtitle: "Employee attendance, leave management & hierarchy flow for high-growth enterprises.",
      category: "Mobile App",
      badge: "Mobile App • Figma",
      image: "assets/hrmanagement.jpg",
      metrics: [
        { label: "Screen Count", value: "20+" },
        { label: "Heuristic Pass", value: "100%" },
        { label: "Attendance Speed", value: "< 3 Sec" }
      ],
      tags: ["Figma", "User Research", "Wireframing", "Thumb Ergonomics"],
      summary:
        "Conducted generative research with HR operations leads and employees to eliminate attendance logging friction and multi-step leave approvals. Designed 20+ responsive screens featuring bottom-sheet workflows and accessible touch targets.",
      problem:
        "Legacy desktop HR portals required employees to navigate deep nested menus to perform routine check-ins, resulting in a 42% weekly compliance drop.",
      solution:
        "Engineered a thumb-friendly mobile app anchored in Nielsen Norman Group heuristics with 1-tap check-in, visual leave allowances, and instant manager approvals."
    },
    {
      id: "bloomwise",
      title: "Bloomwise — Plant Care & Gardening Companion",
      subtitle: "Personalized watering cadence, pest diagnosis & botanical community hub.",
      category: "Mobile App",
      badge: "Mobile App • Double Diamond",
      image: "assets/bloomwise.jpg",
      metrics: [
        { label: "Active Screens", value: "15+" },
        { label: "Care Consistency", value: "+54%" },
        { label: "User Rating", value: "4.9/5" }
      ],
      tags: ["Double Diamond", "Persona Mapping", "Design System", "WCAG AAA"],
      summary:
        "Applied Double Diamond design thinking to explore urban plant-parent anxiety. Created automated watering reminders, intelligent sunlight diagnosis guides, and botanical token systems.",
      problem:
        "First-time plant caretakers struggled to diagnose overwatering symptoms, causing premature plant mortality and user frustration.",
      solution:
        "Designed high-contrast visual health dials and schedule notifications tailored to specific indoor light levels and regional climates."
    },
    {
      id: "learnleap",
      title: "LearnLeap — EdTech Learning Platform",
      subtitle: "Curriculum scaffolding, video lectures & interactive coding exercises for students.",
      category: "Enterprise Platform",
      badge: "Web Platform • SaaS",
      image: "assets/learn_leap.jpg",
      metrics: [
        { label: "Modules Designed", value: "24+" },
        { label: "Course Completion", value: "+38%" },
        { label: "Retention Rate", value: "91%" }
      ],
      tags: ["SaaS Architecture", "Cognitive Load", "Dark UI", "Design Tokens"],
      summary:
        "Designed an enterprise learning management system optimizing cognitive load through clear typographic pacing, chapter checkpoints, and bite-sized visual progress bars.",
      problem:
        "Long-form video lectures without interactive checkpoints resulted in steep drop-offs during complex technical subjects.",
      solution:
        "Implemented synchronized note-taking, interactive quiz pauses, and accessible color-coded code snippet containers."
    },
    {
      id: "travelista",
      title: "Travelista — Kerala Backwaters & Eco-Retreats",
      subtitle: "Houseboat booking, serene backwater voyages & local cultural itinerary designer.",
      category: "Mobile App",
      badge: "Mobile App • Cultural UX",
      image: "assets/travelista.jpg",
      metrics: [
        { label: "Booking Flow Time", value: "-62%" },
        { label: "Search Accuracy", value: "98%" },
        { label: "Satisfaction", value: "4.9/5" }
      ],
      tags: ["Travel UX", "Micro-Interactions", "Map Navigation", "Kasavu Theme"],
      summary:
        "Created an intuitive mobile retreat discovery platform blending Kerala aesthetics with sleek modern booking flows, authentic houseboat previews, and local culinary journeys.",
      problem:
        "Tourists struggled to compare houseboat amenities and authentic routes across fragmented local aggregator sites.",
      solution:
        "Built a curated, immersive card-based exploration interface with transparent pricing, 360-degree cabin views, and flexible date pickers."
    },
    {
      id: "kitchen-store",
      title: "Kitchen Store — Culinary Equipment E-Commerce",
      subtitle: "High-conversion product checkout, dimensional visualizer & customer reviews.",
      category: "E-Commerce Website",
      badge: "E-Commerce • Web",
      image: "assets/kitchen_store.jpg",
      metrics: [
        { label: "Cart Abandonment", value: "-28%" },
        { label: "Checkout Steps", value: "2 Steps" },
        { label: "AOV Increase", value: "+19%" }
      ],
      tags: ["E-Commerce", "Checkout Ergonomics", "Product Filters", "WCAG 2.1"],
      summary:
        "Redesigned the culinary shopping experience with an emphasis on product dimensions, material transparency, and frictionless 2-step checkout.",
      problem:
        "Complex kitchen equipment dimensions led to buyer hesitation and high product returns.",
      solution:
        "Introduced interactive scale comparisons, customer cooking photo galleries, and sticky 1-tap checkout drawers."
    },
    {
      id: "design-system",
      title: "Design System Architecture & Tokens",
      subtitle: "Multi-brand token hierarchy, accessible contrast matrices & component documentation.",
      category: "Design System",
      badge: "Design Tokens • Figma",
      image: "assets/design_system.jpg",
      metrics: [
        { label: "Tokens Defined", value: "140+" },
        { label: "Dev Velocity", value: "+2.4x" },
        { label: "Accessibility", value: "WCAG AAA" }
      ],
      tags: ["Atomic Design", "Design Tokens", "Auto Layout", "Component Docs"],
      summary:
        "Architected an atomic design token infrastructure spanning color primitives, fluid typography scales, 8pt spatial grids, and component state variants in Figma.",
      problem:
        "Product teams suffered from visual inconsistency, duplicated code, and fragmented design handoffs across web and mobile apps.",
      solution:
        "Built standardized Figma component libraries connected to token variables, reducing designer-developer handoff discrepancies to zero."
    }
  ],

  experience: [
    {
      role: "UI/UX Designer & Trainer",
      company: "Zoople Technologies",
      location: "Ernakulam, Kerala",
      period: "July, 2023 - Present",
      summary:
        "Leading digital product design initiatives, architecting scalable Figma design systems, and mentoring over 500+ aspiring designers in user research, wireframing, and heuristic evaluation.",
      achievements: [
        "Designed user-friendly web and mobile interfaces and interactive prototypes using user-centered design principles.",
        "Created wireframes, user flows, high-fidelity UI designs, and prototypes to communicate design solutions.",
        "Trained 500+ students in UI/UX design, including Figma, wireframing, prototyping, design systems, and usability.",
        "Reviewed and provided structured critique on 600+ UI/UX assignments and projects, focusing on usability and visual consistency."
      ]
    },
    {
      role: "Software Trainee",
      company: "Logiprompt Techno Solutions India Pvt.",
      location: "Trivandrum, Kerala",
      period: "January, 2023 - June, 2023",
      summary:
        "Trained in front-end and back-end web development with responsive web design methodologies and DOM layout hierarchy.",
      achievements: [
        "Trained in front-end and back-end web development with HTML5, CSS3, and JavaScript.",
        "Designed responsive web interfaces using HTML, CSS, and Bootstrap.",
        "Built web application modules using PHP, Laravel, and MySQL."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Sree Narayan Institute of Technology, Kollam",
      period: "2020 - 2022"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "IHRD, Mavelikara",
      period: "2017 - 2020"
    }
  ]
};
