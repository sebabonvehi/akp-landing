import {
  BUSINESS_HOURS,
  EMAIL_CASES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  LOCATION_URL,
  PHONE_DISPLAY,
  SATURDAY_HOURS,
  WHATSAPP_URL,
} from './contact.js';

export const FOOTER_INSTAGRAM = {
  label: `Instagram ${INSTAGRAM_HANDLE}`,
  href: INSTAGRAM_URL,
};

export const FOOTER_CONTACT = {
  title: 'Contacto',
  items: [
    { id: 'whatsapp', icon: 'chat', value: PHONE_DISPLAY, href: WHATSAPP_URL },
    { id: 'cases', icon: 'mail', value: EMAIL_CASES, href: `mailto:${EMAIL_CASES}` },
    { id: 'location', icon: 'location_on', value: LOCATION, href: LOCATION_URL },
  ],
};

export const FOOTER_HOURS = {
  title: 'Horario',
  lines: [BUSINESS_HOURS, SATURDAY_HOURS],
};

export const FOOTER_LEGAL = 'AKP Laboratorio Dental Digital';
