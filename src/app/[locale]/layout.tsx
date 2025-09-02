import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/contexts/theme-context';
 import ParticlesBackground from '@/components/ui/particles-background';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rubén Hernández Acevedo - Desarrollador Full Stack | Apps, Web & IA",
  description: "Portfolio de Rubén Hernández Acevedo, desarrollador especializado en aplicaciones móviles, desarrollo web y soluciones de inteligencia artificial. Experiencia en React, Next.js, Node.js, Python y tecnologías de IA.",
  keywords: ["desarrollador", "full stack", "apps", "web", "inteligencia artificial", "React", "Next.js", "Node.js", "Python", "IA", "machine learning"],
  authors: [{ name: "Rubén Hernández Acevedo" }],
  creator: "Rubén Hernández Acevedo",
  publisher: "Rubén Hernández Acevedo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rubenhernandez.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rubén Hernández Acevedo - Desarrollador Full Stack",
    description: "Portfolio de desarrollador especializado en apps, web e inteligencia artificial",
    url: 'https://rubenhernandez.dev',
    siteName: 'Portfolio Rubén Hernández',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rubén Hernández Acevedo - Desarrollador Full Stack",
    description: "Portfolio de desarrollador especializado en apps, web e inteligencia artificial",
    creator: '@rubenhernandez',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <NextIntlClientProvider messages={messages}>
            <ParticlesBackground />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
