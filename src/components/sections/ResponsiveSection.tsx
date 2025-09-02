'use client';

import { useTranslations } from 'next-intl';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import {Safari} from "@/components/magicui/safari";

export function ResponsiveSection() {
  const t = useTranslations('ResponsiveSection');

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="w-full max-w-[250px] flex-shrink-0">
              <Iphone15Pro
                className="w-full h-auto"
                src="/img/suncar.png"
              />
            </div>
            <div className="w-full max-w-[600px] flex-shrink-0">
              <Safari
                url="ruben-portfolio.dev"
                className="w-full h-auto"
                imageSrc="/img/code.png"
              />
            </div>
          </div>
          
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t('footer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}