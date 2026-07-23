export const projects = [
  {
    id: 1,
    slug: "geolog",
    name: "GeoLog - Subsurface Data & Core Sample Management Platform",
    shortDesc:
      "Enterprise B2B SaaS platform for managing subsurface data and core samples in the petroleum/mining/geology domain.",
    image: "PASTE_SCREENSHOT_PATH_HERE", // e.g. "/projects/geolog-1.png"
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "Zod",
      "React Query",
      "Tailwind CSS",
    ],
    description:
      "GeoLog is a B2B SaaS platform built for petroleum, mining, and geology teams to manage well data and core sample records. It supports role-based access control (manager/admin/field engineer), ownership-based data checks, and a JWT-based auth system with httpOnly cookies.",
    liveLink: "PASTE_LIVE_LINK_HERE", // Vercel client URL
    githubClient: "PASTE_GITHUB_CLIENT_LINK_HERE",
    githubServer: "PASTE_GITHUB_SERVER_LINK_HERE",
    challenges: [
      "Designing role-based route protection so field engineers cannot access manager-only Well endpoints.",
      "Fixing a production bug where unhandled JWT errors were crashing the Node.js process on Render.",
      "Structuring a scalable module-based backend architecture (auth/user/sample/well modules).",
    ],
    improvements: [
      "Add global search and pagination across samples and wells.",
      "Build analytics dashboard for lab status and site trends.",
      "Add file/document attachments to core sample records.",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "trendpulse",
    name: "Trendpulse", // TODO: confirm exact name/tagline
    shortDesc: "TODO - tell me what Trendpulse does, I'll write this. (Started 16 Jul 2026 as an SCIC assignment-level project, now being actively improved.)",
    image: "PASTE_SCREENSHOT_PATH_HERE",
    tags: [], // TODO
    tech: [], // TODO
    description: "TODO",
    liveLink: "PASTE_LIVE_LINK_HERE",
    githubClient: "PASTE_GITHUB_LINK_HERE",
    challenges: [],
    improvements: [],
    featured: true,
  },
  {
    id: 3,
    slug: "promptarium",
    name: "Promptarium - AI Prompt Sharing & Marketplace",
    shortDesc:
      "A platform for discovering, sharing, and buying/selling AI prompts, with a full apothecary-themed design.",
    image: "PASTE_SCREENSHOT_PATH_HERE",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "TanStack Query",
      "Framer Motion",
      "Recharts",
    ],
    description:
      "Promptarium is a marketplace for AI prompts with a distinctive apothecary/formulary visual theme. It supports authentication (Firebase + JWT), Stripe payments, and analytics via Recharts.",
    liveLink: "PASTE_LIVE_LINK_HERE", // client on Vercel
    githubClient: "PASTE_GITHUB_CLIENT_LINK_HERE",
    githubServer: "PASTE_GITHUB_SERVER_LINK_HERE", // backend on Render
    challenges: [
      "Fixing recurring Express route-ordering bugs where specific routes were shadowed by parameterized /:id routes.",
      "Integrating Stripe payments end-to-end with proper auth checks.",
    ],
    improvements: ["Add prompt rating/review system.", "Add creator payout dashboard."],
    featured: false,
  },
  {
    id: 4,
    slug: "digitools",
    name: "DigiTools - Digital Tools Marketplace",
    shortDesc: "A digital tools buying platform with cart, filtering, and category browsing.",
    image: "PASTE_SCREENSHOT_PATH_HERE",
    tags: ["React", "Tailwind CSS", "DaisyUI"],
    tech: ["React", "Vite", "Tailwind CSS v4", "DaisyUI v5", "React Router DOM"],
    description:
      "DigiTools is a digital tools e-commerce site with a purple-violet visual theme, built with a custom useCart hook for cart state management.",
    liveLink: "PASTE_LIVE_LINK_HERE", // Netlify
    githubClient: "PASTE_GITHUB_LINK_HERE",
    challenges: ["Building reusable cart logic in a custom useCart hook without external state libraries."],
    improvements: ["Add order history.", "Add product search."],
    featured: false,
  },
  {
    id: 5,
    slug: "drivefleet-car-rental",
    name: "DriveFleet - Car Rental App",
    shortDesc: "A car rental browsing and booking app with theme switching.",
    image: "PASTE_SCREENSHOT_PATH_HERE",
    tags: ["React", "Tailwind CSS", "DaisyUI"],
    tech: ["React", "Vite", "Tailwind CSS v4", "DaisyUI v5"],
    description:
      "DriveFleet lets users browse and book rental cars, with a custom dark/light theme toggle (useTheme hook, localStorage-backed).",
    liveLink: "PASTE_LIVE_LINK_HERE",
    githubClient: "PASTE_GITHUB_LINK_HERE",
    challenges: [
      "Resolving DaisyUI v5 overriding Tailwind's custom @theme colors by scoping colors under [data-theme] selectors.",
    ],
    improvements: ["Add booking calendar with date-range availability.", "Add payment integration."],
    featured: false,
  },
];
