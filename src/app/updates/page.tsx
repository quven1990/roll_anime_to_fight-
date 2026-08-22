import Link from "next/link";
import { Card, PageHero, Section, SectionTitle } from "@/components/ui";
import { UPDATES } from "@/lib/data/content";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("updates");

export default function UpdatesPage() {
  return (
    <>
      <PageHero
        kicker="Updates"
        title="Roll Anime to Fight Updates & Patch Watch"
        description="Track Roblox listing changes, code freshness conflicts, and meta notes that affect Wave 76 routes."
        meta={`Watch · ${LAST_CHECKED}`}
      />

      <Section>
        <div className="grid gap-4">
          {UPDATES.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-wrap items-center gap-2">
                <time className="text-xs font-semibold uppercase tracking-wide text-cyan">
                  {item.date}
                </time>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="display mt-3 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="After a patch" title="Recheck these pages" />
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <Link href="/codes" className="rounded-full border border-pink/30 bg-pink/10 px-4 py-2 text-pink">
            Codes
          </Link>
          <Link href="/tier-list" className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-cyan">
            Tier list
          </Link>
          <Link href="/roblox" className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-gold">
            Roblox status
          </Link>
        </div>
      </Section>
    </>
  );
}
