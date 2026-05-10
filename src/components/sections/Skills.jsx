"use client";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBar from "@/components/ui/SkillBar";
import { skillCategories, otherSkills } from "@/data/skills";

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-base-100" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="What I Know"
          title="My Skills"
          subtitle="A snapshot of the technologies and tools I work with daily"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="card bg-base-200 border border-base-content/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className={`font-display font-bold text-xl mb-6 ${cat.colorClass} flex items-center gap-2`}>
                <span className="w-2 h-6 bg-current rounded-full" />
                {cat.title}
              </h3>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Other Skills Cloud */}
        <div className="mt-16 text-center">
          <p className="text-base-content/50 text-sm mb-6 uppercase tracking-widest">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((tech) => (
              <span
                key={tech}
                className="badge badge-outline border-accent/30 text-accent/80 px-4 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}