export const EMAIL_GENERAL = 'akpdentalab@gmail.com';
export const EMAIL_LAB = 'akpdentalab@gmail.com';
export const EMAIL_CASES = 'akpdentalab@gmail.com';

export const PHONE_E164 = '+5491135125178';
export const PHONE_DISPLAY = '+54 9 11 3512-5178';
export const PHONE_URL = `tel:${PHONE_E164}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace('+', '')}`;

export const INSTAGRAM_HANDLE = '@akpdentalab';
export const INSTAGRAM_URL = 'https://www.instagram.com/akpdentalab/';

export const LOCATION = 'Flores, CABA';
export const LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Flores%2C+CABA';

export const BUSINESS_HOURS = 'Lun a Vie · 08:00–17:00 (ARG)';
export const SATURDAY_HOURS = 'Sáb · 08:00–13:00 (ARG)';

export const CONTACT_HEADING = {
  title: 'Consulte su caso por email o WhatsApp',
  description:
    'Complete los datos de su caso. El equipo técnico del laboratorio los revisa antes de responderle con una valoración y un presupuesto.',
};

export const CONTACT_CHANNELS = {
  eyebrow: 'Contacto',
  title: 'Atención por email, WhatsApp e Instagram',
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
      id: 'whatsapp',
      label: 'WhatsApp',
      value: PHONE_DISPLAY,
      href: WHATSAPP_URL,
      icon: 'chat',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: INSTAGRAM_HANDLE,
      href: INSTAGRAM_URL,
      icon: 'instagram',
    },
    {
      id: 'location',
      label: 'Ubicación',
      value: LOCATION,
      href: LOCATION_URL,
      icon: 'location_on',
    },
  ],
};

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
    placeholder: 'dra.lopez@consultorio.com.ar',
    icon: 'mail',
  },
  phone: {
    label: 'Teléfono / WhatsApp',
    placeholder: '+54 9 11 1234-5678',
    icon: 'chat',
  },
  subject: {
    label: 'Asunto del caso',
    placeholder: 'Ej. Coronas de zirconio en 14 y 15',
  },
  message: {
    label: 'Mensaje',
    placeholder:
      'Describa el caso: piezas involucradas, material preferido, color (VITA), archivos disponibles y fecha deseada de entrega.',
  },
};

export const FORM_COPY = {
  submitEmail: 'Enviar por email',
  submitWhatsApp: 'Enviar por WhatsApp',
  privacy: 'Sus datos solo se usan para responder la consulta',
  attachments: `Envie los archivos STL y PLY por WeTransfer a ${EMAIL_CASES} y las imagenes por email o WhatsApp`,
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
};
