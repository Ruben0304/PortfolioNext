"use client";
import {useTranslations} from 'next-intl';
import {useEffect, useState, useRef} from 'react';

import {MacbookScroll} from '@/components/ui/macbook-scroll';
import {AnimatedThemeToggler} from "@/components/magicui/animated-theme-toggler";
import {FloatingDock} from '@/components/ui/floating-dock';

import {
    IconHome,
    IconUser,
    IconBriefcase,
    IconMail,
    IconCode
} from '@tabler/icons-react';
import {MacbookScrollDemo} from "@/components/ui/demoscroll";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import {ProjectsSection} from "@/components/sections/ProjectsSection";
import {TerminalSection} from "@/components/sections/TerminalSection";
import {TechnologiesSection} from "@/components/sections/TechnologiesSection";
import {ResponsiveSection} from "@/components/sections/ResponsiveSection";
import {TabsSection} from "@/components/sections/TabsSection";

export default function Home() {
    const t = useTranslations('HomePage');
    const [showDock, setShowDock] = useState(false);
    const projectsRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!projectsRef.current || !heroRef.current) return;

            const heroRect = heroRef.current.getBoundingClientRect();
            const projectsRect = projectsRef.current.getBoundingClientRect();

            // Show dock when projects section is visible or when we've scrolled past the hero
            const heroVisible = heroRect.bottom > 0;
            const projectsVisible = projectsRect.top < window.innerHeight;

            setShowDock(!heroVisible || projectsVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const dockItems = [
        {
            title: t('title').includes('Rubén') ? 'Inicio' : 'Home',
            icon: <IconHome className="h-full w-full"/>,
            href: '/'
        },
        {
            title: t('title').includes('Rubén') ? 'Sobre mí' : 'About',
            icon: <IconUser className="h-full w-full"/>,
            href: '/about'
        },
        {
            title: t('title').includes('Rubén') ? 'Proyectos' : 'Projects',
            icon: <IconBriefcase className="h-full w-full"/>,
            href: '/projects'
        },
        {
            title: t('title').includes('Rubén') ? 'Habilidades' : 'Skills',
            icon: <IconCode className="h-full w-full"/>,
            href: '/skills'
        },
        {
            title: t('title').includes('Rubén') ? 'Contacto' : 'Contact',
            icon: <IconMail className="h-full w-full"/>,
            href: '/contact'
        },
        {
            title: t('title').includes('Rubén') ? 'Tema' : 'Theme',
            icon: <AnimatedThemeToggler className="h-full w-full text-neutral-600 dark:text-neutral-300"/>,
            href: '#'
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <div className="absolute top-4 right-4 z-50">
                <LanguageSwitcher/>
            </div>
            <main className="relative z-10">
                <div ref={heroRef}>
                    <MacbookScrollDemo/>
                </div>


                {/* Terminal Section */}
                <TerminalSection/>

                {/* Projects Section */}
                <div ref={projectsRef}>
                    <ProjectsSection/>
                </div>

                {/* Technologies Section */}
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <TechnologiesSection/>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    {<TabsSection/>}
                </div>


                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    {<ResponsiveSection/>}
                </div>
            </main>

            {/* Floating Dock */}
            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
                showDock ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
                <FloatingDock
                    items={dockItems}
                    desktopClassName="bg-background/80 backdrop-blur-md border border-border"
                    mobileClassName="bg-background/80 backdrop-blur-md border border-border"
                />
            </div>
        </div>
    );
}
