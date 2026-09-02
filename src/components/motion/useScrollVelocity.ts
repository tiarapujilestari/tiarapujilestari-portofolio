import { useScroll, useVelocity, useSpring, useTransform } from "motion/react";

/**
 * Shared scroll-velocity hook.
 * Returns a smoothed velocity motion value plus a couple of common
 * derived transforms so every component doesn't reinvent the spring math.
 *
 * Usage:
 *   const { smoothVelocity, skew, speedFactor } = useScrollVelocity();
 *   <motion.div style={{ rotate: skew }} />
 */
export function useScrollVelocity() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Spring-smoothed so it doesn't jitter on trackpads / fast flicks.
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  // A gentle skew (deg) driven by velocity — used for photos/cards.
  const skew = useTransform(smoothVelocity, [-2000, 0, 2000], [-6, 0, 6], {
    clamp: true,
  });

  // 0 → 1+ multiplier, useful for marquee speed / stretch effects.
  const speedFactor = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [2.2, 1, 2.2],
    { clamp: true }
  );

  return { scrollY, scrollVelocity, smoothVelocity, skew, speedFactor };
}
