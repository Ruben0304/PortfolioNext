import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rubén Hernández Acevedo - Desarrollador Full Stack',
    short_name: 'Rubén H. Dev',
    description: 'Portfolio de Rubén Hernández Acevedo, desarrollador Full Stack especializado en aplicaciones móviles, desarrollo web y soluciones de inteligencia artificial.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    lang: 'es',
    dir: 'ltr',
    categories: [
      'portfolio',
      'developer', 
      'technology',
      'programming'
    ],
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        purpose: 'any'
      }
    ],
    shortcuts: [
      {
        name: 'Proyectos',
        short_name: 'Proyectos',
        description: 'Ver proyectos desarrollados',
        url: '/#projects',
        icons: [
          {
            src: '/icons/projects-icon.png',
            sizes: '96x96'
          }
        ]
      },
      {
        name: 'Contacto',
        short_name: 'Contacto', 
        description: 'Información de contacto',
        url: '/#contact',
        icons: [
          {
            src: '/icons/contact-icon.png',
            sizes: '96x96'
          }
        ]
      }
    ]
  }
}