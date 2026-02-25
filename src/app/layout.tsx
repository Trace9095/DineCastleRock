import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { NetworkHeader } from "@/components/shared/NetworkHeader";
import { NetworkFooter } from "@/components/shared/NetworkFooter";
import { ConsentAwareAnalytics } from "@/components/shared/consent-aware-analytics";
import { CookieConsentBanner } from "@/components/shared/cookie-consent-banner";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co';

// Check if Clerk is configured
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a14',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dine Castle Rock | Castle Rock's Premier Dining Guide",
    template: "%s | Dine Castle Rock",
  },
  description: "Discover the best restaurants, bars, breweries, and cafes in Castle Rock, Colorado. Local dining guide with menus, hours, reviews, and deals.",
  keywords: [
    "Castle Rock restaurants",
    "Castle Rock dining",
    "Castle Rock bars",
    "Castle Rock breweries",
    "Castle Rock coffee shops",
    "restaurants near me Castle Rock",
    "best food Castle Rock CO",
    "Castle Rock Colorado food guide",
    "Douglas County restaurants",
  ],
  authors: [{ name: "Dine Castle Rock" }],
  creator: "Dine Castle Rock",
  publisher: "Dine Castle Rock",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dine Castle Rock",
    title: "Dine Castle Rock | Castle Rock's Premier Dining Guide",
    description: "Discover the best restaurants, bars, breweries, and cafes in Castle Rock, Colorado. Local dining guide with menus, hours, reviews, and deals.",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Dine Castle Rock - Castle Rock's Premier Dining Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dine Castle Rock | Castle Rock's Premier Dining Guide",
    description: "Discover the best restaurants, bars, breweries, and cafes in Castle Rock, Colorado.",
    images: ['/opengraph-image'],
  },
  appleWebApp: {
    capable: true,
    title: "Dine Castle Rock",
    statusBarStyle: "black-translucent",
  },
  manifest: '/site.webmanifest',
  other: {
    'apple-mobile-web-app-title': 'Dine Castle Rock',
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'text/markdown': '/llms.txt',
    },
  },
  category: "Food & Drink",
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
      "email": "hello@dinecastlerock.co",
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
  const content = (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground"
      >
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
      </body>
    </html>
  );

  // Only wrap with ClerkProvider if configured
  if (clerkPublishableKey) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
