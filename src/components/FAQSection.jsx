import FAQAccordion from './FAQAccordion';

const FAQSection = () => {
  return (
    <section className="w-full bg-surface-container-lowest px-margin-mobile py-10 md:px-margin">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="text-center">
          <span className="mb-1 block font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary">
            Dudas Frecuentes
          </span>
          <h2 className="font-EB_Garamond text-headline-sm text-on-surface md:text-headline-md">
            Preguntas Rápidas sobre la Consulta por Email
          </h2>
        </div>

        <FAQAccordion />
      </div>
    </section>
  );
};

export default FAQSection;
