import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
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
      </main>
    </>
  );
}
