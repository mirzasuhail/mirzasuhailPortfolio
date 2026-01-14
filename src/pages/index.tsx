
import Head from "next/head";
import LandingHero from "@/components/landing-hero";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import ProjectShowcaseList from "@/components/projects/project-showcase-list";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Mirza Suhail | Portfolio`}</title>
        <meta name="description" content="AI/ML & MLOps Specialist Portfolio" />
      </Head>
      <main>
        <section id="home">
          <LandingHero />
        </section>

        <section id="about" className="scroll-mt-20">
          <AboutHero />
          <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
          <ExperienceShowcaseList title="Education" details={EDUCATION} />
        </section>

        <section id="projects" className="scroll-mt-20 mx-auto max-w-7xl px-6 py-20 sm:px-14 md:px-20">
          {PROJECT_SHOWCASE && PROJECT_SHOWCASE.length > 0 && (
             <ProjectShowcaseList title="Projects" projects={PROJECT_SHOWCASE} />
          )}
        </section>
      </main>
    </>
  );
}