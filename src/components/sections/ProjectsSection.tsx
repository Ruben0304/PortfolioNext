"use client";
import React, { useEffect } from "react";
import { useTranslations } from 'next-intl';
import { PinContainer, PinCard } from "@/components/ui/3d-pin";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Project {
  key: string;
  url: string;
  image: string;
  tags?: string[];
  colorTheme?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan';
}

const projects: Project[] = [
  {
    key: "suncar",
    url: "https://suncarsrl.com",
    image: "/img/projects/suncar.png",
    tags: ["Next.js"],
    colorTheme: "blue"
  },
  {
    key: "playup",
    url: "https://playup-five.vercel.app/",
    image: "/img/projects/playup.png",
    tags: ["Vue.js"],
    colorTheme: "purple"
  },
  {
    key: "moneyapp",
    url: "https://money-app.up.railway.app",
    image: "/img/projects/money.png",
    tags: ["Next.js"],
    colorTheme: "green"
  },
  {
    key: "solarsurvivor",
    url: "https://game.suncarsrl.com",
    image: "/img/projects/solar-survivor.png",
    tags: ["Kotlin Multiplatform"],
    colorTheme: "orange"
  }
];

export function ProjectsSection() {
  const t = useTranslations('Projects');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Mobile layout - stacked */}
        <div className="lg:hidden">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4" data-aos="fade-up" data-aos-delay="100">
              {t('title').includes('Proyectos') ? '✨ Mi Trabajo' : '✨ My Work'}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-aos="fade-up" data-aos-delay="200">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="400">
              {["React", "Next.js", "React Native", "TypeScript", "AI", "Mobile"].map((tech, index) => (
                <span key={tech} className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground font-medium" data-aos="zoom-in" data-aos-delay={500 + index * 100}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.key} 
                className="flex items-center justify-center" 
                data-aos="fade-up" 
                data-aos-delay={200 + index * 150}
              >
                <PinContainer
                  title={project.url}
                  href={project.url}
                  containerClassName="w-full max-w-sm"
                >
                  <PinCard
                    title={t(`${project.key}.title`)}
                    description={t(`${project.key}.description`)}
                    image={project.image}
                    imageAlt={t(`${project.key}.title`)}
                    tags={project.tags}
                    colorTheme={project.colorTheme}
                  />
                </PinContainer>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
            <p className="text-muted-foreground mb-6">
              {t('title').includes('Proyectos') 
                ? 'Cada proyecto representa horas de dedicación, creatividad y solución de problemas complejos.' 
                : 'Each project represents hours of dedication, creativity, and solving complex problems.'}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Desktop layout - enhanced positioning */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
          {/* Text section - left side */}
          <div className="col-span-5">
            <div className="sticky top-32 space-y-8">
              <div data-aos="fade-right">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6" data-aos="fade-right" data-aos-delay="100">
                  {t('title').includes('Proyectos') ? '✨ Mi Trabajo' : '✨ My Work'}
                </div>
                <h2 className="text-5xl xl:text-7xl font-bold text-foreground mb-8 leading-tight" data-aos="fade-right" data-aos-delay="200">
                  {t('title')}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8" data-aos="fade-right" data-aos-delay="300">
                  {t('subtitle')}
                </p>
              </div>
              
              <div className="space-y-6" data-aos="fade-right" data-aos-delay="400">
                <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-3">
                    {t('title').includes('Proyectos') ? '🎯 Enfoque' : '🎯 Focus'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('title').includes('Proyectos')
                      ? 'Desarrollo soluciones escalables que combinan diseño intuitivo con tecnología de vanguardia.'
                      : 'I develop scalable solutions that combine intuitive design with cutting-edge technology.'}
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-3">
                    {t('title').includes('Proyectos') ? '💡 Innovación' : '💡 Innovation'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('title').includes('Proyectos')
                      ? 'Cada proyecto incorpora las últimas tendencias tecnológicas y mejores prácticas del desarrollo moderno.'
                      : 'Each project incorporates the latest technological trends and best practices in modern development.'}
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-3">
                    {t('title').includes('Proyectos') ? '🚀 Resultados' : '🚀 Results'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('title').includes('Proyectos')
                      ? 'Muchos proyectos exitosos con impacto real en diferentes industrias y miles de usuarios activos.'
                      : 'Many successful projects with real impact across different industries and thousands of active users.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projects section - right side with enhanced grid */}
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-8 auto-rows-max">
              {projects.map((project, index) => {
                const isOdd = index % 2 === 1;
                return (
                  <div 
                    key={project.key} 
                    className={`flex items-center justify-center ${isOdd ? 'mt-12' : ''}`}
                    data-aos="fade-up" 
                    data-aos-delay={200 + index * 150}
                  >
                    <PinContainer
                      title={project.url}
                      href={project.url}
                      containerClassName="w-full max-w-sm"
                    >
                      <PinCard
                        title={t(`${project.key}.title`)}
                        description={t(`${project.key}.description`)}
                        image={project.image}
                        imageAlt={t(`${project.key}.title`)}
                        tags={project.tags}
                        colorTheme={project.colorTheme}
                      />
                    </PinContainer>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="800">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-foreground">
                  {t('title').includes('Proyectos') 
                    ? 'Siempre trabajando en algo nuevo' 
                    : 'Always working on something new'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}