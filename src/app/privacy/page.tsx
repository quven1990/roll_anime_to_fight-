import { Card, PageHero, Section } from "@/components/ui";
import { SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { SeoFoot, SeoHead } from "@/components/seo-extras";

export const metadata = buildMetadata("privacy");

export default function PrivacyPage() {
  return (
    <>
      <SeoHead pageKey="privacy" />
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        description={`How ${SITE_NAME} handles information. This is a fan-made informational site.`}
      />
      <Section>
        <Card className="prose-tight space-y-4 text-sm">
          <p>
            We do not require accounts to browse guides. If analytics are added later, they
            will be disclosed here with opt-out notes where applicable.
          </p>
          <p>
            Any contact email you send voluntarily may be stored to reply to your message.
            Do not send passwords or Roblox credentials.
          </p>
          <p>
            Third-party destinations (Roblox, Discord, Trello) have their own privacy
            policies. Leaving this site means those policies apply.
          </p>
          <p>Last updated: August 22, 2026.</p>
        </Card>
      </Section>
      <SeoFoot pageKey="privacy" />
    </>
  );
}
