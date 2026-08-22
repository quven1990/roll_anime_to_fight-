export const SITE_URL = "https://rollanimetofight.guide";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") return SITE_URL;
  return "http://localhost:3000";
}

export const SITE_NAME = "Roll Anime to Fight Wiki";

export const SITE_TAGLINE =
  "Codes, tier list, traits, mutations, and beginner routes for the Roblox anime fighter game.";

export const SITE_DESCRIPTION =
  "Unofficial Roll Anime to Fight wiki with active codes, fighter tier picks, trait keep-or-reroll advice, mutation tiers, and wave progression guides. Updated August 2026.";

export const LAST_CHECKED = "August 22, 2026";

export const OFFICIAL_LINKS = {
  roblox:
    "https://www.roblox.com/games/107653945083776/Roll-Anime-to-Fight",
  creatorGroup: "Another Slop",
} as const;
