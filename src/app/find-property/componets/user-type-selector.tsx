"use client";

import { cn } from "../../../lib/utils";
type UserType = "student" | "professional" | "couple" | "bachelor";
const OPTIONS: Array<{
  value: UserType;
  label: string;
  avatar: string;
  fallback: string;
}> = [
  {
    value: "student",
    label: "Student",
    avatar: "/student-avatar.png",
    fallback: "ST",
  },
  {
    value: "professional",
    label: "Professional",
    avatar: "/professional-avatar.png",
    fallback: "PR",
  },
  {
    value: "couple",
    label: "Couple",
    avatar: "/couple-avatar.png",
    fallback: "CP",
  },
  {
    value: "bachelor",
    label: "Bachelor",
    avatar: "/bachelor-avatar.jpg",
    fallback: "BA",
  },
];

export function UserTypeSelector({
  value,
  onChange,
  className,
}: {
  value: UserType;
  onChange: (val: UserType) => void;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="User type"
      className={cn(
        "flex flex-wrap items-center mx-auto gap-2 md:gap-6",
        className
      )}
    >
      {OPTIONS.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(opt.value)}
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border px-3 py-2 md:px-4 md:py-2.5",
              "border-border bg-card text-foreground transition-colors",
              selected ? "ring-2 ring-ring/50 bg-secondary" : "hover:bg-accent"
            )}
          >
            <div className="h-7 w-7 relative flex size-8 shrink-0 overflow-hidden rounded-full">
              <img
                src={opt.avatar || "/placeholder.svg"}
                alt={`${opt.label} avatar`}
                className="aspect-square size-full"
              />
              <div className="bg-muted flex size-full items-center justify-center rounded-full">
                {opt.fallback}
              </div>
            </div>
            <span className="text-sm md:text-base">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export type { UserType };
