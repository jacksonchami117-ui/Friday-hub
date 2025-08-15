import React from "react";
import { getProjects, getSOPs, getDecisions, getRuns } from "@/lib/data";
import Card from "@/components/Card";
import Link from "next/link";
import EngagementBanner from "@/components/EngagementBanner";

export default async function DashboardPage() {
  const [projects, sops, decisions, runs] = await Promise.all([
    getProjects(), getSOPs(), getDecisions(), getRuns()
  ]);

  const hasPendingDecisions = decisions.filter(d => !d.resolved).length > 0;

  return (
    <div className="space-y-4">
      <EngagementBanner
        id="welcome-001"
        type="success"
        title="FRIDAY is online"
        message="Welcome back. You can open Intake, review decisions, or start a new project."
        cta={{ label: "Open Intake", href: "#" }}
      />
      {hasPendingDecisions && (
        <EngagementBanner
          id="decisions-queue"
          type="warning"
          title="Decisions need review"
          message={`You have ${decisions.filter(d => !d.resolved).length} pending decision(s).`}
          cta={{ label: "Review", href: "/decisions" }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold mb-1">Projects</h3>
          <p className="text-sm text-muted mb-2">{projects.length} active projects</p>
          <Link href="/projects" className="text-accent text-sm hover:underline">
            View all projects &rarr;
          </Link>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-1">SOPs</h3>
          <p className="text-sm text-muted mb-2">{sops.length} SOPs available</p>
          <Link href="/sops" className="text-accent text-sm hover:underline">
            View SOPs &rarr;
          </Link>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-1">Decisions</h3>
          <p className="text-sm text-muted mb-2">{decisions.length} decisions logged</p>
          <Link href="/decisions" className="text-accent text-sm hover:underline">
            Review decisions &rarr;
          </Link>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-1">Runs</h3>
          <p className="text-sm text-muted mb-2">{runs.length} recent runs</p>
          <Link href="/runs" className="text-accent text-sm hover:underline">
            View run logs &rarr;
          </Link>
        </Card>
      </div>
    </div>
  );
}
