import {
  BookOpen,
  Flame,
  GraduationCap,
  HandHeart,
  HandHelping,
  Heart,
  HeartHandshake,
  Landmark,
  Music,
  ScrollText,
  Sparkles,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

/** Maps content `icon` strings to Lucide components. */
const ICON_MAP: Record<string, LucideIcon> = {
  music: Music,
  flame: Flame,
  "book-open": BookOpen,
  "scroll-text": ScrollText,
  heart: Heart,
  utensils: Utensils,
  "hand-heart": HandHeart,
  "graduation-cap": GraduationCap,
  "hand-helping": HandHelping,
  "heart-handshake": HeartHandshake,
  sparkles: Sparkles,
  landmark: Landmark,
  users: Users,
};

export function ContentIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
