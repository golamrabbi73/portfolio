import About from "@/components/sections/About";
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
      </main>
    </>
  );
}
