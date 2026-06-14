import { ChevronRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LotusDivider, MandalaPattern } from "./sacred";

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  homeLabel: string;
  crumbs?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, homeLabel, crumbs = [] }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border surface-warm">
      <MandalaPattern className="absolute -right-16 -top-20 size-72 text-primary/10" />
      <MandalaPattern className="absolute -bottom-24 -left-16 size-72 text-secondary/10" />
      <div className="container-app relative flex flex-col items-center py-14 text-center sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                {homeLabel}
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5 text-muted-foreground/60" />
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className={cn("text-foreground", "font-medium")}>{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
        <LotusDivider className="mt-6" />
      </div>
    </section>
  );
}
