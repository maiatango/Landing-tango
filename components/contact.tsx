'use client';

import { type Language, translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export function Contact({ lang }: ContactProps) {
  const t = translations[lang];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.contact.description}
          </p>
        </div>
        
        {/* Google Form Placeholder */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="aspect-[4/3] bg-muted border border-border flex items-center justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdExampleFormId/viewform?embedded=true"
              width="100%"
              height="100%"
              className="border-0"
              title="Signup Form"
            >
              Loading form...
            </iframe>
          </div>
        </div>
        
        {/* WhatsApp CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">{t.contact.whatsapp}</p>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="px-8 bg-transparent"
          >
            <a 
              href="https://wa.me/5491154925461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
