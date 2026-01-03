import type { Metadata } from "next";
// import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { NetworkHeader } from "@/components/shared/NetworkHeader";
import { NetworkFooter } from "@/components/shared/NetworkFooter";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Dine Castle Rock | Premium Dining Guide",
  description: "Discover the best restaurants, bars, and culinary experiences in Castle Rock, CO.",
};

// Sitewide schema markup
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
      "email": "hello@dinecastlerock.com",
      "sameAs": [
        "https://visitcastlerock.co/",
        "https://shopcastlerock.co/"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground"
      >
        <NetworkHeader />
        <main className="flex-1 w-full">
          {children}
        </main>
        <NetworkFooter />
        <Analytics />
      </body>
    </html>
    // </ClerkProvider>
  );
}
