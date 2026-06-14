import { Quote, Star } from "lucide-react";

import { localize } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({
  testimonial,
  locale,
}: {
  testimonial: Testimonial;
  locale: string;
}) {
  const rating = testimonial.rating ?? 5;
  return (
    <figure className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <Quote className="size-8 text-primary/25" aria-hidden="true" />
        <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < rating ? "fill-gold text-gold" : "text-muted",
              )}
            />
          ))}
        </div>
      </div>
      <blockquote className="flex-1 text-pretty leading-relaxed text-foreground/90">
        “{localize(testimonial.message, locale)}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <span className="grid size-10 place-items-center rounded-full bg-linear-to-br from-saffron to-maroon font-display text-base font-semibold text-white">
          {testimonial.name.charAt(0)}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-semibold">{testimonial.name}</span>
          <span className="text-sm text-muted-foreground">
            {localize(testimonial.role, locale)}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
