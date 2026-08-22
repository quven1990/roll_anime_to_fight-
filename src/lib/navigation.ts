export type NavItem = {
  label: string;
  href: `/${string}` | "/";
  description: string;
  navLabel?: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Codes",
    href: "/codes",
    description: "Active and expired Roll Anime to Fight codes with redeem steps.",
  },
  {
    label: "Tier List",
    href: "/tier-list",
    description: "Editorial S–C fighter rankings by early push, boss, and economy roles.",
  },
  {
    label: "Wiki",
    href: "/wiki",
    description: "Hub overview of systems, routes, and verified official sources.",
  },
  {
    label: "Units",
    href: "/units",
    description: "Unit roles, merge tips, and team-building notes for wave defense.",
  },
  {
    label: "Traits",
    href: "/traits",
    description: "Trait effects, keep-or-reroll priorities, and Trait Shard spending.",
  },
  {
    label: "Mutations",
    href: "/mutations",
    description: "Mutation tiers, stat boosts, and safer rolling decisions.",
  },
  {
    label: "Guides",
    href: "/guides",
    description: "Beginner routes, Wave 76 push, and progression playbooks.",
  },
  {
    label: "Updates",
    href: "/updates",
    description: "Patch notes, code freshness, and meta change watch.",
  },
  {
    label: "Discord",
    href: "/discord",
    description: "How to find the real community invite without phishing traps.",
  },
  {
    label: "Trello",
    href: "/trello",
    description: "Where players look for roadmaps and how to verify Trello links.",
  },
  {
    label: "Roblox Game",
    navLabel: "Roblox",
    href: "/roblox",
    description: "Official Roblox listing, creator group, and play status checks.",
  },
];

export const HEADER_PRIMARY = [
  "/codes",
  "/tier-list",
  "/units",
  "/traits",
  "/mutations",
  "/guides",
] as const;

export const HEADER_MORE = [
  "/wiki",
  "/updates",
  "/discord",
  "/trello",
  "/roblox",
] as const;

const byHref = new Map(NAV_ITEMS.map((item) => [item.href, item]));

export function getPrimaryNav() {
  return HEADER_PRIMARY.map((href) => byHref.get(href)!);
}

export function getMoreNav() {
  return HEADER_MORE.map((href) => byHref.get(href)!);
}

export function getMobileNav() {
  return NAV_ITEMS;
}
