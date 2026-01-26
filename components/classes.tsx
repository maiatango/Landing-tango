'use client';

import { type Language, translations } from '@/lib/translations';
import { Users, Heart, MapPin, Sparkles } from 'lucide-react';

interface ClassesProps {
  lang: Language;
}

const icons = [Sparkles, Users, Heart, MapPin];

export function Classes({ lang }: ClassesProps) {
  const t = translations[lang];

  return (
    <section className="relative py-24 sm:py-32 bg-foreground overflow-hidden">
      {/* Tango-style decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-background/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 border border-background/30 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-background/20 rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-background mb-16 tracking-tight text-center">
          {t.classes.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.classes.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group bg-background/10 backdrop-blur-sm p-8 border border-background/20 hover:bg-background/15 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-background/30 group-hover:border-background/50 transition-colors">
                  <Icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-serif text-xl font-medium text-background mb-3">
                  {item.title}
                </h3>
                <p className="text-background/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
