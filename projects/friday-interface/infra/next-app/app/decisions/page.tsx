import React from "react";
import { getDecisions } from "@/lib/data";
import Card from "@/components/Card";

export default async function DecisionsPage() {
  const decisions = await getDecisions();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Decisions</h2>
      {decisions.map(dec => (
        <Card key={dec.id}>
          <h3 className="text-lg font-semibold">{dec.title}</h3>
          <p className="text-sm">
            Status:{" "}
            <span className={dec.resolved ? "text-accent font-medium" : "text-muted"}>
              {dec.resolved ? "Resolved" : "Pending"}
            </span>
          </p>
          <p className="text-xs text-muted mt-1">Date: {dec.date}</p>
        </Card>
      ))}
    </div>
  );
}
