import type { MetadataRoute } from "next";
import { PAGE_SEO } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return Object.values(PAGE_SEO)
    .filter((page) => page.path !== "/privacy" && page.path !== "/terms")
    .map((page) => ({
      url: `${base}${page.path === "/" ? "" : page.path}`,
      lastModified: now,
      changeFrequency: page.path === "/codes" || page.path === "/updates" ? "daily" : "weekly",
      priority: page.path === "/" ? 1 : page.path === "/codes" ? 0.9 : 0.7,
    }));
}
