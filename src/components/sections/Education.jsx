import { FaMedal } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { educations } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-base-200">
      <Container size="narrow">
        <SectionTitle eyebrow="My Background" title="Education" />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

          <div className="space-y-12">
            {educations.map((edu, i) => (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-base-200 z-10" />

                {/* Card */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0
                      ? "md:pr-12 ml-14 md:ml-0"
                      : "md:pl-12 ml-14 md:ml-0"
                  }`}
                >
                  <div className="card bg-base-100 border border-base-content/10 shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-medium mt-0.5">
                          {edu.institution}
                        </p>
                        <p className="text-base-content/50 text-sm">
                          {edu.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="badge badge-accent badge-outline text-xs font-semibold px-3 py-2">
                          {edu.period}
                        </span>
                        <div className="flex items-center gap-1 mt-2 justify-end">
                          <FaMedal className="text-yellow-400 text-sm" />
                          <span className="text-sm font-semibold text-yellow-400">
                            {edu.result}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {edu.details.map((d, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-base-content/60"
                        >
                          <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alternating spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}