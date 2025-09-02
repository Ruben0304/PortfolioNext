'use client';

import { useTranslations } from 'next-intl';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function TerminalSection() {
  const t = useTranslations('TerminalSection');

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('description')}
            </p>
          </div>
          
          <div className="flex justify-center">
            <div 
              className="bg-card rounded-xl border border-border p-8 md:p-12 shadow-2xl w-full max-w-4xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Terminal className="font-mono text-base md:text-lg leading-relaxed">
                <TypingAnimation>&gt; npm install professional-developer</TypingAnimation>
                
                <AnimatedSpan className="text-green-500">✔ Installing problem-solving-skills@latest</AnimatedSpan>
                <AnimatedSpan className="text-green-500">✔ Installing clean-code-principles@^2.0.0</AnimatedSpan>
                <AnimatedSpan className="text-green-500">✔ Installing team-collaboration@^1.5.2</AnimatedSpan>
                
                <TypingAnimation>&gt; npm install soft-skills</TypingAnimation>
                
                <AnimatedSpan className="text-green-500">✔ Installing effective-communication@^3.1.0</AnimatedSpan>
                <AnimatedSpan className="text-green-500">✔ Installing continuous-learning@^4.0.0</AnimatedSpan>
                <AnimatedSpan className="text-green-500">✔ Installing deadline-management@^1.9.5</AnimatedSpan>
                
                <TypingAnimation>&gt; npm run deploy-expertise</TypingAnimation>
                
                <AnimatedSpan className="text-blue-400">Building production-ready applications...</AnimatedSpan>
                <AnimatedSpan className="text-green-500">✔ Full-stack applications deployed successfully</AnimatedSpan>
                <AnimatedSpan className="text-green-500">✔ User experience optimized and tested</AnimatedSpan>
                
                <TypingAnimation className="text-green-500 font-semibold">
                  {`✔ ${t('success')}`}
                </TypingAnimation>
              </Terminal>
            </div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <p className="text-muted-foreground text-base md:text-lg">
              {t('footer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}