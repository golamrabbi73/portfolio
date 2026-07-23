"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Reusable section title with eyebrow, heading, accent line, and optional subtitle
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col mb-14", alignClass[align], className)}
    >
      {eyebrow && (
        <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "w-16 h-1 rounded-full bg-accent mt-4",
          align === "center" ? "mb-6" : "mb-6"
        )}
      />
      {subtitle && (
        <p className="text-base-content/60 text-lg max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
