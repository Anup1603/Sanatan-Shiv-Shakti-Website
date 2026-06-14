"use client";

import { useState } from "react";
import { Megaphone, X } from "lucide-react";

import { Link } from "@/i18n/navigation";

export function AnnouncementBar({
  message,
  linkLabel,
  href,
  closeLabel,
}: {
  message: string;
  linkLabel?: string;
  href?: string;
  closeLabel: string;
}) {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="relative bg-linear-to-r from-maroon-deep via-maroon to-primary text-white">
      <div className="container-app flex items-center justify-center gap-2.5 py-2 pr-8 text-center text-sm">
        <Megaphone className="size-4 shrink-0 text-gold-soft" aria-hidden="true" />
        <p className="text-pretty">
          <span className="opacity-95">{message}</span>
          {href && linkLabel && (
            <Link
              href={href}
              className="ml-2 inline-flex font-semibold text-gold-soft underline-offset-2 hover:underline"
            >
              {linkLabel} →
            </Link>
          )}
        </p>
        <button
          type="button"
          onClick={() => setShow(false)}
          aria-label={closeLabel}
          className="absolute right-3 grid size-6 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
