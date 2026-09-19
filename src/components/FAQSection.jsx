import FAQAccordion from './FAQAccordion';

const FAQSection = () => {
  return (
    <section className="w-full bg-surface-container-lowest px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="text-center">
          <span className="text-xs font-Geist uppercase tracking-widest text-primary block mb-1">
            Dudas Frecuentes
          </span>
          <h2 className="text-2xl font-EB_Garamond text-on-surface">
            Preguntas Rápidas sobre la Consulta por Email
          </h2>
        </div>

        <FAQAccordion />
      </div>
    </section>
  );
};

export default FAQSection;
