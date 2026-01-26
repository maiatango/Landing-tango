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
      text1: 'El tango no es solo baile. Es conexión, presencia y movimiento consciente.',
      text2: 'Clases para quienes quieren empezar desde cero o profundizar su camino en el tango.',
    },
    classes: {
      title: 'Nuestras Clases',
      items: [
        {
          title: 'Clases para principiantes',
          description: 'Empezá desde cero con una base sólida.',
        },
        {
          title: 'Grupos reducidos',
          description: 'Atención personalizada para cada pareja.',
        },
        {
          title: 'Ambiente relajado',
          description: 'Aprendé en un espacio cálido y acogedor.',
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
      text1: 'Tango is not just a dance. It\'s connection, presence, and conscious movement.',
      text2: 'Classes for those who want to start from scratch or deepen their tango journey.',
    },
    classes: {
      title: 'Our Classes',
      items: [
        {
          title: 'Beginner classes',
          description: 'Start from zero with a solid foundation.',
        },
        {
          title: 'Small groups',
          description: 'Personalized attention for each couple.',
        },
        {
          title: 'Relaxed atmosphere',
          description: 'Learn in a warm and welcoming space.',
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
