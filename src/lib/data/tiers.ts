export type TierRank = "S" | "A" | "B" | "C";

export type FighterPick = {
  name: string;
  role: string;
  why: string;
  note: string;
};

export const TIER_LIST: Record<TierRank, FighterPick[]> = {
  S: [
    {
      name: "Saitama-style carry",
      role: "Early wave stomper",
      why: "A single steamrolling Legendary carry funds merges and clears opening waves fastest.",
      note: "Editorial pick for Wave 76 pushes — verify the exact in-game label before investing shards.",
    },
    {
      name: "Cash / Entrepreneur carriers",
      role: "Economy engine",
      why: "Gold traits and money multipliers shorten the grind to code-gated waves.",
      note: "Pair with Index cash boosts when chasing unique anime entries.",
    },
    {
      name: "High-mutation keepers",
      role: "Long-term core",
      why: "Astronaut / Cursed / Slayer mutations can outperform raw rarity.",
      note: "Lock before merging so you do not feed a rare variant by mistake.",
    },
  ],
  A: [
    {
      name: "Boss burst specialists",
      role: "Wall / boss wave",
      why: "Crit-heavy traits and burst kits solve stuck checkpoints better than spreading upgrades.",
      note: "Upgrade the fighter that solves the current wave, not the rarest name.",
    },
    {
      name: "Cloner / summon kits",
      role: "Board coverage",
      why: "Extra summons help clear packs while your main carry focuses priority targets.",
      note: "Fill active slots before aggressive merging.",
    },
    {
      name: "Tank / Ghost survivors",
      role: "Survivability",
      why: "Revive and HP traits keep the lane alive during long waves.",
      note: "Situational when your DPS already one-shots the wave.",
    },
  ],
  B: [
    {
      name: "Solid mid-rarities",
      role: "Bridge units",
      why: "Useful until a better merge or mutation lands — do not overspend Trait Shards.",
      note: "Keep for board fill; reroll traits only after your core is locked.",
    },
    {
      name: "Range supports",
      role: "Lane reach",
      why: "Range traits help when enemies path outside short melee coverage.",
      note: "Replace once a higher-tier mutation core arrives.",
    },
  ],
  C: [
    {
      name: "Early filler pulls",
      role: "Temporary board",
      why: "Fine for the first minutes, weak for Wave 76 and beyond.",
      note: "Merge duplicates into your keepers instead of upgrading every filler.",
    },
    {
      name: "Low-impact trait rolls",
      role: "Shard sink risk",
      why: "Minor speed traits rarely change clear speed enough to justify shards.",
      note: "Save shards for S/A keepers on fighters you actually use.",
    },
  ],
};

export const UNIT_ROLES = [
  {
    title: "Carry",
    summary: "Primary damage dealer that clears packs and funds the economy.",
    tips: [
      "Prioritize merge levels on one carry before spreading upgrades.",
      "Protect high mutations with locks before feeding duplicates.",
    ],
  },
  {
    title: "Economy",
    summary: "Cash and gold traits that accelerate Wave 76 and shop upgrades.",
    tips: [
      "Entrepreneur / Godly / Royal style traits compound with Index cash boosts.",
      "Redeem codes before heavy rolling when possible.",
    ],
  },
  {
    title: "Support / Summon",
    summary: "Coverage units that hold side paths while the carry focuses bosses.",
    tips: [
      "Cloner-style effects help board presence without extra placement slots.",
      "Do not spend rare shards on temporary supports.",
    ],
  },
  {
    title: "Tank / Revive",
    summary: "Survivability picks for long waves and sticky checkpoints.",
    tips: [
      "Ghost-style revive traits shine when waves outlast your burst window.",
      "Swap out once your clear speed removes the need for sustain.",
    ],
  },
] as const;
