import React from "react";
import { ProjectShowcaseListItem } from "@/data/projects";

interface ProjectShowcaseListProps {
  title: string;
  projects: ProjectShowcaseListItem[];
}

const ProjectShowcaseList = ({ title, projects }: ProjectShowcaseListProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The '?' and 'item?.index' make the code skip broken data instead of crashing */}
        {projects?.map((item) => (
          <div key={item?.index ?? Math.random()} className="p-4 border rounded-lg">
             <h3 className="text-xl font-semibold">{item?.title}</h3>
             {/* Add your other card details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcaseList;