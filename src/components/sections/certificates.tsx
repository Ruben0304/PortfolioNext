import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { PlatziIcon } from "@/components/ui/platzi-icon";
import { ClaudeIcon } from "@/components/ui/claude-icon";
import { SkilljarIcon } from "@/components/ui/skilljar-icon";
import { AnthropicIcon } from "@/components/ui/anthropic-icon";
import { IconExternalLink, IconFileTypePdf } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

const certificates = [
  {
    title: "Claude Code in Action",
    provider: "Anthropic Education",
    description: "AI coding assistant integration and workflow optimization",
    providerType: "anthropic",
    pdfLink: "/pdf/diploma-anthropic-claude-code.pdf",
    verificationLink: "http://verify.skilljar.com/c/e9szjcj4daek",
    hasPdf: true,
  },
  {
    title: "Introducción a Laravel 9",
    provider: "Platzi",
    description: "Modern PHP framework development fundamentals",
    providerType: "platzi",
    pdfLink: "/pdf/diploma-laravel.pdf",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/curso/3039-laravel/diploma/detalle/",
    hasPdf: true,
  },
  {
    title: "English Learning Path",
    provider: "Platzi",
    description: "Complete English language proficiency certification",
    providerType: "platzi",
    pdfLink: "/pdf/diploma-idioma-ingles.pdf",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/ruta/13-idioma-ingles/diploma/detalle/",
    hasPdf: true,
  },
  {
    title: "WordPress Plugin Creation",
    provider: "Platzi",
    description: "Custom WordPress plugin development and architecture",
    providerType: "platzi",
    pdfLink: "/pdf/diploma-wordpress.pdf",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/curso/2537-wordpress/diploma/detalle/",
    hasPdf: true,
  },
  {
    title: "Análisis Técnico para Inversiones",
    provider: "Platzi",
    description: "Intermediate investment course for stock market risk analysis",
    providerType: "platzi",
    pdfLink: "/pdf/diploma-analisis-tecnico.pdf",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/curso/2723-course/diploma/detalle/",
    hasPdf: true,
  },
  {
    title: "HTML y CSS Práctico",
    provider: "Platzi",
    description: "Practical HTML and CSS web development fundamentals",
    providerType: "platzi",
    pdfLink: "",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/curso/1758-html-practico/diploma/detalle/",
    hasPdf: false,
  },
  {
    title: "Diseño en Modo Oscuro",
    provider: "Platzi",
    description: "Dark mode design principles and implementation",
    providerType: "platzi",
    pdfLink: "",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/curso/2441-diseno-modo-oscuro/diploma/detalle/",
    hasPdf: false,
  },
  {
    title: "Mobile First - Responsive Design",
    provider: "Platzi",
    description: "Mobile-first responsive web design methodology",
    providerType: "platzi",
    pdfLink: "",
    verificationLink: "https://platzi.com/p/ruben-hernandez-acevedo/curso/2030-mobile-first/diploma/detalle/",
    hasPdf: false,
  },
];

const firstRow = certificates.slice(0, Math.ceil(certificates.length / 2));
const secondRow = certificates.slice(Math.ceil(certificates.length / 2));

const CertificateCard = ({
  title,
  provider,
  description,
  providerType,
  pdfLink,
  verificationLink,
  hasPdf,
}: {
  title: string;
  provider: string;
  description: string;
  providerType: string;
  pdfLink: string;
  verificationLink: string;
  hasPdf: boolean;
}) => {
  const t = useTranslations('Certificates');
  
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        {providerType === "platzi" ? (
          <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
            <PlatziIcon className="text-white" size={20} />
          </div>
        ) : providerType === "claude" ? (
          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full">
            <ClaudeIcon size={20} />
          </div>
        ) : providerType === "anthropic" ? (
          <div className="flex items-center justify-center w-10 h-10 bg-slate-800 dark:bg-slate-600 rounded-full">
            <AnthropicIcon className="text-white" size={20} />
          </div>
        ) : (
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
            <SkilljarIcon size={20} />
          </div>
        )}
        <div className="flex flex-col flex-1">
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground">{provider}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex gap-2">
        {hasPdf ? (
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs rounded-md hover:bg-primary/90 transition-colors"
          >
            <IconFileTypePdf size={12} />
            {t('viewPdf')}
          </a>
        ) : (
          <button
            onClick={() => alert(t('pdfNotAvailable'))}
            className="flex items-center gap-1 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-md hover:bg-muted/80 transition-colors cursor-not-allowed"
            disabled
          >
            <IconFileTypePdf size={12} />
            {t('viewPdf')}
          </button>
        )}
        <a
          href={verificationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs rounded-md hover:bg-secondary/90 transition-colors"
        >
          <IconExternalLink size={12} />
          {t('verify')}
        </a>
      </div>
    </figure>
  );
};

export function CertificatesSection() {
  const t = useTranslations('Certificates');
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((cert, index) => (
              <CertificateCard key={`first-${index}`} {...cert} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((cert, index) => (
              <CertificateCard key={`second-${index}`} {...cert} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}