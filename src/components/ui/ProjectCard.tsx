import { motion } from "motion/react";
import { Code2, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import Reveal from "@/components/motion/Reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1;

  return (
    <Reveal delay={0.05}>
      <div
        className={`flex flex-col gap-8 md:gap-12 ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center border-b border-white/10 py-16 md:py-24`}
      >
        {/* Visual */}
        <div
          data-cursor="view"
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-bg-soft)] md:w-1/2"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="object-cover w-full h-full"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.06 }}
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <span className="text-6xl italic font-display text-white/10 md:text-7xl">
            {number}
          </span>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
            >
              <Code2 className="w-4 h-4" />
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="inline-flex items-center gap-1 text-sm font-medium text-white"
              >
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
