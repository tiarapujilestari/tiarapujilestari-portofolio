import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  wrap,
} from "motion/react";

interface VelocityMarqueeProps {
  items?: string[];
  text?: string;
  direction?: "left" | "right";
  baseVelocity?: number;
  baseSpeed?: number;
  className?: string;
  itemClassName?: string;
}

export default function VelocityMarquee({
  items,
  text,
  direction = "left",
  baseVelocity,
  baseSpeed,
  className = "",
  itemClassName = "",
}: VelocityMarqueeProps) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [-2000, 2000], [-4, 4], {
    clamp: true,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const directionRef = useRef(direction === "left" ? 1 : -1);

  const speed = baseSpeed ?? baseVelocity ?? 3;
  const content = items ? items.join(" \u2022 ") : (text ?? "");

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = directionRef.current * speed * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionRef.current = direction === "left" ? -1 : 1;
    else if (vf > 0) directionRef.current = direction === "left" ? 1 : -1;
    moveBy += moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        style={{ x: reduceMotion ? 0 : x }}
        className="inline-flex whitespace-nowrap"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className={`inline-block mx-6 ${itemClassName}`}>
            {content}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
