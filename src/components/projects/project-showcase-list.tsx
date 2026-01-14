import React from "react";
import Image from "next/image";

const ProjectShowcaseList = ({ title, projects }) => {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects?.map((project) => (
          <div 
            key={project?.index ?? Math.random()} 
            className="group flex flex-col items-start rounded-3xl border border-zinc-100 p-8 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50 shadow-lg"
          >
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
               <Image
                src={project?.image?.DARK || project?.image?.LIGHT || "/fallback.png"}
                alt={project?.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
                unoptimized
              />
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              {project?.title}
            </h3>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project?.tags?.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-lg bg-teal-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcaseList;