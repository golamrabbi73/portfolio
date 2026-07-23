"use client";
import { FaRoad } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-base-100">
      <Container size="narrow">
        <SectionTitle eyebrow="How I Got Here" title="My Journey" />

        <div className="space-y-6">
          {journey.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card border shadow-lg p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.current
                  ? "bg-accent/5 border-accent/30"
                  : "bg-base-200 border-base-content/10"
              }`}
            >
              {item.current && (
                <span className="absolute top-4 right-4 badge badge-accent text-xs font-semibold gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Ongoing
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.current ? "bg-accent" : "bg-base-content/10"
                  }`}
                >
                  <FaRoad
                    className={item.current ? "text-white" : "text-accent"}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-lg">
                        {item.role}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {item.company}{" "}
                        <span className="text-base-content/40">
                          · {item.type}
                        </span>
                      </p>
                    </div>
                    <span className="text-base-content/50 text-sm font-medium whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-base-content/60 text-sm leading-relaxed mt-3 mb-4">
                    {item.description}
                  </p>

                  {item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="badge badge-outline border-accent/30 text-accent/70 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
