import { FaBriefcase } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-base-100">
      <Container size="narrow">
        <SectionTitle eyebrow="Work History" title="Experience" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`card border shadow-lg p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                exp.current
                  ? "bg-accent/5 border-accent/30"
                  : "bg-base-200 border-base-content/10"
              }`}
            >
              {exp.current && (
                <span className="absolute top-4 right-4 badge badge-accent text-xs font-semibold gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Current
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    exp.current ? "bg-accent" : "bg-base-content/10"
                  }`}
                >
                  <FaBriefcase
                    className={exp.current ? "text-white" : "text-accent"}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {exp.company}{" "}
                        <span className="text-base-content/40">
                          · {exp.type}
                        </span>
                      </p>
                    </div>
                    <span className="text-base-content/50 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-base-content/60 text-sm leading-relaxed mt-3 mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="badge badge-outline border-accent/30 text-accent/70 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}