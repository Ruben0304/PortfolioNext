"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { useTranslations } from "next-intl";
import { useState } from "react";

// Simple Icons CDN component with tooltip
interface SimpleIconProps {
  name: string;
  displayName: string;
  size?: number;
  color?: string;
  className?: string;
}

function SimpleIcon({ name, displayName, size = 50, color, className = "" }: SimpleIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div 
      className="relative inline-block cursor-pointer group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      <img
        src={color ? `https://cdn.simpleicons.org/${name}/${color}` : `https://cdn.simpleicons.org/${name}`}
        alt={displayName}
        width={size}
        height={size}
        className={`transition-all duration-200 hover:scale-110 ${className}`}
      />
      <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card border border-border px-3 py-2 rounded-md text-sm font-medium text-card-foreground whitespace-nowrap z-50 shadow-lg transition-all duration-200 ${showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {displayName}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-card"></div>
      </div>
    </div>
  );
}

export function TechnologiesSection() {
  const t = useTranslations('Technologies');

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text content */}
          <div className="text-center lg:text-left mb-16 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('description')}
            </p>
            
            {/* Tech stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">{t('techCount')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">{t('yearsExp')}</div>
              </div>
            </div>
            
            {/* Additional info */}
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-card-foreground leading-relaxed">
                  {t('additionalInfo')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Orbiting circles */}
          <div className="flex justify-center">
            <div className="relative flex h-[700px] w-full max-w-[700px] flex-col items-center justify-center overflow-hidden">
              {/* Meta-frameworks & Design circle */}
              <OrbitingCircles iconSize={50} radius={120} speed={1.5}>
                <SimpleIcon name="nextdotjs" displayName="Next.js" size={50} color="FFFFFF" />
                <SimpleIcon name="figma" displayName="Figma" size={50} />
              </OrbitingCircles>
              
              {/* Frameworks circle */}
              <OrbitingCircles iconSize={45} radius={200} reverse speed={2}>
                <SimpleIcon name="react" displayName="React" size={45} />
                <SimpleIcon name="vuedotjs" displayName="Vue.js" size={45} />
                <SimpleIcon name="laravel" displayName="Laravel" size={45} />
                <SimpleIcon name="fastapi" displayName="FastAPI" size={45} />
                <SimpleIcon name="tailwindcss" displayName="Tailwind CSS" size={45} />
              </OrbitingCircles>
              
              {/* Languages & Databases circle */}
              <OrbitingCircles iconSize={40} radius={280} speed={1}>
                <SimpleIcon name="python" displayName="Python" size={40} />
                <SimpleIcon name="javascript" displayName="JavaScript" size={40} />
                <SimpleIcon name="typescript" displayName="TypeScript" size={40} />
                <SimpleIcon name="kotlin" displayName="Kotlin" size={40} />
                <SimpleIcon name="swift" displayName="Swift" size={40} />
                <SimpleIcon name="mongodb" displayName="MongoDB" size={40} />
                <SimpleIcon name="postgresql" displayName="PostgreSQL" size={40} />
              </OrbitingCircles>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icons.code className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {t('centerText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icons.frontend className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {t('frontend.title')}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t('frontend.description')}
            </p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icons.backend className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {t('backend.title')}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t('backend.description')}
            </p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg border border-border md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icons.mobile className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {t('mobile.title')}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t('mobile.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Icons = {
  code: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  frontend: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M3 8H21" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6.5" cy="6" r="0.5" fill="currentColor"/>
      <circle cx="8.5" cy="6" r="0.5" fill="currentColor"/>
      <circle cx="10.5" cy="6" r="0.5" fill="currentColor"/>
    </svg>
  ),
  
  backend: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 21L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="6" cy="10" r="1" fill="currentColor"/>
      <circle cx="10" cy="10" r="1" fill="currentColor"/>
    </svg>
  ),
  
  mobile: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};