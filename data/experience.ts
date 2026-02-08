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
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    date: "2023 - Present",
    description: "Leading the frontend team in building scalable web applications using React and Next.js. Improved performance by 40% and established a comprehensive design system.",
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "StartUp Inc",
    date: "2021 - 2023",
    description: "Developed and maintained multiple client projects. Worked with Node.js, Express, and PostgreSQL on the backend, and React on the frontend.",
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "Creative Agency",
    date: "2019 - 2021",
    description: "Collaborated with designers to implement pixel-perfect user interfaces. Gained expertise in accessible and responsive web design.",
  },
];
