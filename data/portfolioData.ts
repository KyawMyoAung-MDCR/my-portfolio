// data/portfolioData.ts

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
}

export const heroData = {
  name: "Kyaw Myo Aung",
  title: "Software Developer & Technical Consultant",
  bio: "Specializing in enterprise application development, cloud solutions, and modern web architectures. Passionate about building clean, efficient, and strongly-typed applications.",
};

export const experiencesData: Experience[] = [
  {
    role: "Technical Consultant / ABAP Developer",
    company: "Enterprise Solutions Co., Ltd.",
    duration: "2024 - Present",
    description: [
      "Developed custom business logic and integrations within SAP S/4HANA Cloud.",
      "Built modern web interfaces and handled backend REST API connections.",
      "Optimized database views and automated data workflows."
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "TypeScript Counter Application",
    description: "A highly interactive web-based counter application demonstrating clean architecture, component separation, and watch-mode compilation in TypeScript.",
    techStack: ["HTML5", "CSS3", "TypeScript", "Live Server"],
    githubUrl: "https://github.com/kyawmyoaung/counter-app"
  }
];

export const skillsData: string[] = [
  "TypeScript", "JavaScript", "Java", "Spring Boot", "Next.js", "Tailwind CSS", "SAP ABAP", "SQL"
];