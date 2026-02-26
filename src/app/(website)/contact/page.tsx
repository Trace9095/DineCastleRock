import { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dine Castle Rock. Questions about restaurant listings, partnerships, advertising, or feedback? We'd love to hear from you.",
  openGraph: {
    title: "Contact Us | Dine Castle Rock",
    description: "Get in touch with Dine Castle Rock. Questions about restaurant listings, partnerships, or feedback?",
  },
};

const CONTACT_REASONS = [
  { title: "Restaurant Listings", description: "Questions about adding or updating your restaurant listing", email: "hello@dinecastlerock.co" },
  { title: "Advertising", description: "Interested in promoting your restaurant to local diners", email: "hello@dinecastlerock.co" },
  { title: "General Inquiries", description: "Other questions or feedback about our dining guide", email: "hello@dinecastlerock.co" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#C04E20]/10 text-white pt-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-white/60">
              Have questions or feedback? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-[#12121a] rounded-2xl border border-white/5 p-6 sm:p-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-4">
                  {CONTACT_REASONS.map((reason) => (
                    <div key={reason.title} className="bg-[#12121a] rounded-xl border border-white/5 p-5 hover:border-white/10 transition-colors">
                      <h3 className="font-semibold text-white mb-1">{reason.title}</h3>
                      <p className="text-sm text-white/70 mb-2">{reason.description}</p>
                      <a
                        href={`mailto:${reason.email}`}
                        className="text-sm text-[#C04E20] hover:text-[#E5692F] hover:underline font-medium"
                      >
                        {reason.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
