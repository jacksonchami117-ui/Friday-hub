"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, Folder, FileText, CheckSquare, Activity, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Grid, badge: 0 },
  { name: "Projects", href: "/projects", icon: Folder, badge: 0 },
  { name: "SOPs", href: "/sops", icon: FileText, badge: 0 },
  { name: "Decisions", href: "/decisions", icon: CheckSquare, badge: 2 },
  { name: "Runs", href: "/runs", icon: Activity, badge: 1 },
  { name: "Settings", href: "/settings", icon: Settings, badge: 0 }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:flex-col bg-surface/60 backdrop-blur-md p-4 w-64">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-wide">FRIDAY</h1>
        <p className="text-xs text-muted mt-1">Main Brain Hub</p>
      </div>
      <ul className="flex-1 space-y-2">
        {navItems.map(item => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-between gap-3 px-3 py-2 rounded hover:bg-background/50 
                  ${active ? "bg-background text-accent font-medium" : "text-foreground/90"}`}>
                <span className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </span>
                {item.badge > 0 && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="text-xs text-muted">&#169; 2025 FRIDAY Ops</div>
    </nav>
  );
}
