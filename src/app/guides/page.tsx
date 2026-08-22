import Link from "next/link";
import { Card, PageHero, Section, SectionTitle } from "@/components/ui";
import { GUIDES } from "@/lib/data/content";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("guides");

const anchorBySlug: Record<string, string> = {
  "new-player-route": "new-player",
  "wave-76": "wave-76",
  "merge-safe": "merge-safe",
  "index-cash": "index-cash",
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        kicker="Guides"
        title="Roll Anime to Fight Guides"
        description="Practical routes for new players, Wave 76 unlocks, safe merges, and Index cash scaling."
        meta={`Playbooks · ${LAST_CHECKED}`}
      />

      <Section>
        <div className="grid gap-6">
          {GUIDES.map((guide) => (
            <Card key={guide.slug} id={anchorBySlug[guide.slug]}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink">
                Guide
              </p>
              <h2 className="display mt-2 text-2xl font-bold">{guide.title}</h2>
              <p className="mt-2 text-sm text-muted sm:text-base">{guide.summary}</p>
              <ol className="mt-5 grid gap-3">
                {guide.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground/90">
                    <span className="display flex size-7 shrink-0 items-center justify-center rounded-lg bg-violet/20 text-violet">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          kicker="Next"
          title="Related systems"
          description="After the route, tune traits and mutations on the units you actually keep."
        />
        <div className="grid gap-3 text-sm font-semibold sm:grid-cols-3">
          <Link
            href="/traits"
            className="rounded-2xl border border-border bg-card/80 p-4 text-cyan hover:border-pink/40"
          >
            Traits table →
          </Link>
          <Link
            href="/mutations"
            className="rounded-2xl border border-border bg-card/80 p-4 text-cyan hover:border-pink/40"
          >
            Mutations →
          </Link>
          <Link
            href="/codes"
            className="rounded-2xl border border-border bg-card/80 p-4 text-cyan hover:border-pink/40"
          >
            Codes →
          </Link>
        </div>
      </Section>
    </>
  );
}
