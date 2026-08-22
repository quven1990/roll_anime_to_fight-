import { ACTIVE_CODES } from "@/lib/data/codes";
import {
  getSeoPage,
  pageAbsoluteUrl,
  type SeoPage,
  type SeoPageKey,
} from "@/lib/seo";
import {
  DATE_MODIFIED,
  OFFICIAL_LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/site";

function buildWebSite(siteUrl: string) {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

function buildOrganization(siteUrl: string) {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE_NAME,
    url: siteUrl,
    description:
      "Independent fan-made wiki and strategy guides for Roll Anime to Fight on Roblox.",
    sameAs: [OFFICIAL_LINKS.roblox],
  };
}

function buildVideoGame() {
  return {
    "@type": "VideoGame",
    name: "Roll Anime to Fight!",
    alternateName: "Roll Anime to Fight",
    gamePlatform: "Roblox",
    applicationCategory: "Game",
    author: {
      "@type": "Organization",
      name: OFFICIAL_LINKS.creatorGroup,
    },
    url: OFFICIAL_LINKS.roblox,
  };
}

function buildWebPage(siteUrl: string, page: SeoPage) {
  return {
    "@type": "WebPage",
    "@id": `${pageAbsoluteUrl(page.path)}#webpage`,
    url: pageAbsoluteUrl(page.path),
    name: page.title,
    headline: page.h1,
    description: page.description,
    dateModified: page.dateModified ?? DATE_MODIFIED,
    inLanguage: "en-US",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: buildVideoGame(),
    breadcrumb: { "@id": `${pageAbsoluteUrl(page.path)}#breadcrumb` },
  };
}

function buildBreadcrumbList(page: SeoPage) {
  const home = pageAbsoluteUrl("/");
  const items =
    page.path === "/"
      ? [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: home,
          },
        ]
      : [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: home,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.breadcrumb,
            item: pageAbsoluteUrl(page.path),
          },
        ];

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageAbsoluteUrl(page.path)}#breadcrumb`,
    itemListElement: items,
  };
}

function buildFaqPage(page: SeoPage) {
  if (!page.faqs?.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function buildHowTo(page: SeoPage) {
  if (!page.howTo) return null;
  return {
    "@type": "HowTo",
    name: page.howTo.name,
    description: page.howTo.description,
    step: page.howTo.steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text,
    })),
  };
}

function buildCodesItemList() {
  return {
    "@type": "ItemList",
    name: "Reported Roll Anime to Fight codes",
    itemListElement: ACTIVE_CODES.map((code, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: code.code,
      description: `${code.rewards}. ${code.requirement}. ${code.note}`,
    })),
  };
}

export function buildPageStructuredData(key: SeoPageKey) {
  const page = getSeoPage(key);
  const siteUrl = getSiteUrl();
  const graph: Record<string, unknown>[] = [
    buildOrganization(siteUrl),
    buildWebSite(siteUrl),
    buildWebPage(siteUrl, page),
    buildBreadcrumbList(page),
  ];

  const faq = buildFaqPage(page);
  if (faq) graph.push(faq);

  const howTo = buildHowTo(page);
  if (howTo) graph.push(howTo);

  if (key === "codes") graph.push(buildCodesItemList());

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
