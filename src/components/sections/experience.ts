export interface ExperienceItem {
  year: string;
  title: string;
  description?: string;
}

/**
 * TODO: verify these against your real timeline — kept as given in the
 * brief for now, adjust wording/dates as needed.
 */
export const experience: ExperienceItem[] = [
  {
    year: "2024",
    title: "Learning Web Development",
    description: "Started learning frontend fundamentals: HTML, CSS, JavaScript, and React.",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description: "Expanded into backend development — Node.js, Express, and databases.",
  },
  {
    year: "2026",
    title: "Professional Portfolio",
    description: "Built and shipped a professional, production-ready developer portfolio.",
  },
];
