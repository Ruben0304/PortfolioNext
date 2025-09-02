'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import {Safari} from "@/components/magicui/safari";
import {Tabs} from "@/components/ui/tabs";

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
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-green-300/30 to-emerald-400/30">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "Next.js",
            value: "services",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-gray-400/20 to-slate-500/30">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "MongoDB",
            value: "mongodb",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-green-200/30 to-teal-300/40">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "Kotlin",
            value: "content",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-purple-300/30 to-indigo-400/40">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "Swift",
            value: "swift",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-orange-200/40 to-red-300/40">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "Railway",
            value: "railway",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-gray-300/25 to-slate-400/35">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "Figma",
            value: "figma",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-pink-200/40 to-violet-300/40">
                    <ProjectImage/>
                </div>
            ),
        },
        {
            title: "Claude Code",
            value: "claude",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-amber-200/35 to-orange-300/40">
                    <ProjectImage/>
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
            case 'swift': return t('swift.description');
            case 'railway': return t('railway.description');
            case 'figma': return t('figma.description');
            case 'claude': return t('claude.description');
            default: return t('fastapi.description');
        }
    };
    return (
        <>
            <section
                className="h-[30rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
                <div className="mb-8 text-center w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>
                <Tabs tabs={tabs} onTabChange={handleTabChange}/>
            </section>
            
            <section className="max-w-3xl mx-auto w-full px-6 mb-20 text-center">
                <div className="p-6 rounded-xl bg-card border border-border">
                    <p className="text-muted-foreground">
                        {getActiveDescription()}
                    </p>
                </div>
            </section>
        </>
    );
}


const ProjectImage = () => {
    return (
        <Image
            src="/img/figma.png"
            alt="Project preview"
            width={1000}
            height={1000}
            className="object-cover object-center h-[80%] md:h-[95%] absolute inset-0 w-full rounded-2xl opacity-90"
        />
    );
};
