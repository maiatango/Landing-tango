'use client';

import { type Language, translations } from '@/lib/translations';

interface AboutProps {
  lang: Language;
}

export function About({ lang }: AboutProps) {
  const t = translations[lang];

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 tracking-tight">
            {t.about.title}
          </h2>
          <div className="space-y-6">
            {t.about.text1 && (
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                {t.about.text1}
              </p>
            )}
            {t.about.text2 && (
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                {t.about.text2}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
