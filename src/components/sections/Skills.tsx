import React from "react";
import { Clock, ShieldCheck, LayoutTemplate } from "lucide-react";
import Reveal from "../motion/Reveal";
import Parallax from "../motion/Parallax";
import VelocityMarquee from "../motion/VelocityMarquee";
import GlassCard from "../ui/GlassCard";

const rowOne = ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"];
const rowTwo = ["Figma", "Responsive Design", "Wireframing", "Accessibility"];
const rowThree = ["Node.js", "REST API", "Git", "GitHub", "PostgreSQL", "MySQL"];

const workEthics = [
  {
    icon: Clock,
    title: "Timeliness",
    desc: "Consistent delivery within agile sprints and project milestones, ensuring zero downtime transitions.",
  },
  {
    icon: ShieldCheck,
    title: "Detail Oriented",
    desc: "Writing clean, maintainable, and well-documented codebases with meticulous attention to edge cases.",
  },
  {
    icon: LayoutTemplate,
    title: "Design-to-Code Fluency",
    desc: "Translating UI/UX designs into pixel-perfect, responsive interfaces while preserving visual consistency and usability.",
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative z-40 -mt-16 rounded-t-[3rem] bg-[#080808] px-6 pb-24 pt-20 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal direction="up" className="flex flex-col items-center text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#A1A1AA]">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F5F5]">
            Narrative
          </h2>
        </Reveal>

        <Reveal
          direction="up"
          delay={0.1}
          className="mt-4 flex flex-col items-center text-center"
        >
          <p className="max-w-2xl text-sm md:text-base leading-relaxed font-light text-[#A1A1AA]">
            With a strong foundation in frontend development and a growing understanding of UI/UX principles and backend logic,
            I approach building interfaces as more than just writing code, it's about crafting experiences that feel intuitive and perform flawlessly.
            I thrive in the space where design meets functionality, translating ideas into responsive, accessible, and pixel-perfect interfaces.
            My process is driven by clean code practices, attention to detail, and a genuine curiosity for how every layer of a product connects.
          </p>
        </Reveal>

        {/* WORK ETHICS */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workEthics.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={0.1 + i * 0.1}>
              <GlassCard
                interactive
                className="flex items-start gap-5 p-5 h-full"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <item.icon className="h-5 w-5 text-[#F5F5F5]" />
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-wider text-[#F5F5F5]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs md:text-sm leading-relaxed text-[#A1A1AA]">
                    {item.desc}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* CORE STACK — velocity-reactive marquee rows, grouped by category */}
        <Reveal direction="up" delay={0.15} className="mt-16">
          <h3 className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
            Core Stack
          </h3>
        </Reveal>

        <Parallax offset={20}>
          <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div>
              <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]">
                Frontend — Core
              </p>
              <VelocityMarquee
                items={rowOne}
                direction="left"
                baseSpeed={8}
                className="border-y border-white/10 py-4"
                itemClassName="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F5F5]/90"
              />
            </div>

            <div>
              <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]">
                UI/UX &amp; Design
              </p>
              <VelocityMarquee
                items={rowTwo}
                direction="right"
                baseSpeed={7}
                className="border-y border-white/10 py-4"
                itemClassName="text-2xl md:text-3xl font-semibold tracking-tight text-[#A1A1AA]"
              />
            </div>

            <div>
              <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]">
                Backend &amp; Tools — Familiar
              </p>
              <VelocityMarquee
                items={rowThree}
                direction="left"
                baseSpeed={6}
                className="border-b border-white/10 py-4"
                itemClassName="text-2xl md:text-3xl font-semibold tracking-tight text-[#7A7A7A]"
              />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Skills;