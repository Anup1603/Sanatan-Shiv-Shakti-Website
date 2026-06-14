import { cn } from "@/lib/utils";

/**
 * Decorative mandala ring drawn in `currentColor`. Purely ornamental.
 */
export function MandalaPattern({ className }: { className?: string }) {
  const spokes = Array.from({ length: 16 });
  const petals = Array.from({ length: 8 });
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" />
      <circle cx="50" cy="50" r="38" />
      <circle cx="50" cy="50" r="27" />
      <circle cx="50" cy="50" r="14" />
      {spokes.map((_, i) => (
        <line
          key={`s-${i}`}
          x1="50"
          y1="50"
          x2="50"
          y2="3"
          transform={`rotate(${i * (360 / 16)} 50 50)`}
        />
      ))}
      {petals.map((_, i) => (
        <ellipse
          key={`p-${i}`}
          cx="50"
          cy="27"
          rx="6"
          ry="13"
          transform={`rotate(${i * (360 / 8)} 50 50)`}
        />
      ))}
    </svg>
  );
}

/**
 * Small lotus + dots divider used between sections.
 */
export function LotusDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-linear-to-r from-transparent to-gold/60" />
      <svg
        viewBox="0 0 24 24"
        className="size-5 text-primary"
        fill="currentColor"
      >
        <path d="M12 2c1.1 1.7 1.7 3.4 1.7 5.1 0 1.2-.3 2.3-.9 3.3.9-.4 1.7-1 2.4-1.9.8-1 1.3-2.1 1.6-3.4.8 1.8 1 3.5.6 5.1-.3 1.2-.9 2.2-1.7 3.1 1.1-.2 2.1-.6 3.1-1.3-.2 1.9-1 3.4-2.3 4.6-1.2 1.1-2.7 1.8-4.5 2.1H10.5c-1.8-.3-3.3-1-4.5-2.1-1.3-1.2-2.1-2.7-2.3-4.6 1 .7 2 1.1 3.1 1.3-.8-.9-1.4-1.9-1.7-3.1-.4-1.6-.2-3.3.6-5.1.3 1.3.8 2.4 1.6 3.4.7.9 1.5 1.5 2.4 1.9-.6-1-.9-2.1-.9-3.3C10.3 5.4 10.9 3.7 12 2z" />
      </svg>
      <span className="h-px w-12 bg-linear-to-l from-transparent to-gold/60" />
    </div>
  );
}

/** Stylized Om mark inside a gradient disc — the brand glyph. */
export function OmDisc({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid place-items-center rounded-full bg-linear-to-br from-saffron-bright via-primary to-maroon text-white shadow-md ring-1 ring-gold/40",
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-display leading-none">ॐ</span>
    </span>
  );
}
