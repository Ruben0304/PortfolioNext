'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState } from 'react';
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function LanguageSwitcher() {
  const t = useTranslations('Language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <RainbowButton
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <span className="md:hidden">{locale === 'es' ? '🇪🇸' : '🇺🇸'}</span>
        <span>{t('selectLanguage')}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </RainbowButton>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => handleLocaleChange('es')}
              className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-muted ${
                locale === 'es' ? 'bg-primary/10 text-primary' : 'text-card-foreground'
              }`}
            >
              <span>🇪🇸</span>
              <span>{t('spanish')}</span>
              {locale === 'es' && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              onClick={() => handleLocaleChange('en')}
              className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-muted ${
                locale === 'en' ? 'bg-primary/10 text-primary' : 'text-card-foreground'
              }`}
            >
              <span>🇺🇸</span>
              <span>{t('english')}</span>
              {locale === 'en' && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}