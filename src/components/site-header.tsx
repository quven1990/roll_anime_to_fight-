"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { getMobileNav, getMoreNav, getPrimaryNav } from "@/lib/navigation";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const primary = getPrimaryNav();
  const more = getMoreNav();
  const mobile = getMobileNav();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-[#07060f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink to-violet shadow-[var(--glow-pink)]">
            <Sparkles className="size-4 text-white" />
          </span>
          <span className="display text-sm font-bold leading-tight sm:text-base">
            Roll Anime
            <span className="block text-[11px] font-medium tracking-wide text-cyan sm:text-xs">
              to Fight Wiki
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-foreground",
                pathname === item.href && "bg-pink/15 text-pink",
              )}
            >
              {item.navLabel ?? item.label}
            </Link>
          ))}
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-foreground">
              More
            </summary>
            <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              {more.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2.5 text-sm text-muted transition hover:bg-white/5 hover:text-foreground",
                    pathname === item.href && "bg-pink/10 text-pink",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/codes"
            className="hidden rounded-full bg-gradient-to-r from-pink to-violet px-4 py-2 text-sm font-bold text-white shadow-[var(--glow-pink)] sm:inline-flex"
          >
            Check Codes
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-white/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-card/95 px-4 py-4 lg:hidden">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
            {SITE_NAME}
          </p>
          <div className="grid gap-1">
            {mobile.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-white/5 hover:text-foreground",
                  pathname === item.href && "bg-pink/15 text-pink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
