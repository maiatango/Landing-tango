export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      reservar: 'Reservar clase',
    },
    hero: {
      headline: 'Clases de Tango en Buenos Aires',
      subheadline: 'Conectá con el tango desde el primer paso. Clases para todos los niveles.',
      cta: 'Inscribirme a las clases',
      whatsapp: 'Quiero más info',
    },
    about: {
      title: 'El Arte del Tango',
      text1: 'El Tango no es una danza más... es un vínculo cercano que entablamos con un otro, gracias a una escucha profunda que entrenamos',
      text2: '',
    },
    classes: {
      title: 'Nuestras Clases',
      items: [
        {
          title: 'Clases para todos los niveles.',
          description: 'Tanto si quieres tener un primer acercamiento al Tango, como sacarte dudas, ó simplemente profundizar en algo que te interese',
        },
        {
          title: 'Grupos reducidos',
          description: 'Máximo 2 parejas. Para atender específicamente las necesidades de cada persona',
        },
        {
          title: 'Ambiente relajado',
          description: 'Aprendé en un ambiente tranquilo y acogedor',
        },
        {
          title: 'Clases en Buenos Aires',
          description: 'Ubicación céntrica y accesible.',
        },
      ],
    },
    contact: {
      title: 'Inscribite a las clases',
      description: 'Completá el formulario y te contactamos para coordinar tu primera clase.',
      whatsapp: 'O escribinos por WhatsApp',
    },
    footer: {
      contact: 'Contacto',
      followUs: 'Seguinos',
      rights: 'Todos los derechos reservados.',
    },
    whatsappFloat: 'Escribinos por WhatsApp',
  },
  en: {
    nav: {
      reservar: 'Book a class',
    },
    hero: {
      headline: 'Tango Classes in Buenos Aires',
      subheadline: 'Connect with tango from the first step. Classes for all levels.',
      cta: 'Sign up for classes',
      whatsapp: 'I want more info',
    },
    about: {
      title: 'The Art of Tango',
      text1: 'Tango is not just another dance... it\'s a close bond we build with another, thanks to a deep listening we train.',
      text2: '',
    },
    classes: {
      title: 'Our Classes',
      items: [
        {
          title: 'Classes for all levels.',
          description: 'Whether you want a first approach to Tango, to get your questions answered, or simply go deeper into something that interests you.',
        },
        {
          title: 'Small groups',
          description: 'Maximum 2 couples. To specifically address each person\'s needs.',
        },
        {
          title: 'Relaxed atmosphere',
          description: 'Learn in a calm and welcoming environment.',
        },
        {
          title: 'Classes in Buenos Aires',
          description: 'Central and accessible location.',
        },
      ],
    },
    contact: {
      title: 'Sign up for classes',
      description: 'Fill out the form and we\'ll contact you to schedule your first class.',
      whatsapp: 'Or message us on WhatsApp',
    },
    footer: {
      contact: 'Contact',
      followUs: 'Follow us',
      rights: 'All rights reserved.',
    },
    whatsappFloat: 'Message us on WhatsApp',
  },
} as const;

export type Translations = typeof translations;
