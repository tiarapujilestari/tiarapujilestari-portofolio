import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative z-10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Journey
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl italic sm:text-5xl md:text-6xl">
            My <span className="text-gradient">experience</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-10">
          <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-[var(--color-accent-blue)] via-[var(--color-accent-violet)] to-[var(--color-accent-pink)]"
          />

          <div className="flex flex-col gap-16">
            {experience.map((item, i) => (
              <Reveal key={item.year} delay={0.05 * i}>
                <div className="relative">
                  <span className="absolute -left-[2.65rem] top-1 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent-violet)]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
