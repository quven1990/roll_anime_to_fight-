import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  description,
  meta,
  actions,
}: {
  kicker: string;
  title: string;
  description: string;
  meta?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[1.6rem] neon-border glass px-6 py-10 sm:px-10 sm:py-12">
      <div className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 size-56 rounded-full bg-cyan/15 blur-3xl" />
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
        {kicker}
      </p>
      <h1 className="display mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-balance sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
      {meta ? (
        <p className="mt-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          {meta}
        </p>
      ) : null}
      {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn("mt-10", className)}>{children}</section>;
}

export function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">
        {kicker}
      </p>
      <h2 className="display mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "scroll-mt-24 rounded-2xl border border-border bg-card/80 p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-cyan/30 bg-cyan/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
        Quick answer
      </p>
      <div className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {children}
      </div>
    </div>
  );
}
