import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Golam Rabbi | Full Stack Developer",
    template: "%s | Golam Rabbi",
  },

  description:
    "Full Stack Developer from Bangladesh specializing in Next.js, React, TypeScript, Node.js, Express.js and MongoDB. Passionate about building scalable enterprise software and modern user experiences.",

  keywords: [
    "Golam Rabbi",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Bangladesh Developer",
    "GeoLog",
    "TrendPulse",
  ],

  authors: [
    {
      name: "Golam Rabbi",
    },
  ],

  creator: "Golam Rabbi",

  publisher: "Golam Rabbi",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Golam Rabbi | Full Stack Developer",

    description:
      "Building scalable web applications using React, Next.js, TypeScript, Node.js and MongoDB.",

    url: "https://your-domain.com",

    siteName: "Golam Rabbi Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Golam Rabbi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Golam Rabbi | Full Stack Developer",

    description:
      "Next.js • React • TypeScript • Node.js • MongoDB",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0d1015",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-base-100 text-base-content antialiased min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}