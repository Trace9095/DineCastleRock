import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Dine Castle Rock",
    description: "Our privacy policy explains how we collect, use, and protect your information when you use Dine Castle Rock.",
}

export default function PrivacyPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <section>
                    <h2>Introduction</h2>
                    <p>
                        Dine Castle Rock (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the dinecastlerock.co website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>
                </section>

                <section>
                    <h2>Information We Collect</h2>
                    <h3>Information You Provide</h3>
                    <ul>
                        <li><strong>Contact Information:</strong> When you submit a listing or contact us, we collect your name, email address, and phone number.</li>
                        <li><strong>Business Information:</strong> For listing submissions, we collect business names, addresses, hours, and other publicly available business details.</li>
                    </ul>

                    <h3>Information Automatically Collected</h3>
                    <ul>
                        <li><strong>Usage Data:</strong> We collect information about how you interact with our website, including pages visited and time spent.</li>
                        <li><strong>Device Information:</strong> We may collect device type, browser type, and IP address for analytics purposes.</li>
                    </ul>
                </section>

                <section>
                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To provide and maintain our directory service</li>
                        <li>To process listing submissions and claims</li>
                        <li>To respond to your inquiries and support requests</li>
                        <li>To improve our website and user experience</li>
                        <li>To send promotional communications (with your consent)</li>
                    </ul>
                </section>

                <section>
                    <h2>Third-Party Services</h2>
                    <p>
                        We may use third-party services for analytics (such as Google Analytics), hosting, and other functionality. These services may collect information about your use of our website according to their own privacy policies.
                    </p>
                </section>

                <section>
                    <h2>Data Sources for Listings</h2>
                    <p>
                        Business information displayed on our site is compiled from publicly available sources, including business websites, Google Business Profiles, and other public directories. Ratings are aggregated from third-party sources and provided for informational purposes only.
                    </p>
                </section>

                <section>
                    <h2>Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt out of marketing communications</li>
                    </ul>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                    </p>
                    <p>
                        Email: <a href="mailto:hello@dinecastlerock.co">hello@dinecastlerock.co</a>
                    </p>
                </section>
            </div>
        </div>
    )
}
