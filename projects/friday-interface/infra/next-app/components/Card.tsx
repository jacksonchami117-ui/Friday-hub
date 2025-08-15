import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`bg-surface/60 backdrop-blur-md rounded-lg p-4 shadow ${className}`} {...props}>
      {children}
    </div>
  );
}
