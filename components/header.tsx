'use client';

import { type Language, translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ lang, onLanguageChange }: HeaderProps) {
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : ''
    }`}>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className={`font-serif text-2xl font-semibold tracking-tight transition-colors ${
          scrolled ? 'text-foreground' : 'text-white'
        }`}>
          Maia Tango
        </a>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'es' 
                  ? 'bg-white text-black' 
                  : scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/60 hover:text-white'
              }`}
            >
              ES
            </button>
            <span className={scrolled ? 'text-muted-foreground' : 'text-white/60'}>/</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'en' 
                  ? 'bg-white text-black' 
                  : scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
          
          <Button asChild className={`hidden sm:inline-flex ${
            scrolled ? '' : 'bg-white text-black hover:bg-white/90'
          }`}>
            <a href="#contact">{t.nav.reservar}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
