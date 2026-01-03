import type { Metadata } from "next";
// import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { NetworkHeader } from "@/components/shared/NetworkHeader";
import { NetworkFooter } from "@/components/shared/NetworkFooter";

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
        className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground"
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
