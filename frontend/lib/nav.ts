/**
 * Navigation model.
 *
 * `NAV_GROUPS` drives the navbar — a mix of single links and dropdown groups,
 * keeping the top bar compact (Home · About▾ · Activities▾ · Contact).
 * `NAV_LINKS` is the flat list of every page, used by the footer & sitemap so
 * all pages stay one click away and fully crawlable.
 *
 * All `key`s map to the `nav.*` message keys.
 */

export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "activities", href: "/activities" },
  { key: "events", href: "/events" },
  { key: "gallery", href: "/gallery" },
  { key: "certificates", href: "/certificates" },
  { key: "members", href: "/members" },
  { key: "join", href: "/join" },
  { key: "contact", href: "/contact" },
] as const;

export type NavChild = { key: string; href: string };

export type NavEntry =
  | { type: "link"; key: string; href: string }
  | { type: "group"; key: string; items: NavChild[] };

export const NAV_GROUPS: NavEntry[] = [
  { type: "link", key: "home", href: "/" },
  {
    type: "group",
    key: "about",
    items: [
      { key: "about", href: "/about" },
      { key: "members", href: "/members" },
      { key: "certificates", href: "/certificates" },
    ],
  },
  {
    type: "group",
    key: "activities",
    items: [
      { key: "activities", href: "/activities" },
      { key: "events", href: "/events" },
      { key: "gallery", href: "/gallery" },
    ],
  },
  { type: "link", key: "contact", href: "/contact" },
];

export type NavLinkKey = (typeof NAV_LINKS)[number]["key"];
