import { formatCurrency } from '../lib/formatCurrency.js';

export const STATUS_BAR = {
  status: 'Recepción de casos activa',
  formats: 'STL · PLY · OBJ',
  protocol: 'Casos de todo el mundo por email',
  response: 'Respuesta en menos de 2 h',
};

export const HERO = {
  badge: 'Laboratorio dental digital CAD/CAM',
  titleStart: 'Consulte su caso con nuestros',
  titleHighlight: 'ceramistas',
  titleEnd: 'y especialistas CAD/CAM.',
  descriptionStart:
    'Reciba asesoramiento técnico, valoración del caso y presupuesto por email o WhatsApp en',
  descriptionHighlight: 'menos de 2 horas hábiles',
  descriptionEnd: '. Sin compromiso.',
  primaryCta: { label: 'Completar consulta', href: '#contacto', icon: 'outgoing_mail' },
};

export const HERO_METRICS = [
  { id: 'response', icon: 'schedule', value: '< 2 h', label: 'Tiempo de respuesta' },
  { id: 'privacy', icon: 'lock', value: '100%', label: 'Confidencialidad' },
  {
    id: 'assessment',
    icon: 'thumb_up',
    value: formatCurrency(0),
    label: 'Valoración técnica',
  },
];

// TODO: replace with an optimized local photo (pending from the client).
export const HERO_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ',
  alt: 'Ceramista caracterizando una corona de zirconio con pincel',
  tag: 'Sector anterior',
  caption: 'Caracterización',
  material: 'Zirconio multicapa',
  materialDetail: 'Gradiente natural de translucidez',
};
