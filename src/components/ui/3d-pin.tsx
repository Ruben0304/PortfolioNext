"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";


export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-0 top-1/2 flex justify-start items-start rounded-3xl shadow-none bg-transparent border-none transition-all duration-700 overflow-visible"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};

export interface PinCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  className?: string;
  tags?: string[];
  colorTheme?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan';
}

export const PinCard = ({
  title,
  description,
  image,
  imageAlt,
  className,
  tags = [],
  colorTheme = 'blue'
}: PinCardProps) => {
  const themeStyles = {
    blue: {
      shadowGradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/30',
      border: 'border-blue-500/20',
      shadow: 'shadow-blue-500/15 group-hover/pin:shadow-blue-500/30',
      glowShadow: 'group-hover/pin:shadow-[0_0_40px_rgba(59,130,246,0.15)]',
      tagBg: 'bg-blue-500/90',
      accentColor: 'bg-blue-500',
      hoverBorder: 'group-hover/pin:border-blue-400/40'
    },
    purple: {
      shadowGradient: 'from-purple-500/20 via-pink-500/20 to-purple-600/30',
      border: 'border-purple-500/20',
      shadow: 'shadow-purple-500/15 group-hover/pin:shadow-purple-500/30',
      glowShadow: 'group-hover/pin:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
      tagBg: 'bg-purple-500/90',
      accentColor: 'bg-purple-500',
      hoverBorder: 'group-hover/pin:border-purple-400/40'
    },
    green: {
      shadowGradient: 'from-green-500/20 via-emerald-500/20 to-green-600/30',
      border: 'border-green-500/20',
      shadow: 'shadow-green-500/15 group-hover/pin:shadow-green-500/30',
      glowShadow: 'group-hover/pin:shadow-[0_0_40px_rgba(16,185,129,0.15)]',
      tagBg: 'bg-green-500/90',
      accentColor: 'bg-green-500',
      hoverBorder: 'group-hover/pin:border-green-400/40'
    },
    orange: {
      shadowGradient: 'from-orange-500/20 via-red-500/20 to-orange-600/30',
      border: 'border-orange-500/20',
      shadow: 'shadow-orange-500/15 group-hover/pin:shadow-orange-500/30',
      glowShadow: 'group-hover/pin:shadow-[0_0_40px_rgba(249,115,22,0.15)]',
      tagBg: 'bg-orange-500/90',
      accentColor: 'bg-orange-500',
      hoverBorder: 'group-hover/pin:border-orange-400/40'
    },
    pink: {
      shadowGradient: 'from-pink-500/20 via-rose-500/20 to-pink-600/30',
      border: 'border-pink-500/20',
      shadow: 'shadow-pink-500/15 group-hover/pin:shadow-pink-500/30',
      glowShadow: 'group-hover/pin:shadow-[0_0_40px_rgba(236,72,153,0.15)]',
      tagBg: 'bg-pink-500/90',
      accentColor: 'bg-pink-500',
      hoverBorder: 'group-hover/pin:border-pink-400/40'
    },
    cyan: {
      shadowGradient: 'from-cyan-500/20 via-teal-500/20 to-cyan-600/30',
      border: 'border-cyan-500/20',
      shadow: 'shadow-cyan-500/15 group-hover/pin:shadow-cyan-500/30',
      glowShadow: 'group-hover/pin:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
      tagBg: 'bg-cyan-500/90',
      accentColor: 'bg-cyan-500',
      hoverBorder: 'group-hover/pin:border-cyan-400/40'
    }
  };

  const theme = themeStyles[colorTheme];

  return (
    <div className={cn(
      "relative w-[20rem] h-[24rem] rounded-3xl p-6 flex flex-col",
      "bg-card/95 backdrop-blur-xl border-2 transition-all duration-700",
      `${theme.border} ${theme.hoverBorder}`,
      `shadow-2xl ${theme.shadow} ${theme.glowShadow}`,
      "group-hover/pin:scale-[1.02]",
      className
    )}>
      
      {/* Subtle colored glow effect - only visible on hover */}
      <div className={cn(
        "absolute -inset-1 rounded-3xl opacity-0 group-hover/pin:opacity-30 transition-opacity duration-500 blur-xl -z-10",
        `bg-gradient-to-r ${theme.shadowGradient}`
      )} />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 group/image">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:brightness-110"
          />
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-all duration-500",
            `bg-gradient-to-t from-${colorTheme}-900/40 via-transparent to-transparent`
          )} />
          
          {/* Tags Overlay */}
          {tags.length > 0 && (
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    "px-3 py-1 text-xs font-semibold text-white rounded-full backdrop-blur-md border border-white/20",
                    theme.tagBg
                  )}
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="px-3 py-1 text-xs font-semibold bg-black/60 text-white rounded-full backdrop-blur-md border border-white/20">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Bottom accent */}
          <div className="mt-6 pt-4 border-t border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "w-2.5 h-2.5 rounded-full animate-pulse",
                  theme.accentColor
                )} />
                <span className="text-xs text-muted-foreground font-medium tracking-wide">
                  Ver proyecto
                </span>
              </div>
              <motion.div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer",
                  `${theme.border} hover:${theme.border.replace('/30', '/60')}`
                )}
                whileHover={{ 
                  rotate: 90, 
                  scale: 1.1,
                  borderColor: theme.border.includes('blue') ? '#3b82f6' : 
                              theme.border.includes('purple') ? '#a855f7' :
                              theme.border.includes('green') ? '#10b981' :
                              theme.border.includes('orange') ? '#f97316' :
                              theme.border.includes('pink') ? '#ec4899' : '#06b6d4'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={cn(
                    "transition-colors duration-300",
                    colorTheme === 'blue' ? 'text-blue-500' :
                    colorTheme === 'purple' ? 'text-purple-500' :
                    colorTheme === 'green' ? 'text-green-500' :
                    colorTheme === 'orange' ? 'text-orange-500' :
                    colorTheme === 'pink' ? 'text-pink-500' : 'text-cyan-500'
                  )}
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
