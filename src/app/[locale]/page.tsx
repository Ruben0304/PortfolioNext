import { useTranslations } from 'next-intl';

import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { FloatingDock } from '@/components/ui/floating-dock';

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

export default function Home() {
  const t = useTranslations('HomePage');

  const dockItems = [
    {
      title: t('title').includes('Rubén') ? 'Inicio' : 'Home',
      icon: <IconHome className="h-full w-full" />,
      href: '/'
    },
    {
      title: t('title').includes('Rubén') ? 'Sobre mí' : 'About',
      icon: <IconUser className="h-full w-full" />,
      href: '/about'
    },
    {
      title: t('title').includes('Rubén') ? 'Proyectos' : 'Projects',
      icon: <IconBriefcase className="h-full w-full" />,
      href: '/projects'
    },
    {
      title: t('title').includes('Rubén') ? 'Habilidades' : 'Skills',
      icon: <IconCode className="h-full w-full" />,
      href: '/skills'
    },
    {
      title: t('title').includes('Rubén') ? 'Contacto' : 'Contact',
      icon: <IconMail className="h-full w-full" />,
      href: '/contact'
    },
    {
      title: t('title').includes('Rubén') ? 'Tema' : 'Theme',
      icon: <AnimatedThemeToggler className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <main>
      <MacbookScrollDemo/>
      

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 rounded-lg bg-muted">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t('title').includes('Rubén') ? 'Desarrollo Mobile' : 'Mobile Development'}
                </h3>
                <p className="text-muted-foreground">
                  {t('title').includes('Rubén')
                    ? 'Aplicaciones nativas y cross-platform con React Native, Flutter y desarrollo nativo.'
                    : 'Native and cross-platform applications with React Native, Flutter and native development.'
                  }
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t('title').includes('Rubén') ? 'Desarrollo Web' : 'Web Development'}
                </h3>
                <p className="text-muted-foreground">
                  {t('title').includes('Rubén')
                    ? 'Aplicaciones web modernas con Next.js, React y tecnologías frontend avanzadas.'
                    : 'Modern web applications with Next.js, React and advanced frontend technologies.'
                  }
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t('title').includes('Rubén') ? 'Inteligencia Artificial' : 'Artificial Intelligence'}
                </h3>
                <p className="text-muted-foreground">
                  {t('title').includes('Rubén')
                    ? 'Integración de IA y machine learning en aplicaciones y sistemas inteligentes.'
                    : 'AI and machine learning integration in applications and intelligent systems.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Terminal Section */}
        <TerminalSection />
        
        {/* Projects Section */}
        <ProjectsSection />
      </main>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={dockItems}
          desktopClassName="bg-background/80 backdrop-blur-md border border-border"
          mobileClassName="bg-background/80 backdrop-blur-md border border-border"
        />
      </div>
    </div>
  );
}
