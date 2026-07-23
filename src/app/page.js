import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Journey from "@/components/sections/Journey";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Journey />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
