import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "QKD Simulator",
    href: "#projects",
    tags: ["Python", "NumPy", "Cryptography", "Matplotlib"],
    image: {
      LIGHT: "/images/projects/qkdLight.png",
      DARK: "/images/projects/qkdDark.png",
    },
  },
  {
    index: 1,
    title: "Kaizen AI",
    href: "#projects",
    tags: ["Flask", "Scikit-learn", "Pandas", "ML"],
    image: {
      LIGHT: "/images/projects/kaizenLight.webp",
      DARK: "/images/projects/kaizenDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Quantum Key Distribution (QKD) Simulator",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/qkdDark.png"],
    description:
      "Developed a Python simulator demonstrating quantum-secure key exchange using the BB84 protocol. Utilized NumPy and Matplotlib for simulating quantum states and Cryptography libraries for secure key handling.",
    sourceCodeHref: "https://github.com/mirzasuhail", 
    liveWebsiteHref: "#",
  },
  {
    name: "Kaizen AI - Decision Tree Visualization",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/kaizenLight.avif"],
    description:
      "Built a Flask-based web app integrating scikit-learn and Pandas to generate and visualize decision trees. Automated entropy and information gain calculations with a responsive UI for real-time ML education.",
    sourceCodeHref: "https://github.com/mirzasuhail",
    liveWebsiteHref: "#",
  },
  {
    name: "Student Database Management System",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/studentLight.jpg"],
    description:
      "Designed a database application that digitizes student biodata, replacing traditional handwritten records. Implemented CRUD operations and data validation using Python and SQL for efficient academic data handling.",
    sourceCodeHref: "https://github.com/mirzasuhail",
    liveWebsiteHref: "#",
  },
  {
    name: "Localization of Cable Harness",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/cableLight.jpg"],
    description:
      "Completed a six-month industrial training program at Aaviza Electronics. Gained exposure to production processes, PCB assembly, and quality control systems within ISO 9001 and AS9100-certified environments.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "My Portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolioDark.png"],
    description:
      "A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion to showcase my AI/ML and Web Development skills.",
    sourceCodeHref: "https://github.com/mirzasuhail/portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];