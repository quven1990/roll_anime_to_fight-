import Link from "next/link";
import { CodeCard } from "@/components/cards";
import { Card, PageHero, QuickAnswer, Section, SectionTitle } from "@/components/ui";
import {
  ACTIVE_CODES,
  EXPIRED_CODES,
  REDEEM_STEPS,
} from "@/lib/data/codes";
import { LAST_CHECKED } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("codes");

export default function CodesPage() {
  return (
    <>
      <PageHero
        kicker="Codes"
        title="Roll Anime to Fight Codes (August 2026)"
        description="Copy working candidates, understand Wave 76 gates, and know which older codes are only useful as conflict checks."
        meta={`Updated ${LAST_CHECKED}`}
      />

      <Section>
        <QuickAnswer>
          Start with <strong>NINJAUPDATEPART2!</strong> and{" "}
          <strong>GUILDUPDATE!</strong>. If Roblox rejects them, conflict-check{" "}
          <strong>FACTIONUPDATE!</strong> and <strong>NINJAUPDATEPART1!</strong>. Most
          premium rewards need Wave 76.
        </QuickAnswer>
      </Section>

      <Section>
        <SectionTitle
          kicker="Active / reported"
          title="Codes to redeem"
          description="Status labels separate fresher community reports from older conflicting trackers."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {ACTIVE_CODES.map((item) => (
            <CodeCard key={item.code} item={item} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="How to" title="Redeem codes in-game" />
        <ol className="grid gap-3">
          {REDEEM_STEPS.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 rounded-2xl border border-border bg-card/70 p-4"
            >
              <span className="display flex size-9 shrink-0 items-center justify-center rounded-xl bg-pink/15 text-pink">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionTitle
          kicker="Expired"
          title="Codes that no longer work"
          description="Useful if a random social post resurfaces an old string."
        />
        <Card>
          <div className="flex flex-wrap gap-2">
            {EXPIRED_CODES.map((code) => (
              <code
                key={code}
                className="rounded-full border border-danger/30 bg-danger/10 px-3 py-1 font-mono text-xs text-danger"
              >
                {code}
              </code>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Stuck below Wave 76?</p>
            <p className="mt-1 text-sm text-muted">
              Use the push guide before farming dead codes.
            </p>
          </div>
          <Link
            href="/guides#wave-76"
            className="rounded-full bg-cyan/15 px-4 py-2 text-sm font-bold text-cyan"
          >
            Open Wave 76 route
          </Link>
        </Card>
      </Section>
    </>
  );
}
