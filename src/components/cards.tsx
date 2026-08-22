import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { Card } from "@/components/ui";
import type { GameCode } from "@/lib/data/codes";
import { cn } from "@/lib/utils";

const statusStyles = {
  fresh: "border-ok/40 bg-ok/10 text-ok",
  conflict: "border-warn/40 bg-warn/10 text-warn",
  expired: "border-danger/40 bg-danger/10 text-danger",
} as const;

const statusLabel = {
  fresh: "Fresh report",
  conflict: "Conflict check",
  expired: "Expired",
} as const;

export function CodeCard({ item }: { item: GameCode }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span
            className={cn(
              "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
              statusStyles[item.status],
            )}
          >
            {statusLabel[item.status]}
          </span>
          <p className="display mt-3 text-xl font-bold tracking-wide text-foreground sm:text-2xl">
            {item.code}
          </p>
        </div>
        <CopyButton value={item.code} />
      </div>
      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted">Rewards</dt>
          <dd className="mt-1 text-foreground/90">{item.rewards}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted">Requirement</dt>
          <dd className="mt-1 text-foreground/90">{item.requirement}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted">Note</dt>
          <dd className="mt-1 text-muted">{item.note}</dd>
        </div>
      </dl>
    </Card>
  );
}

export function GuideCard({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-border bg-card/80 p-5 transition hover:border-pink/40 hover:shadow-[var(--glow-pink)]"
    >
      <h3 className="display text-lg font-bold group-hover:text-pink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
      <span className="mt-4 inline-flex text-sm font-semibold text-cyan">
        Open guide →
      </span>
    </Link>
  );
}
