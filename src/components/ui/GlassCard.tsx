import React from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "div" | "article";
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  interactive = false,
}) => {
  return (
    <motion.div
      whileHover={
        interactive
          ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 25 } }
          : undefined
      }
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-colors duration-500 ${
        interactive ? "hover:border-white/25 hover:bg-white/[0.07]" : ""
      } ${className}`}
    >
      {/* top reflection highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* moving gradient sheen on hover */}
      {interactive && (
        <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,0%),rgba(99,102,241,0.15),transparent_60%)]" />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
