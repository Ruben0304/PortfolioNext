export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rubenhernandez.dev/#person",
        "name": "Rubén Hernández Acevedo",
        "jobTitle": "Full Stack Developer",
        "description": "Desarrollador Full Stack especializado en aplicaciones móviles nativas, desarrollo web moderno y soluciones de inteligencia artificial con 5+ años de experiencia.",
        "url": "https://rubenhernandez.dev",
        "sameAs": [
          "https://github.com/rubenhernandez",
          "https://linkedin.com/in/rubenhernandez",
          "https://twitter.com/rubenhernandez"
        ],
        "knowsAbout": [
          "JavaScript",
          "TypeScript", 
          "React",
          "Next.js",
          "Vue.js",
          "Kotlin",
          "Swift",
          "Python",
          "FastAPI",
          "Laravel",
          "PHP",
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "Node.js",
          "Artificial Intelligence",
          "Machine Learning",
          "Mobile App Development",
          "Web Development",
          "Software Engineering"
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "Full Stack Developer",
          "description": "5+ años de experiencia en desarrollo de software"
        },
        "workLocation": {
          "@type": "Place",
          "name": "Cuba",
          "addressCountry": "CU"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+53-5483-0854",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://rubenhernandez.dev/#website",
        "url": "https://rubenhernandez.dev",
        "name": "Rubén Hernández Acevedo - Portfolio",
        "description": "Portfolio de Rubén Hernández Acevedo, desarrollador Full Stack especializado en aplicaciones móviles, desarrollo web y soluciones de inteligencia artificial.",
        "publisher": {
          "@id": "https://rubenhernandez.dev/#person"
        },
        "inLanguage": ["es", "en"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rubenhernandez.dev/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://rubenhernandez.dev/#webpage",
        "url": "https://rubenhernandez.dev",
        "name": "Rubén Hernández Acevedo - Desarrollador Full Stack | Apps, Web & IA",
        "description": "Desarrollador Full Stack especializado en aplicaciones móviles nativas, desarrollo web moderno y soluciones de inteligencia artificial. Creador de proyectos como SunCar, PlayUp, MoneyApp.",
        "isPartOf": {
          "@id": "https://rubenhernandez.dev/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://rubenhernandez.dev/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "dateModified": new Date().toISOString(),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://rubenhernandez.dev"
            }
          ]
        }
      },
      {
        "@type": "Portfolio",
        "@id": "https://rubenhernandez.dev/#portfolio",
        "name": "Portfolio de Rubén Hernández Acevedo",
        "description": "Colección de proyectos destacados incluyendo SunCar, PlayUp, MoneyApp, Solar Survivor y plataformas FinTech.",
        "creator": {
          "@id": "https://rubenhernandez.dev/#person"
        },
        "workExample": [
          {
            "@type": "SoftwareApplication",
            "name": "SunCar",
            "description": "Empresa de instalaciones fotovoltaicas. Soluciones innovadoras en energía solar para hogares y empresas.",
            "applicationCategory": "Business Application",
            "operatingSystem": "Web"
          },
          {
            "@type": "SoftwareApplication",
            "name": "PlayUp",
            "description": "Gestión de torneos, jugadores y equipos de fútbol amateur internacional. Plataforma completa deportiva.",
            "applicationCategory": "Sports Application",
            "operatingSystem": "Web, Mobile"
          },
          {
            "@type": "SoftwareApplication",
            "name": "MoneyApp",
            "description": "Asistente de finanzas personales con IA. Gestiona tus finanzas de manera inteligente y automatizada.",
            "applicationCategory": "Finance Application",
            "operatingSystem": "Mobile"
          },
          {
            "@type": "SoftwareApplication", 
            "name": "Solar Survivor",
            "description": "Juego de simulación de energía solar. Sobrevive y prospera usando tecnología fotovoltaica sostenible.",
            "applicationCategory": "Game",
            "operatingSystem": "Mobile, Web"
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}