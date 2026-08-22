import Link from "next/link";
import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { UNIT_ROLES } from "@/lib/data/tiers";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("units");

export default function UnitsPage() {
  return (
    <>
      <PageHero
        kicker="Units"
        title="Roll Anime to Fight Units & Team Roles"
        description="Build around roles — carry, economy, support, tank — then merge identical copies and protect rare mutations before feeding them."
        meta={`Team planning · ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          Fill your active board first, lock valuable mutations, then merge duplicates into
          one carry. Spend Trait Shards only on fighters that stay in your wave team.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle kicker="Roles" title="Team planner lens" />
        <div className="grid gap-4 md:grid-cols-2">
          {UNIT_ROLES.map((role) => (
            <Card key={role.title}>
              <h3 className="display text-xl font-bold">{role.title}</h3>
              <p className="mt-2 text-sm text-muted">{role.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {role.tips.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="Merge" title="Upgrade without wasting rares" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Two identical units merge into a higher-level fighter.",
            "Levels come from merges — duplicates are progression fuel.",
            "Lock mutation/trait keepers before opening the upgrade menu.",
          ].map((text, i) => (
            <Card key={text}>
              <p className="display text-2xl font-bold text-pink">{i + 1}</p>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
          <Link href="/tier-list" className="text-cyan hover:text-pink">
            Compare tier picks →
          </Link>
          <Link href="/mutations" className="text-cyan hover:text-pink">
            Mutation tiers →
          </Link>
          <Link href="/traits" className="text-cyan hover:text-pink">
            Trait keepers →
          </Link>
        </div>
      </Section>
    </>
  );
}
