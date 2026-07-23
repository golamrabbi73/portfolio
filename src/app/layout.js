import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Golam Rabbi - Full Stack Developer",
  description:
    "Full Stack Developer building GeoLog and Trendpulse. Petroleum & Mining Engineering background, React/Next.js + Node.js/TypeScript stack.",
  openGraph: {
    title: "Golam Rabbi - Full Stack Developer",
    description:
      "Full Stack Developer building GeoLog and Trendpulse. Petroleum & Mining Engineering background, React/Next.js + Node.js/TypeScript stack.",
    images: ["/golamrabbi.png"], // TODO: replace with a wider 1200x630 OG image if you make one
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
