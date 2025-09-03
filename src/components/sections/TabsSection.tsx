'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import {Safari} from "@/components/magicui/safari";
import {Tabs} from "@/components/ui/tabs";
import {DotPattern} from "@/components/magicui/dot-pattern";

export function TabsSection() {
    const t = useTranslations('TabsSection');
    const [activeTab, setActiveTab] = useState('product');
    
    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };
    const tabs = [
        {
            title: "FastAPI",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-900">
                    <p>FastAPI</p>
                    <ProjectImage imageName="fastapi.jpg" alt="FastAPI" />
                </div>
            ),
        },
        {
            title: "Next.js",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Next.js</p>
                    <ProjectImage imageName="next.jpg" alt="Next.js" />
                </div>
            ),
        },
        {
            title: "MongoDB",
            value: "mongodb",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-teal-700 to-teal-900">
                    <p>MongoDB</p>
                    <ProjectImage imageName="mongo.jpg" alt="MongoDB" />
                </div>
            ),
        },
        {
            title: "Kotlin",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700 to-indigo-900">
                    <p>Kotlin</p>
                    <ProjectImage imageName="kotlin.jpg" alt="Kotlin" />
                </div>
            ),
        },
        {
            title: "Railway",
            value: "railway",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
                    <p>Railway</p>
                    <ProjectImage imageName="railway.jpg" alt="Railway" />
                </div>
            ),
        },
        {
            title: "Figma",
            value: "figma",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-violet-700 to-violet-900">
                    <p>Figma</p>
                    <ProjectImage imageName="figma.jpg" alt="Figma" />
                </div>
            ),
        },
        {
            title: "Claude Code",
            value: "claude",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 lg:p-10 text-lg md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-br from-orange-700 to-orange-900">
                    <p>Claude Code</p>
                    <ProjectImage imageName="claude.jpg" alt="Claude Code" />
                </div>
            ),
        },
    ];

    const getActiveDescription = () => {
        switch (activeTab) {
            case 'product': return t('fastapi.description');
            case 'services': return t('nextjs.description');
            case 'mongodb': return t('mongodb.description');
            case 'content': return t('kotlin.description');
            case 'railway': return t('railway.description');
            case 'figma': return t('figma.description');
            case 'claude': return t('claude.description');
            default: return t('fastapi.description');
        }
    };
    return (
        <>
            <div className="w-full overflow-hidden relative">
                {/* Subtle dot pattern background - same as hero */}
                <DotPattern 
                    className="opacity-20 text-muted-foreground/30" 
                    width={30} 
                    height={30} 
                    cx={1} 
                    cy={1} 
                    cr={1}
                />
                <section
                    className="h-[45rem] md:h-[60rem] lg:h-[65rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-20 md:my-40 px-4 md:px-0">
                    <div className="mb-8 text-center w-full relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t('title')}
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {t('description')}
                        </p>
                    </div>
                    <div className="relative z-10 w-full flex-1">
                        <Tabs tabs={tabs} onTabChange={handleTabChange}/>
                    </div>
                </section>
            </div>
            
            <section className="max-w-3xl mx-auto w-full px-6 mb-20 mt-20 text-center">
                <div className="p-6 rounded-xl bg-card border border-border">
                    <p className="text-muted-foreground">
                        {getActiveDescription()}
                    </p>
                </div>
            </section>
        </>
    );
}


interface ProjectImageProps {
    imageName: string;
    alt: string;
}

const ProjectImage = ({ imageName, alt }: ProjectImageProps) => {
    return (
        <Image
            src={`/img/stack/${imageName}`}
            alt={alt}
            width={1000}
            height={1000}
            className="object-fill md:object-cover object-center h-[80%] md:h-[85%] lg:h-[90%] absolute -bottom-4 md:-bottom-8 lg:-bottom-10 inset-x-0 w-[85%] md:w-[88%] lg:w-[90%] rounded-xl mx-auto"
        />
    );
};
