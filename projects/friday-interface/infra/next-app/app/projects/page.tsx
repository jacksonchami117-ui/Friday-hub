import React from "react";
import { getProjects } from "@/lib/data";
import Card from "@/components/Card";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map(project => (
        <Card key={project.id}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-muted">Status: {project.status}</p>
            </div>
            <button className="text-sm text-accent hover:underline">Details</button>
          </div>
        </Card>
      ))}
    </div>
  );
}
