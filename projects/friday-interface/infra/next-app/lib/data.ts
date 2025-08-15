export type Project = { id: string; name: string; status: string; };
export type SOP = { id: string; title: string; description: string; };
export type Decision = { id: string; title: string; date: string; resolved: boolean; };
export type Run = { id: number; description: string; status: string; date: string; };

export async function getProjects(): Promise<Project[]> {
  return [
    { id: "PRJ1", name: "Project Alpha", status: "Active" },
    { id: "PRJ2", name: "Project Beta", status: "Completed" },
    { id: "PRJ3", name: "Project Gamma", status: "Active" }
  ];
}
export async function getSOPs(): Promise<SOP[]> {
  return [
    { id: "SOP-100", title: "Visual QA", description: "Guidelines for visual quality assurance of the UI." },
    { id: "SOP-101", title: "Build & Deploy", description: "Steps to build and deploy the FRIDAY interface." }
  ];
}
export async function getDecisions(): Promise<Decision[]> {
  return [
    { id: "DEC1", title: "Adopt new encryption standard", date: "2025-08-10", resolved: true },
    { id: "DEC2", title: "Increase team size for Project Alpha", date: "2025-08-12", resolved: false },
    { id: "DEC3", title: "Schedule maintenance downtime", date: "2025-08-14", resolved: true }
  ];
}
export async function getRuns(): Promise<Run[]> {
  return [
    { id: 1, description: "Alpha team data center secure run", status: "Completed", date: "2025-08-14 09:00" },
    { id: 2, description: "Backup system health check run", status: "Running", date: "2025-08-15 10:30" },
    { id: 3, description: "Incident response drill", status: "Pending", date: "2025-08-15 11:00" }
  ];
}
