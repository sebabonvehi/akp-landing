import { BUSINESS_HOURS, EMAIL_CASES, PHONE_DISPLAY } from './contact.js';

export const FOOTER_ABOUT =
  'Laboratorio de alta precisión odontológica y artesanía cerámica de vanguardia. Ingeniería CAD/CAM y personalización anatómica sub-micrónica.';

export const FOOTER_BADGES = ['ISO 13485:2016', 'Biocompatible CE', '5-Axis Milling'];

export const FILE_FORMATS = {
  title: 'Formatos & Archivos',
  description: 'Recepción abierta de escaneos intraorales y de mesa:',
  items: [
    'Archivos STL Abiertos (3D Mesh)',
    'PLY con textura y color digital',
    'OBJ alta definición geométrica',
    'Sistemas iTero, 3Shape, Medit, PrimeScan',
  ],
};

export const FOOTER_CONTACT = {
  title: 'Contacto Clínico Directo',
  items: [
    {
      id: 'phone',
      icon: 'phone_in_talk',
      label: 'Línea Directa Maestros Ceramistas:',
      value: PHONE_DISPLAY,
    },
    { id: 'hours', icon: 'schedule', label: 'Horario de Recepción:', value: BUSINESS_HOURS },
    { id: 'cases', icon: 'mail', label: 'Casos y Envíos:', value: EMAIL_CASES },
  ],
};

export const FOOTER_HIGHLIGHT = {
  title: 'Área Quirúrgica & Estética',
  description:
    'Servicio exprés de sinterizado y estratificación en 24h para rehabilitaciones anteriores y guías quirúrgicas guiadas.',
  label: 'Calibración de Color',
  value: 'Espectrofotometría digital e-LAB y protocolo VITA 3D-Master®',
};

export const FOOTER_LEGAL =
  'AKP Digital Dental Lab. Todos los derechos reservados. Exactitud biomédica & maestría estética.';
