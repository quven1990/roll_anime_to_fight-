import type { Metadata } from "next";
import { REDEEM_STEPS } from "@/lib/data/codes";
import { FAQS } from "@/lib/data/content";
import {
  DATE_MODIFIED,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/site";

export type PageFaq = { q: string; a: string };

export type SeoPage = {
  key: string;
  path: "/" | `/${string}`;
  title: string;
  description: string;
  h1: string;
  breadcrumb: string;
  keywords: string[];
  dateModified?: string;
  indexable?: boolean;
  faqs?: PageFaq[];
  howTo?: {
    name: string;
    description: string;
    steps: string[];
  };
  related?: Array<"/" | `/${string}`>;
};

export const PAGE_SEO = {
  home: {
    key: "home",
    path: "/",
    title: "Roll Anime to Fight Wiki — Codes, Tier List & Guides (2026)",
    description: SITE_DESCRIPTION,
    h1: "Roll Anime to Fight Codes, Tier List & Wave Guides",
    breadcrumb: "Home",
    keywords: [
      "Roll Anime to Fight",
      "Roll Anime to Fight wiki",
      "Roll Anime to Fight codes",
      "Roll Anime to Fight tier list",
      "Roblox",
    ],
    dateModified: DATE_MODIFIED,
    faqs: [...FAQS],
    related: ["/codes", "/tier-list", "/guides", "/wiki"],
  },
  codes: {
    key: "codes",
    path: "/codes",
    title: "Roll Anime to Fight Codes (August 2026) — Active & Expired",
    description:
      "Working Roll Anime to Fight codes for August 2026: NINJAUPDATEPART2!, GUILDUPDATE!, conflict checks, Wave 76 gates, redeem steps, and expired list.",
    h1: "Roll Anime to Fight Codes (August 2026)",
    breadcrumb: "Codes",
    keywords: [
      "Roll Anime to Fight codes",
      "NINJAUPDATEPART2!",
      "GUILDUPDATE!",
      "Wave 76 codes",
      "Roblox codes",
    ],
    dateModified: DATE_MODIFIED,
    howTo: {
      name: "How to redeem Roll Anime to Fight codes",
      description:
        "Redeem reported Roll Anime to Fight codes in Roblox, including Wave 76 gated rewards.",
      steps: [...REDEEM_STEPS],
    },
    faqs: [
      {
        q: "What are the working Roll Anime to Fight codes right now?",
        a: "Try NINJAUPDATEPART2! and GUILDUPDATE! first. Older trackers may still list FACTIONUPDATE! and NINJAUPDATEPART1! as conflict checks. Trust the in-game redeem response.",
      },
      {
        q: "Why does a Roll Anime to Fight code say invalid?",
        a: "Most failures come from missing Wave 76, typos, expired codes, or an outdated server. Rejoin, re-check spelling including the final !, then treat persistent failures as expired.",
      },
      {
        q: "Do Roll Anime to Fight codes require Wave 76?",
        a: "Many higher-value reported codes are gated behind Wave 76. Reach that checkpoint before expecting premium rewards to redeem.",
      },
    ],
    related: ["/guides", "/updates", "/discord", "/roblox"],
  },
  tierList: {
    key: "tierList",
    path: "/tier-list",
    title: "Roll Anime to Fight Tier List — S to C Fighter Picks",
    description:
      "Editorial Roll Anime to Fight tier list for early waves, boss pressure, economy carries, and mutation keepers. No official publisher ranking verified.",
    h1: "Roll Anime to Fight Tier List — Fighter Picks",
    breadcrumb: "Tier List",
    keywords: [
      "Roll Anime to Fight tier list",
      "best units Roll Anime to Fight",
      "S tier fighters",
    ],
    dateModified: DATE_MODIFIED,
    faqs: [
      {
        q: "Is there an official Roll Anime to Fight tier list?",
        a: "No official tier list was verified. This page is an editorial use-case matrix for early push, bosses, economy, and mutation value.",
      },
      {
        q: "What should I prioritize in the Roll Anime to Fight meta?",
        a: "Build one carry, protect high mutations, and spend Trait Shards only on fighters that stay on your Wave 76 team.",
      },
    ],
    related: ["/units", "/traits", "/mutations", "/guides"],
  },
  wiki: {
    key: "wiki",
    path: "/wiki",
    title: "Roll Anime to Fight Wiki Hub — Codes, Units & Systems",
    description:
      "Unofficial Roll Anime to Fight wiki hub for codes, units, traits, mutations, guides, updates, Discord safety, and official Roblox links.",
    h1: "Roll Anime to Fight Wiki Hub",
    breadcrumb: "Wiki",
    keywords: ["Roll Anime to Fight wiki", "RATF wiki", "Roblox anime fighter wiki"],
    dateModified: DATE_MODIFIED,
    related: ["/", "/codes", "/guides", "/updates"],
  },
  units: {
    key: "units",
    path: "/units",
    title: "Roll Anime to Fight Units — Roles, Merges & Team Tips",
    description:
      "Roll Anime to Fight unit roles for carry, economy, support, and tank slots, plus merge safety tips before feeding rare mutations.",
    h1: "Roll Anime to Fight Units & Team Roles",
    breadcrumb: "Units",
    keywords: [
      "Roll Anime to Fight units",
      "best team Roll Anime to Fight",
      "merge units",
    ],
    dateModified: DATE_MODIFIED,
    faqs: [
      {
        q: "How do unit merges work in Roll Anime to Fight?",
        a: "Two identical units merge into a stronger fighter. Fill your board first, lock valuable mutations, then merge duplicates into your main carry.",
      },
    ],
    related: ["/tier-list", "/traits", "/mutations", "/guides"],
  },
  traits: {
    key: "traits",
    path: "/traits",
    title: "Roll Anime to Fight Traits Tier List — Keep or Reroll",
    description:
      "Roll Anime to Fight traits ranked with effects and keep-or-reroll advice for Trait Shards, including Slayer, Viking, Entrepreneur, Godly, and Ghost.",
    h1: "Roll Anime to Fight Traits — Keep or Reroll",
    breadcrumb: "Traits",
    keywords: [
      "Roll Anime to Fight traits",
      "Trait Shards",
      "best traits Roll Anime to Fight",
    ],
    dateModified: DATE_MODIFIED,
    faqs: [
      {
        q: "Which Roll Anime to Fight traits are worth keeping?",
        a: "Strong general keeps include Slayer, Viking, Entrepreneur, Godly, and Ghost. Avoid dumping shards into minor speed traits on temporary fillers.",
      },
    ],
    related: ["/mutations", "/units", "/tier-list", "/codes"],
  },
  mutations: {
    key: "mutations",
    path: "/mutations",
    title: "Roll Anime to Fight Mutations Guide — Gold to Astronaut",
    description:
      "Roll Anime to Fight mutation tiers from Gold to Astronaut with reported damage, health, and defense boosts, plus safer rolling rules.",
    h1: "Roll Anime to Fight Mutations Guide",
    breadcrumb: "Mutations",
    keywords: [
      "Roll Anime to Fight mutations",
      "Astronaut mutation",
      "mutation tiers",
    ],
    dateModified: DATE_MODIFIED,
    faqs: [
      {
        q: "What is the best mutation in Roll Anime to Fight?",
        a: "Reported tables place Astronaut and Cursed at the top. Lock unusual variants before merging until you understand the exact in-game label.",
      },
    ],
    related: ["/traits", "/units", "/tier-list", "/guides"],
  },
  guides: {
    key: "guides",
    path: "/guides",
    title: "Roll Anime to Fight Guides — Beginner & Wave 76 Routes",
    description:
      "Roll Anime to Fight beginner guide, Wave 76 code unlock push, safe merge checklist, and Index cash boost route.",
    h1: "Roll Anime to Fight Guides",
    breadcrumb: "Guides",
    keywords: [
      "Roll Anime to Fight guide",
      "Wave 76",
      "beginner guide",
    ],
    dateModified: DATE_MODIFIED,
    howTo: {
      name: "New player route for Roll Anime to Fight",
      description:
        "First-session route covering Roblox join, codes, merges, and Trait Shard timing.",
      steps: [
        "Start from the official Roblox listing so you land on the correct experience.",
        "Try the freshest reported codes early — some require Wave 76.",
        "Roll fighters, merge duplicates into one carry, and fill the board before heavy merging.",
        "Push waves for cash, then spend Trait Shards only on keepers you will actually use.",
      ],
    },
    faqs: [
      {
        q: "How should a new Roll Anime to Fight player start?",
        a: "Join from Roblox, redeem code candidates, merge into one carry, push checkpoints, then spend Trait Shards only on keepers.",
      },
    ],
    related: ["/codes", "/units", "/tier-list", "/updates"],
  },
  updates: {
    key: "updates",
    path: "/updates",
    title: "Roll Anime to Fight Updates — Patch & Code Freshness",
    description:
      "Roll Anime to Fight update watch for Roblox listing changes, code conflicts, and meta notes that affect Wave 76 routes.",
    h1: "Roll Anime to Fight Updates & Patch Watch",
    breadcrumb: "Updates",
    keywords: [
      "Roll Anime to Fight updates",
      "changelog",
      "latest update",
    ],
    dateModified: DATE_MODIFIED,
    related: ["/codes", "/roblox", "/discord", "/trello"],
  },
  discord: {
    key: "discord",
    path: "/discord",
    title: "Roll Anime to Fight Discord — Safe Invite Checklist",
    description:
      "Find the real Roll Anime to Fight Discord safely. Avoid phishing invites and wrong-game results like Roll an Anime.",
    h1: "Roll Anime to Fight Discord — Safe Invite Guide",
    breadcrumb: "Discord",
    keywords: [
      "Roll Anime to Fight discord",
      "official discord",
      "Another Slop discord",
    ],
    dateModified: DATE_MODIFIED,
    faqs: [
      {
        q: "Where is the official Roll Anime to Fight Discord?",
        a: "Prefer invites linked from the Roblox game page or verified Another Slop channels. Do not trust random search ads, and watch for Roll an Anime mix-ups.",
      },
    ],
    related: ["/roblox", "/codes", "/updates", "/trello"],
  },
  trello: {
    key: "trello",
    path: "/trello",
    title: "Roll Anime to Fight Trello — How to Verify Boards",
    description:
      "Roll Anime to Fight Trello guidance: treat roadmap boards as reported until confirmed from Roblox or creator-owned channels.",
    h1: "Roll Anime to Fight Trello",
    breadcrumb: "Trello",
    keywords: ["Roll Anime to Fight trello", "roadmap", "patch board"],
    dateModified: DATE_MODIFIED,
    related: ["/updates", "/discord", "/roblox", "/codes"],
  },
  roblox: {
    key: "roblox",
    path: "/roblox",
    title: "Play Roll Anime to Fight on Roblox — Official Game Page",
    description:
      "Official Roblox listing for Roll Anime to Fight! by Another Slop. Use it to verify play access, updates, and community links.",
    h1: "Play Roll Anime to Fight! on Roblox",
    breadcrumb: "Roblox Game",
    keywords: [
      "Roll Anime to Fight roblox",
      "Another Slop",
      "play Roll Anime to Fight",
    ],
    dateModified: DATE_MODIFIED,
    related: ["/", "/codes", "/discord", "/updates"],
  },
  privacy: {
    key: "privacy",
    path: "/privacy",
    title: "Privacy Policy",
    description: "Privacy policy for this unofficial Roll Anime to Fight fan wiki.",
    h1: "Privacy Policy",
    breadcrumb: "Privacy",
    keywords: ["privacy policy"],
    indexable: false,
    related: ["/", "/terms"],
  },
  terms: {
    key: "terms",
    path: "/terms",
    title: "Terms of Use",
    description: "Terms of use for this unofficial Roll Anime to Fight fan wiki.",
    h1: "Terms of Use",
    breadcrumb: "Terms",
    keywords: ["terms of use"],
    indexable: false,
    related: ["/", "/privacy"],
  },
} as const satisfies Record<string, SeoPage>;

export type SeoPageKey = keyof typeof PAGE_SEO;

export function getSeoPage(key: SeoPageKey): SeoPage {
  return PAGE_SEO[key] as SeoPage;
}

export function pageAbsoluteUrl(path: SeoPage["path"]): string {
  const base = getSiteUrl();
  return path === "/" ? base : `${base}${path}`;
}

export function buildMetadata(key: SeoPageKey): Metadata {
  const page = getSeoPage(key);
  const url = pageAbsoluteUrl(page.path);
  const indexable = page.indexable !== false;
  const ogImageUrl = `${getSiteUrl()}${OG_IMAGE.url}`;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: [...page.keywords],
    alternates: { canonical: url },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
        },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImageUrl],
    },
  };
}
