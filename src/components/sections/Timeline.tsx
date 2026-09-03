import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Reveal from "../motion/Reveal";
import GlassCard from "../ui/GlassCard";
import fotoManager from "../../assets/sarah-maulida.png";

interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  active?: boolean;
}

const entries: TimelineEntry[] = [
  {
    period: "2026 - PRESENT",
    role: "Junior Frontend Engineer",
    company: "PT CAHAYA PERDANA NUSANTARA",
    description:
      "Designed and developed responsive web interfaces using HTML, CSS, React.js, and JavaScript. Created user-centered designs, interactive prototypes, and modern dashboard layouts while focusing on usability and accessibility.",
    active: true,
  },
  {
    period: "2026 - PRESENT",
    role: "Full Stack Developer",
    company: "PT CAHAYA PERDANA NUSANTARA",
    description:
      "Developed a web-based patient meal ordering system to streamline food request management in hospitals. Designed the user interface, database structure, and application workflow using modern web technologies.",
  },
];

const testimonials = [
  {
    quote:
      "The patient meal ordering application has greatly improved our service workflow. It helps staff manage meal requests efficiently while ensuring accuracy and a better experience for patients.",
    name: "Sarah Maulida",
    role: "Manager",
    photo: fotoManager,
    accent: "from-blue-400/60 to-violet-400/60",
  },
  {
    quote:
      "An exceptional application that simplified patient meal management, reduced errors, and enhanced service quality. The intuitive design made it easy for our staff to adopt and use effectively.",
    name: "Ranti Ramadhani",
    role: "Head Umum",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    accent: "from-violet-400/60 to-pink-400/60",
  },
];

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-[60] -mt-16 rounded-t-[3rem] bg-[#0b0b0c] px-6 pb-24 pt-20 md:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-16 lg:flex-row">
        {/* TIMELINE */}
        <div className="w-full flex-1">
          <Reveal direction="up">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#A1A1AA]">Journey</p>
            <h2 className="mb-10 text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Experience Timeline
            </h2>
          </Reveal>

          <div className="relative pl-8 md:pl-10">
            {/* track */}
            <div className="absolute left-0 top-1.5 bottom-1.5 w-px bg-white/10" />
            {/* progress line */}
            <motion.div
              style={{ height: shouldReduceMotion ? "100%" : lineHeight }}
              className="absolute left-0 top-1.5 w-px bg-gradient-to-b from-blue-400 via-violet-400 to-pink-400"
            />

            <div className="space-y-10">
              {entries.map((entry, i) => (
                <Reveal key={i} direction="up" delay={i * 0.1} className="relative">
                  <div
                    className={`absolute -left-[35px] md:-left-[43px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-[#0b0b0c] ${
                      entry.active
                        ? "border-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.6)]"
                        : "border-white/20"
                    }`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        entry.active ? "bg-violet-400" : "bg-white/30"
                      }`}
                    />
                  </div>

                  <GlassCard className="p-6">
                    <span className="inline-block rounded border border-white/15 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#A1A1AA]">
                      {entry.period}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[#F5F5F5]">{entry.role}</h3>
                    <h4 className="text-xs font-medium tracking-wide text-[#A1A1AA]">
                      {entry.company}
                    </h4>
                    <p className="mt-3 text-xs md:text-sm leading-relaxed font-light text-[#A1A1AA]">
                      {entry.description}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* CLIENT FEEDBACK */}
        <div className="w-full lg:w-[420px] space-y-6">
          <Reveal direction="up">
            <h2 className="mb-2 text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Client Feedback
            </h2>
          </Reveal>

          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={0.1 + i * 0.1}>
              <GlassCard interactive className="relative overflow-hidden p-6">
                <span
                  className={`pointer-events-none absolute right-4 top-1 select-none bg-gradient-to-br ${t.accent} bg-clip-text font-serif text-7xl font-black text-transparent opacity-20`}
                >
                  "
                </span>

                <p className="relative z-10 text-xs md:text-sm italic leading-relaxed font-light text-[#D4D4D8]">
                  "{t.quote}"
                </p>

                <div className="relative z-10 mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="h-9 w-9 overflow-hidden rounded-full border border-white/15 bg-white/5">
                    <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F5F5F5]">{t.name}</h4>
                    <span className="text-[10px] font-medium text-[#A1A1AA]">{t.role}</span>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
