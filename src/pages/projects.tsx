import { NextSeo } from "next-seo";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Mirza Suhail | AI/ML & MLOps Portfolio"
        description="Explore a collection of projects by Mohammad Mirza Suhail, a Computer Science student specialized in AI/ML and MLOps."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Mohammad Mirza Suhail - AI/ML & MLOps",
          description: "Explore a showcase of projects crafted by Mirza Suhail.",
          images: [
            {
              url: `${siteMetadata.siteUrl}/images/portfolio-og.png`, // Fixed potential siteMetadata error
              alt: "Mirza Suhail - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {/* Added safety check to prevent Netlify build crash */}
            {PROJECTS_CARD && PROJECTS_CARD.length > 0 ? (
              PROJECTS_CARD.map((card, index) => (
                <ProjectCard key={index} {...card} />
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently pursuing my studies and building new projects and deep-diving into MLOps
              to deploy and scale machine learning models efficiently.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to see my latest work and contributions{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}