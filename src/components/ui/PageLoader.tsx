'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { useTranslations } from 'next-intl';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const t = useTranslations('Loader');

  useEffect(() => {
    const handleLoad = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  const LoaderFour = ({ text = "Cargando..." }: { text?: string }) => {
    return (
      <div className="relative font-bold text-black [perspective:1000px] dark:text-white text-4xl sm:text-6xl md:text-8xl">
        <motion.span
          animate={{
            skew: [0, -40, 0],
            scaleX: [1, 2, 1],
          }}
          transition={{
            duration: 0.05,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="relative z-20 inline-block"
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 text-[#00e571]/50 blur-[0.5px] dark:text-[#00e571]"
          animate={{
            x: [-2, 4, -3, 1.5, -2],
            y: [-2, 4, -3, 1.5, -2],
            opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 text-[#8b00ff]/50 dark:text-[#8b00ff]"
          animate={{
            x: [0, 1, -1.5, 1.5, -1, 0],
            y: [0, -1, 1.5, -0.5, 0],
            opacity: [0.4, 0.8, 0.3, 0.9, 0.4],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            times: [0, 0.3, 0.6, 0.8, 1],
          }}
        >
          {text}
        </motion.span>
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
      isExiting ? 'page-loader-exit' : ''
    }`}>
      {/* Dot pattern background - same as HeroSection */}
      <DotPattern 
        className="opacity-20 text-muted-foreground/30" 
        width={30} 
        height={30} 
        cx={1} 
        cy={1} 
        cr={1}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Lottie Animation */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <DotLottieReact
            src="/loader.lottie"
            loop
            autoplay
          />
        </div>
        
        {/* Animated Text */}
        <LoaderFour text={t('loading')} />
      </div>
    </div>
  );
}