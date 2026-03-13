import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
