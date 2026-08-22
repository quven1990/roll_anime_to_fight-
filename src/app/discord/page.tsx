import Link from "next/link";
import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import { LAST_CHECKED, OFFICIAL_LINKS } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("discord");

export default function DiscordPage() {
  return (
    <>
      <PageHero
        kicker="Discord"
        title="Roll Anime to Fight Discord — Safe Invite Guide"
        description="New codes often drop in the developer Discord. Search results can mix wrong games or phishing invites — verify the path first."
        meta={`Safety · ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          Do <strong>not</strong> trust random Discord links from ads or unrelated SERP hits.
          Prefer the invite linked from the official Roblox game page or the verified{" "}
          {OFFICIAL_LINKS.creatorGroup} creator group. Watch for mix-ups with{" "}
          <em>Roll an Anime</em>.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle kicker="Checklist" title="Before you click Join" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Open the Roblox game page and look for social links controlled by the creator.",
            "Confirm the server name matches Roll Anime to Fight — not a different anime roller.",
            "Never share Roblox passwords, backup codes, or “verification” logins.",
            "Use Discord mainly for code drops, update pings, and bug reports — not account trading.",
          ].map((text, i) => (
            <Card key={text}>
              <p className="display text-pink">{i + 1}</p>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Official play page</p>
            <p className="mt-1 text-sm text-muted">
              Start verification from Roblox, then community links.
            </p>
          </div>
          <a
            href={OFFICIAL_LINKS.roblox}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-pink to-violet px-4 py-2 text-sm font-bold text-white"
          >
            Open Roblox
          </a>
        </Card>
        <p className="mt-4 text-sm text-muted">
          Looking for codes instead?{" "}
          <Link href="/codes" className="font-semibold text-cyan">
            Go to the codes page →
          </Link>
        </p>
      </Section>
    </>
  );
}
