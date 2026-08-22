import Link from "next/link";
import { PAGE_SEO, getSeoPage, type SeoPageKey } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";

export function JsonLd({ pageKey }: { pageKey: SeoPageKey }) {
  const payload = buildPageStructuredData(pageKey);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function Breadcrumbs({ pageKey }: { pageKey: SeoPageKey }) {
  const page = getSeoPage(pageKey);
  if (page.path === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-pink">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground">{page.breadcrumb}</li>
      </ol>
    </nav>
  );
}

export function RelatedPages({ pageKey }: { pageKey: SeoPageKey }) {
  const page = getSeoPage(pageKey);
  const related = page.related ?? [];
  if (!related.length) return null;

  const items = related
    .map((path) =>
      (Object.values(PAGE_SEO) as ReturnType<typeof getSeoPage>[]).find(
        (entry) => entry.path === path,
      ),
    )
    .filter((item): item is ReturnType<typeof getSeoPage> => Boolean(item));

  if (!items.length) return null;

  return (
    <section className="mt-12 border-t border-border pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
        Related guides
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="block rounded-2xl border border-border bg-card/70 px-4 py-3 transition hover:border-pink/40"
            >
              <span className="font-semibold text-foreground">
                {item.breadcrumb}
              </span>
              <span className="mt-1 block text-sm text-muted line-clamp-2">
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PageFaqs({ pageKey }: { pageKey: SeoPageKey }) {
  const faqs = getSeoPage(pageKey).faqs;
  if (!faqs?.length) return null;

  return (
    <section className="mt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink">
        FAQ
      </p>
      <h2 className="display mt-2 text-2xl font-bold sm:text-3xl">
        Frequently asked questions
      </h2>
      <div className="mt-5 grid gap-3">
        {faqs.map((item) => (
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
    </section>
  );
}

/** JSON-LD + breadcrumbs — place at the top of each page. */
export function SeoHead({ pageKey }: { pageKey: SeoPageKey }) {
  return (
    <>
      <JsonLd pageKey={pageKey} />
      <Breadcrumbs pageKey={pageKey} />
    </>
  );
}

/** FAQ + related internal links — place near the bottom of each page. */
export function SeoFoot({
  pageKey,
  showFaqs = true,
}: {
  pageKey: SeoPageKey;
  showFaqs?: boolean;
}) {
  return (
    <>
      {showFaqs ? <PageFaqs pageKey={pageKey} /> : null}
      <RelatedPages pageKey={pageKey} />
    </>
  );
}
