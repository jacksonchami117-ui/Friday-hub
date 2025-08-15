import React from "react";
import Card from "@/components/Card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <Card>
        <h3 className="text-lg font-semibold mb-3">Preferences</h3>
        <div className="flex items-center justify-between mb-2">
          <span>Dark Mode</span>
          <button className="px-3 py-1 rounded bg-surface text-sm text-foreground/90 cursor-not-allowed">On</button>
        </div>
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <button className="px-3 py-1 rounded bg-surface text-sm text-foreground/90 cursor-not-allowed">Enabled</button>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-2">Account</h3>
        <p className="text-sm text-muted">User: Admin</p>
        <p className="text-sm text-muted">Role: Coordinator</p>
      </Card>
    </div>
  );
}
