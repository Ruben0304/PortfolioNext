import React, { useState } from "react";
import {MacbookScroll} from "@/components/ui/macbook-scroll";
import {useTranslations} from "next-intl";
import {Download, MessageCircle, Send, Instagram, Mail} from "lucide-react";
import {AnimatedShinyText} from "@/components/magicui/animated-shiny-text";
import {DotPattern} from "@/components/magicui/dot-pattern";
import {AlertDialog} from "@/components/ui/alert-dialog";
import Image from "next/image";

export function HeroSection() {
    const t = useTranslations("HomePage");
    const tActions = useTranslations("Actions");
    const tDialog = useTranslations("CVDialog");
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className="w-full overflow-hidden relative">
            {/* Subtle dot pattern background */}
            <DotPattern 
                className="opacity-20 text-muted-foreground/30" 
                width={30} 
                height={30} 
                cx={1} 
                cy={1} 
                cr={1}
            />

            <div className="[transform:scale(1.5)] sm:[transform:scale(1)]  sm:mt-0 sm:pt-0">
                <MacbookScroll
                    title={
                        <div className="text-center relative z-10">
                        {/* Elegant Circular Avatar - positioned higher */}
                        <div className="absolute -top-60 sm:-top-52 left-1/2 transform -translate-x-1/2">
                            <div className="relative group">
                                {/* Outer glowing ring */}
                                <div className="absolute inset-0 w-48 sm:w-44 h-48 sm:h-44 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-1 animate-pulse">
                                    <div className="w-full h-full rounded-full bg-background"></div>
                                </div>
                                
                                {/* Main avatar container */}
                                <div className="relative w-48 sm:w-44 h-48 sm:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105 transition-all duration-300">
                                    {/* Avatar image */}
                                    <Image
                                        src="/img/profile.jpg"
                                        alt="Rubén Hernández"
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        priority
                                    />
                                    
                                    {/* Elegant overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    
                                    {/* Subtle inner glow */}
                                    <div className="absolute inset-0 rounded-full shadow-inner shadow-white/20"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-7xl sm:text-6xl md:text-7xl font-bold text-foreground mb-12 sm:mb-6">
                            {t("title")}
                        </div>

                        <div className="text-3xl sm:text-2xl md:text-3xl text-muted-foreground mb-16 sm:mb-12">
                            <AnimatedShinyText>
                                {t("subtitle")}
                            </AnimatedShinyText>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center mb-8 sm:mb-8 px-6 sm:px-0 max-w-lg sm:max-w-none mx-auto">
                            <button
                                onClick={() => setShowDialog(true)}
                                className="inline-flex items-center justify-center gap-3 sm:gap-2 px-8 sm:px-4 py-6 sm:py-2.5 bg-blue-600 text-white text-lg sm:text-sm font-medium rounded-xl sm:rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] min-h-[64px] sm:min-h-[40px]"
                            >
                                <Download className="w-6 h-6 sm:w-4 sm:h-4 flex-shrink-0"/>
                                <span className="whitespace-nowrap">{tActions("downloadCV")}</span>
                            </button>
                            <a
                                href="https://github.com/Ruben0304"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 sm:gap-2 px-8 sm:px-4 py-6 sm:py-2.5 bg-[#24292f] text-white text-lg sm:text-sm font-medium rounded-xl sm:rounded-lg hover:bg-[#1c2128] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] border border-[#30363d] min-h-[64px] sm:min-h-[40px]"
                            >
                                <img
                                    src="https://cdn.simpleicons.org/github/FFFFFF"
                                    alt="GitHub"
                                    className="w-6 h-6 sm:w-4 sm:h-4 flex-shrink-0 transition-all duration-200"
                                />
                                <span className="whitespace-nowrap">{tActions("viewGitHub")}</span>
                            </a>
                        </div>
                    </div>
                }
                badge={
                    <a href="https://github.com/Ruben0304">
                        <Badge className="h-10 w-10 -rotate-12 transform"/>
                    </a>
                }
                src={`/img/code.jpg`}
                showGradient={false}
            />
            </div>
            
            {/* Alert Dialog */}
            <AlertDialog
                isOpen={showDialog}
                onClose={() => setShowDialog(false)}
                title={tDialog("title")}
                description={tDialog("description")}
                actionText={tDialog("actionText")}
                onAction={() => setShowDialog(false)}
            />
        </div>
    );
}

// Peerlist logo
const Badge = ({className}: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                fill="#00AA45"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                fill="#219653"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
                fill="#24292E"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
                fill="white"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
                fill="#24292E"
            ></path>
        </svg>
    );
};
