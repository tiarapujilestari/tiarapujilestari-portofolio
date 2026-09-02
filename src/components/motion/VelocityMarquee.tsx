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
  text: string;
  baseVelocity?: number;
  className?: string;
}

/**
 * Continuously scrolling marquee whose speed reacts to page scroll velocity —
 * scroll fast and it accelerates, scroll slow/stop and it settles back to base speed.
 */
export default function VelocityMarquee({
  text,
  baseVelocity = 3,
  className = "",
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
  const directionRef = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = directionRef.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionRef.current = -1;
    else if (vf > 0) directionRef.current = 1;
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
          <span key={i} className="inline-block mx-6">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
