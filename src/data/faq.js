import { BUSINESS_HOURS, SATURDAY_HOURS, EMAIL_GENERAL } from './contact.js';

export const FAQ_HEADING = {
  title: 'Preguntas frecuentes',
};

export const FAQ_ITEMS = [
  {
    id: 'response-time',
    question: '¿En cuánto tiempo responden una consulta?',
    answer: `Respondemos en menos de 2 horas dentro del horario de atención (${BUSINESS_HOURS}) y (${SATURDAY_HOURS}). Las consultas recibidas fuera de ese horario se responden al comienzo de la siguiente jornada hábil.`,
  },
  {
    id: 'shade-photos',
    question: '¿Puedo enviar fotografías clínicas para la toma de color?',
    answer: `Sí. Recomendamos fotos con filtro polarizado y la muestra de la guía VITA en el mismo plano que la pieza. Puede adjuntarlas respondiendo nuestro email o enviarlas a ${EMAIL_GENERAL}.`,
  },
  {
    id: 'price-guide',
    question: '¿Cuánto demora un caso?',
    answer:
      '4-5 dias habiles para los trabajos de alta complejidad. El tiempo de entrega varía según la complejidad del caso. Le enviaremos una estimación detallada una vez que recibamos su consulta.',
  },
  {
    id: 'shipping',
    question: '¿Realizan envíos?',
    answer:
      'Sí. Sin cargo adicional dentro de CABA. Para envíos a otras provincias o GBA, consúltenos.',
  },
];
