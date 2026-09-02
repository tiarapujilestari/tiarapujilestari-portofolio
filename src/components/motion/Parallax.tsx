import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxProps {
  children: React.ReactNode;
  /** px of vertical travel; positive moves content down as it scrolls in */
  offset?: number;
  className?: string;
}

/**
 * Parallax — wraps any block and shifts it vertically based on its own
 * scroll progress through the viewport. Used for project images, hero
 * visuals, decorative shapes.
 */
const Parallax: React.FC<ParallaxProps> = ({ children, offset = 60, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [offset, -offset]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default Parallax;
