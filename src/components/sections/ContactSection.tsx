"use client";

import { useTranslations } from 'next-intl';

export function ContactSection() {
    const t = useTranslations('ContactSection');

    const socialLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/5354830854', // Replace with actual phone number
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
            color: '#25D366'
        },
        {
            name: 'Telegram',
            url: 'https://t.me/Rubenhz', // Replace with actual telegram username
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/telegram.svg',
            color: '#0088cc'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/ruben._hz', // Replace with actual instagram username
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg',
            color: '#E4405F'
        },
        {
            name: 'Email',
            url: 'mailto:hernandzruben9@gmail.com', // Replace with actual email
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
            color: '#EA4335'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Ruben0304', // Replace with actual github username
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
            color: '#181717'
        }
    ];

    return (
        <section id="contact" className="relative py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center space-y-3 p-6 rounded-2xl 
                                     bg-card hover:bg-muted transition-all duration-300 ease-in-out
                                     hover:scale-105 hover:shadow-lg border border-border"
                            style={{
                                '--hover-color': link.color,
                            } as React.CSSProperties}
                        >
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center
                                              group-hover:bg-background transition-colors duration-300">
                                    <img
                                        src={link.icon}
                                        alt={`${link.name} icon`}
                                        className="w-8 h-8 transition-all duration-300 filter
                                                 dark:invert dark:group-hover:invert-0"
                                        style={{
                                            filter: 'brightness(0) saturate(100%) invert(50%)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = `brightness(0) saturate(100%) invert(${link.color.includes('#') ? '0' : '50'}%)`;
                                            e.currentTarget.style.setProperty('--tw-sepia', '1');
                                            e.currentTarget.style.setProperty('--tw-hue-rotate', '0deg');
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(50%)';
                                        }}
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br opacity-0 
                                              group-hover:opacity-20 transition-opacity duration-300"
                                     style={{
                                         background: `linear-gradient(135deg, ${link.color}20, ${link.color}40)`
                                     }}>
                                </div>
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground
                                           transition-colors duration-300">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-6 rounded-2xl bg-card border border-border">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                            {t('availableTitle')}
                        </h3>
                        <p className="text-muted-foreground">
                            {t('availableDescription')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}