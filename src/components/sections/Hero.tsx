import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useScrollVelocity } from "../motion/useScrollVelocity";
import Button from "../ui/Button";

/**
 * NOTE ON CONTENT:
 * I could not read the live site's actual copy (it's a client-rendered
 * SPA, the raw HTML has no content). The name/role below are kept from
 * the previous version of this file; replace the tagline/photo with
 * your real bio and asset paths.
 */
const roles = ["Frontend Developer", "Full Stack Developer"];

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { skew } = useScrollVelocity();

  // Cinematic scroll reaction (spec #6): as the hero scrolls out,
  // text scales down + fades + blurs, visual scales up + rises.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.85]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 10]);
  const textFilter = useTransform(textBlur, (b) => `blur(${b}px)`);

  const visualScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.15]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -100]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-10 flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#080808] px-6 pt-32 pb-16 md:px-16"
    >
      {/* animated grid / noise backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/15 to-pink-500/10 blur-[140px]" />

      {/* main content: asymmetric layout */}
      <motion.div
        style={{ scale: textScale, opacity: textOpacity, filter: textFilter }}
        className="relative z-10 grid flex-1 grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_1fr]"
      >
        {/* LEFT — oversized typography */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#A1A1AA]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </motion.p>

          <h1 className="font-sans text-[15vw] leading-[0.85] tracking-tight text-[#F5F5F5] sm:text-[10vw] lg:text-[6.2vw]">
            {["TIARA", "PUJILESTARI"].map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="block font-bold"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-md text-base leading-relaxed text-[#A1A1AA] md:text-lg"
          >
            Building digital experiences where code meets motion. {roles.join(" · ")}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#projects">View Work</Button>
            <Button href="#contact" variant="ghost">
              Let's Talk
            </Button>
          </motion.div>
        </div>

        {/* RIGHT — floating liquid-glass visual, reacts to scroll velocity */}
        <motion.div
          style={{ scale: visualScale, y: visualY }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <motion.div
            style={{ rotate: skew }}
            className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-pink-500/10" />
          </motion.div>

          {/* floating accent shapes */}
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 right-2 h-20 w-20 rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-pink-500/10 backdrop-blur-xl"
          />
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#A1A1AA]"
      >
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3 w-3" />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
