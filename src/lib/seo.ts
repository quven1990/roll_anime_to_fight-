import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: `${SITE_NAME} — Codes, Tier List & Guides`,
    description: SITE_DESCRIPTION,
    path: "/",
  },
  codes: {
    title: `Roll Anime to Fight Codes (August 2026) | ${SITE_NAME}`,
    description:
      "Active Roll Anime to Fight codes, Wave 76 requirements, redeem steps, and expired code list with conflict notes.",
    path: "/codes",
  },
  tierList: {
    title: `Roll Anime to Fight Tier List | ${SITE_NAME}`,
    description:
      "Editorial S–C Roll Anime to Fight tier list for early push, boss waves, economy, and mutation keepers.",
    path: "/tier-list",
  },
  wiki: {
    title: `Roll Anime to Fight Wiki Hub | ${SITE_NAME}`,
    description:
      "Unofficial Roll Anime to Fight wiki hub covering codes, units, traits, mutations, guides, and official Roblox sources.",
    path: "/wiki",
  },
  units: {
    title: `Roll Anime to Fight Units & Team Roles | ${SITE_NAME}`,
    description:
      "Unit roles, merge tips, and team planning notes for Roll Anime to Fight wave defense.",
    path: "/units",
  },
  traits: {
    title: `Roll Anime to Fight Traits Tier List | ${SITE_NAME}`,
    description:
      "Every major Roll Anime to Fight trait with effects, keep-or-reroll advice, and Trait Shard priorities.",
    path: "/traits",
  },
  mutations: {
    title: `Roll Anime to Fight Mutations Guide | ${SITE_NAME}`,
    description:
      "Mutation tiers from Gold to Astronaut, reported stat boosts, rotation notes, and safer rolling rules.",
    path: "/mutations",
  },
  guides: {
    title: `Roll Anime to Fight Guides | ${SITE_NAME}`,
    description:
      "Beginner route, Wave 76 push, merge safety, and Index cash boost guides for Roll Anime to Fight.",
    path: "/guides",
  },
  updates: {
    title: `Roll Anime to Fight Updates & Patch Watch | ${SITE_NAME}`,
    description:
      "Latest Roll Anime to Fight update notes, code freshness checks, and meta change watch.",
    path: "/updates",
  },
  discord: {
    title: `Roll Anime to Fight Discord (Safe Invite Guide) | ${SITE_NAME}`,
    description:
      "How to find the real Roll Anime to Fight Discord without phishing or wrong-game invites.",
    path: "/discord",
  },
  trello: {
    title: `Roll Anime to Fight Trello | ${SITE_NAME}`,
    description:
      "Where players look for Roll Anime to Fight Trello roadmaps and how to verify links.",
    path: "/trello",
  },
  roblox: {
    title: `Play Roll Anime to Fight on Roblox | ${SITE_NAME}`,
    description:
      "Official Roblox game page for Roll Anime to Fight!, creator group notes, and status checks.",
    path: "/roblox",
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: "Privacy policy for this unofficial Roll Anime to Fight fan wiki.",
    path: "/privacy",
  },
  terms: {
    title: `Terms of Use | ${SITE_NAME}`,
    description: "Terms of use for this unofficial Roll Anime to Fight fan wiki.",
    path: "/terms",
  },
};

export function buildMetadata(key: keyof typeof PAGE_SEO): Metadata {
  const page = PAGE_SEO[key];
  const url = `${getSiteUrl()}${page.path === "/" ? "" : page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
