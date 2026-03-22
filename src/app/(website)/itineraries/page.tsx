import type { Metadata } from "next";
import { MapPin, Clock, Utensils, Car, Plane, ExternalLink, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Castle Rock Dining Itineraries & Day Trips | Dine Castle Rock",
  description:
    "Best restaurants near Castle Rock Colorado day trip ideas. Plan your trip from Castle Rock to Royal Gorge — foodie itineraries, dining guides, and airport info.",
  alternates: { canonical: "https://dinecastlerock.co/itineraries" },
  openGraph: {
    title: "Castle Rock Dining Itineraries & Day Trips",
    description:
      "Plan your Castle Rock to Royal Gorge day trip — world-class dining, rafting, and ziplines just 1.5 hours south.",
    url: "https://dinecastlerock.co/itineraries",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Castle Rock Dining Itineraries" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dinecastlerock.co" },
    { "@type": "ListItem", position: 2, name: "Itineraries", item: "https://dinecastlerock.co/itineraries" },
  ],
};

function TimelineItem({
  time,
  label,
  icon,
  highlighted = false,
  children,
}: {
  time: string;
  label: string;
  icon: React.ReactNode;
  highlighted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 sm:gap-8">
      <div className="relative flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border ${
            highlighted
              ? "bg-[#E85D2B]/15 border-[#E85D2B]/30"
              : "bg-[#12121a] border-white/10"
          }`}
        >
          {icon}
        </div>
      </div>
      <div className="flex-1 pb-2">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-xs font-mono text-white/40 shrink-0">{time}</span>
          <h3 className={`font-semibold ${highlighted ? "text-white" : "text-white/80"}`}>{label}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function ItinerariesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#E85D2B]/10 text-white py-20">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>Day Trip &amp; Weekend Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Castle Rock Dining Itineraries &amp; Day Trips
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Curated food-first itineraries for residents and visitors — from quick lunch runs to full weekend getaways.
            </p>
          </div>
        </div>

        {/* Main Itinerary */}
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <div className="mb-4">
            <span className="text-xs font-semibold text-[#E85D2B] uppercase tracking-widest">Featured Itinerary</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            Castle Rock to Royal Gorge — A Foodie&apos;s Day Trip
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-10">
            <span className="flex items-center gap-1.5"><Car className="h-4 w-4" /> 1.5 hrs via I-25 South + CO-115</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Full day (9 AM – 9:30 PM)</span>
            <span className="flex items-center gap-1.5"><Utensils className="h-4 w-4" /> 2 dining stops</span>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-8">
              <TimelineItem
                time="9:00 AM"
                label="Depart Castle Rock"
                icon={<Car className="h-4 w-4 text-white/60" />}
              >
                <p className="text-white/60 text-sm">
                  Head south on I-25 toward Pueblo, then take CO-115 South into Canon City. The drive through the canyon is scenic — no rush.
                </p>
              </TimelineItem>

              <TimelineItem
                time="10:30 AM"
                label="Arrive Canon City"
                icon={<MapPin className="h-4 w-4 text-[#E85D2B]" />}
              >
                <p className="text-white/60 text-sm">
                  Explore downtown Canon City. Grab a coffee at a local cafe and walk the historic Main Street before heading to the gorge.
                </p>
              </TimelineItem>

              <TimelineItem
                time="11:30 AM"
                label="Lunch at WhiteWater Bar & Grill"
                icon={<Utensils className="h-4 w-4 text-[#E85D2B]" />}
                highlighted
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">WhiteWater Bar &amp; Grill</h4>
                    <a
                      href="https://whitewaterbar.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-[#E85D2B] transition-colors"
                      aria-label="WhiteWater Bar and Grill website"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-white/50 mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      45045 Hwy 50 West, Canon City
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 shrink-0" />
                      <a href="tel:+17192691009" className="hover:text-white/80 transition-colors">(719) 269-1009</a>
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Order: burgers, loaded nachos, craft drinks. Riverside outdoor seating when weather permits.
                  </p>
                </div>
              </TimelineItem>

              <TimelineItem
                time="1:00 PM"
                label="Royal Gorge Adventure"
                icon={<MapPin className="h-4 w-4 text-white/60" />}
              >
                <p className="text-white/60 text-sm mb-3">
                  Choose your adventure — whitewater rafting through Class III-V rapids or ziplines over the gorge.
                  Book in advance:{" "}
                  <a href="tel:+17192757238" className="text-[#E85D2B] hover:text-[#C04E20] transition-colors">
                    (719) 275-7238
                  </a>.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href="https://royalgorgerafting.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/5 border border-white/8 rounded-lg px-4 py-3 hover:border-white/20 transition-colors text-sm text-white/70"
                  >
                    Royal Gorge Rafting
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                  <a
                    href="https://royalgorgeziplinetours.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/5 border border-white/8 rounded-lg px-4 py-3 hover:border-white/20 transition-colors text-sm text-white/70"
                  >
                    Royal Gorge Zipline Tours
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </TimelineItem>

              <TimelineItem
                time="5:00 PM"
                label="Return to Downtown Canon City"
                icon={<MapPin className="h-4 w-4 text-white/60" />}
              >
                <p className="text-white/60 text-sm">
                  Clean up and rest before dinner. Explore the Royal Gorge Bridge area or browse local shops on Main Street.
                </p>
              </TimelineItem>

              <TimelineItem
                time="6:00 PM"
                label="Dinner at Rooftop Social"
                icon={<Utensils className="h-4 w-4 text-amber-400" />}
                highlighted
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">Rooftop Social</h4>
                    <a
                      href="https://wwrooftopsocial.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-amber-400 transition-colors"
                      aria-label="Rooftop Social website"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-white/50 mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      302 Royal Gorge Blvd, Canon City
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 shrink-0" />
                      <a href="tel:+17194517241" className="hover:text-white/80 transition-colors">(719) 451-7241</a>
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Rooftop views, craft cocktails, and elevated eats. A perfect way to end the day.
                  </p>
                </div>
              </TimelineItem>

              <TimelineItem
                time="8:00 PM"
                label="Drive Back to Castle Rock"
                icon={<Car className="h-4 w-4 text-white/60" />}
              >
                <p className="text-white/60 text-sm">
                  Depart Canon City via CO-115 North to I-25 North. Arrive Castle Rock approximately 9:30 PM.
                </p>
              </TimelineItem>
            </div>
          </div>
        </div>

        {/* Weekend Itinerary */}
        <div className="border-t border-white/5">
          <div className="container max-w-4xl mx-auto px-4 py-16">
            <div className="mb-4">
              <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">Weekend Getaway</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Weekend Food + Adventure in Royal Gorge</h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-10">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 2 days</span>
              <span className="flex items-center gap-1.5"><Utensils className="h-4 w-4" /> 4+ dining stops</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Canon City, CO</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-semibold text-[#E85D2B] uppercase tracking-widest mb-4">Day 1 — Saturday</div>
                <ul className="space-y-4 text-sm">
                  {[
                    ["9:00 AM", "Depart Castle Rock"],
                    ["11:00 AM", "Check in to lodging — Canon City or nearby"],
                    ["12:00 PM", <>Lunch at <strong className="text-white">WhiteWater Bar &amp; Grill</strong></>],
                    ["2:00 PM", "Royal Gorge Bridge & Park"],
                    ["6:30 PM", <>Dinner at <strong className="text-white">Rooftop Social</strong></>],
                    ["9:00 PM", "Evening drinks downtown Canon City"],
                  ].map(([time, desc], i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-white/40 w-16 shrink-0">{time}</span>
                      <span className="text-white/70">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Day 2 — Sunday</div>
                <ul className="space-y-4 text-sm">
                  {[
                    ["8:00 AM", "Coffee + breakfast, downtown Canon City"],
                    ["10:00 AM", "Royal Gorge Rafting — Class III-V trip"],
                    ["1:00 PM", <>Post-adventure lunch — <strong className="text-white">WhiteWater Bar &amp; Grill</strong></>],
                    ["3:00 PM", "Zipline tour or chill at the park"],
                    ["5:30 PM", "Check out + drive home to Castle Rock"],
                  ].map(([time, desc], i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-white/40 w-16 shrink-0">{time}</span>
                      <span className="text-white/70">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Airport Info */}
        <div className="border-t border-white/5">
          <div className="container max-w-4xl mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-8">
              <Plane className="h-6 w-6 text-[#E85D2B]" />
              <h2 className="text-3xl font-bold">Flying In? Airport Guide</h2>
            </div>
            <p className="text-white/60 mb-8">
              Castle Rock sits between Denver and Colorado Springs — both airports offer easy access to the Royal Gorge dining scene.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                    <Plane className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Denver International (DEN)</h3>
                    <div className="flex items-center gap-1.5 text-sm text-white/50 mb-3">
                      <Clock className="h-3.5 w-3.5" />
                      <span>30 minutes north of Castle Rock</span>
                    </div>
                    <p className="text-sm text-white/60">
                      The busiest airport in Colorado. Take I-25 South to reach Castle Rock, or continue to Royal Gorge (approx. 2 hours total from DEN).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <Plane className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Colorado Springs (COS)</h3>
                    <div className="flex items-center gap-1.5 text-sm text-white/50 mb-3">
                      <Clock className="h-3.5 w-3.5" />
                      <span>1 hour south of Castle Rock</span>
                    </div>
                    <p className="text-sm text-white/60">
                      Smaller and less congested. Only 45 minutes from Royal Gorge via US-50 West — ideal if the gorge is your main destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/40 mt-6">
              Both airports are 1.5–2 hours from the Royal Gorge dining scene. COS is the better choice if you&apos;re prioritizing Canon City. DEN has more direct flights.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#E85D2B]/15 via-[#0a0a14] to-[#E85D2B]/10 border-t border-white/5 text-white py-16">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Discover More Castle Rock Dining</h2>
            <p className="text-white/60 mb-8">
              While you plan your day trip, explore the best restaurants right here in Castle Rock.
            </p>
            <Button size="lg" className="bg-[#C04E20] text-white hover:bg-[#A84118] rounded-full px-8" asChild>
              <Link href="/restaurants">
                Browse Castle Rock Restaurants
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
