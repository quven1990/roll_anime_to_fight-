import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { MUTATIONS, MUTATION_ROTATION } from "@/lib/data/mutations";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata("mutations");

export default function MutationsPage() {
  return (
    <>
      <PageHero
        kicker="Mutations"
        title="Roll Anime to Fight Mutations Guide"
        description="Mutations multiply Damage, Health, and Defense. A high mutation on a mid rarity can beat a plain higher rarity — lock rares before merging."
        meta={`Reported tiers · ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          Top tiers: <strong>Astronaut</strong> and <strong>Cursed</strong>. Time rolls around
          the mutation event rotation when chasing a specific variant. Protect unusual labels
          until you understand the exact in-game effect.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle kicker="Tiers" title="Mutation stat boosts" />
        <div className="grid gap-3 md:grid-cols-2">
          {MUTATIONS.map((row) => (
            <Card key={row.name}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="display text-xl font-bold">{row.name}</h3>
                <span
                  className={cn(
                    "text-lg font-extrabold",
                    row.tier === "S" && "tier-s",
                    row.tier === "A" && "tier-a",
                    row.tier === "B" && "tier-b",
                    row.tier === "C" && "tier-c",
                  )}
                >
                  {row.tier}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                <div className="rounded-xl bg-white/5 p-2">
                  <dt className="text-[11px] uppercase text-muted">DMG</dt>
                  <dd className="mt-1 font-semibold text-pink">{row.damage}</dd>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <dt className="text-[11px] uppercase text-muted">HP</dt>
                  <dd className="mt-1 font-semibold text-cyan">{row.health}</dd>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <dt className="text-[11px] uppercase text-muted">DEF</dt>
                  <dd className="mt-1 font-semibold text-gold">{row.defense}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="border-cyan/30 bg-cyan/10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Rotation note
          </p>
          <p className="mt-2 text-sm text-foreground/90">{MUTATION_ROTATION}</p>
        </Card>
      </Section>

      <Section>
        <SectionTitle kicker="Safety" title="Rolling rules without fake odds" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Official Roblox text confirms rare mutations exist, but complete public rate tables remain unverified.",
            "Do not copy luck formulas from Roll an Anime — different game, common SERP contaminant.",
            "Record exact in-game labels for unusual rolls before renaming them from fan pages.",
            "Never merge a rare mutation until you have a replacement plan.",
          ].map((text) => (
            <Card key={text}>
              <p className="text-sm text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
