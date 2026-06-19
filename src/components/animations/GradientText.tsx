'use client';
import { cn } from '@/lib/utils';

export function GradientText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient",
        "bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]",
        className
      )}
    >
      {text}
    </span>
  );
}
