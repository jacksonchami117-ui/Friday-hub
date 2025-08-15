import "./globals.css";
import React from "react";

export const metadata = {
  title: "FRIDAY",
  description: "Futuristic control interface for agents and team coordination"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
