import type { MetadataRoute } from "next";
import { PAGE_SEO, getSeoPage, type SeoPageKey } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date("2026-08-22T00:00:00.000Z");

  return (Object.keys(PAGE_SEO) as SeoPageKey[])
    .map((key) => getSeoPage(key))
    .filter((page) => page.indexable !== false)
    .map((page) => ({
      url: page.path === "/" ? base : `${base}${page.path}`,
      lastModified: now,
      changeFrequency:
        page.path === "/codes" || page.path === "/updates" ? "daily" : "weekly",
      priority:
        page.path === "/"
          ? 1
          : page.path === "/codes"
            ? 0.95
            : page.path === "/tier-list" || page.path === "/guides"
              ? 0.9
              : 0.75,
    }));
}
