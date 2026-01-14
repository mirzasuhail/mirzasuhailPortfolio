import LandingHero from "@/components/landing-hero";
import { NextSeo } from "next-seo";
import SkillsShowcase from "@/components/skills/skills-showcase";
import AboutHero from "@/components/about-hero";
import ProjectCard from "@/components/projects/project-card";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { PROJECTS_CARD } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo title="Mirza Suhail | Portfolio" description="AI/ML & MLOps Specialist Portfolio" />
      
      <LandingHero />

      <section id="about" className="py-10">
        <AboutHero />
        <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
        <ExperienceShowcaseList title="Education" details={EDUCATION} />
      </section>

      <SkillsShowcase skills={SKILLS_DATA} />

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-14 md:px-20">
        <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {PROJECTS_CARD && PROJECTS_CARD.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
      </section>
                <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently pusuing my studies and building new projects and deep-diving into MLOps
              to deploy and scale machine learning models efficiently.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to see my latest work and contributions{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                GitHub
              </a>
            </p>
          </div>
    </>
  );
}