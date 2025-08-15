"use client";

import React, { useState } from "react";

type Props = {
  id: string;
  type?: "info" | "success" | "warning";
  title: string;
  message: string;
  cta?: { label: string; href?: string; onClick?: () => void };
};

export default function EngagementBanner({ id, type = "info", title, message, cta }: Props) {
  const storageKey = `friday_banner_${id}`;
  const [hidden, setHidden] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try { return localStorage.getItem(storageKey) === "hidden"; } catch { return false; }
  });

  const base = "w-full mb-4 rounded-lg p-4 border backdrop-blur-md";
  const tone =
    type === "success"
      ? "bg-green-500/10 border-green-500/30 text-green-200"
      : type === "warning"
      ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-100"
      : "bg-surface/60 border-foreground/10 text-foreground";

  if (hidden) return null;

  const dismiss = () => {
    setHidden(true);
    try { localStorage.setItem(storageKey, "hidden"); } catch {}
  };

  return (
    <div className={`${base} ${tone}`}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="font-semibold mb-1">{title}</div>
          <div className="text-sm opacity-90">{message}</div>
        </div>
        <div className="flex items-center gap-2">
          {cta && (cta.href
            ? <a href={cta.href} className="text-accent text-sm hover:underline">{cta.label}</a>
            : <button onClick={cta.onClick} className="text-accent text-sm hover:underline">{cta.label}</button>
          )}
          <button aria-label="Dismiss" onClick={dismiss} className="text-muted hover:text-foreground">✕</button>
        </div>
      </div>
    </div>
  );
}
