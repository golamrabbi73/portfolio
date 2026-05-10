"use client";

/**
 * Animated skill progress bar
 * @param {string} name - skill name
 * @param {number} level - 0-100
 * @param {React.ReactNode} icon - optional icon
 * @param {boolean} animate - trigger fill animation
 */
export default function SkillBar({ name, level, icon, animate = false }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 font-medium text-base-content/80">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="text-sm">{name}</span>
        </div>
        <span className="text-accent font-display font-bold text-sm">
          {level}%
        </span>
      </div>
      <div className="w-full bg-base-content/10 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}