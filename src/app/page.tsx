import Link from "next/link";
import {
  ArrowRight,
  Crosshair,
  Flame,
  Layers3,
  Swords,
  Trophy,
} from "lucide-react";
import { CodeCard, GuideCard } from "@/components/cards";
import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { ACTIVE_CODES } from "@/lib/data/codes";
import { FAQS, GUIDES } from "@/lib/data/content";
import { LAST_CHECKED, OFFICIAL_LINKS } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("home");

const hubs = [
  {
    href: "/codes",
    title: "Codes",
    desc: "Fresh reports, conflict checks, redeem steps.",
    icon: Flame,
  },
  {
    href: "/tier-list",
    title: "Tier List",
    desc: "S–C fighter picks by role and wave goal.",
    icon: Trophy,
  },
  {
    href: "/traits",
    title: "Traits",
    desc: "Keep-or-reroll matrix for Trait Shards.",
    icon: Crosshair,
  },
  {
    href: "/mutations",
    title: "Mutations",
    desc: "Gold to Astronaut boosts and rotation notes.",
    icon: Layers3,
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="Roblox anime fighter wiki"
        title="Roll Anime to Fight Codes, Tier List & Wave Guides"
        description="Unofficial arena hub for redeemable codes, fighter roles, trait keepers, mutation tiers, and a practical Wave 76 route. Built for players who want answers fast — without confusing this game with Roll an Anime."
        meta={`Last checked ${LAST_CHECKED}`}
        actions={
          <>
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-violet px-5 py-2.5 text-sm font-bold text-white shadow-[var(--glow-pink)]"
            >
              Open codes <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-5 py-2.5 text-sm font-bold text-cyan"
            >
              Start beginner route
            </Link>
            <a
              href={OFFICIAL_LINKS.roblox}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground"
            >
              Play on Roblox
            </a>
          </>
        }
      />

      <Section>
        <QuickAnswer>
          Try <strong>NINJAUPDATEPART2!</strong> and{" "}
          <strong>GUILDUPDATE!</strong> first (fresher August reports). Older
          trackers still mention <strong>FACTIONUPDATE!</strong> and{" "}
          <strong>NINJAUPDATEPART1!</strong> — use those only as conflict checks.
          Most premium rewards require <strong>Wave 76</strong>.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle
          kicker="Jump in"
          title="Core hubs"
          description="Every nav path from the SERP plan — codes, tiers, systems, and official links."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group rounded-2xl border border-border bg-card/80 p-5 transition hover:border-pink/40"
            >
              <hub.icon className="size-5 text-pink" />
              <h3 className="display mt-3 text-lg font-bold group-hover:text-pink">
                {hub.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{hub.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          kicker="Live codes"
          title="Codes to try in-game"
          description="Copy exact spelling. Trust Roblox’s response over any tracker."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {ACTIVE_CODES.map((item) => (
            <CodeCard key={item.code} item={item} />
          ))}
        </div>
        <div className="mt-4">
          <Link href="/codes" className="text-sm font-semibold text-cyan hover:text-pink">
            Full codes page + redeem guide →
          </Link>
        </div>
      </Section>

      <Section>
        <SectionTitle
          kicker="Playbooks"
          title="Guides that move the needle"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {GUIDES.map((guide) => (
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
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <div className="flex items-center gap-2 text-gold">
              <Swords className="size-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                Game loop
              </p>
            </div>
            <h3 className="display mt-3 text-2xl font-bold">
              Roll → Merge → Survive waves → Checkpoint
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Official Roblox framing: roll anime fighters, merge duplicates into
              stronger units, clear waves for cash, and chase rare mutations. This
              wiki separates official facts, reported tables, and editorial routes.
            </p>
            <Link
              href="/wiki"
              className="mt-5 inline-flex text-sm font-semibold text-pink"
            >
              Open wiki hub →
            </Link>
          </Card>
          <Card className="bg-gradient-to-br from-violet/20 to-pink/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              Official first
            </p>
            <h3 className="display mt-3 text-xl font-bold">Verify before you trust</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Roblox listing = play status & description</li>
              <li>• Another Slop = verified creator group</li>
              <li>• Discord / Trello = confirm from Roblox first</li>
            </ul>
            <Link
              href="/roblox"
              className="mt-5 inline-flex text-sm font-semibold text-cyan"
            >
              Roblox game page →
            </Link>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="FAQ" title="Quick answers" />
        <div className="grid gap-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-border bg-card/70 px-5 py-4"
            >
              <summary className="cursor-pointer list-none font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
