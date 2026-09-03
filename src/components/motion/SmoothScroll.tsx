import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

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
