import Link from "next/link";
import { GuideCard } from "@/components/cards";
import { Card, PageHero, Section, SectionTitle } from "@/components/ui";
import { NAV_ITEMS } from "@/lib/navigation";
import { GUIDES } from "@/lib/data/content";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("wiki");

export default function WikiPage() {
  return (
    <>
      <PageHero
        kicker="Wiki"
        title="Roll Anime to Fight Wiki Hub"
        description="One map of the whole site: codes, units, traits, mutations, guides, updates, and official Roblox verification."
        meta={`Hub · ${LAST_CHECKED}`}
      />

      <Section>
        <SectionTitle kicker="Directory" title="All wiki sections" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-border bg-card/80 p-5 transition hover:border-pink/40"
            >
              <h3 className="display text-lg font-bold">{item.label}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="Start here" title="Featured playbooks" />
        <div className="grid gap-4 md:grid-cols-2">
          {GUIDES.slice(0, 2).map((guide) => (
            <GuideCard
              key={guide.slug}
              title={guide.title}
              summary={guide.summary}
              href={guide.href}
            />
          ))}
        </div>
      </Section>

      <Section>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Evidence labels
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <strong className="text-foreground">Official</strong> — Roblox listing /
              verified creator group facts.
            </li>
            <li>
              <strong className="text-foreground">Reported</strong> — community code/trait
              tables that can lag or conflict.
            </li>
            <li>
              <strong className="text-foreground">Editorial</strong> — practical routes from
              this fan wiki.
            </li>
          </ul>
        </Card>
      </Section>
    </>
  );
}
