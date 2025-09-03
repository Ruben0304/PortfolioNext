import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/contexts/theme-context';
 import ParticlesBackground from '@/components/ui/particles-background';
import StructuredData from '@/components/seo/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rubén Hernández Acevedo - Desarrollador Full Stack | Apps Móviles, Web & IA",
    template: "%s | Rubén Hernández Acevedo - Desarrollador Full Stack"
  },
  description: "Desarrollador Full Stack especializado en aplicaciones móviles nativas (Kotlin/Swift), desarrollo web moderno (React/Next.js), APIs robustas (FastAPI/Laravel) y soluciones de inteligencia artificial. Creador de proyectos como SunCar, PlayUp, MoneyApp y Solar Survivor. Transformo ideas en experiencias digitales innovadoras con 5+ años de experiencia.",
  keywords: [
    // Tecnologías principales
    "desarrollador full stack", "programador", "software developer",
    // Frontend
    "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS",
    // Backend
    "FastAPI", "Laravel", "Python", "PHP", "Node.js", "API REST",
    // Móvil
    "desarrollo móvil", "Kotlin", "Swift", "Android", "iOS", "apps nativas",
    // Base de datos
    "MongoDB", "MySQL", "PostgreSQL", "base de datos",
    // IA y ML
    "inteligencia artificial", "machine learning", "IA", "Claude AI",
    // Servicios y ubicación
    "desarrollador Cuba", "programador freelance", "desarrollo de software",
    // Proyectos específicos
    "SunCar", "PlayUp", "MoneyApp", "Solar Survivor", "FinTech",
    // Especialidades
    "energía solar", "fintech", "deportes", "gestión de torneos", "finanzas personales"
  ],
  authors: [{ name: "Rubén Hernández Acevedo", url: "https://rubenhernandez.dev" }],
  creator: "Rubén Hernández Acevedo",
  publisher: "Rubén Hernández Acevedo",
  category: "Technology",
  classification: "Software Development Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rubenhernandez.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    title: "Rubén Hernández Acevedo - Desarrollador Full Stack Especializado en Apps y IA",
    description: "Desarrollador con 5+ años de experiencia creando aplicaciones móviles nativas, soluciones web modernas y sistemas de IA. Proyectos destacados: SunCar (energía solar), PlayUp (gestión deportiva), MoneyApp (fintech con IA).",
    url: 'https://rubenhernandez.dev',
    siteName: 'Portfolio Rubén Hernández Acevedo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rubén Hernández Acevedo - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rubenhernandez',
    creator: '@rubenhernandez',
    title: "Rubén Hernández Acevedo - Desarrollador Full Stack | Apps & IA",
    description: "Especialista en desarrollo móvil nativo, web moderno y soluciones de IA. Creador de SunCar, PlayUp, MoneyApp. 5+ años transformando ideas en realidad digital.",
    images: ['/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  other: {
    'mobile-web-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#ffffff',
    'color-scheme': 'light dark',
    'revisit-after': '7 days',
    'content-language': 'es, en',
    'geo.region': 'CU',
    'geo.country': 'Cuba',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Rubén H. Dev" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <NextIntlClientProvider messages={messages}>
            {/*<ParticlesBackground />*/}
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
