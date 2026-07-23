import { FaCode, FaHeart, FaFutbol, FaMusic } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2022", label: "Coding Since" },
  { value: "Open", label: "For Opportunities" },
];

const interests = [
  { icon: <FaCode />, label: "Clean Code" },
  { icon: <FaHeart />, label: "Open Source" },
  { icon: <FaFutbol />, label: "Football" },
  { icon: <FaMusic />, label: "Music" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-base-200">
      <Container>
        <SectionTitle eyebrow="Who I Am" title="About Me" />

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="flex-shrink-0 relative w-full max-w-sm mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-2xl" />
              <Image
                src="/golamrabbi.png"
                alt="Golam Rabbi"
                className="relative z-10 rounded-2xl w-full object-cover shadow-2xl"
                width={320}
                height={320}
              />
              <div className="absolute z-20 -bottom-6 -right-6 bg-base-100 border border-accent/20 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <FaCode className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/50">Clean Code</p>
                    <p className="font-display font-bold text-sm">Always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-display text-3xl font-bold mb-2">
              Frontend Developer based in Bangladesh
            </h3>
            <p className="text-accent font-medium mb-6">
              Turning ideas into elegant digital experiences
            </p>

            <div className="space-y-4 text-base-content/70 leading-relaxed mb-8">
              <p>
                My programming journey started in{" "}
                <strong className="text-base-content">2022</strong> when I
                stumbled upon HTML and instantly felt the magic of building
                something visible in a browser. Since then, I&apos;ve never looked
                back — diving deep into JavaScript, React, and eventually the
                full stack world with Node.js and databases.
              </p>
              <p>
                I love working on{" "}
                <strong className="text-base-content">
                  challenging frontend problems
                </strong>{" "}
                — crafting pixel-perfect UIs, smooth animations, and responsive
                layouts that just feel right. I&apos;m equally comfortable on the
                backend, building REST APIs and managing databases.
              </p>
              <p>
                Outside of programming, I&apos;m passionate about{" "}
                <strong className="text-base-content">football</strong> — I
                play every weekend with friends. I also enjoy{" "}
                <strong className="text-base-content">music</strong>, long
                walks, and the occasional book. I believe a rested mind writes
                better code.
              </p>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-3 mb-10">
              {interests.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>

            <Button href="/#contact">Let's Work Together</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card bg-base-100 border border-base-content/10 text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <p className="font-display text-4xl font-extrabold text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-base-content/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}