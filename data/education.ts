export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  date: string;
  description: string;
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    date: "2015 - 2019",
    description: "Focus on Software Engineering and Artificial Intelligence. Graduated with Honors.",
  },
];
