import { BUSINESS_HOURS, EMAIL_CASES, PHONE_DISPLAY, PHONE_URL } from './contact.js';

export const FOOTER_ABOUT =
  'Laboratorio dental digital. Restauraciones protésicas diseñadas y fabricadas con flujo CAD/CAM.';

export const FOOTER_BADGES = ['ISO 13485:2016', 'Biocompatible CE', 'Fresado 5 ejes'];

export const FILE_FORMATS = {
  title: 'Formatos y archivos',
  description: 'Recibimos escaneos intraorales y de mesa:',
  items: [
    'STL',
    'PLY con textura y color',
    'OBJ',
    'Exportaciones de iTero, 3Shape, Medit y Primescan',
  ],
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
    { id: 'hours', icon: 'schedule', label: 'Horario de atención', value: BUSINESS_HOURS },
    {
      id: 'cases',
      icon: 'mail',
      label: 'Casos y archivos',
      value: EMAIL_CASES,
      href: `mailto:${EMAIL_CASES}`,
    },
  ],
};

export const FOOTER_HIGHLIGHT = {
  title: 'Cobertura',
  description:
    'Trabajamos con profesionales de cualquier lugar: los casos se reciben en formato digital por email.',
  label: 'Toma de color',
  value: 'Protocolo VITA con fotografía clínica',
};

export const FOOTER_LEGAL = 'AKP Digital Dental Lab. Todos los derechos reservados.';
