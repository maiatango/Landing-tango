'use client';

import { type Language, translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  lang: Language;
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chica_portada.png"
          alt="Tango en Buenos Aires"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight text-balance">
          {t.hero.headline}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t.hero.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            asChild
            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium"
          >
            <a href="#contact">{t.hero.cta}</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-base font-medium bg-transparent"
          >
            <a 
              href="https://wa.me/5491154925461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.whatsapp}
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator - Down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-8 h-8 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}
