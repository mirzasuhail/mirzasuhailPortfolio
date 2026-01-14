import Head from "next/head";
import LandingHero from "@/components/landing-hero";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import ProjectShowcaseList from "@/components/projects/project-showcase-list";
import { PROJECT_SHOWCASE } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirza Suhail | Portfolio</title>
        <meta name="description" content="AI/ML & MLOps Specialist Portfolio" />
      </Head>
      <main className="flex flex-col gap-20">
        <section id="home">
          <LandingHero />
        </section>

        <section id="about" className="scroll-mt-20">
          <AboutHero />
          <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
          <ExperienceShowcaseList title="Education" details={EDUCATION} />
        </section>

        <section id="projects" className="scroll-mt-20 mx-auto max-w-7xl px-6 py-10 sm:px-14 md:px-20">
          {PROJECT_SHOWCASE && PROJECT_SHOWCASE.length > 0 && (
             <ProjectShowcaseList title="Projects" projects={PROJECT_SHOWCASE} />
          )}
        </section>

        {/* Restore Missing College & GitHub Message */}
        <section className="mx-auto max-w-7xl px-6 py-10 sm:px-14 md:px-20 mb-20 text-center">
          <div className="rounded-3xl bg-zinc-50 p-10 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/40">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Currently, I am in my college pursuing my degree while specializing in AI/ML. 
              Feel free to check my 
              <a 
                href="https://github.com/mirzasuhail" 
                target="_blank" 
                rel="noreferrer" 
                className="text-teal-500 font-semibold hover:underline mx-1"
              >
                GitHub configurations
              </a> 
              to see my latest projects and contributions.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}