export interface UxNote {
  id: string;
  title: string;
  category: "psychology" | "research" | "architecture" | "accessibility" | "systems" | "testing" | "behavioral";
  categoryLabel: string;
  readTime: string;
  level: "Core Law" | "Field Guide" | "Architecture Spec" | "Testing Rubric";
  summary: string;
  keyRule: string;
  tags: string[];
  problemStatement: string;
  principleDeepDive: string;
  diagramTitle?: string;
  diagramContent?: string;
  dos: string[];
  donts: string[];
  portfolioApplication: string;
  codeSnippet?: {
    lang: string;
    code: string;
  };
}

export interface UxCategory {
  id: "all" | "psychology" | "research" | "architecture" | "accessibility" | "systems" | "testing" | "behavioral";
  label: string;
  badgeColor: string;
  accentColor: string;
  desc: string;
}

export const UX_CATEGORIES: UxCategory[] = [
  {
    id: "all",
    label: "All Field Notes",
    badgeColor: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    accentColor: "#F59E0B",
    desc: "Comprehensive archive of UX principles, token systems, and empirical methods.",
  },
  {
    id: "behavioral",
    label: "50 Behavioral Levers",
    badgeColor: "text-amber-400 bg-amber-500/15 border-amber-500/30",
    accentColor: "#F59E0B",
    desc: "Attention Hijackers, Emotional Levers, Cognitive Shortcuts, Identity, and Trust.",
  },
  {
    id: "psychology",
    label: "UX Psychology & Laws",
    badgeColor: "text-amber-400 bg-amber-500/15 border-amber-500/30",
    accentColor: "#F59E0B",
    desc: "Cognitive science, perceptual models, and decision velocity laws.",
  },
  {
    id: "research",
    label: "User Research & Discovery",
    badgeColor: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    accentColor: "#10B981",
    desc: "Unbiased interview frameworks, survey analytics, and synthesis.",
  },
  {
    id: "architecture",
    label: "Information Architecture",
    badgeColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
    accentColor: "#06B6D4",
    desc: "Taxonomy, task flows, mental models, and progressive wayfinding.",
  },
  {
    id: "accessibility",
    label: "Accessibility (WCAG AAA)",
    badgeColor: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    accentColor: "#A855F7",
    desc: "Sensory, motor ergonomics, contrast mathematics, and focus order.",
  },
  {
    id: "systems",
    label: "Design Systems & Tokens",
    badgeColor: "text-rose-400 bg-rose-500/15 border-rose-500/30",
    accentColor: "#F43F5E",
    desc: "8pt spatial rhythm, multi-tier tokens, and zero-drift developer handoff.",
  },
  {
    id: "testing",
    label: "Usability Testing & Metrics",
    badgeColor: "text-sky-400 bg-sky-500/15 border-sky-500/30",
    accentColor: "#38BDF8",
    desc: "SUS score benchmarking, task completion tracking, and heuristic audits.",
  },
];

export const UX_NOTES: UxNote[] = [
  {
    id: "fitts-law-mobile",
    title: "Fitts's Law in Modern Mobile & Touch Ergonomics",
    category: "psychology",
    categoryLabel: "UX Psychology & Laws",
    readTime: "4 min read",
    level: "Core Law",
    summary: "Why physical distance, target dimension, and screen edge magnetism dictate mobile conversion rates.",
    keyRule: "Time to target = a + b * log2(2D / W). Minimize distance (D) and maximize bounding target width (W).",
    tags: ["#FittsLaw", "#TouchTargets", "#MobileErgonomics", "#ThumbZone"],
    problemStatement: "Mobile users fail or mistap checkout buttons when targets are placed in the top-third or under 40px bounding boxes, causing cognitive frustration and cart abandonment.",
    principleDeepDive: "Fitts's Law demonstrates that the difficulty of reaching a control is determined by target size and user finger travel distance. On mobile devices, 75% of users navigate one-handed using their thumb. The natural bottom sweep zone provides the lowest mechanical strain.",
    diagramTitle: "Mobile Thumb Zone Reach Hierarchy",
    diagramContent: `[ Top 20% ]  --> Hardest to Reach (Place Destructive / Low-Frequency Info)
[ Middle 40% ] --> Moderate Stretch (Content Viewing & Secondary Controls)
[ Bottom 40% ] --> Natural Thumb Sweep Zone (Primary CTAs, Navigation, 1-Click Buy)`,
    dos: [
      "Provide minimum 48x48dp / px clickable bounding box even if visual icon is 24px.",
      "Anchor high-frequency primary CTAs (e.g., 'Book Rental', 'Add to Cart') to the bottom viewport.",
      "Utilize screen edge magnetism: bottom sheets and edge-pinned buttons have virtually infinite overshoot boundaries.",
    ],
    donts: [
      "Never place primary transactional buttons in the top navigation bar on mobile.",
      "Never pack multiple icon buttons tighter than 8px without generous touch padding.",
      "Avoid floating action buttons that obscure input fields or text content.",
    ],
    portfolioApplication: "Applied in EcoRide Rentals mobile layout: anchored vehicle reservation filters to the bottom thumb zone, reducing search friction and boosting reservation velocity by 26%.",
    codeSnippet: {
      lang: "css",
      code: `/* Accessible 48px touch target with 24px icon */
.mobile-touch-target {
  min-width: 48px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
}`,
    },
  },
  {
    id: "hicks-law-checkout",
    title: "Hick's Law: Minimizing Decision Fatigue in Multi-Step Checkouts",
    category: "psychology",
    categoryLabel: "UX Psychology & Laws",
    readTime: "5 min read",
    level: "Core Law",
    summary: "How chunking choices and progressive disclosure dramatically accelerate completion velocity.",
    keyRule: "Decision time increases logarithmically with the number of options (T = b * log2(n + 1)). Reduce options to speed action.",
    tags: ["#HicksLaw", "#CognitiveLoad", "#CheckoutUX", "#ProgressiveDisclosure"],
    problemStatement: "Monolithic checkout screens presenting shipping, billing, insurance, delivery scheduling, and gift options simultaneously cause cognitive freeze and 68% cart abandonment.",
    principleDeepDive: "Hick's Law states that decision time spikes as options multiply. By chunking complex forms into linear progressive disclosure steps (Identify -> Deliver -> Pay), we reduce cognitive load per screen to a single, effortless micro-decision.",
    diagramTitle: "Progressive Chunking Architecture",
    diagramContent: `Monolithic (High Friction):
[ 14 Fields: Name, Email, Address, Phone, Shipping, Payment, Billing, Coupon ] -> User Drop-off 68%

Chunked Progressive (High Velocity):
Step 1: Contact Details (2 fields) -> Step 2: Delivery Option (Select 1 of 2) -> Step 3: Verified Pay (1 Click)`,
    dos: [
      "Limit concurrent choices per screen to 3-5 distinct options.",
      "Highlight a recommended default choice (e.g., 'Standard 2-Day Delivery').",
      "Hide advanced optional parameters behind an expandable 'Additional Options' disclosure toggle.",
    ],
    donts: [
      "Never overwhelm new users with all payment gateways simultaneously without a recommended method.",
      "Never present unorganized 20-item dropdowns when categorized radio pills can guide selection.",
      "Avoid asking for redundant information already captured in earlier steps.",
    ],
    portfolioApplication: "Used in Kitchen Store e-commerce platform: streamlined checkout from an 11-field single-page form into a 3-step progressive drawer with pre-filled defaults, driving an 18% lift in checkout completion.",
  },
  {
    id: "jakobs-law-familiarity",
    title: "Jakob's Law: Why Predictable Mental Models Beat Novelty",
    category: "psychology",
    categoryLabel: "UX Psychology & Laws",
    readTime: "3 min read",
    level: "Core Law",
    summary: "Users spend 99% of their time on other products. Innovate on value and ergonomics, not on navigation puzzles.",
    keyRule: "Users expect your digital interface to behave just like all the other apps they use every single day.",
    tags: ["#JakobsLaw", "#MentalModels", "#IntuitiveDesign", "#Heuristics"],
    problemStatement: "Designers often try to reinvent fundamental UI elements (such as hiding global navigation inside unconventional gestures), leaving users confused and unable to orient themselves.",
    principleDeepDive: "Jakob Nielsen coined this law to remind designers that familiarity fosters trust and effortless usability. When interface controls match standard mental models, the user's cognitive budget is spent on evaluating the content or completing their task, rather than learning the UI.",
    diagramTitle: "Standard vs Novel Mental Model Friction",
    diagramContent: `Familiar Mental Model (Low Friction):
[ Top Search Bar ] + [ Top-Right Cart / Profile ] + [ Bottom Tab Bar on Mobile ] = Instant Intuitive Flow

Novelty-driven Model (High Friction):
[ Hidden Radial Menu in Bottom-Left ] = User Confusion, Misclicks, and Immediate Bounces`,
    dos: [
      "Place shopping carts, search inputs, and profile triggers in standard, conventional coordinates.",
      "Use recognized icon semaphores (Magnifying glass = Search, Heart/Bookmark = Saved, House = Home).",
      "Reserve design creativity for visual elegance, typography rhythm, and delightful micro-interactions.",
    ],
    donts: [
      "Never hide primary navigation inside ambiguous swipe gestures without visual indicators.",
      "Never use non-standard icons for core actions (e.g. using a lightbulb for 'settings').",
      "Avoid reversing standard dialog button conventions (e.g., placing Cancel on the right of Confirm).",
    ],
    portfolioApplication: "Applied across Travelista travel booking app: maintained standard hotel/flight search bar conventions with date pickers, allowing travelers to begin exploring packages within 4 seconds of landing.",
  },
  {
    id: "mom-test-interviews",
    title: "The Mom Test for UX Interviews: Extracting Unbiased Truth",
    category: "research",
    categoryLabel: "User Research & Discovery",
    readTime: "6 min read",
    level: "Field Guide",
    summary: "How to formulate non-leading inquiry questions that uncover real past behavior rather than polite hypothetical opinions.",
    keyRule: "Never ask users what they 'would' do or pay for. Ask what they ACTUALLY did the last time the problem occurred.",
    tags: ["#UserResearch", "#QualitativeInterviews", "#TheMomTest", "#ProblemDiscovery"],
    problemStatement: "Users naturally want to be polite and agreeable. Asking 'Would you use a feature that does X?' almost always yields false positives, leading teams to build features nobody truly needs.",
    principleDeepDive: "Inspired by Rob Fitzpatrick's framework, effective qualitative research investigates actual past behaviors, emotional friction moments, and current workarounds. People are terrible at predicting their future actions, but excellent at describing past pain points.",
    diagramTitle: "Hypothetical vs Behavioral Inquiry",
    diagramContent: `Leading Question (Produces False Data):
"Would you pay for an app that organizes your kitchen pantry by expiration date?"
User: "Sure, that sounds amazing!" (Outcome: 0 actual sales)

Behavioral Question (Produces Real Truth):
"When was the last time food spoiled in your fridge? What happened, and how did you handle it?"
User: "Honestly, yesterday. I just threw it out because I forgot it was behind the milk."`,
    dos: [
      "Ask about specific past events: 'Talk me through the last time you booked a car rental.'",
      "Probe for existing workarounds: 'What tools, spreadsheets, or notes do you currently use to solve this?'",
      "Listen 80% of the time, speak 20% of the time. Embrace uncomfortable pauses to let users elaborate.",
    ],
    donts: [
      "Never pitch your prototype idea or explain how smart your feature is during an interview.",
      "Never ask leading questions: 'Don't you think our new filter is much easier?'",
      "Avoid hypothetical questions: 'How much would you be willing to pay for this?'",
    ],
    portfolioApplication: "Conducted 18 contextual user interviews for Kitchen Store: discovered users cared far more about warranty support and return ease than discount popups, fundamentally shifting product prioritization.",
  },
  {
    id: "qual-vs-quant-synthesis",
    title: "Triangulating Qualitative Insights with Quantitative Funnel Analytics",
    category: "research",
    categoryLabel: "User Research & Discovery",
    readTime: "5 min read",
    level: "Field Guide",
    summary: "Quantitative metrics pinpoint WHERE friction exists; qualitative inquiry uncovers WHY it happens.",
    keyRule: "Never rely solely on analytics dashboards or solely on 5 user interviews. Pair behavioral numbers with human empathy.",
    tags: ["#MixedMethods", "#DataTriangulation", "#FunnelAnalysis", "#Heuristics"],
    problemStatement: "Teams often misdiagnose drop-offs by tweaking button colors when the root problem is unclear pricing or a lack of trust badges.",
    principleDeepDive: "Mixed-method UX research creates a continuous feedback loop: Analytics logs a 42% drop-off at Step 2; moderated user observation reveals users were hunting for shipping costs before giving their email. Fixing the underlying psychological anxiety resolves the metric drop-off permanently.",
    diagramTitle: "Mixed-Method Triangulation Loop",
    diagramContent: `[ 1. Quantitative Funnel ] -> Pinpoints 42% Abandonment at Step 2
               |
[ 2. Qualitative Testing ] -> Observes 5 users pausing: "Where are the taxes & shipping fees?"
               |
[ 3. Design Intervention ] -> Upfront transparent price calculator & security guarantee
               |
[ 4. Validation Metric ]  -> Abandonment drops to 14% (-66% reduction in friction)`,
    dos: [
      "Use session replay and event tracking to identify anomalous drop-off spikes.",
      "Bring those exact screens into 5 live moderated user usability sessions.",
      "Translate raw observation notes into How-Might-We (HMW) opportunity statements.",
    ],
    donts: [
      "Never assume analytics alone tells the whole story without qualitative verification.",
      "Avoid treating edge-case survey comments as universal truths without statistical significance.",
      "Never conduct research without a concrete decision or metric to influence.",
    ],
    portfolioApplication: "Deep Dive marine conservation portal: analytics showed high bounce on habitat pages; user interviews revealed terminology was too scientific. Added visual species taxonomy cards, boosting average session duration by 1m 40s.",
  },
  {
    id: "card-sorting-ia",
    title: "Card Sorting & Information Architecture: Decoupling Jargon",
    category: "architecture",
    categoryLabel: "Information Architecture",
    readTime: "4 min read",
    level: "Architecture Spec",
    summary: "How open and closed card sorting exercises uncover authentic user mental models for navigation structures.",
    keyRule: "Group content according to how users search for solutions, not according to internal company org charts.",
    tags: ["#CardSorting", "#InformationArchitecture", "#Sitemaps", "#Wayfinding"],
    problemStatement: "Websites frequently mirror internal department structures (e.g., 'Enterprise Solutions Group') rather than intuitive user needs ('Inventory Software').",
    principleDeepDive: "Card sorting is the gold standard for structuring navigation. Open card sorting lets participants generate category names from raw cards, revealing authentic vocabulary. Closed card sorting tests whether predefined category headers make sense to a representative user cohort.",
    diagramTitle: "Open vs Closed Card Sorting Matrix",
    diagramContent: `Open Sorting (Generative / Discovery):
Participants receive 30 feature cards -> Group them naturally -> Invent their own category titles
Result: Uncovers authentic user language and mental models.

Closed Sorting (Evaluative / Validation):
Participants receive 30 feature cards -> Must sort them into 4 predefined navigation categories
Result: Validates whether proposed navigation labels are unambiguous.`,
    dos: [
      "Aim for 15-20 participants per card sorting round to achieve statistical stability.",
      "Review similarity matrices and dendrograms to identify clusters with >70% agreement.",
      "Keep navigation taxonomy shallow: max 3 levels of depth to maintain strong information scent.",
    ],
    donts: [
      "Never use internal engineering or company jargon in navigation menus.",
      "Avoid categories with overlapping definitions (e.g. 'Tools' vs 'Utilities').",
      "Never bury high-frequency user tasks beneath multi-tier submenu accordions.",
    ],
    portfolioApplication: "Restructured Learn Leap educational app navigation: card sorting with 24 parents and students resulted in organizing games by Subject and Grade Level instead of Curriculum Code, halving game discovery time.",
  },
  {
    id: "3-click-rule-myth",
    title: "The Myth of the 3-Click Rule vs Information Scent",
    category: "architecture",
    categoryLabel: "Information Architecture",
    readTime: "4 min read",
    level: "Architecture Spec",
    summary: "Why users will happily click 5 times if every step provides unambiguous forward momentum and confidence.",
    keyRule: "User satisfaction does not correlate with click count; it correlates with clarity of information scent at every step.",
    tags: ["#InformationScent", "#3ClickRule", "#ProgressiveDisclosure", "#Navigation"],
    problemStatement: "Enforcing an arbitrary '3-click rule' forces designers to pack 60 navigation links onto a single screen, creating severe visual noise and choice paralysis.",
    principleDeepDive: "Jared Spool's extensive usability studies debunked the 3-click rule: users do not leave because of click count; they leave when they click something and feel lost or uncertain. A 5-click path where each screen clearly guides the user is far more usable than an overwhelming 2-click mega-menu.",
    diagramTitle: "Shallow Noise vs Deep Information Scent",
    diagramContent: `Monolithic Mega-Menu (3 Clicks, High Failure):
Page 1 -> 80 overwhelming links -> User clicks wrong category -> Feels lost -> Abandons

Progressive Scent Trail (5 Clicks, 96% Success):
Vehicle Type -> Electric Sedan -> Model Selection -> Rental Dates -> Confirmation
Each screen answers ONE clear question with 100% confidence.`,
    dos: [
      "Ensure every link title accurately and unambiguously predicts what will be on the next screen.",
      "Provide persistent breadcrumbs so users can trace their steps back without using the browser back button.",
      "Use progressive disclosure to reveal secondary specifications only when requested.",
    ],
    donts: [
      "Never sacrifice readability just to keep content within an arbitrary click threshold.",
      "Never use ambiguous labels like 'Miscellaneous' or 'Other Services'.",
      "Avoid flat hierarchies that display 50 equal-weight options simultaneously.",
    ],
    portfolioApplication: "Used in EcoRide Rentals booking flow: separated location, car class, insurance, and extras into a clean 4-step progressive funnel. Usability testing showed 94% task completion with zero drop-off.",
  },
  {
    id: "wcag-aaa-contrast-tokens",
    title: "WCAG AAA Color Contrast: High Rigor Without Aesthetic Compromise",
    category: "accessibility",
    categoryLabel: "Accessibility (WCAG AAA)",
    readTime: "5 min read",
    level: "Architecture Spec",
    summary: "Mathematical guidelines for achieving 7:1 contrast ratios across dark luxury themes while maintaining vibrant brand accents.",
    keyRule: "WCAG AAA requires 7:1 contrast for normal body text and 4.5:1 for large text (>18pt or 14pt bold).",
    tags: ["#Accessibility", "#WCAGAAA", "#ColorContrast", "#DesignTokens"],
    problemStatement: "Dark mode designs often use low-contrast muted grays (#71717A on #18181B = 3.2:1) that are completely unreadable under sunlight or for users with low vision or astigmatism.",
    principleDeepDive: "Accessibility does not mean dull design. By pairing deep obsidian surfaces (`#080A0D`) with high-luminance warm Kasavu gold (`#FDE047` / `#F59E0B`, >9:1 contrast) and crisp off-white text (`#FBF7EE`, >14:1 contrast), we achieve full WCAG AAA compliance while preserving cinematic luxury.",
    diagramTitle: "Contrast Ratio Tier Comparison",
    diagramContent: `Failing (WCAG Fail):
#52525B text on #090C10 surface = 2.4:1 ratio -> Unreadable for visually impaired users.

WCAG AA (Minimum Standard):
#A1A1AA text on #090C10 surface = 5.2:1 ratio -> Meets baseline AA requirement.

WCAG AAA (Golden Luxury Standard):
#FDE047 (Kasavu Gold) on #090C10 surface = 11.8:1 ratio -> Crystal clear readability & AAA certified!
#FBF7EE (Warm Cream) on #090C10 surface = 16.4:1 ratio -> Maximum readability with zero glare.`,
    dos: [
      "Test contrast on all component states: default, hover, focus-visible, active, and disabled.",
      "Always provide secondary signifiers: combine color with icons, text labels, and underline cues.",
      "Ensure interactive focus outlines have at least a 3:1 contrast against adjacent background colors.",
    ],
    donts: [
      "Never use color alone to communicate system status (e.g. just a red dot without error text).",
      "Never use pure #000000 pitch black against #FFFFFF pure white (causes visual vibration / halation).",
      "Avoid placeholder text with contrast below 4.5:1.",
    ],
    portfolioApplication: "Engineered this entire portfolio's design token system: all heading and body copy verified at 9.4:1 to 16.4:1 contrast, achieving full WCAG AAA certification.",
    codeSnippet: {
      lang: "css",
      code: `/* WCAG AAA Verified Token Pairings */
:root {
  --surface-base: #080A0D;      /* Deep Obsidian */
  --text-primary: #FBF7EE;      /* 16.4:1 ratio vs base */
  --accent-gold: #FDE047;       /* 11.8:1 ratio vs base */
  --accent-emerald: #34D399;    /* 9.2:1 ratio vs base */
  --focus-ring: #F59E0B;        /* 3.8:1 outline contrast */
}`,
    },
  },
  {
    id: "touch-ergonomics-48px",
    title: "Touch Target Ergonomics & Motor Accessibility",
    category: "accessibility",
    categoryLabel: "Accessibility (WCAG AAA)",
    readTime: "4 min read",
    level: "Core Law",
    summary: "Preventing accidental taps and motor strain with 48x48px hitboxes and spatial padding.",
    keyRule: "Every clickable, tappable, or interactive element must have a minimum bounding target of 48x48 CSS pixels.",
    tags: ["#MotorAccessibility", "#TouchTargets", "#Ergonomics", "#MobileDesign"],
    problemStatement: "Compact 16px table actions or tight pagination links cause frequent misclicks for users with tremors, large fingers, or when operating phones while walking.",
    principleDeepDive: "Human fingertips cover approximately 9-11mm of surface area on mobile touchscreens. Operating system guidelines from Apple (44x44pt) and Google Material (48x48dp), paired with WCAG 2.2 Success Criterion 2.5.8 (Target Size), dictate generous touch bounds with adequate spacing buffers.",
    diagramTitle: "Touch Target vs Visual Icon Size",
    diagramContent: `Visual Element: 20x20px close icon (X)
              |
[ Touch Hitbox Extension: 48x48px transparent padding ]
              |
Buffer Zone: 8px spatial separation from adjacent controls
Result: 0% misclick rate and effortless thumb actuation.`,
    dos: [
      "Use negative margins or transparent padding to expand hitboxes without enlarging visual icons.",
      "Ensure a minimum of 8px physical spacing between adjacent touch targets.",
      "Provide haptic or audio feedback on touch trigger to confirm receipt of interaction.",
    ],
    donts: [
      "Never cluster delete and save buttons adjacent to each other with minimal padding.",
      "Never rely on inline text links with single-word 12px hitboxes on mobile devices.",
      "Avoid placing touch targets under dynamic floating sticky bars.",
    ],
    portfolioApplication: "Applied across Learn Leap mobile educational games: enlarged all answer targets and control pills to 56px with 12px margins, resulting in zero accidental input errors during children's usability tests.",
  },
  {
    id: "8pt-spacing-token-grid",
    title: "The 8pt Mathematical Grid: Systematic Spacing Cadence",
    category: "systems",
    categoryLabel: "Design Systems & Tokens",
    readTime: "5 min read",
    level: "Architecture Spec",
    summary: "Why multiples of 8 eliminate layout debate, harmonize UI density, and bridge design and front-end code.",
    keyRule: "All dimensions, padding, margins, and line heights should be multiples of 8 (with 4pt micro-scale exceptions).",
    tags: ["#8ptGrid", "#DesignTokens", "#SpacingSystems", "#DeveloperHandoff"],
    problemStatement: "When designers guess arbitrary pixel values (13px margin, 19px padding, 27px gap), layouts feel chaotic, responsive breakpoints break, and developers must constantly reconcile inconsistent specs.",
    principleDeepDive: "The 8-point spatial system creates visual rhythm because screens scale in powers of 2 (1x, 2x, 3x). An 8pt base grid ensures clean integers across retina displays without half-pixel subpixel rendering artifacts. Spacing tokens become predictable mathematical steps: 4, 8, 16, 24, 32, 48, 64.",
    diagramTitle: "8pt Spacing Token Scale",
    diagramContent: `Token Name | Value  | Typical UI Application
------------------------------------------------------------
space-3xs  |  2px   | Hairline borders, micro status offsets
space-2xs  |  4px   | Micro-spacing: Icon-to-text, chip padding
space-xs   |  8px   | Compact gaps, button internal vertical pad
space-sm   | 16px   | Standard card internal padding, form gaps
space-md   | 24px   | Section margins, card-to-card separation
space-lg   | 32px   | Major component separation, modal margins
space-xl   | 48px   | Hero container spacing, section dividers
space-2xl  | 64px   | Page-level section vertical spacing`,
    dos: [
      "Pair line-heights with the 8pt grid (e.g. 16px font on 24px line-height).",
      "Use 4pt half-grid strictly for fine icon alignment and compact badges.",
      "Document spacing tokens as CSS custom properties or Tailwind utility tokens.",
    ],
    donts: [
      "Never use random odd-numbered pixel values (e.g. 11px, 17px, 23px).",
      "Never override spacing tokens with inline ad-hoc pixel overrides in code.",
      "Avoid changing spacing rhythm between related sibling components.",
    ],
    portfolioApplication: "Used throughout the portfolio and case studies: every card, modal, and button strictly adheres to the 8pt token hierarchy, ensuring pixel-perfect alignment across desktop and mobile screens.",
    codeSnippet: {
      lang: "typescript",
      code: `// 8pt Spacing Tokens in Tailwind Configuration
export const spacingTokens = {
  '3xs': '0.125rem', // 2px
  '2xs': '0.25rem',  // 4px
  'xs':  '0.5rem',   // 8px
  'sm':  '1rem',     // 16px
  'md':  '1.5rem',   // 24px
  'lg':  '2rem',     // 32px
  'xl':  '3rem',     // 48px
  '2xl': '4rem',     // 64px
};`,
    },
  },
  {
    id: "semantic-tokens-architecture",
    title: "3-Tier Design Token Architecture: From Primitives to Components",
    category: "systems",
    categoryLabel: "Design Systems & Tokens",
    readTime: "6 min read",
    level: "Architecture Spec",
    summary: "Architecting scalable token hierarchies that decouple raw hex colors from semantic UI intent.",
    keyRule: "Never reference primitive values (e.g. #F59E0B) in component code. Always consume semantic tokens.",
    tags: ["#DesignTokens", "#DesignSystems", "#FigmaTokens", "#ComponentArchitecture"],
    problemStatement: "Hardcoding primitive colors like #F59E0B across 80 components means re-theming, dark mode implementation, or accessibility contrast adjustments require hundreds of fragile manual search-and-replace edits.",
    principleDeepDive: "Modern design token architecture organizes tokens into three distinct abstraction tiers: 1) Global Primitive Tokens (the raw color palette), 2) Semantic Tokens (contextual meaning such as 'surface-primary' or 'text-danger'), and 3) Component-Scoped Tokens ('button-primary-bg'). When switching from Light to Dark mode, only Tier 2 mappings change.",
    diagramTitle: "3-Tier Token Abstraction Pipeline",
    diagramContent: `[ Tier 1: Global Primitives ] -> amber-500: #F59E0B, stone-950: #0C0A09, emerald-500: #10B981
              |
[ Tier 2: Semantic Intent ]   -> color-accent-action = $amber-500, surface-canvas = $stone-950
              |
[ Tier 3: Component Token ]   -> btn-primary-bg = $color-accent-action, nav-surface = $surface-canvas
              |
[ Production Component UI ]  -> <Button style={{ background: 'var(--btn-primary-bg)' }} />`,
    dos: [
      "Name tokens by their semantic role, not by their visual appearance (e.g. 'color-critical' instead of 'color-red').",
      "Organize token documentation in Figma variables and auto-generate JSON tokens for developer repos.",
      "Include interactive state variants (default, hover, pressed, focused, disabled) for every interactive token.",
    ],
    donts: [
      "Never introduce one-off hex codes outside the design token library.",
      "Avoid deep 6-level token inheritance chains that confuse engineering teams.",
      "Never map semantic tokens back to primitives arbitrarily.",
    ],
    portfolioApplication: "Architected a unified token repository for Kitchen Store: enabled instantaneous switching between standard e-commerce theme and seasonal holiday promotional palettes with zero CSS regressions.",
  },
  {
    id: "system-usability-scale-sus",
    title: "System Usability Scale (SUS): Benchmarking Empirical Usability",
    category: "testing",
    categoryLabel: "Usability Testing & Metrics",
    readTime: "5 min read",
    level: "Testing Rubric",
    summary: "How to calculate, benchmark, and interpret the industry-standard 10-item usability questionnaire.",
    keyRule: "A SUS score of 68 represents average usability (50th percentile). Target >= 80.3 for top 10% (Grade A).",
    tags: ["#SUSScore", "#UsabilityTesting", "#Benchmarking", "#QuantitativeUX"],
    problemStatement: "Teams often conclude usability testing with subjective opinions ('users seemed to like it') rather than reliable, statistically benchmarked metrics that leadership and stakeholders can verify.",
    principleDeepDive: "Created by John Brooke in 1986, the System Usability Scale (SUS) has become the gold standard for measuring perceived product usability. It features 10 alternating positive and negative statements evaluated on a 5-point Likert scale. Scores are converted to a composite 0-100 scale.",
    diagramTitle: "SUS Score to Grade Percentile Scale",
    diagramContent: `SUS Score Range | Letter Grade | Percentile Rank | Usability Interpretation
---------------------------------------------------------------------------------
  80.3 - 100.0  |      A+      |   Top 10%       | Exceptional, promoter-level ease
  74.0 -  80.2  |      B       |   70th - 89th   | Good, acceptable for production
  68.0 -  73.9  |      C       |   50th - 69th   | Average / OK (Actionable friction)
  51.0 -  67.9  |      D       |   15th - 49th   | Poor, significant usability barriers
   0.0 -  50.9  |      F       |   Bottom 14%    | Critical failure, unusable`,
    dos: [
      "Administer the SUS questionnaire immediately following the completion of usability testing tasks.",
      "Calculate odd questions as (Score - 1) and even questions as (5 - Score), sum them, and multiply by 2.5.",
      "Collect at least 8-12 completed questionnaires for stable confidence intervals.",
    ],
    donts: [
      "Never confuse a SUS score of 68 with a school grade '68%' (68 is average, not failing).",
      "Never explain or debate the questions with the participant while they fill it out.",
      "Avoid modifying question phrasing, as it invalidates standardized percentile benchmarks.",
    ],
    portfolioApplication: "Conducted usability testing for EcoRide Rentals across 14 participants: achieved an 87.5 / 100 SUS composite score (Grade A+), verifying friction-free car reservations.",
  },
  {
    id: "nielsen-heuristics-audit",
    title: "Jakob Nielsen's 10 Usability Heuristics: Practical Diagnostic Audit",
    category: "testing",
    categoryLabel: "Usability Testing & Metrics",
    readTime: "6 min read",
    level: "Testing Rubric",
    summary: "How to conduct rapid heuristic evaluations to uncover 75% of usability flaws before building high-fidelity screens.",
    keyRule: "Heuristic evaluation is an expert review that catches structural usability violations before user testing starts.",
    tags: ["#NielsenHeuristics", "#HeuristicAudit", "#ExpertReview", "#Usability"],
    problemStatement: "Spending thousands on user testing when obvious heuristic flaws (like missing back buttons or delayed system status) could have been resolved in a 2-hour expert audit.",
    principleDeepDive: "Developed by Jakob Nielsen and Rolf Molich, these 10 heuristics represent broad rules of thumb for interface design. Auditing prototypes against these heuristics reveals critical flaws in feedback visibility, real-world metaphor alignment, user freedom, and error prevention.",
    diagramTitle: "Core Heuristic Triage Matrix",
    diagramContent: `Heuristic 1: Visibility of System Status -> Loading indicators, progress bars, real-time feedback
Heuristic 3: User Control & Freedom     -> Undo, cancel, clear filters, easy modal exit
Heuristic 5: Error Prevention            -> Confirmation for destructive actions, input masking
Heuristic 8: Aesthetic & Minimalist      -> Remove irrelevant decorative clutter to highlight primary CTA
Heuristic 9: Recognize & Recover Errors -> Human-readable error messages explaining HOW to fix the issue`,
    dos: [
      "Score each heuristic violation with a severity rating (0 = Cosmetic, 4 = Usability Catastrophe).",
      "Have at least 2 independent evaluators audit the interface to catch orthogonal issues.",
      "Provide actionable design recommendations alongside each identified violation.",
    ],
    donts: [
      "Never present heuristic findings as personal artistic preferences; anchor them in established principles.",
      "Avoid vague critique like 'this feels clunky'—specify the exact heuristic violated.",
      "Never skip Heuristic 5 (Error Prevention) on critical financial or destructive flows.",
    ],
    portfolioApplication: "Used to audit the Travelista package booking flow: identified 6 moderate heuristic violations in flight selection, leading to real-time seat availability indicators and explicit baggage breakdown cards.",
  },
  {
    id: "attention-hijackers-playbook",
    title: "Attention Hijackers: 10 Visual Salience & Stimulus Levers in UX",
    category: "behavioral",
    categoryLabel: "Behavioral Levers",
    readTime: "7 min read",
    level: "Core Law",
    summary: "Color priming, Zeigarnik effect, FOMO triggers, anchoring bias, chunking, visual hierarchy, serial position, Von Restorff isolation, microcopy nudges, and cultural color associations.",
    keyRule: "Human visual attention is captured in under 100ms. Master visual salience, chunking, and isolation to direct user decision velocity without friction.",
    tags: ["#AttentionHijackers", "#ColorPriming", "#Zeigarnik", "#FOMO", "#Anchoring", "#VisualHierarchy"],
    problemStatement: "Interfaces that treat all elements with equal visual weight trigger cognitive overload. Users miss crucial conversion steps or fail to complete multi-step tasks due to lack of visual momentum.",
    principleDeepDive: "This 10-lever framework captures how the visual cortex processes digital stimuli: 1) Color Priming sets emotional tone (Blue=Trust, Red=Urgency); 2) Zeigarnik Effect uses progress bars to motivate completion; 3) FOMO Triggers leverage genuine inventory scarcity; 4) Anchoring Bias frames value by showing premium tiers first; 5) Chunking formats data into 4±1 memory chunks; 6) Visual Hierarchy guides scanning across F-patterns; 7) Serial Position anchors the first and last menu items; 8) Isolation Effect makes key pricing tiers pop; 9) Microcopy Nudges ('Yes, I want results') drive affirmative action; 10) Color-Emotion Association localizes semiotics for cultural context.",
    diagramTitle: "10 Attention Hijackers Architecture",
    diagramContent: `1. Color Priming          --> Blue = Trust, Red = Urgency (100ms emotional registration)
2. Zeigarnik Effect       --> Unfinished tasks create cognitive tension (Progress Bars)
3. FOMO Triggers          --> "Only 3 left" accelerates decision velocity through scarcity
4. Anchoring Bias         --> High price shown first anchors perceived value
5. Chunking               --> Break 16-digit cards into 4-character digestible blocks
6. Visual Hierarchy       --> Big, bold, top = Important (F-pattern scan optimization)
7. Serial Position        --> First & last items in navigation get maximum recall
8. Isolation Effect       --> Von Restorff: the single distinct card commands attention
9. Microcopy Nudges       --> "Claim My Free Trial" vs generic "Submit"
10. Cultural Color Semiotics -> Localized color meaning (White = Purity vs Mourning)`,
    dos: [
      "Use Zeigarnik progress bars in onboarding to visually reward incremental completion.",
      "Chunk complex forms into 3-4 progressive stages to keep working memory clear.",
      "Anchor the most critical primary action as the visually isolated element on screen.",
    ],
    donts: [
      "Never fabricate fake scarcity countdowns or artificial FOMO stock numbers.",
      "Never bury the primary call to action in the middle of a dense, unformatted list.",
      "Avoid confirmshaming microcopy (e.g. 'No, I don't want to save money').",
    ],
    portfolioApplication: "Applied across Kitchen Store: chunked product specs into accordion cards and used Zeigarnik progress indicators in the checkout drawer, lifting conversion by 18%.",
  },
  {
    id: "emotional-levers-playbook",
    title: "Emotional Levers: 10 Affective Drivers Shaping User Decisions",
    category: "behavioral",
    categoryLabel: "Behavioral Levers",
    readTime: "8 min read",
    level: "Field Guide",
    summary: "Loss aversion, mirror neurons, narrative transportation, social proof, cognitive dissonance, empathy mapping, peak-end rule, emotional contagion, gratification loops, and fear of regret.",
    keyRule: "Humans feel before they analyze. Loss aversion, human facial cues, and peak-end milestone moments dictate long-term user retention.",
    tags: ["#EmotionalLevers", "#LossAversion", "#SocialProof", "#PeakEndRule", "#MirrorNeurons"],
    problemStatement: "Products designed purely as cold transactional databases fail to establish emotional connection, resulting in high churn and transactional indifference.",
    principleDeepDive: "Emotional UX operates across 10 psychological levers: 1) Loss Aversion: pain of losing $100 is twice the pleasure of gaining $100; 2) Mirror Neurons: human faces trigger empathetic neural firing; 3) Narrative Transportation: storytelling bypasses skepticism; 4) Social Proof: herd validation ('3,000+ booked') creates safety; 5) Cognitive Dissonance: aligning post-purchase rationalization; 6) Empathy Mapping: rooting personas in emotional pain points; 7) Peak-End Rule: optimizing peak milestones and exit screens; 8) Emotional Contagion: transferring calm energy via UI; 9) Gratification Loops: dopamine-delivering micro-interactions; 10) Fear of Regret: highlighting opportunities missed if inactive.",
    diagramTitle: "Emotional Levers Cycle",
    diagramContent: `[ Trigger ]             --> Social Proof ("3,000+ travelers signed up")
       |
[ Empathy Connection ]  --> Mirror Neurons (Human-centric imagery & story)
       |
[ Decision Moment ]     --> Loss Aversion (Protecting rewards / progress)
       |
[ Peak-End Delight ]    --> Celebratory micro-interactions & verified confirmation
       |
[ Post-Action Harmony ] --> Banishing Cognitive Dissonance with positive reinforcement`,
    dos: [
      "Celebrate milestone completions with delightful micro-animations (Peak-End Rule).",
      "Display real, verified social proof to dissolve user hesitation in unfamiliar flows.",
      "Design compassionate empty states and error recovery to spread emotional reassurance.",
    ],
    donts: [
      "Never weaponize loss aversion with deceptive guilt-trips or hidden cancel buttons.",
      "Never display fabricated live customer notification bubbles.",
      "Avoid emotionally jarring red error alerts when gentle guidance will solve the problem.",
    ],
    portfolioApplication: "Implemented in Travelista: celebrated package booking with celebratory itinerary art (Peak-End Rule) and featured verified traveler reviews (Social Proof), increasing completed bookings by 22%.",
  },
  {
    id: "cognitive-shortcuts-playbook",
    title: "Cognitive Shortcuts: 10 Mental Heuristics for Instant Decision Velocity",
    category: "behavioral",
    categoryLabel: "Behavioral Levers",
    readTime: "7 min read",
    level: "Core Law",
    summary: "Heuristic processing, affordance, recognition over recall, Gestalt grouping, default bias, Hick's law, confirmation bias, satisficing, cognitive load theory, and endowment effect.",
    keyRule: "Users satisfice rather than optimize. Align digital affordances and smart defaults with intuitive mental shortcuts.",
    tags: ["#CognitiveShortcuts", "#Affordance", "#DefaultBias", "#Satisficing", "#Gestalt", "#EndowmentEffect"],
    problemStatement: "Interfaces requiring deep analytical deliberation cause decision fatigue. Users abandon flows when controls lack clear affordance or require memory recall.",
    principleDeepDive: "Humans survive by conserving cognitive energy through 10 primary shortcuts: 1) Heuristic Processing: snap decisions matching past instinct; 2) Affordance: controls communicating their operation visually; 3) Recognition over Recall: showing visible options instead of blank inputs; 4) Gestalt Principles: spatial proximity and closure grouping; 5) Default Bias: 80%+ users stick to pre-selected options; 6) Hick's Law: fewer choices equal faster decisions; 7) Confirmation Bias: filter chips validating existing beliefs; 8) Satisficing: selecting the first 'good enough' candidate; 9) Cognitive Load Theory: stripping non-essential visual noise; 10) Endowment Effect: virtual ownership increasing perceived value.",
    diagramTitle: "10 Cognitive Shortcuts Framework",
    diagramContent: `1. Heuristic Processing   --> Instant pattern matching against existing mental models
2. Perceived Affordance   --> Elevated button shadows invite physical clicking
3. Recognition > Recall   --> Displaying recent search pills instead of empty inputs
4. Gestalt Principles     --> Spatial proximity binds labels to input fields
5. Default Bias           --> Pre-selecting optimal, sustainable, or popular choices
6. Hick's Law             --> Reducing 12 payment methods to 3 primary gateways
7. Confirmation Bias      --> Feature review tags that answer user pre-purchase questions
8. Satisficing            --> Surfacing the top 3 best-fit options in the viewport
9. Cognitive Load Theory  --> Minimalist layouts preserving working memory
10. Endowment Effect      --> Interactive customizers building virtual ownership`,
    dos: [
      "Provide smart, ethical defaults that genuinely benefit the user's primary goal.",
      "Use visible search suggestions and history to favor recognition over recall.",
      "Ensure buttons have distinct physical affordances (elevation, contrast, states).",
    ],
    donts: [
      "Never use default bias to pre-check paid warranty add-ons or marketing subscriptions.",
      "Never hide core controls behind undiscoverable gestures without visual affordance.",
      "Avoid presenting 40 uncurated options when smart progressive filters can guide choice.",
    ],
    portfolioApplication: "Used in EcoRide Rentals: configured smart default filters for EV models and deployed clear card affordances, cutting booking time from 4 minutes to under 80 seconds.",
  },
  {
    id: "identity-shapers-playbook",
    title: "Identity Shapers: 10 Mechanisms Tapping into Self-Concept and Ego Investment",
    category: "behavioral",
    categoryLabel: "Behavioral Levers",
    readTime: "7 min read",
    level: "Architecture Spec",
    summary: "Commitment consistency, self-determination theory, digital mirroring, avatars, reputation scores, feedback loops, personal history tracking, first-person language, behavioral confirmation, and ethical dissonance.",
    keyRule: "When a digital interface reflects, empowers, and confirms a user's aspirational identity, engagement transforms into passionate advocacy.",
    tags: ["#IdentityShapers", "#CommitmentConsistency", "#SelfDetermination", "#Avatars", "#FeedbackLoops"],
    problemStatement: "Generic, one-size-fits-all software feels alienating and disposable. When users invest zero personal identity into a system, switching costs remain near zero.",
    principleDeepDive: "Identity shaping binds user ego to product architecture through 10 mechanisms: 1) Commitment Consistency: public or micro-commitments foster behavioral follow-through; 2) Self-Determination Theory: satisfying Autonomy, Competence, and Relatedness; 3) Digital Mirroring: reflecting the user's linguistic and visual identity; 4) Avatars: emotional projection into custom representations; 5) Reputation Scores: badges and karma symbolizing social standing; 6) Feedback Loops: real-time metric feedback driving habit change; 7) Personal History Tracking: celebratory tenure ('Member since 2022'); 8) First-Person Language: 'My Portfolio' cultivating psychological ownership; 9) Behavioral Confirmation: positive labeling ('Eco Traveler'); 10) Ethical Dissonance: highlighting ecological/financial trade-offs to inspire positive change.",
    diagramTitle: "Identity Investment Pipeline",
    diagramContent: `[ Autonomy & Choice ]   --> Self-Determination (Customizable avatar & workspace)
         |
[ Micro-Commitment ]    --> Commitment Consistency (Setting a personal goal)
         |
[ Real-Time Metric ]    --> Feedback Loops (Tracking progress & tenure)
         |
[ Social Recognition ]  --> Reputation Scores & Identity Badges ("Eco Champion")
         |
[ Long-Term Retention ] --> Deep Emotional Investment & High Psychological Switching Cost`,
    dos: [
      "Use first-person language on buttons ('Start My Project') to reinforce user agency.",
      "Celebrate milestone tenure and personal achievements with annual summaries.",
      "Empower autonomy by offering customizable themes, avatars, and notification controls.",
    ],
    donts: [
      "Never trap users with social score penalties if they choose to disconnect.",
      "Avoid superficial gamification badges that offer no tangible competence growth.",
      "Never moralize or shame users through ethical dissonance; provide neutral data.",
    ],
    portfolioApplication: "Applied in Learn Leap educational app: introduced student avatars and skill mastery progress badges, resulting in a 44% increase in recurring daily study sessions.",
  },
  {
    id: "trust-manipulators-playbook",
    title: "Trust Architecture: 10 Security and Credibility Signals in Digital Products",
    category: "behavioral",
    categoryLabel: "Behavioral Levers",
    readTime: "7 min read",
    level: "Architecture Spec",
    summary: "Security cues, UX writing tone, trust badges, transparency illusion, conversational UIs, reviews as legitimacy, professional typography, speed = competence, permission design, and onboarding trust builders.",
    keyRule: "Perceived security is constructed through sub-second responsiveness, cryptographic cues, honest pricing transparency, and refined typography.",
    tags: ["#TrustArchitecture", "#SecurityCues", "#SpeedEqualsCompetence", "#PermissionDesign", "#OnboardingTrust"],
    problemStatement: "Even the most visually appealing product fails if users sense security ambiguity, clunky typography, slow page loads, or predatory permission requests.",
    principleDeepDive: "Credibility engineering dissolves risk aversion across 10 architectural signals: 1) Security Cues: padlocks and SSL indicators lowering entry anxiety; 2) UX Writing Tone: calibrating voice for institutional authority; 3) Trust Badges: SOC-2 and verified industry certifications; 4) Transparency Illusion: itemizing taxes and shipping upfront; 5) Conversational UIs: responsive, empathetic conversational touchpoints; 6) Reviews as Legitimacy: authentic customer ratings with verified badges; 7) Professional Typography: disciplined font scales signaling technical rigor; 8) Speed = Competence: sub-second load times communicating operational excellence; 9) Permission Design: pre-explaining value before requesting device permissions; 10) Onboarding Trust Builders: delivering immediate value in the first 60 seconds.",
    diagramTitle: "Trust Construction Architecture",
    diagramContent: `[ Entry: Sub-Second Speed ]   --> Speed = Competence (Lighthouse 98+, instant render)
            |
[ Aesthetic Rigor ]            --> Professional Typography (Grotesk fonts, 8pt spatial grid)
            |
[ Financial & Data Entry ]     --> Security Cues (Padlock tokens, 256-bit encryption badges)
            |
[ Checkout Transparency ]      --> Transparent Pricing (Zero hidden fees, clear itemization)
            |
[ Long-Term Relationship ]     --> Ethical Permission Design & Respectful Communication`,
    dos: [
      "Optimize web performance for sub-second responses; speed directly impacts trust.",
      "Disclose all pricing fees and delivery terms upfront before asking for payment data.",
      "Contextually explain why permissions (camera, location) are needed before prompting.",
    ],
    donts: [
      "Never display fake certification seals or unverified press logos.",
      "Never spring surprise convenience fees at the final checkout confirmation step.",
      "Avoid sloppy typography scales, misaligned elements, or broken responsive layouts.",
    ],
    portfolioApplication: "Integrated across Deep Dive marine conservation & EcoRide Rentals: achieved 98/100 Core Web Vitals speed scores and added transparent price breakdowns, achieving an 88.5 SUS Usability score.",
  },
];

