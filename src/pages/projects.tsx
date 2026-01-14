import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Mirza Suhail | AI/ML & MLOps Portfolio"
        description="Explore a collection of projects by Mohammad Mirza Suhail, a Computer Science student specialized in AI/ML and MLOps. Discover innovative machine learning models, web applications, and technical research."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Mohammad Mirza Suhail - AI/ML & MLOps",
          description:
            "Explore a showcase of projects crafted by Mirza Suhail. Witness the fusion of Artificial Intelligence, Machine Learning, and modern web technologies.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata}`,
              alt: "Mirza Suhail - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "AI/ML Projects, MLOps, Mirza Suhail Portfolio, Machine Learning, Python Projects, Data Science, Web Development, React.js, Artificial Intelligence, Student Portfolio",
          },
        ]}
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
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
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
        </div>
      </section>
    </>
  );
}