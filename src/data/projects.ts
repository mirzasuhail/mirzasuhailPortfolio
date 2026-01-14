import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "QKD Simulator",
    href: "#projects",
    tags: ["Python", "NumPy", "Cryptography", "Matplotlib"],
    image: {
      LIGHT: "/images/projects/qkdDark.png",
      DARK: "/images/projects/qkdDark.png",
    },
  },
  {
    index: 1,
    title: "Kaizen AI",
    href: "#projects",
    tags: ["Flask", "Scikit-learn", "Pandas", "ML"],
    image: {
      LIGHT: "/images/projects/kaizenLight.avif",
      DARK: "/images/projects/kaizenLight.avif",
    },
  },
  {
    index: 2,
    title: "Student Database",
    href: "#projects",
    tags: ["Python", "SQL", "Database"],
    image: {
      LIGHT: "/images/projects/studentLight.jpg",
      DARK: "/images/projects/studentLight.jpg",
    },
  },
  {
    index: 3,
    title: "Cable Harness",
    href: "#projects",
    tags: ["Industrial", "PCB", "Electronics"],
    image: {
      LIGHT: "/images/projects/cableLight.jpg",
      DARK: "/images/projects/cableLight.jpg",
    },
  },
  {
    index: 4,
    title: "My Portfolio",
    href: "#projects",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/portfolioDark.png",
      DARK: "/images/projects/portfolioDark.png",
    },
  },
];