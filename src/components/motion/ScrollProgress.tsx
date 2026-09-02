import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient progress line fixed at the very top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-gradient-to-r from-[var(--color-accent-blue)] via-[var(--color-accent-violet)] to-[var(--color-accent-pink)]"
    />
  );
}
