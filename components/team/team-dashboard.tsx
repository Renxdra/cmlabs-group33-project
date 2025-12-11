import React from "react";

export function TeamDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold mb-2">Team Members</h2>
        <p className="text-muted-foreground">View and manage team members</p>
      </div>
      
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold mb-2">Team Performance</h2>
        <p className="text-muted-foreground">Track team metrics and performance</p>
      </div>
      
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold mb-2">Team Settings</h2>
        <p className="text-muted-foreground">Configure team preferences</p>
      </div>
    </div>
  );
}