import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Selected Work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl italic sm:text-5xl md:text-6xl">
            Featured <span className="text-gradient">projects</span>
          </h2>
        </Reveal>

        <div className="mt-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
