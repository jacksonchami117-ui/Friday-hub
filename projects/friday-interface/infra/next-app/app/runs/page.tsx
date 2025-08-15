import React from "react";
import { getRuns } from "@/lib/data";
import Card from "@/components/Card";

export default async function RunsPage() {
  const runs = await getRuns();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Runs</h2>
      {runs.map(run => (
        <Card key={run.id}>
          <h3 className="text-lg font-semibold">Run #{run.id}</h3>
          <p className="text-sm">{run.description}</p>
          <p className="text-sm">
            Status:{" "}
            <span className={run.status === "Completed" ? "text-accent font-medium" : "text-muted"}>
              {run.status}
            </span>
          </p>
          <p className="text-xs text-muted mt-1">Date: {run.date}</p>
        </Card>
      ))}
    </div>
  );
}
