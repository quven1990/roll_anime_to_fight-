import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { TRAITS } from "@/lib/data/traits";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata("traits");

const keepStyles = {
  keep: "text-ok border-ok/30 bg-ok/10",
  situational: "text-warn border-warn/30 bg-warn/10",
  reroll: "text-danger border-danger/30 bg-danger/10",
} as const;

export default function TraitsPage() {
  return (
    <>
      <PageHero
        kicker="Traits"
        title="Roll Anime to Fight Traits — Keep or Reroll"
        description="Trait effects change combat behavior. Save Trait Shards for S/A keepers on fighters you actually field."
        meta={`Reported table · ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          Best general keeps: <strong>Slayer</strong>, <strong>Viking</strong>,{" "}
          <strong>Entrepreneur</strong>, <strong>Godly</strong>, <strong>Ghost</strong>.
          Avoid dumping shards into minor speed traits on temporary fillers.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle
          kicker="Full table"
          title="Trait effects & priorities"
          description="Community-reported effects. Confirm wording in-game before spending."
        />
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-card-2 text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Trait</th>
                <th className="px-4 py-3">Tier</th>
                <th className="px-4 py-3">Advice</th>
                <th className="px-4 py-3">Effect</th>
              </tr>
            </thead>
            <tbody>
              {TRAITS.map((trait) => (
                <tr key={trait.name} className="border-t border-border/70">
                  <td className="px-4 py-3 font-semibold">{trait.name}</td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "font-bold",
                        trait.tier === "S" && "tier-s",
                        trait.tier === "A" && "tier-a",
                        trait.tier === "B" && "tier-b",
                        trait.tier === "C" && "tier-c",
                      )}
                    >
                      {trait.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase",
                        keepStyles[trait.keep],
                      )}
                    >
                      {trait.keep}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{trait.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <Card>
          <p className="font-semibold">Trait Shard tip</p>
          <p className="mt-2 text-sm text-muted">
            Codes sometimes grant Trait Shards. Redeem before heavy rerolls, and never spend
            the last shards on a unit you are about to merge away.
          </p>
        </Card>
      </Section>
    </>
  );
}
