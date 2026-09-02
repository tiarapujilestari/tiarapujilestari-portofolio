export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  direction: "left" | "right";
}

export interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}
