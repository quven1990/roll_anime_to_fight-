import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { LAST_CHECKED, OFFICIAL_LINKS } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { SeoFoot, SeoHead } from "@/components/seo-extras";

export const metadata = buildMetadata("roblox");

export default function RobloxPage() {
  return (
    <>
      <SeoHead pageKey="roblox" />
      <PageHero
        kicker="Roblox Game"
        title="Play Roll Anime to Fight! on Roblox"
        description="Official experience by the verified Another Slop group. Use this page for join access, description checks, and server status before trusting third-party downtime rumors."
        meta={`Official source · ${LAST_CHECKED}`}
        actions={
          <a
            href={OFFICIAL_LINKS.roblox}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-violet px-5 py-2.5 text-sm font-bold text-white shadow-[var(--glow-pink)]"
          >
            Open Roblox game <ExternalLink className="size-4" />
          </a>
        }
      />

      <Section>
        <QuickAnswer>
          If you cannot join: check the Roblox listing first, switch servers, then compare
          community reports. Do not assume downtime from a random Discord screenshot alone.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle kicker="Official facts" title="What the listing confirms" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Game name: Roll Anime to Fight!",
            `Creator group: ${OFFICIAL_LINKS.creatorGroup} (verified)`,
            "Loop: roll fighters, merge units, survive waves, chase rare mutations",
            "Use listing timestamps to spot recent updates",
          ].map((text) => (
            <Card key={text}>
              <p className="text-sm text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">Next after you join</p>
            <p className="mt-1 text-sm text-muted">
              Redeem codes, then follow the beginner route.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            <Link href="/codes" className="rounded-full bg-pink/15 px-4 py-2 text-pink">
              Codes
            </Link>
            <Link href="/guides" className="rounded-full bg-cyan/15 px-4 py-2 text-cyan">
              Guides
            </Link>
          </div>
        </Card>
      </Section>
      <SeoFoot pageKey="roblox" />
    </>
  );
}
