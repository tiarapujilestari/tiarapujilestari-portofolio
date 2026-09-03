import React from "react";
import GlassCard from "../ui/GlassCard";
import Reveal from "../motion/Reveal";

const points = [
  "Frontend Development",
  "Full Stack Development",
  "UI Implementation",
  "Responsive Design",
  "API Integration",
  "Problem Solving",
];

const About: React.FC = () => {
  return (
    <section
      id="about-section"
      className="relative z-30 -mt-16 rounded-t-[3rem] bg-[#080808] px-6 pb-24 pt-20 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <GlassCard className="p-8 md:p-16">
          <Reveal direction="up" duration={0.9}>
            <p className="text-xs uppercase tracking-[0.35em] text-[#A1A1AA] mb-6">About</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#F5F5F5] sm:text-4xl md:text-5xl md:max-w-3xl">
              Frontend developer focused on building modern, responsive, and
              interactive digital experiences.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15} duration={0.9} className="mt-10">
            <p className="max-w-2xl text-sm leading-relaxed text-[#A1A1AA] md:text-base">
              I enjoy turning ideas into clean, functional interfaces —
              balancing solid engineering with careful attention to motion
              and detail. Currently focused on the React/TypeScript
              ecosystem and full-stack development.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
            {points.map((point, i) => (
              <Reveal key={point} direction="up" delay={0.1 + i * 0.05} duration={0.6}>
                <div className="flex items-center gap-2 border-t border-white/10 pt-3">
                  <span className="h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-pink-400" />
                  <span className="text-xs md:text-sm text-[#A1A1AA]">{point}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;
