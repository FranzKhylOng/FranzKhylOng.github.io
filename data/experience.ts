export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    role: "Backend Engineer",
    company: "ScaleForge",
    date: "July 2023 - January 2026",
    description: "Leading the frontend team in building scalable web applications using React and Next.js. Improved performance by 40% and established a comprehensive design system.",
  },
  {
    id: "2",
    role: "Programming Instructor",
    company: "The Coding School",
    date: "April 2023 -  June 2023",
    description: "Earned a Teaching Certification in Python and Web Development by delivering technical demonstrations and engineering a capstone project.",
  },
  {
    id: "3",
    role: "Power Apps Developer Intern",
    company: "Questronix",
    date: "March 2023 - May 2023",
    description: "Engineered a custom event management dashboard, incorporating key features such as a calendar view, kanban board, and event database modification capabilities, using Power Apps.",
  },
];
