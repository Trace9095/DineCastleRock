import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Dine Castle Rock is committed to making our website accessible to all visitors.',
  alternates: { canonical: '/accessibility' },
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-muted-foreground text-lg">Last updated: February 18, 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12 text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Our Commitment</h2>
            <p className="leading-relaxed">
              Dine Castle Rock is committed to ensuring digital accessibility for people of all
              abilities. We aim to make our local dining guide available to everyone, regardless of
              disability or assistive technology used.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Conformance Status</h2>
            <p className="leading-relaxed">
              We aim to conform to the{' '}
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E85D2B] hover:underline"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </a>. We are actively working to increase the accessibility of our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Measures We&apos;ve Taken</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Semantic HTML structure with proper heading hierarchy</li>
              <li>Skip-to-main-content navigation link for keyboard users</li>
              <li>Alt text on images describing their content</li>
              <li>Keyboard-navigable menus and interactive components</li>
              <li>Sufficient color contrast ratios for text readability</li>
              <li>Responsive design that works across screen sizes and devices</li>
              <li>Visible focus indicators for keyboard navigation</li>
              <li>Reduced-motion support for users who prefer minimal animation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Known Limitations</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Third-party content:</strong> Some restaurant descriptions and images sourced from third-party
                websites may not fully meet accessibility standards.
              </li>
              <li>
                <strong>Interactive maps:</strong> Embedded maps may have limited keyboard accessibility.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Feedback &amp; Contact</h2>
            <p className="leading-relaxed">
              We welcome your feedback. If you encounter any accessibility barriers, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-6 space-y-2 border border-border">
              <p className="font-semibold text-foreground">Dine Castle Rock</p>
              <p>
                Email: <a href="mailto:hello@dinecastlerock.co" className="text-[#E85D2B] hover:underline">hello@dinecastlerock.co</a>
              </p>
              <p>Castle Rock, CO 80104</p>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy" className="text-[#E85D2B] hover:text-[#f0845a] transition-colors text-sm">
                Privacy Policy &rarr;
              </Link>
              <Link href="/terms" className="text-[#E85D2B] hover:text-[#f0845a] transition-colors text-sm">
                Terms of Service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
