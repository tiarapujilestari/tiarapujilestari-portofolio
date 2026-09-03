import { useScroll, useVelocity, useSpring, useTransform } from "motion/react";

export function useScrollVelocity() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  const skew = useTransform(smoothVelocity, [-2000, 0, 2000], [-6, 0, 6], {
    clamp: true,
  });

  const speedFactor = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [2.2, 1, 2.2],
    { clamp: true }
  );

  return { scrollY, scrollVelocity, smoothVelocity, skew, speedFactor };
}
