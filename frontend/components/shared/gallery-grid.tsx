"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { SmartImage } from "./smart-image";

export interface GalleryView {
  id: string;
  type: "photo" | "video";
  /** Photo source, or video thumbnail. */
  src: string;
  embedUrl?: string;
  title: string;
  alt: string;
  category: string;
}

export function GalleryGrid({
  items,
  categories,
  filterLabel,
  emptyLabel = "—",
}: {
  items: GalleryView[];
  categories?: { key: string; label: string }[];
  filterLabel?: string;
  emptyLabel?: string;
}) {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<GalleryView | null>(null);

  const filtered =
    !categories || active === "all"
      ? items
      : items.filter((i) => i.category === active);

  return (
    <div className="flex flex-col gap-7">
      {categories && categories.length > 1 && (
        <div
          role="tablist"
          aria-label={filterLabel}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active === c.key
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-foreground hover:border-primary/40",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">{emptyLabel}</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={item.title}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-1 p-3 text-left text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.title}
              </span>
              {item.type === "video" && (
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-12 place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                    <Play className="size-5 translate-x-0.5 fill-current" />
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {selected?.title ?? "Gallery"}
          </DialogTitle>
          {selected?.type === "video" && selected.embedUrl ? (
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={selected.embedUrl}
                title={selected.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : selected ? (
            <SmartImage
              src={selected.src}
              alt={selected.alt}
              className="aspect-video w-full rounded-xl"
              sizes="90vw"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
