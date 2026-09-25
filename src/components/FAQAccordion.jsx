const faqs = [
  {
    question: '¿En cuánto tiempo responderán a mi consulta por correo?',
    answer:
      'Garantizamos un tiempo de respuesta de menos de 2 horas en horario laboral (08:30 a 19:30 CET). Si envía su correo durante la noche o festivos, será priorizado en la primera apertura a las 08:00 de la mañana.',
  },
  {
    question: '¿Puedo adjuntar fotografías clínicas para una valoración de color?',
    answer:
      'Absolutamente. Recomendamos enviar fotos con filtro polarizado y una muestra con la pestaña de la guía VITA en el mismo plano focal que el sustrato. Puede incluirlas en el formulario o adjuntarlas respondiendo a consultas@akpdentallab.com.',
  },
  {
    question: '¿Realizan recogidas o envíos a toda España y el resto de la Unión Europea?',
    answer:
      'Sí. Trabajamos con mensajería clínica preferente (MRW Dental Express y DHL Medical) con entrega en 24h para península e islas, así como servicio internacional en 24/48h con trazabilidad térmica de modelos si es necesario.',
  },
  {
    question: '¿Cómo recibo la Guía de Preparación y Tarifas 2025?',
    answer:
      'Al mantener marcada la casilla en el formulario, nuestro sistema enviará instantáneamente a su correo electrónico el dossier en alta resolución (PDF de 28 páginas) con parámetros de tallado, espesores recomendados para cada circonio y la tarifa neta profesional.',
  },
];

const FAQAccordion = () => {
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-lg bg-surface-container px-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-headline-sm text-on-surface [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <span className="material-symbols-outlined shrink-0 text-primary transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <p className="pb-4 font-sans text-sm text-on-surface-variant">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQAccordion;
