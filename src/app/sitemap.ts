import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rubenhernandez.dev'
  
  // Get current date for lastModified
  const currentDate = new Date()
  
  // Base routes that exist in both languages
  const routes = [
    '',
    // Add future routes here if needed
    // '/blog',
    // '/services',
  ]
  
  // Generate entries for both locales
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add entries for each locale and route combination
  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((otherLocale) => [
              otherLocale,
              `${baseUrl}/${otherLocale}${route}`
            ])
          )
        }
      })
    })
  })
  
  // Add root redirect (defaults to Spanish)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${baseUrl}/${locale}`
        ])
      )
    }
  })
  
  // Add project-specific pages if they become individual routes in the future
  // const projects = [
  //   'suncar',
  //   'playup', 
  //   'moneyapp',
  //   'solar-survivor',
  //   'fintech-platform'
  // ]
  
  // Uncomment and modify if you create individual project pages
  /*
  projects.forEach((project) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((otherLocale) => [
              otherLocale,
              `${baseUrl}/${otherLocale}/projects/${project}`
            ])
          )
        }
      })
    })
  })
  */
  
  return sitemapEntries
}