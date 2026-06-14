import { localize } from "@/lib/content";
import type { Member } from "@/types/content";
import { SmartImage } from "./smart-image";
import { SocialIcon } from "./social-icons";

export function MemberCard({ member, locale }: { member: Member; locale: string }) {
  return (
    <div className="group flex flex-col items-center overflow-hidden rounded-xl border border-border bg-card text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg">
      <div className="relative w-full">
        <SmartImage
          src={member.photo ?? "ph:member"}
          alt={member.name}
          glyph="🪔"
          className="aspect-square w-full"
          sizes="(max-width: 640px) 50vw, 25vw"
          hoverZoom
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/30 to-transparent" />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <h3 className="font-display text-lg font-semibold leading-tight">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-primary">
          {localize(member.designation, locale)}
        </p>
        {member.socials && member.socials.length > 0 && (
          <div className="mt-2 flex items-center justify-center gap-2">
            {member.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} – ${s.platform}`}
                className="grid size-8 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <SocialIcon platform={s.platform} className="size-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
