import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Editorial Policy | Dine Castle Rock",
    description: "Learn how we curate, verify, and present restaurant information on Dine Castle Rock.",
}

export default function EditorialPolicyPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Editorial Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        Dine Castle Rock is dedicated to helping residents and visitors discover the best dining experiences in Castle Rock, Colorado. We curate and present accurate, helpful information to make dining decisions easier.
                    </p>
                </section>

                <section>
                    <h2>How We Select Listings</h2>
                    <p>
                        We include restaurants, bars, cafes, breweries, and other food establishments located in Castle Rock and the surrounding area. Our directory aims to be comprehensive, including both well-known establishments and hidden gems.
                    </p>
                    <p>
                        Inclusion in our directory does not constitute an endorsement. All businesses meeting our basic criteria (legally operating food establishments in our coverage area) are eligible for listing.
                    </p>
                </section>

                <section>
                    <h2>Data Sources and Verification</h2>
                    <h3>Business Information</h3>
                    <p>We compile business information from multiple sources:</p>
                    <ul>
                        <li>Official business websites</li>
                        <li>Google Business Profiles</li>
                        <li>Direct submissions from business owners</li>
                        <li>Local business registrations</li>
                    </ul>

                    <h3>Ratings</h3>
                    <p>
                        Ratings displayed on our site are aggregated from Google Reviews. We display these ratings for informational purposes and do not modify or curate them. The ratings represent the opinions of users on those platforms, not our own assessment.
                    </p>

                    <h3>Verification Process</h3>
                    <p>
                        We periodically verify listing information by cross-referencing sources. However, we encourage business owners to claim their listings to ensure accuracy. Last verified dates are displayed on each listing.
                    </p>
                </section>

                <section>
                    <h2>Trending and Featured Content</h2>
                    <h3>Trending Listings</h3>
                    <p>
                        &ldquo;Trending&rdquo; designations are based on user engagement signals such as page views and clicks within our platform. These are automatically generated and are not influenced by paid relationships.
                    </p>

                    <h3>Featured/Premium Listings</h3>
                    <p>
                        Listings marked as &ldquo;Featured&rdquo; or &ldquo;Premium&rdquo; are paid placements. These businesses have purchased enhanced visibility on our platform. Paid status is always clearly disclosed and does not affect:
                    </p>
                    <ul>
                        <li>Third-party ratings displayed</li>
                        <li>Our editorial recommendations in guides</li>
                        <li>Search result ordering (unless explicitly filtered)</li>
                    </ul>
                </section>

                <section>
                    <h2>Editorial Guides</h2>
                    <p>
                        Our editorial guides (&ldquo;Best Happy Hour,&rdquo; &ldquo;Date Night Spots,&rdquo; etc.) are curated by our editorial team based on:
                    </p>
                    <ul>
                        <li>Personal dining experiences</li>
                        <li>Community feedback and recommendations</li>
                        <li>Relevance to the guide topic</li>
                        <li>Quality and atmosphere</li>
                    </ul>
                    <p>
                        Paid listings may appear in guides if they genuinely meet the criteria, but payment does not guarantee inclusion in editorial content.
                    </p>
                </section>

                <section>
                    <h2>Corrections and Updates</h2>
                    <p>
                        We welcome corrections and updates to our listings. If you notice inaccurate information, please contact us at <a href="mailto:hello@dinecastlerock.com">hello@dinecastlerock.com</a> or use the &ldquo;Report an issue&rdquo; link on any listing page.
                    </p>
                    <p>
                        Business owners can claim their listings to manage their own information directly.
                    </p>
                </section>

                <section>
                    <h2>Independence and Transparency</h2>
                    <p>
                        We are committed to maintaining editorial independence. While we accept paid placements to support our operations, advertising never influences our editorial recommendations or the accuracy of information we present.
                    </p>
                </section>
            </div>
        </div>
    )
}
