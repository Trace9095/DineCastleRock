import { ClerkProvider } from "@clerk/nextjs";
import { NetworkHeader } from "@/components/shared/NetworkHeader";
import { NetworkFooter } from "@/components/shared/NetworkFooter";
import { ConsentAwareAnalytics } from "@/components/shared/consent-aware-analytics";
import { CookieConsentBanner } from "@/components/shared/cookie-consent-banner";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co';
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dinecastlerock.co/#website",
      "url": "https://dinecastlerock.co/",
      "name": "Dine Castle Rock",
      "description": "Dining directory for Castle Rock, Colorado: restaurants, bars, coffee, breweries, deals.",
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://dinecastlerock.co/#org",
      "name": "Dine Castle Rock",
      "url": "https://dinecastlerock.co/",
      "email": "hello@dinecastlerock.co",
      "sameAs": [
        "https://visitcastlerock.co/",
        "https://shopcastlerock.co/"
      ]
    }
  ]
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C04E20] focus:text-white focus:underline">
        Skip to main content
      </a>
      <NetworkHeader />
      <main id="main-content" className="flex-1 w-full pt-16 lg:pt-20">
        {children}
      </main>
      <NetworkFooter />
      <ConsentAwareAnalytics />
      <CookieConsentBanner />
    </>
  );

  if (clerkPublishableKey) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
