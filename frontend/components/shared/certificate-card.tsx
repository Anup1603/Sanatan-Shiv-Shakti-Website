"use client";

import { BadgeCheck, Download, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SmartImage } from "./smart-image";

export interface CertificateView {
  id: string;
  title: string;
  description: string;
  issuer?: string;
  issuedLabel?: string;
  image: string;
  pdf?: string;
}

export function CertificateCard({
  cert,
  viewLabel,
  downloadLabel,
}: {
  cert: CertificateView;
  viewLabel: string;
  downloadLabel: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="group relative block w-full cursor-zoom-in"
            aria-label={`${viewLabel}: ${cert.title}`}
          >
            <SmartImage
              src={cert.image}
              alt={cert.title}
              glyph="📜"
              className="aspect-4/3 w-full"
              sizes="(max-width: 768px) 100vw, 33vw"
              hoverZoom
            />
            <span className="absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-sm font-medium text-foreground">
                <Eye className="size-4" /> {viewLabel}
              </span>
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">{cert.title}</DialogTitle>
          <SmartImage
            src={cert.image}
            alt={cert.title}
            glyph="📜"
            className="aspect-4/3 w-full rounded-lg"
            sizes="90vw"
          />
        </DialogContent>
      </Dialog>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start gap-2">
          <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
          <h3 className="font-display text-lg font-semibold leading-tight">
            {cert.title}
          </h3>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {cert.description}
        </p>
        {cert.issuer && (
          <p className="text-xs text-muted-foreground/80">
            {cert.issuedLabel} {cert.issuer}
          </p>
        )}
        {cert.pdf && (
          <Button asChild variant="outline" size="sm" className="mt-2 w-fit">
            <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" />
              {downloadLabel}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
