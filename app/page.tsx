'use client';

import { useState } from 'react';
import { type Language } from '@/lib/translations';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Classes } from '@/components/classes';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  const [lang, setLang] = useState<Language>('es');

  return (
    <main>
      <Header lang={lang} onLanguageChange={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Classes lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </main>
  );
}
