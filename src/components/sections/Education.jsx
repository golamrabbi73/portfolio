import {
  FaGraduationCap,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { educations } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-base-200 py-24"
    >
      <Container size="narrow">
        <SectionTitle
          eyebrow="Academic Journey"
          title="Education & Background"
          subtitle="My academic foundation and the journey that shaped my problem-solving mindset."
        />

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-accent/20 md:left-1/2" />

          <div className="space-y-10">
            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-6 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-base-200 bg-accent md:left-1/2" />

                {/* Card */}
                <div
                  className={`ml-14 w-full md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12"
                      : "md:pl-12"
                  }`}
                >
                  <div className="rounded-3xl border border-base-content/10 bg-base-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        {/* Degree */}
                        <div className="mb-2 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                            <FaGraduationCap />
                          </div>

                          <h3 className="font-display text-xl font-bold">
                            {edu.degree}
                          </h3>
                        </div>

                        {/* Institution */}
                        <p className="font-semibold text-accent">
                          {edu.institution}
                        </p>

                        {/* Location */}
                        <div className="mt-1 flex items-center gap-2 text-sm text-base-content/50">
                          <FaMapMarkerAlt />
                          {edu.location}
                        </div>
                      </div>

                      {/* Period */}
                      <span className="badge badge-outline border-accent/40 font-medium text-accent">
                        {edu.period}
                      </span>
                    </div>

                    {/* Education Details */}
                    <ul className="mt-6 space-y-3">
                      {edu.details.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-base-content/70"
                        >
                          <span className="font-bold text-accent">
                            ✓
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Developer Connection */}
                    {index === 0 && (
                      <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-4">
                        <div className="mb-1 flex items-center gap-2 font-semibold text-accent">
                          <FaCode />
                          Developer Journey
                        </div>

                        <p className="text-sm text-base-content/70">
                          Combining engineering knowledge with software
                          development to build domain-focused solutions like
                          GeoLog.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

