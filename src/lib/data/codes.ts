export type CodeStatus = "fresh" | "conflict" | "expired";

export type GameCode = {
  code: string;
  rewards: string;
  requirement: string;
  status: CodeStatus;
  note: string;
};

export const ACTIVE_CODES: GameCode[] = [
  {
    code: "NINJAUPDATEPART2!",
    rewards: "300k Gold, Gold Kashimo, Mythic Capsule, Trading Ticket",
    requirement: "Wave 76 (reported)",
    status: "fresh",
    note: "Fresher August report — try this pair first, then trust the in-game response.",
  },
  {
    code: "GUILDUPDATE!",
    rewards: "350k Gold, Diamond Kakashi, Mythic Capsule, Infinite Ticket",
    requirement: "Wave 76 (reported)",
    status: "fresh",
    note: "Fresher August report — redeem with NINJAUPDATEPART2! before older candidates.",
  },
  {
    code: "FACTIONUPDATE!",
    rewards: "350k Gold, Gold Kashimo, Mythic Capsule, Infinite Ticket",
    requirement: "Wave 76 (reported)",
    status: "conflict",
    note: "Older trackers still list this; newer checks mark it expired. Use only as a conflict check.",
  },
  {
    code: "NINJAUPDATEPART1!",
    rewards: "300k Gold, Diamond Tobi / Gold Joti (tracker variance), Mythic Capsule, Trading Ticket",
    requirement: "Wave 76 (reported)",
    status: "conflict",
    note: "Older trackers still list this; newer checks mark it expired. Keep the final !.",
  },
];

export const EXPIRED_CODES = [
  "SRYFORSHUTDOWN2!",
  "SRYFORSHUTDOWN!",
  "SRRYFORSHUTDOWN",
  "SORCERERPART2!",
  "SORCERERISHERE!",
  "TRADING&BATTLEPASS!",
  "EVOLUTIONMACHINE!",
  "SLAYERSISHERE!",
  "INFINITETOWER!",
  "ADMINABUSE!",
  "BLEACHPART2!",
] as const;

export const REDEEM_STEPS = [
  "Launch Roll Anime to Fight from the official Roblox listing and join a server.",
  "Open Menu (top-right), then choose Codes.",
  "Paste the code exactly — codes are case-sensitive and usually end with !.",
  "Press Redeem. If Wave 76 is required and you have not reached it, the game will reject the code.",
  "If it still fails, rejoin a fresh server, re-check spelling, then treat the code as expired.",
] as const;
