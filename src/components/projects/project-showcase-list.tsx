import React from "react";
import Image from "next/image";

interface ProjectShowcaseListProps {
  title: string;
  projects: any[];
}

const ProjectShowcaseList = ({ title, projects }: ProjectShowcaseListProps) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-14 md:px-20">
      <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects?.map((project) => (
          <div 
            key={project?.index ?? Math.random()} 
            className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50"
          >
            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project?.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project?.tags?.map((tag: string) => (
                <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcaseList;