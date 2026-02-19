import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin',
                    '/api/',
                    '/_next/',
                    '/private/',
                ],
            },
            {
                // Search engines & AI crawlers — allow for better discoverability
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'Applebot',
                    'Applebot-Extended',
                    'Google-Extended',
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'anthropic-ai',
                    'Claude-Web',
                    'ClaudeBot',
                    'CCBot',
                    'FacebookBot',
                    'Meta-ExternalAgent',
                    'Amazonbot',
                    'cohere-ai',
                    'PerplexityBot',
                    'YouBot',
                    'Bytespider',
                ],
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
