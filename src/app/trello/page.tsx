import Link from "next/link";
import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { LAST_CHECKED, OFFICIAL_LINKS } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("trello");

export default function TrelloPage() {
  return (
    <>
      <PageHero
        kicker="Trello"
        title="Roll Anime to Fight Trello"
        description="Players search for Trello roadmaps and update boards. Public SERP results rarely expose a single verified board — treat links as reported until confirmed."
        meta={`Verify · ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          There is no guaranteed public official Trello linked from every tracker. If you find
          a board, confirm it from Roblox / creator channels before trusting patch promises or
          code lists.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle kicker="Use it for" title="What Trello is (and isn’t)" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              t: "Useful for",
              d: "Dev roadmaps, known bugs, update checklists when the board is creator-linked.",
            },
            {
              t: "Not enough alone",
              d: "Code validity still depends on the live Roblox redeem response.",
            },
            {
              t: "Safer alternatives",
              d: "Roblox description, verified group posts, and this wiki’s updates page.",
            },
          ].map((item) => (
            <Card key={item.t}>
              <h3 className="display text-lg font-bold">{item.t}</h3>
              <p className="mt-2 text-sm text-muted">{item.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href={OFFICIAL_LINKS.roblox}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-gold"
          >
            Roblox listing
          </a>
          <Link
            href="/updates"
            className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-cyan"
          >
            Updates watch
          </Link>
          <Link
            href="/discord"
            className="rounded-full border border-pink/30 bg-pink/10 px-4 py-2 text-pink"
          >
            Discord safety
          </Link>
        </div>
      </Section>
    </>
  );
}
