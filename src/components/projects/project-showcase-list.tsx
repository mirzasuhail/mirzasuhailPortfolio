import React from "react";
import Image from "next/image";

const ProjectShowcaseList = ({ title, projects }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-14 md:px-20">
      <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects?.map((project) => (
          <div 
            key={project?.index ?? Math.random()} 
            className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50 shadow-sm hover:shadow-md"
          >
            {/* Image Section */}
            <div className="relative z-10 mb-4 h-40 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-700">
               <Image
                src={project?.image?.DARK || project?.image?.LIGHT}
                alt={project?.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              {project?.title}
            </h3>
            
            <div className="mt-2 flex flex-wrap gap-2">
              {project?.tags?.map((tag) => (
                <span key={tag} className="rounded-md bg-accent/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
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