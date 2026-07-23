export const projects = [
  {
    id: 1,
    slug: "geolog",
    name: "GeoLog - Subsurface Data & Core Sample Management Platform",
    category: "Full Stack SaaS",
    featured: true,

    shortDesc:
      "Enterprise SaaS platform helping petroleum and mining teams manage wells, core samples, and subsurface data with secure role-based workflows.",

    image: "/geolog_1.png",

    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT",
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Zod",
      "React Query",
      "Tailwind CSS",
      "DaisyUI",
    ],

    description:
      "GeoLog is an enterprise B2B SaaS platform designed for petroleum, mining, and geology teams to manage well information and core sample records. The platform includes authentication, role-based access control, ownership-based permissions, and scalable API architecture.",

    liveLink: "https://geolog-platform.vercel.app",

    githubClient:
      "https://github.com/golamrabbi73/geolog-platform",

    githubServer:
      "https://github.com/golamrabbi73/geolog-platform-server",

    challenges: [
      "Designing role-based authorization where field engineers have limited access while managers and admins can manage organization data.",
      "Building a scalable backend architecture with separated authentication, users, samples, and wells modules.",
      "Handling production deployment issues and improving API reliability.",
    ],

    improvements: [
      "Add advanced search and pagination for wells and samples.",
      "Create analytics dashboard with operational insights.",
      "Add document and image attachments for core samples.",
      "Implement activity tracking and audit logs.",
    ],
  },

  {
    id: 2,
    slug: "trendpulse",
    name: "TrendPulse AI - Autonomous Market Research Platform",
    category: "AI Full Stack Application",
    featured: false,

    shortDesc:
      "AI-powered market research platform that analyzes competitors and generates actionable business strategies from documents and market data.",

    image: "/trendpulse_1.png",

    tags: [
      "Next.js",
      "TypeScript",
      "AI",
      "MongoDB",
      "Gemini",
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
      "Google Gemini AI",
    ],

    description:
      "TrendPulse AI is an AI-driven competitor research platform that helps businesses analyze competitors, identify market opportunities, and generate strategic marketing playbooks using Google Gemini AI.",

    liveLink:
      "https://trendpulse-rouge.vercel.app",

    githubClient:
      "https://github.com/golamrabbi73/trendpulse",

    githubServer:
      "https://github.com/golamrabbi73/trendpulse-backend",

    challenges: [
      "Integrating Google Gemini AI to generate meaningful insights from uploaded business documents.",
      "Designing AI workflows with asynchronous processing and user-friendly feedback states.",
      "Implementing secure authentication with JWT and Google OAuth.",
    ],

    improvements: [
      "Add automated competitor monitoring.",
      "Build AI chat assistant for business analysis.",
      "Generate exportable PDF and presentation reports.",
      "Add team collaboration workspace.",
    ],
  },

  {
    id: 3,
    slug: "promptarium",
    name: "Promptarium - AI Prompt Marketplace",
    category: "Marketplace Platform",
    featured: false,

    shortDesc:
      "A marketplace platform where users can discover, share, and purchase AI prompts with authentication and payment features.",

    image: "/prompthub_1.png",

    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],

    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
      "Stripe",
      "TanStack Query",
      "Framer Motion",
      "Recharts",
    ],

    description:
      "Promptarium is an AI prompt marketplace that allows creators to publish prompts and users to discover and purchase useful AI resources with secure authentication and payment integration.",

    liveLink:
      "https://ai-prompt-hub-client.vercel.app",

    githubClient:
      "https://github.com/golamrabbi73/ai-prompt-hub-client",

    githubServer:
      "https://github.com/golamrabbi73/ai-prompt-hub-server",

    challenges: [
      "Implementing secure Stripe payment workflow.",
      "Managing authentication and protected marketplace features.",
      "Resolving complex Express route handling issues.",
    ],

    improvements: [
      "Add prompt review and rating system.",
      "Create creator analytics dashboard.",
      "Add subscription-based premium prompts.",
    ],
  },

  {
    id: 4,
    slug: "drivefleet-car-rental",
    name: "DriveFleet - Car Rental Platform",
    category: "Frontend Application",
    featured: false,

    shortDesc:
      "Modern car rental application allowing users to browse vehicles and manage rental experiences with responsive UI.",

    image: "/drivefleet_1.png",

    tags: [
      "React",
      "Tailwind",
      "DaisyUI",
    ],

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "React Router",
    ],

    description:
      "DriveFleet is a responsive car rental application focused on smooth user experience, vehicle browsing, and modern frontend architecture.",

    liveLink:
      "https://my-assignment09.vercel.app",

    githubClient:
      "https://github.com/golamrabbi73/my-assignment09",

    githubServer:
      "https://github.com/golamrabbi73/my-assignment09-server",

    challenges: [
      "Building reusable components and responsive layouts.",
      "Managing theme switching and frontend state.",
    ],

    improvements: [
      "Add booking calendar system.",
      "Integrate online payments.",
      "Add user dashboard.",
    ],
  },

  {
    id: 5,
    slug: "tiles-gallery",
    name: "Tiles Gallery - Modern Tile Collection Platform",
    category: "Next.js Application",
    featured: false,

    shortDesc:
      "A modern tile gallery platform where users can explore collections, search products, and manage profiles securely.",

    image: "/tilesgallery_1.png",

    tags: [
      "Next.js",
      "MongoDB",
      "Authentication",
    ],

    tech: [
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "HeroUI",
      "MongoDB",
      "BetterAuth",
      "SwiperJS",
    ],

    description:
      "Tiles Gallery is a modern Next.js application featuring product collections, secure authentication, private routes, search functionality, and responsive design.",

    liveLink:
      "https://assignment-08-alpha.vercel.app",

    githubClient:
      "https://github.com/golamrabbi73/assignment-08",

    githubServer: null,

    challenges: [
      "Implementing BetterAuth authentication and protected routes.",
      "Creating dynamic search and responsive UI architecture.",
    ],

    improvements: [
      "Add wishlist functionality.",
      "Implement product reviews.",
      "Create admin dashboard.",
    ],
  },
];