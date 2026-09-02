import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * CustomCursor — replaces the native cursor on desktop/mouse devices only.
 * - Small dot by default
 * - Expands + shows "VIEW" text over elements with data-cursor="view"
 * - Slightly enlarges over data-cursor="magnetic" (buttons/links)
 * - Fully disabled on touch devices and under prefers-reduced-motion,
 *   and never blocks the native cursor from working (pointer-events: none).
 *
 * Add this once near the root of the app (e.g. in App.tsx), and tag
 * interactive elements with data-cursor="view" / data-cursor="magnetic".
 */
const CustomCursor: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true); // default true = hidden until confirmed otherwise
  const [variant, setVariant] = useState<"default" | "view" | "magnetic">("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(coarse);
    if (coarse || shouldReduceMotion) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const target = (e.target as HTMLElement).closest("[data-cursor]");
      const kind = target?.getAttribute("data-cursor");
      if (kind === "view" || kind === "magnetic") {
        setVariant(kind);
      } else {
        setVariant("default");
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  if (isTouch || shouldReduceMotion) return null;

  const size = variant === "view" ? 72 : variant === "magnetic" ? 40 : 12;

  return (
    <motion.div
      style={{ x: springX, y: springY, width: size, height: size }}
      animate={{ opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference flex items-center justify-center"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full h-full rounded-full bg-white flex items-center justify-center"
      >
        {variant === "view" && (
          <span className="text-[10px] font-semibold tracking-widest text-black">VIEW</span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
