import { ClerkProvider } from "@clerk/nextjs";
import { NetworkHeader } from "@/components/shared/NetworkHeader";
import { NetworkFooter } from "@/components/shared/NetworkFooter";
import { ConsentAwareAnalytics } from "@/components/shared/consent-aware-analytics";
import { CookieConsentBanner } from "@/components/shared/cookie-consent-banner";
import { StructuredData } from "@/components/shared/StructuredData";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      <StructuredData />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#C04E20] focus:text-white focus:underline focus:outline-none focus:ring-2 focus:ring-white">
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
