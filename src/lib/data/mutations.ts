export type MutationRow = {
  name: string;
  damage: string;
  health: string;
  defense: string;
  tier: "S" | "A" | "B" | "C";
};

export const MUTATIONS: MutationRow[] = [
  { name: "Astronaut", damage: "+650%", health: "+200%", defense: "+9%", tier: "S" },
  { name: "Cursed", damage: "+550%", health: "+175%", defense: "+8%", tier: "S" },
  { name: "Slayer", damage: "+450%", health: "+150%", defense: "+7%", tier: "A" },
  { name: "Hollow", damage: "+350%", health: "+125%", defense: "+6%", tier: "A" },
  { name: "Destroyer", damage: "+275%", health: "+100%", defense: "+6%", tier: "B" },
  { name: "Demon", damage: "+200%", health: "+75%", defense: "+5%", tier: "B" },
  { name: "Diamond", damage: "+125%", health: "+50%", defense: "+3%", tier: "C" },
  { name: "Gold", damage: "+50%", health: "+25%", defense: "+2%", tier: "C" },
];

export const MUTATION_ROTATION =
  "Reported 15-minute cycle: Demon → Destroyer → Hollow → Slayer → Cursed.";
