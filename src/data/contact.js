export const EMAIL_GENERAL = 'consultas@akpdentallab.com';
export const EMAIL_LAB = 'lab@akpdentallab.com';
export const EMAIL_CASES = 'casos@akpdentallab.com';
export const PHONE_DISPLAY = '+34 910 240 890';
export const BUSINESS_HOURS = 'Lunes a Viernes: 08:30 - 19:30 CET';

export const CONTACT_HEADING = {
  eyebrow: 'Admisión Clínica Digital',
  title: 'Formulario de Valoración Directa por Email',
  description:
    'Complete los detalles de su caso. Nuestros directores de laboratorio estudiarán los datos antes de emitir un dictamen técnico exhaustivo a su correo.',
};

export const CONTACT_CHANNELS = {
  eyebrow: 'Canales Inmediatos',
  title: 'Atención Directa por Email',
  description:
    'Si ya cuenta con orden de trabajo propia o prefiere comunicarse desde su cliente de correo predilecto:',
  hoursLabel: 'Horario equipo ceramista',
  items: [
    {
      id: 'general',
      label: 'Consultas generales & presupuestos:',
      email: EMAIL_GENERAL,
      icon: 'mail',
    },
    { id: 'lab', label: 'Dirección técnica & CAD/CAM:', email: EMAIL_LAB, icon: 'manage_accounts' },
  ],
};

export const LARGE_FILES = {
  title: '¿Archivos STL o PLY voluminosos?',
  description:
    'Puede transferir sus escaneados intraorales mediante WeTransfer, Dropbox o Google Drive directamente al email clínico:',
  email: EMAIL_CASES,
  quote:
    '«Revisamos cada correo con lupa clínica antes de responder; garantizamos cero margen de error en asentamientos protésicos.»',
};

// TODO: replace with an optimized local photo (pending from the client).
export const CONTACT_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ',
  alt: 'Estructura de zirconio sobre mesa clínica',
  tag: 'Estructuras Zirconio',
  caption: 'Ajuste Pasivo 100%',
};

export const SPECIALTIES = [
  { id: 'cad-design', label: 'Diseño CAD/CAM' },
  { id: 'crowns', label: 'Coronas & Carillas Zirconio / Disilicato' },
  { id: 'characterization', label: 'Maquillaje de Prótesis & Enzimas' },
  { id: 'splints', label: 'Férulas Oclusales / Michigan' },
  { id: 'price-list', label: 'Tarifas & Catálogo Completo 2025' },
  { id: 'other', label: 'Otro Caso Complejo' },
];

export const FORM_FIELDS = {
  doctorName: {
    label: 'Dr. / Nombre del Odontólogo',
    hint: 'Requerido',
    placeholder: 'Ej. Dr. Alejandro Vives',
    icon: 'badge',
  },
  clinicName: {
    label: 'Nombre de la Clínica Dental',
    hint: 'Requerido',
    placeholder: 'Ej. Clínica Dental Art & Care',
    icon: 'domain',
  },
  email: {
    label: 'Email Clínico de Contacto',
    hint: 'Donde enviaremos el análisis',
    placeholder: 'doctor@clinicavives.es',
    icon: 'mail',
  },
  phone: {
    label: 'Teléfono / WhatsApp de Urgencia',
    hint: 'Opcional',
    placeholder: '+34 600 000 000',
    icon: 'chat',
  },
  specialty: { label: 'Tipo de Consulta / Servicio de Interés' },
  subject: {
    label: 'Asunto del Caso Clínico',
    placeholder: 'Ej. Rehabilitación estética 13 a 23 con sustrato oscurecido',
  },
  message: {
    label: 'Mensaje & Consulta Detallada',
    hint: 'Detalle sustratos, espesores o fechas límite',
    placeholder:
      '¿Tienen disponibilidad para un caso de carillas de canino a canino con entrega para el próximo jueves? ¿Qué parámetros de preparación axial recomiendan para disilicato inyectado con sustrato ND2?',
  },
  sendGuide: {
    labelStart: 'Deseo recibir además la',
    labelHighlight: 'Guía de Preparación Clínica & Tabla de Precios 2025',
    labelEnd: 'en PDF a mi dirección de correo.',
  },
};

export const FORM_COPY = {
  submit: 'Enviar Consulta por Email',
  submitting: 'Procesando Envío...',
  security: 'Cifrado SSL 256-Bit para datos clínicos',
  successTitle: 'Consulta Transmitida con Éxito',
  successMessage:
    'Hemos notificado a la mesa de ceramistas de guardia. En breve recibirá un correo de confirmación y el dictamen técnico detallado.',
};

export const CONVERSION_STRIP = {
  title: '¿Tiene un caso quirúrgico o estético en marcha hoy?',
  description: `Escríbanos a ${EMAIL_GENERAL} para coordinar tiempos con el ceramista asignado.`,
  cta: 'Redactar Correo Ahora',
  href: `mailto:${EMAIL_GENERAL}?subject=${encodeURIComponent('Consulta Urgente Caso Clinico')}`,
};
