"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const [lines, setLines] = useState<string[]>([]);

  const introLines: string[] = [
    "Initiating FRIDAY protocol...",
    "Mission: Coordinate the Alpha team to secure the data center.",
    "Performing system checks...",
    "Agent link ...... OK",
    "Neural net status ...... Online",
    "All systems green.",
    "Launching dashboard..."
  ];

  useEffect(() => {
    const timeouts: any[] = [];
    introLines.forEach((line, index) => {
      const t = setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === introLines.length - 1) {
          setTimeout(() => router.push("/dashboard"), 1000);
        }
      }, index * 1000 + 500);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-accent p-4">
      <div className="max-w-xl w-full">
        {lines.map((text, i) => (
          <p key={i} className="font-mono text-accent text-sm md:text-base leading-relaxed">
            {text}
            {i === lines.length - 2 && <span className="inline-block animate-blink ml-1">▉</span>}
          </p>
        ))}
      </div>
    </div>
  );
}
