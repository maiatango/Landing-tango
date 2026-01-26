'use client';

import { type Language, translations } from '@/lib/translations';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <span className="font-serif text-2xl font-semibold tracking-tight">
              Maia Tango
            </span>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4 text-background/80">{t.footer.contact}</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5491154925461" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +54 9 11 5492-5461
              </a>
              <a 
                href="mailto:maiatango22@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                maiatango22@gmail.com
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-medium mb-4 text-background/80">{t.footer.followUs}</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/maia.tango" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://tiktok.com/@maia.tango" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Maia Tango. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
