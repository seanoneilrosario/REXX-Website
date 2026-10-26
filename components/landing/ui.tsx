import Image from "next/image";
import type { ReactNode } from "react";
export function Logo({ large = false }: { large?: boolean }) {
  return (
    <Image
      className={large ? "wordmark wordmark-large" : "wordmark"}
      src="/assets/rexx-wordmark.svg"
      alt="REXX"
      width={255}
      height={49}
      priority={large}
    />
  );
}
export function ButtonLink({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "red" | "white";
}) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}
export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}
export function FeatureIcon({
  type,
}: {
  type: "energy" | "leaf" | "free" | "pouch" | "science";
}) {
  return (
    <span className="feature-icon">
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {type === "energy" && <path d="m18 3-11 15h8l-1 11 11-16h-9z" />}
        {type === "leaf" && (
          <path d="M7 23C1 11 18 9 26 5c0 13-4 23-15 20M7 28 22 10M13 20l-1-7" />
        )}
        {type === "free" && (
          <>
            <ellipse
              cx="16"
              cy="16"
              rx="8"
              ry="12"
              transform="rotate(-35 16 16)"
            />
            <path d="m5 27 22-22M9 12l14 10" />
          </>
        )}
        {type === "pouch" && (
          <path d="m5 9 11-4 11 4v14l-11 4-11-4zM5 9l11 4 11-4M16 13v14" />
        )}
        {type === "science" && (
          <>
            <path d="M12 4h8M13 4v9L6 26q10 4 20 0l-7-13V4M10 20h12" />
            <circle cx="16" cy="23" r="1" />
          </>
        )}
      </svg>
    </span>
  );
}
export const navigation = [
  { label: "Product", href: "#range" },
  { label: "The concept", href: "#concept" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Our story", href: "#story" },
];
