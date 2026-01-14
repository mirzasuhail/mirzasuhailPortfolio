import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiScikitlearn,
  SiKubernetes,
  SiMlflow,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries/Frameworks
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend & Tools
import NodejsSvg from "@/public/icons/nodejs.svg";
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";

// Database
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
    ],
  },
  {
    sectionName: "AI/ML & Data Science",
    skills: [
      {
        name: "TensorFlow",
        icon: SiTensorflow,
      },
      {
        name: "PyTorch",
        icon: SiPytorch,
      },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
      },
      {
        name: "Pandas",
        icon: SiPandas,
      },
    ],
  },
  {
    sectionName: "MLOps & DevOps",
    skills: [
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
      {
        name: "MLflow",
        icon: SiMlflow,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
    ],
  },
  {
    sectionName: "Web Development",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
    ],
  },
];