import zirconiaCrownImage from '../assets/zirconia-crown.webp';

export const EMAIL_GENERAL = 'consultas@akpdentallab.com';
export const EMAIL_LAB = 'lab@akpdentallab.com';
export const EMAIL_CASES = 'casos@akpdentallab.com';

export const PHONE_E164 = '+5491135125178';
export const PHONE_DISPLAY = '+54 9 11 3512-5178';
export const PHONE_URL = `tel:${PHONE_E164}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace('+', '')}`;

export const BUSINESS_HOURS = 'Lun a Vie · 08:30–19:30 (ART)';

export const CONTACT_HEADING = {
  eyebrow: 'Admisión clínica digital',
  title: 'Consulte su caso por email o WhatsApp',
  description:
    'Complete los datos de su caso. El equipo técnico del laboratorio los revisa antes de responderle con una valoración y un presupuesto.',
};

export const CONTACT_CHANNELS = {
  eyebrow: 'Canales directos',
  title: 'Atención por email y WhatsApp',
  description:
    'Si ya tiene su orden de trabajo o prefiere escribirnos desde su propio correo o teléfono:',
  hoursLabel: 'Horario de atención',
  items: [
    {
      id: 'general',
      label: 'Consultas generales y presupuestos',
      value: EMAIL_GENERAL,
      href: `mailto:${EMAIL_GENERAL}`,
      icon: 'mail',
    },
    {
      id: 'lab',
      label: 'Dirección técnica y CAD/CAM',
      value: EMAIL_LAB,
      href: `mailto:${EMAIL_LAB}`,
      icon: 'manage_accounts',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: PHONE_DISPLAY,
      href: WHATSAPP_URL,
      icon: 'chat',
    },
  ],
};

export const LARGE_FILES = {
  title: '¿Archivos STL, PLY u OBJ pesados?',
  description:
    'Puede enviar sus escaneos intraorales por WeTransfer, Dropbox o Google Drive a nuestro email de casos:',
  email: EMAIL_CASES,
  quote:
    'Revisamos cada caso junto al profesional y acordamos los detalles antes de avanzar con el diseño.',
};

export const CONTACT_IMAGE = {
  src: zirconiaCrownImage,
  width: 512,
  height: 279,
  alt: 'Corona sobre soporte en la mesa de trabajo del laboratorio',
  tag: 'Estructuras de zirconio',
  caption: 'Diseño CAD/CAM',
};

export const SPECIALTIES = [
  { id: 'zirconia', label: 'Zirconio' },
  { id: 'lithium-disilicate', label: 'Disilicato de litio' },
  { id: 'pmma', label: 'PMMA' },
  { id: 'splints', label: 'Placas miorrelajantes' },
  { id: '3d-printing', label: 'Impresiones 3D' },
  { id: 'cad-design', label: 'Diseño CAD/CAM' },
  { id: 'price-list', label: 'Tarifas' },
  { id: 'other', label: 'Otra consulta' },
];

export const FORM_FIELDS = {
  doctorName: {
    label: 'Nombre del profesional',
    placeholder: 'Ej. Dra. Mariana López',
    icon: 'badge',
  },
  clinicName: {
    label: 'Clínica o consultorio',
    placeholder: 'Ej. Consultorio Odontológico Palermo',
    icon: 'domain',
  },
  email: {
    label: 'Email de contacto',
    hint: 'Donde le respondemos',
    placeholder: 'dra.lopez@consultorio.com.ar',
    icon: 'mail',
  },
  phone: {
    label: 'Teléfono / WhatsApp',
    hint: 'Opcional',
    placeholder: '+54 9 11 1234-5678',
    icon: 'chat',
  },
  specialty: { label: 'Tipo de consulta o servicio' },
  subject: {
    label: 'Asunto del caso',
    placeholder: 'Ej. Coronas de zirconio en 14 y 15',
  },
  message: {
    label: 'Mensaje',
    hint: 'Piezas, material, color y fecha',
    placeholder:
      'Describa el caso: piezas involucradas, material preferido, color (VITA), archivos disponibles y fecha deseada de entrega.',
  },
  sendGuide: {
    labelStart: 'Quiero recibir también la',
    labelHighlight: 'Guía de preparación y tarifas',
    labelEnd: 'en PDF por email.',
  },
};

export const FORM_COPY = {
  submitEmail: 'Enviar por email',
  submitWhatsApp: 'Enviar por WhatsApp',
  privacy: 'Sus datos solo se usan para responder la consulta',
  attachments: `Los archivos STL, PLY u OBJ y las fotos no se adjuntan desde aquí: envíelos por WeTransfer o Google Drive a ${EMAIL_CASES}.`,
  sentEmail:
    'Se abrió su cliente de correo con la consulta lista. Revise el mensaje y presione Enviar para completarlo.',
  sentWhatsApp:
    'Se abrió WhatsApp con la consulta lista. Revise el mensaje y envíelo para completarlo.',
  invalid: 'Revise los campos marcados antes de enviar.',
};

export const VALIDATION_MESSAGES = {
  required: 'Este campo es obligatorio.',
  email: 'Ingrese un email válido, por ejemplo nombre@dominio.com.',
  phone: 'Ingrese un teléfono válido, por ejemplo +54 9 11 1234-5678.',
};

export const INQUIRY_LABELS = {
  subjectPrefix: 'Consulta web -',
  doctorName: 'Profesional',
  clinicName: 'Clínica / consultorio',
  email: 'Email',
  phone: 'Teléfono',
  specialty: 'Tipo de consulta',
  guideRequest: 'Solicito también la guía de preparación y tarifas en PDF.',
};

export const CONVERSION_STRIP = {
  title: '¿Tiene un caso en marcha hoy?',
  description: `Escríbanos a ${EMAIL_GENERAL} o por WhatsApp al ${PHONE_DISPLAY} para coordinar los tiempos.`,
  cta: 'Escribir por email',
  whatsappCta: 'Escribir por WhatsApp',
  href: `mailto:${EMAIL_GENERAL}?subject=${encodeURIComponent('Consulta urgente - caso clínico')}`,
};
