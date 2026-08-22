import { Card, PageHero, Section } from "@/components/ui";
import { SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("terms");

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Use"
        description={`${SITE_NAME} is an unofficial fan reference. Not affiliated with Roblox Corporation or Another Slop.`}
      />
      <Section>
        <Card className="prose-tight space-y-4 text-sm">
          <p>
            Content is provided for informational purposes only. Codes, traits, mutations,
            and tier advice can change without notice. Always verify rewards in-game.
          </p>
          <p>
            Game names, characters, and assets belong to their respective owners. Fan
            descriptions on this site do not claim ownership of Roblox experiences.
          </p>
          <p>
            You agree not to misuse this site for phishing, credential theft, or
            distributing malware. We may update these terms at any time.
          </p>
          <p>Last updated: August 22, 2026.</p>
        </Card>
      </Section>
    </>
  );
}
