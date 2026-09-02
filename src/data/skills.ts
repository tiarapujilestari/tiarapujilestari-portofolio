export interface SkillCategory {
  label: string;
  items: string[];
}

/** From the spec — adjust freely as your real skill set grows. */
export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST API"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];
