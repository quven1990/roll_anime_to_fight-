import Link from "next/link";
import { NAV_ITEMS } from "@/lib/navigation";
import { LAST_CHECKED, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/80 bg-[#05040c]/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display text-xl font-bold">{SITE_NAME}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Unofficial fan guide for the Roblox anime fighter game. Not affiliated
            with Roblox or Another Slop. Always verify codes in-game.
          </p>
          <p className="mt-4 text-xs text-muted">Last checked: {LAST_CHECKED}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Guides
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-pink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Legal
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            <li>
              <Link href="/privacy" className="hover:text-pink">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-pink">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/roblox" className="hover:text-pink">
                Official Roblox Game
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {SITE_NAME}. Fan-made reference only.
      </div>
    </footer>
  );
}
