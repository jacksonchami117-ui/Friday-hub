import React from "react";
import { getSOPs } from "@/lib/data";
import Card from "@/components/Card";

export default async function SOPsPage() {
  const sops = await getSOPs();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Standard Operating Procedures</h2>
      {sops.map(doc => (
        <Card key={doc.id}>
          <h3 className="text-lg font-semibold">{doc.id}: {doc.title}</h3>
          <p className="text-sm text-muted mt-1">{doc.description}</p>
        </Card>
      ))}
    </div>
  );
}
