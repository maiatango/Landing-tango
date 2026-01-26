'use client';

import { type Language, translations } from '@/lib/translations';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  lang: Language;
}

export function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const t = translations[lang];

  return (
    <a
      href="https://wa.me/5491154925461"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t.whatsappFloat}
    >
      <div className="relative">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {t.whatsappFloat}
        </span>
        
        {/* Button */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
}
