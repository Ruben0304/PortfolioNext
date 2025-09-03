import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rubenhernandez.dev'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/_next/static/',
          '/api/',
        ],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Slurp'],
        allow: '/',
        crawlDelay: 1,
      },
      // Uncomment to block AI training crawlers
      /*
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'],
        disallow: '/',
      },
      */
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}