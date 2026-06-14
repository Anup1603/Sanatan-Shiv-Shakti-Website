import Image from "next/image";

import { cn } from "@/lib/utils";
import { MandalaPattern } from "./sacred";

const PLACEHOLDER_PREFIX = "ph:";

/** Warm saffron/maroon/gold gradient pairs for branded placeholders. */
const PALETTES: ReadonlyArray<readonly [string, string]> = [
  ["#f59324", "#9a3412"],
  ["#ea6a1e", "#7a1e27"],
  ["#d97706", "#7a1e27"],
  ["#e8761e", "#5c141b"],
  ["#c8a248", "#a8741a"],
  ["#c2410c", "#5c141b"],
];

function pickPalette(seed: string): readonly [string, string] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return PALETTES[hash % PALETTES.length];
}

export interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Glyph drawn faintly on placeholder tiles. */
  glyph?: string;
  /**
   * Smoothly zoom the image on hover — works on direct hover and when an
   * ancestor card has the `group` class. Wrap in `overflow-hidden` (this
   * component already clips).
   */
  hoverZoom?: boolean;
}

/**
 * Renders a real image with next/image when `src` is a path, or a tasteful
 * branded gradient placeholder when `src` is a "ph:<seed>" token.
 *
 * The element always fills its (relatively positioned, sized) parent, so wrap
 * it in a container with an aspect ratio or fixed height.
 */
export function SmartImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  priority = false,
  glyph = "ॐ",
  hoverZoom = false,
}: SmartImageProps) {
  const zoom = hoverZoom
    ? "transition-transform duration-700 ease-out group-hover:scale-105 hover:scale-105"
    : "";

  if (src.startsWith(PLACEHOLDER_PREFIX)) {
    const seed = src.slice(PLACEHOLDER_PREFIX.length);
    const [from, to] = pickPalette(seed);
    return (
      <div
        className={cn("relative overflow-hidden bg-muted", className)}
        role="img"
        aria-label={alt}
      >
        <div
          className={cn("absolute inset-0", zoom)}
          style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
        />
        <MandalaPattern className="absolute -right-10 -top-10 size-48 text-white/15" />
        <MandalaPattern className="absolute -bottom-12 -left-12 size-56 text-white/10" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="select-none font-display text-6xl text-white/35">
            {glyph}
          </span>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-white/5" />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", zoom)}
      />
    </div>
  );
}
