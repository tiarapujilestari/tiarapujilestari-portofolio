import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  /** animate once, or every time it enters the viewport */
  once?: boolean;
  /** how much of the element must be visible before it plays */
  amount?: number;
  as?: keyof typeof motion;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Reveal — the single building block for every "fade/slide/blur in on
 * scroll" moment in the site (About statement, section headers, project
 * panels, timeline items, etc). Centralizing this keeps every section's
 * entrance motion consistent instead of hand-rolled per component.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.3,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { x, y } = offsets[direction];

  const variants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, x, y, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
