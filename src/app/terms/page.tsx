import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Dine Castle Rock",
    description: "Terms of service for using the Dine Castle Rock restaurant directory and website.",
}

export default function TermsPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2>Agreement to Terms</h2>
                    <p>
                        By accessing and using Dine Castle Rock (dinecastlerock.co), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
                    </p>
                </section>

                <section>
                    <h2>Use of Our Service</h2>
                    <p>
                        Dine Castle Rock provides a directory of restaurants, bars, cafes, and other dining establishments in Castle Rock, Colorado. Our service is provided for informational purposes only.
                    </p>
                    <p>You agree to use our service only for lawful purposes and in accordance with these Terms.</p>
                </section>

                <section>
                    <h2>Accuracy of Information</h2>
                    <p>
                        While we strive to keep our listings accurate and up-to-date, we cannot guarantee the accuracy, completeness, or timeliness of all information displayed on our site. Business hours, prices, menus, and other details may change without notice.
                    </p>
                    <p>
                        We recommend contacting businesses directly to confirm details before visiting.
                    </p>
                </section>

                <section>
                    <h2>Third-Party Ratings</h2>
                    <p>
                        Ratings displayed on our site are aggregated from third-party sources such as Google. These ratings represent reviews collected by those platforms and do not represent our own assessment or endorsement of any business.
                    </p>
                </section>

                <section>
                    <h2>Business Listings</h2>
                    <h3>For Business Owners</h3>
                    <p>
                        If you are a business owner and wish to claim, update, or remove your listing, please contact us. We will verify your ownership before making changes.
                    </p>

                    <h3>Featured and Premium Listings</h3>
                    <p>
                        Some listings on our site are designated as "Featured" or "Premium." These are paid placements and are clearly labeled as such. Paid placement does not affect our editorial recommendations or ratings from third-party sources.
                    </p>
                </section>

                <section>
                    <h2>Intellectual Property</h2>
                    <p>
                        The content on Dine Castle Rock, including text, graphics, logos, and software, is owned by or licensed to us and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our permission.
                    </p>
                </section>

                <section>
                    <h2>Limitation of Liability</h2>
                    <p>
                        Dine Castle Rock is provided "as is" without warranties of any kind. We are not responsible for any damages arising from your use of our website or reliance on information provided.
                    </p>
                </section>

                <section>
                    <h2>Changes to Terms</h2>
                    <p>
                        We may update these Terms of Service from time to time. We will notify users of significant changes by posting a notice on our website.
                    </p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>
                        For questions about these Terms, please contact us at:
                    </p>
                    <p>
                        Email: <a href="mailto:hello@dinecastlerock.com">hello@dinecastlerock.com</a>
                    </p>
                </section>
            </div>
        </div>
    )
}
