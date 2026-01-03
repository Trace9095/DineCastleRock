import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { NetworkHeader } from "@/components/shared/NetworkHeader";
import { NetworkFooter } from "@/components/shared/NetworkFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dine Castle Rock | Premium Dining Guide",
  description: "Discover the best restaurants, bars, and culinary experiences in Castle Rock, CO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <NetworkHeader />
        <main className="flex-1 w-full">
          {children}
        </main>
        <NetworkFooter />
      </body>
    </html>
    // </ClerkProvider>
  );
}
