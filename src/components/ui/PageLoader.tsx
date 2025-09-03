'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { useTranslations } from 'next-intl';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [lottieLoaded, setLottieLoaded] = useState(false);
  const t = useTranslations('Loader');

  useEffect(() => {
    const handleLoad = () => {
      // Una vez que el sitio esté cargado, iniciar la salida del loader
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // Solo comenzar a escuchar cuando el Lottie esté cargado
    if (lottieLoaded) {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, [lottieLoaded]);

  // Fallback para mostrar el texto si el Lottie toma mucho tiempo
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!lottieLoaded) {
        console.log('Lottie fallback: showing text anyway');
        setLottieLoaded(true);
      }
    }, 1000); // 1 segundo de fallback

    return () => clearTimeout(fallbackTimer);
  }, [lottieLoaded]);

  if (!isLoading) return null;

  const SimpleLoader = ({ text = "Cargando..." }: { text?: string }) => {
    return (
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium text-center">
        {text}
      </p>
    );
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
      isExiting ? 'page-loader-exit' : ''
    }`}>
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Lottie Animation */}
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64">
          <DotLottieReact
            src="/lottie/loader.lottie"
            loop
            autoplay
            speed={1.5}
            onLoad={() => {
              console.log('Lottie loaded successfully');
              setLottieLoaded(true);
            }}
            onError={(error) => {
              console.error('Lottie error:', error);
            }}
          />
        </div>
        
        {/* Simple Text - Solo aparece cuando Lottie está cargado */}
        {lottieLoaded && <SimpleLoader text={t('loading')} />}
      </div>
    </div>
  );
}