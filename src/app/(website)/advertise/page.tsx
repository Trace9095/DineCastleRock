"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  MapPin,
  Megaphone,
  ArrowRight,
  CreditCard,
  Mail,
} from "lucide-react";
import Link from "next/link";

type Tier = "premium" | "sponsored";

function PricingCard({
  tier,
  title,
  price,
  description,
  features,
  badge,
  accentColor,
  icon,
}: {
  tier: Tier;
  title: string;
  price: number;
  description: string;
  features: string[];
  badge?: string;
  accentColor: string;
  icon: React.ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setError(null);
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, email, businessName }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to start checkout. Please try again.");
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const isMostPopular = !!badge;

  return (
    <div
      className={`relative border rounded-2xl p-7 flex flex-col gap-5 ${
        isMostPopular
          ? "border-[#E85D2B]/40 bg-[#E85D2B]/5 shadow-lg shadow-[#E85D2B]/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge className="bg-[#E85D2B] text-white border-0 px-4 py-1 text-xs font-semibold">
            {badge}
          </Badge>
        </div>
      )}

      <div className="flex items-start gap-3">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${accentColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/50">{description}</p>
        </div>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-white/50 text-sm">/mo</span>
      </div>

      <ul className="space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
            <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <div className="space-y-3 pt-2">
        <input
          type="text"
          placeholder="Restaurant name (optional)"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E85D2B]/40 transition-colors"
        />
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E85D2B]/40 transition-colors"
          />
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        <Button
          onClick={handleCheckout}
          disabled={loading}
          size="lg"
          className={`w-full rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${
            isMostPopular
              ? "bg-[#C04E20] hover:bg-[#A84118] text-white"
              : "bg-white/10 hover:bg-white/15 text-white border border-white/20"
          }`}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Redirecting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Get Listed Now
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#E85D2B]/10 text-white py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-white/10">
            Partner With Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Reach Castle Rock Diners
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Connect with locals and visitors actively searching for dining experiences.
            Promote your restaurant, bar, or café to our engaged community.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-white/5">
        <div className="container max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">15K+</p>
              <p className="text-sm text-muted-foreground">Monthly Visitors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">80%</p>
              <p className="text-sm text-muted-foreground">Local Audience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">4.2x</p>
              <p className="text-sm text-muted-foreground">Avg. Engagement</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground">Listed Venues</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="container max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Listing Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple monthly pricing. No setup fees. Cancel anytime via your billing portal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <PricingCard
            tier="premium"
            title="Premium"
            price={99}
            description="Full dedicated listing + featured placement"
            badge={undefined}
            accentColor="bg-amber-500/15"
            icon={<Star className="h-5 w-5 text-amber-400" />}
            features={[
              "Full dedicated listing page",
              "Photos, description & booking link",
              "Featured placement on category pages",
              "Homepage carousel inclusion",
              "Analytics dashboard",
              "Priority in search results",
            ]}
          />
          <PricingCard
            tier="sponsored"
            title="Sponsored"
            price={199}
            description="Everything in Premium, plus top-of-page placement"
            badge="Best Value"
            accentColor="bg-[#E85D2B]/15"
            icon={<Megaphone className="h-5 w-5 text-[#E85D2B]" />}
            features={[
              "Everything in Premium",
              "Top-of-page sponsored placement",
              "Highlighted card across directory",
              "Priority in all search results",
              "Blog feature write-up",
              "Dedicated account support",
            ]}
          />
        </div>

        <p className="text-center text-sm text-white/40 mt-8">
          Already listed?{" "}
          <Link href="/manage" className="text-[#E85D2B] hover:text-[#C04E20] transition-colors underline">
            Manage your subscription
          </Link>
        </p>
      </div>

      <Separator />

      {/* Why Advertise */}
      <div className="container max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Dine Castle Rock?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Users className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Engaged Local Audience</h3>
                  <p className="text-sm text-muted-foreground">
                    Our visitors are actively searching for places to eat — not passively scrolling.
                    They&apos;re ready to dine, order, or reserve.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Hyper-Local Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re 100% focused on Castle Rock. No diluted audience — just your neighbors
                    and visitors exploring our town.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Measurable Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Track clicks, impressions, and engagement. Know exactly how your
                    investment is performing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-8 space-y-4 border border-white/5">
            <h3 className="text-xl font-semibold">Questions?</h3>
            <p className="text-muted-foreground text-sm">
              Reach out and we&apos;ll help you choose the right plan for your restaurant.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
              <a href="mailto:advertise@dinecastlerock.co" className="hover:underline">
                advertise@dinecastlerock.co
              </a>
            </div>
            <Button size="sm" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
              <a href="mailto:advertise@dinecastlerock.co?subject=Advertising%20Inquiry">
                Send Us a Message
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#E85D2B]/15 via-[#0a0a14] to-[#E85D2B]/10 border-t border-white/5 text-white py-16">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Ready to Advertise Yet?</h2>
          <p className="text-white/60 mb-8">
            Make sure your business is listed first. Basic listings are always free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/add-listing">Add Your Listing</Link>
            </Button>
            <Button size="lg" className="bg-[#C04E20] text-white hover:bg-[#A84118]" asChild>
              <Link href="/restaurants">Browse Directory</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
