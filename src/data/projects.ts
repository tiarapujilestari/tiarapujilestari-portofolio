import type { Project } from "../components/ui/ProjectCard";

/**
 * TODO: REPLACE WITH REAL DATA.
 * I couldn't read the content of https://portofolio-tiarapujilestari.vercel.app/
 * (it's a client-rendered SPA, so the raw fetch returned no project data).
 * Paste your real project titles, descriptions, tech stacks, image paths,
 * and links here — do not ship these placeholders.
 */
export const projects: Project[] = [
  {
    id: 1,
    index: "01",
    title: "TODO: Project Name",
    description:
      "TODO: Replace with your real project description — what it does, the problem it solves, and your role.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/assets/projects/project-1.png",
    githubUrl: "https://github.com/your-username/project-1",
    liveUrl: "https://your-project-1.vercel.app",
  },
  {
    id: 2,
    index: "02",
    title: "TODO: Project Name",
    description: "TODO: Replace with your real project description.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/assets/projects/project-2.png",
    githubUrl: "https://github.com/your-username/project-2",
    liveUrl: "https://your-project-2.vercel.app",
  },
];
