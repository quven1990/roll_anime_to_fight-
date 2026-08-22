export type TraitRow = {
  name: string;
  effect: string;
  keep: "keep" | "situational" | "reroll";
  tier: "S" | "A" | "B" | "C";
};

export const TRAITS: TraitRow[] = [
  {
    name: "Slayer",
    effect: "+100% DMG, +50% HP, +15% Faster Attacks, +15% Crit, +45% Crit DMG",
    keep: "keep",
    tier: "S",
  },
  {
    name: "Viking",
    effect: "+200% DMG, +750% HP, -25% SPD",
    keep: "keep",
    tier: "S",
  },
  {
    name: "Entrepreneur",
    effect: "+45% DMG, +25% HP, +10% Faster Attacks, +65% Money",
    keep: "keep",
    tier: "S",
  },
  {
    name: "Godly",
    effect: "+150% DMG, +15% HP, +20% Cash",
    keep: "keep",
    tier: "S",
  },
  {
    name: "Ghost",
    effect: "+100% HP, resurrect on death with 80% stats",
    keep: "keep",
    tier: "S",
  },
  {
    name: "Cloner",
    effect: "+40% DMG, +10% HP, summons 2 animes instead of 1",
    keep: "keep",
    tier: "A",
  },
  {
    name: "Juggernaut",
    effect: "+30% DMG, +50% HP, -10% Faster Attacks, +5% Crit, +45% Crit DMG",
    keep: "keep",
    tier: "A",
  },
  {
    name: "Superior",
    effect: "+60% DMG, +100% HP, -20% SPD",
    keep: "situational",
    tier: "A",
  },
  {
    name: "Deadsy",
    effect: "+35% Crit Chance, +40% Crit Damage",
    keep: "keep",
    tier: "A",
  },
  {
    name: "Lethal",
    effect: "+20% Crit Chance, +40% Crit Damage",
    keep: "keep",
    tier: "A",
  },
  {
    name: "Royal",
    effect: "+25% DMG, +15% HP, +25% Gold",
    keep: "keep",
    tier: "A",
  },
  {
    name: "Cursed",
    effect: "-400% Damage, +200% HP, +20% Faster Attacks, +15% Crit, +150% Crit DMG",
    keep: "situational",
    tier: "B",
  },
  {
    name: "Reaper",
    effect: "+35% HP, -16% SPD, +35% Crit, +45% Crit DMG",
    keep: "situational",
    tier: "B",
  },
  {
    name: "Powerful",
    effect: "+20% Damage, +15% Health",
    keep: "situational",
    tier: "B",
  },
  {
    name: "Deadly",
    effect: "+15% Crit Chance, +30% Crit Damage",
    keep: "situational",
    tier: "B",
  },
  {
    name: "Strong",
    effect: "+30% Damage",
    keep: "situational",
    tier: "B",
  },
  {
    name: "Range",
    effect: "+40% Range",
    keep: "situational",
    tier: "B",
  },
  {
    name: "Rush",
    effect: "+15% Faster Attacks",
    keep: "reroll",
    tier: "C",
  },
  {
    name: "Swift",
    effect: "+10% Attack Speed",
    keep: "reroll",
    tier: "C",
  },
  {
    name: "Sharp",
    effect: "-10% Attack Speed, +25% Crit Damage",
    keep: "reroll",
    tier: "C",
  },
];
