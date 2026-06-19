import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-[var(--c-teal)] text-white hover:bg-[var(--c-teal-dark)]": variant === "default",
          "border-transparent bg-[var(--bg-secondary)] text-[var(--text-primary)]": variant === "secondary",
          "border-[var(--border)] text-[var(--text-primary)]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
