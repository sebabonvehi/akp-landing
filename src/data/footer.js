import {
  BUSINESS_HOURS,
  EMAIL_CASES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_URL,
  SATURDAY_HOURS,
} from './contact.js';

export const FILE_FORMATS = {
  title: 'Formatos y archivos',
  description: 'Recibimos escaneos y modelos analógicos:',
  items: ['STL', 'PLY con textura y color'],
};

export const FOOTER_CONTACT = {
  title: 'Contacto',
  items: [
    {
      id: 'phone',
      icon: 'phone_in_talk',
      label: 'Teléfono / WhatsApp',
      value: PHONE_DISPLAY,
      href: PHONE_URL,
    },
    {
      id: 'hours',
      icon: 'schedule',
      label: 'Horario de atención',
      value: [BUSINESS_HOURS, SATURDAY_HOURS],
    },
    {
      id: 'cases',
      icon: 'mail',
      label: 'Casos y archivos',
      value: EMAIL_CASES,
      href: `mailto:${EMAIL_CASES}`,
    },
    {
      id: 'instagram',
      icon: 'instagram',
      label: 'Instagram',
      value: INSTAGRAM_HANDLE,
      href: INSTAGRAM_URL,
    },
  ],
};

export const FOOTER_LEGAL = 'AKP Laboratorio dental digital. Todos los derechos reservados.';
