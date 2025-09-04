'use client';

import { useTranslations } from 'next-intl';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import {Safari} from "@/components/magicui/safari";
import { motion } from 'motion/react';
import { DotPattern } from "@/components/magicui/dot-pattern";

export function ResponsiveSection() {
  const t = useTranslations('ResponsiveSection');

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <DotPattern 
        className="opacity-20 text-muted-foreground/30" 
        width={30} 
        height={30} 
        cx={1} 
        cy={1} 
        cr={1}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('description')}
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <motion.div 
              className="w-full max-w-[220px] flex-shrink-0"
              initial={{ opacity: 0, x: -50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Iphone15Pro
                className="w-full h-auto drop-shadow-2xl"
                src="/img/responsive/mobile.jpg"
              />
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-sm font-medium text-muted-foreground">Mobile First</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-primary/70 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-primary/50 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full max-w-[700px] flex-shrink-0"
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
            >
              <Safari
                url="ruben-portfolio.dev"
                className="w-full h-auto drop-shadow-2xl"
                imageSrc="/img/responsive/desktop.jpg"
              />
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-sm font-medium text-muted-foreground">Desktop Experience</p>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="max-w-2xl mx-auto p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <p className="text-muted-foreground text-base md:text-lg">
                {t('footer')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}