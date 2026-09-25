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

// TODO: replace with an optimized local photo (pending from the client).
export const CONTACT_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ',
  alt: 'Estructura de zirconio sobre mesa de trabajo',
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
    hint: 'Material, color, piezas y fecha deseada',
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
  submit: 'Enviar consulta por email',
  submitting: 'Procesando…',
  security: 'Sus datos solo se usan para responder la consulta',
  successTitle: 'Consulta preparada',
  successMessage: 'Le responderemos a la brevedad dentro del horario de atención.',
};

export const CONVERSION_STRIP = {
  title: '¿Tiene un caso en marcha hoy?',
  description: `Escríbanos a ${EMAIL_GENERAL} o por WhatsApp al ${PHONE_DISPLAY} para coordinar los tiempos.`,
  cta: 'Escribir por email',
  href: `mailto:${EMAIL_GENERAL}?subject=${encodeURIComponent('Consulta urgente - caso clínico')}`,
};
