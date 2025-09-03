'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const t = useTranslations('Loader');

  useEffect(() => {
    const handleLoad = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
      isExiting ? 'page-loader-exit' : ''
    }`}>
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Elegant Tailwind Loader */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary"></div>
          {/* Inner ring */}
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-muted-foreground/20 rounded-full border-t-primary/60 animate-reverse"></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        
        {/* Loading Text */}
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {t('loading')}
        </motion.p>
      </div>
    </div>
  );
}