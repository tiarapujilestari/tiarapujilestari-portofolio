import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

/**
 * SmoothScroll — thin scroll-progress bar fixed to the top of the
 * viewport (spec #18). Deliberately NOT hijacking native scroll physics
 * (no Lenis/virtual-scroll library): native scroll is more accessible,
 * more performant, and works correctly with screen readers and
 * keyboard navigation. "Smoothness" instead comes from spring-smoothed
 * scroll-linked transforms in each section (see useScrollVelocity,
 * Parallax, Reveal).
 */
const SmoothScroll: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"
    />
  );
};

export default SmoothScroll;
