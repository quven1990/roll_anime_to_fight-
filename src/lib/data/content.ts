export const GUIDES = [
  {
    slug: "new-player-route",
    title: "New Player Route (First 10 Minutes)",
    href: "/guides#new-player",
    summary:
      "Join from Roblox, redeem code candidates, roll-merge a carry, then push checkpoints before burning Trait Shards.",
    steps: [
      "Start from the official Roblox listing so you land on the correct experience.",
      "Try the freshest reported codes early — some require Wave 76.",
      "Roll fighters, merge duplicates into one carry, and fill the board before heavy merging.",
      "Push waves for cash, then spend Trait Shards only on keepers you will actually use.",
    ],
  },
  {
    slug: "wave-76",
    title: "Wave 76 Code Unlock Push",
    href: "/guides#wave-76",
    summary:
      "Most high-value codes sit behind Wave 76. Bank cash into a Legendary carry and use Lucky Wheel free rolls.",
    steps: [
      "Focus one steamrolling carry instead of a scattered roster.",
      "Merge identical units to raise levels — levels come from merges, not cash alone.",
      "Use free Lucky Wheel rewards to accelerate early gold.",
      "Once you hit Wave 76, redeem fresher codes first, then conflict-check older ones.",
    ],
  },
  {
    slug: "merge-safe",
    title: "Merge Without Feeding Rares",
    href: "/guides#merge-safe",
    summary:
      "Two identical units merge into a stronger fighter. Lock valuable mutations before upgrading.",
    steps: [
      "Obtain two completely identical units.",
      "Place both on the grid and open the Unit Upgrade menu.",
      "Lock any unit with a valuable mutation or trait first.",
      "Merge only after your active team slots are filled.",
    ],
  },
  {
    slug: "index-cash",
    title: "Index Cash Boost Loop",
    href: "/guides#index-cash",
    summary:
      "Every 5 unique anime registered grants a permanent 5% Cash Boost — variety pays off long-term.",
    steps: [
      "Roll for unique Index entries, not only duplicate merges.",
      "Pair Index boosts with money traits like Entrepreneur or Godly.",
      "Farm Infinite Tower for rare evolution materials at low rates.",
      "Reinvest cash into the carry that clears your current stuck wave.",
    ],
  },
] as const;

export const UPDATES = [
  {
    date: "August 17, 2026",
    title: "Roblox listing update + code conflict watch",
    body: "Roblox listing showed an update at 09:14 UTC. Fresher code reports highlight NINJAUPDATEPART2! and GUILDUPDATE!, while older August trackers still mention FACTIONUPDATE! and NINJAUPDATEPART1!.",
    tags: ["Codes", "Roblox", "Meta"],
  },
  {
    date: "August 11, 2026",
    title: "Wave 76 code gate still the main blocker",
    body: "Community guides continue to stress Wave 76 as the unlock for premium code rewards. Early Legendary carries and Lucky Wheel value remain the practical push plan.",
    tags: ["Codes", "Progression"],
  },
  {
    date: "July 16, 2026",
    title: "Mutation and roll evidence boundaries",
    body: "Rolling and rare mutations are confirmed in the official Roblox description, but complete public rate tables and pity rules remain unverified. Prefer in-game panels over copied odds from other anime games.",
    tags: ["Mutations", "Rolling"],
  },
] as const;

export const FAQS = [
  {
    q: "What is Roll Anime to Fight?",
    a: "A Roblox anime base-defense game by Another Slop where you roll fighters, merge units, place them on a grid, and clear enemy waves for gold and progression.",
  },
  {
    q: "Are there working codes right now?",
    a: "Yes, but trackers disagree. Try NINJAUPDATEPART2! and GUILDUPDATE! first, then conflict-check FACTIONUPDATE! and NINJAUPDATEPART1! if needed. Most high-value codes require Wave 76.",
  },
  {
    q: "Is this an official wiki?",
    a: "No. This is an unofficial fan guide. Official facts come from the Roblox listing and the verified Another Slop creator group. Third-party code and trait tables are labeled as reported.",
  },
  {
    q: "Where do new codes drop?",
    a: "Developers typically post codes in the official Discord codes channel during updates and events. Always verify the invite from Roblox or the creator group before joining.",
  },
  {
    q: "Should I trust Discord / Trello links from search?",
    a: "Not by default. Search results sometimes mix in other games (for example Roll an Anime). Open Discord/Trello only after confirming the path from Roblox or a developer-controlled page.",
  },
] as const;
