import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`group relative inline-flex items-center justify-center rounded-full ${className}`}
      data-cursor="magnetic"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {Content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block cursor-pointer">
      {Content}
    </button>
  );
};

export default MagneticButton;
