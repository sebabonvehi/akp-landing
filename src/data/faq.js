import { BUSINESS_HOURS, EMAIL_CASES, EMAIL_GENERAL } from './contact.js';

export const FAQ_HEADING = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Dudas sobre consultas y envío de casos',
};

export const FAQ_ITEMS = [
  {
    id: 'response-time',
    question: '¿En cuánto tiempo responden una consulta?',
    answer: `Respondemos en menos de 2 horas dentro del horario de atención (${BUSINESS_HOURS}). Las consultas recibidas fuera de ese horario se responden al comienzo de la siguiente jornada hábil.`,
  },
  {
    id: 'shade-photos',
    question: '¿Puedo enviar fotografías clínicas para la toma de color?',
    answer: `Sí. Recomendamos fotos con filtro polarizado y la muestra de la guía VITA en el mismo plano que la pieza. Puede adjuntarlas respondiendo nuestro email o enviarlas a ${EMAIL_GENERAL}.`,
  },
  {
    id: 'coverage',
    question: '¿Trabajan con profesionales de otras ciudades o países?',
    answer: `Sí. Recibimos casos de todo el mundo por email, en archivos STL, PLY u OBJ de escaneo intraoral o de mesa. Si los archivos son pesados, puede enviarlos por WeTransfer, Dropbox o Google Drive a ${EMAIL_CASES}.`,
  },
  {
    id: 'price-guide',
    question: '¿Cómo recibo la guía de preparación y tarifas?',
    answer:
      'Marque la casilla correspondiente en el formulario y se la enviaremos en PDF por email, con parámetros de preparación, espesores recomendados por material y tarifas vigentes.',
  },
];
