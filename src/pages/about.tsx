import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Mirza Suhail | AI/ML & MLOps Specialist"
        description="Learn more about Mohammad Mirza Suhail, a Computer Science student and aspiring MLOps engineer. Discover my journey in AI/ML, core technical skills, and passion for building efficient machine learning pipelines."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Mohammad Mirza Suhail - AI/ML & MLOps Specialist",
          description:
            "Dive into the story of Mohammad Mirza Suhail. Uncover the experiences, skills, and passion for AI/ML and web development that fuel my commitment to technical excellence.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
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
              "AI/ML Portfolio, Mirza Suhail, MLOps Specialist, Computer Science Student, Python Developer, Machine Learning Engineering, Web Development, Professional Journey, AI/ML Skills",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}