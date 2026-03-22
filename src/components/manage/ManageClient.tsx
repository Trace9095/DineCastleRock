"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CreditCard, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ManageClient() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/billing/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#E85D2B]/10 text-white py-20">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#E85D2B]/15 flex items-center justify-center">
            <CreditCard className="h-8 w-8 text-[#E85D2B]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Manage Your Listing
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Update your subscription, billing details, or cancel at any time through the Stripe customer portal.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="container max-w-lg mx-auto px-4 py-16">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-2">Look Up Your Subscription</h2>
          <p className="text-white/60 text-sm mb-6">
            Enter the email address you used when signing up to access your billing portal.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#E85D2B]/50 focus:ring-1 focus:ring-[#E85D2B]/30 transition-colors"
              />
            </div>

            {error && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <div className="text-sm text-red-400">
                  {error}
                  {error.includes("No subscription") && (
                    <span className="block mt-1">
                      <Link href="/advertise" className="underline hover:text-red-300 transition-colors">
                        Get listed now
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || !email}
              size="lg"
              className="w-full bg-[#C04E20] hover:bg-[#A84118] text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Opening portal...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Open Billing Portal
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Benefits reminder */}
        <div className="mt-8 space-y-3">
          <p className="text-sm text-white/40 text-center mb-4">From the billing portal you can:</p>
          {[
            "Update payment method",
            "View invoices and billing history",
            "Cancel or modify your subscription",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/60">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-white/40">
            Not listed yet?{" "}
            <Link href="/advertise" className="text-[#E85D2B] hover:text-[#C04E20] transition-colors">
              View listing plans
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
