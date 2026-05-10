import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
