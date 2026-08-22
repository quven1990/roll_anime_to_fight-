import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { TIER_LIST } from "@/lib/data/tiers";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata("tierList");

const tiers = ["S", "A", "B", "C"] as const;

export default function TierListPage() {
  return (
    <>
      <PageHero
        kicker="Tier List"
        title="Roll Anime to Fight Tier List — Fighter Picks"
        description="Editorial S–C rankings by role. No official publisher tier list was verified, so treat this as a use-case matrix for early push, bosses, economy, and mutation keepers."
        meta={`Editorial · ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          Prioritize one <strong>carry</strong>, protect <strong>high mutations</strong>, and
          invest Trait Shards into fighters that stay on your Wave 76 team — not every rare name.
        </QuickAnswer>
      </Section>

      <Section>
        <div className="grid gap-6">
          {tiers.map((tier) => (
            <div key={tier}>
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={cn(
                    "display text-4xl font-extrabold",
                    tier === "S" && "tier-s",
                    tier === "A" && "tier-a",
                    tier === "B" && "tier-b",
                    tier === "C" && "tier-c",
                  )}
                >
                  {tier}
                </span>
                <p className="text-sm text-muted">
                  {tier === "S" && "Core investments"}
                  {tier === "A" && "Strong situational picks"}
                  {tier === "B" && "Bridge / filler value"}
                  {tier === "C" && "Temporary only"}
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {TIER_LIST[tier].map((pick) => (
                  <Card key={pick.name}>
                    <p className="display text-lg font-bold">{pick.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan">
                      {pick.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{pick.why}</p>
                    <p className="mt-3 text-xs text-gold">{pick.note}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          kicker="Method"
          title="How this list is built"
          description="Role value > franchise popularity. Verify exact in-game fighter labels before spending rare resources."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Early waves: stable damage + merge value",
            "Boss/wall: burst, crit, survivability",
            "Mutation chase: keep rare variants locked",
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
