export const projects = [
  {
    id: 1,
    slug: "geolog",
    name: "GeoLog - Subsurface Data & Core Sample Management Platform",
    shortDesc:
      "Enterprise B2B SaaS platform for managing subsurface data and core samples in the petroleum/mining/geology domain.",
    image: "/geolog_1.png", // e.g. "/projects/geolog-1.png"
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
    liveLink: "https://geolog-platform.vercel.app", // Vercel client URL
    githubClient: "https://github.com/golamrabbi73/geolog-platform",
    githubServer: "https://github.com/golamrabbi73/geolog-platform-server",
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
  name: "TrendPulse AI - Autonomous Market Research Platform",
  shortDesc:
    "An AI-powered market research platform that analyzes competitors and generates actionable marketing strategies from financial reports and business documents.",
  image: "/trendpulse_1.png",
  tags: [
    "Next.js",
    "TypeScript",
    "AI",
    "MongoDB",
    "JWT",
    "Google Gemini"
  ],
  tech: [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "React Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Recharts",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Google OAuth",
    "Google Gemini AI"
  ],
  description:
    "TrendPulse AI is an AI-powered competitor analysis and marketing strategy platform that helps businesses monitor competitors, analyze financial reports, SEC filings, and business documents using Google Gemini AI. Users can generate AI-driven competitor audits, identify market opportunities, and create customized marketing strategies through a secure dashboard with authentication and role-based features.",
  liveLink: "https://trendpulse-rouge.vercel.app",
  githubClient: "https://github.com/golamrabbi73/trendpulse",
  githubServer: "https://github.com/golamrabbi73/trendpulse-backend",
  challenges: [
    "Integrating Google Gemini AI to generate meaningful competitor insights from uploaded PDF and CSV files.",
    "Designing a scalable full-stack architecture with Next.js, Express.js, and MongoDB.",
    "Implementing secure JWT authentication with Google OAuth integration.",
    "Managing asynchronous AI generation workflows while providing a smooth user experience."
  ],
  improvements: [
    "Implement AI-powered competitor monitoring with automatic web crawling and scheduled market analysis.",
    "Add AI chat assistant for business insights and strategic recommendations.",
    "Generate interactive dashboards with predictive analytics and forecasting.",
    "Support multi-file document analysis with cross-document AI reasoning.",
    "Provide AI-generated SWOT analysis, pricing comparison, and market gap detection.",
    "Allow exporting AI reports as PDF, Excel, and PowerPoint.",
    "Implement team collaboration with shared workspaces and role-based permissions.",
    "Add email notifications for competitor updates and newly generated AI insights."
  ],
  featured: true,
},
  {
    id: 3,
    slug: "promptarium",
    name: "Promptarium - AI Prompt Sharing & Marketplace",
    shortDesc:
      "A platform for discovering, sharing, and buying/selling AI prompts, with a full apothecary-themed design.",
    image: "/prompthub_1.png",
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
    liveLink: "https://ai-prompt-hub-client.vercel.app", // client on Vercel
    githubClient: "https://github.com/golamrabbi73/ai-prompt-hub-client",
    githubServer: "https://github.com/golamrabbi73/ai-prompt-hub-server", // backend on Render
    challenges: [
      "Fixing recurring Express route-ordering bugs where specific routes were shadowed by parameterized /:id routes.",
      "Integrating Stripe payments end-to-end with proper auth checks.",
    ],
    improvements: ["Add prompt rating/review system.", "Add creator payout dashboard."],
    featured: false,
  },
  {
    id: 4,
    slug: "drivefleet-car-rental",
    name: "DriveFleet - Car Rental App",
    shortDesc: "A car rental browsing and booking app with theme switching.",
    image: "/drivefleet_1.png",
    tags: ["React", "Tailwind CSS", "DaisyUI"],
    tech: ["React", "Vite", "Tailwind CSS v4", "DaisyUI v5"],
    description:
      "DriveFleet lets users browse and book rental cars, with a custom dark/light theme toggle (useTheme hook, localStorage-backed).",
    liveLink: "https://my-assignment09.vercel.app",
    githubClient: "https://github.com/golamrabbi73/my-assignment09",
    githubServer: "https://github.com/golamrabbi73/my-assignment09-server",
    challenges: [
      "Resolving DaisyUI v5 overriding Tailwind's custom @theme colors by scoping colors under [data-theme] selectors.",
    ],
    improvements: ["Add booking calendar with date-range availability.", "Add payment integration."],
    featured: false,
  },
  {
  id: 5,
  slug: "tiles-gallery",
  name: "Tiles Gallery - Modern Tile Collection Platform",
  shortDesc:
    "A modern tile gallery platform where users can explore beautiful tile collections, search tiles, and manage their profiles securely.",
  image: "/tilesgallery_1.png",
  tags: ["Next.js", "Tailwind CSS", "MongoDB"],
  tech: [
    "Next.js 15",
    "React",
    "Tailwind CSS",
    "DaisyUI",
    "HeroUI",
    "MongoDB",
    "BetterAuth",
    "SwiperJS"
  ],
  description:
    "Tiles Gallery is a responsive web application built with Next.js App Router that allows users to browse tile collections, search by title, view detailed information, and securely manage their accounts using BetterAuth authentication. The application features private routes, Google login, featured collections, dynamic content, and an optimized user experience across all devices.",
  liveLink: "https://assignment-08-alpha.vercel.app",
  githubClient: "https://github.com/golamrabbi73/assignment-08",
  challenges: [
    "Implementing BetterAuth authentication with protected routes.",
    "Managing user profile updates and Google social login.",
    "Building dynamic search, featured sections, and responsive layouts with Next.js App Router."
  ],
  improvements: [
    "Add tile wishlist and favorites.",
    "Implement tile reviews and ratings.",
    "Add advanced filtering by category and material.",
    "Introduce admin dashboard for tile management."
  ],
  featured: false,
}
];
