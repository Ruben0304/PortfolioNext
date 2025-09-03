"use client";

import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { motion } from "motion/react";

interface ThemeFABProps {
  className?: string;
  show?: boolean;
}

export const ThemeFAB = ({ className, show = true }: ThemeFABProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: show ? 1 : 0, 
        scale: show ? 1 : 0.8,
        y: show ? 0 : 20
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg md:hidden",
        "hover:shadow-xl transition-shadow duration-200",
        className
      )}
    >
      <AnimatedThemeToggler className="h-6 w-6 text-foreground" />
    </motion.div>
  );
};