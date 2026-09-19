import ValuePropsCard from './ValuePropsCard';

const cards = [
  {
    icon: 'architecture',
    badgeText: '01. Oclusión Dinámica',
    title: 'Asesoría Protrusiva y Oclusal por Expertos Exocad & 3Shape',
    description:
      'Evaluamos puntos de contacto prematuros, curvas de Spee y Wilson y guías caninas antes de dar la orden de sinterización definitiva.',
    linkText: 'Certificación oficial CAD',
  },
  {
    icon: 'palette',
    badgeText: '02. Biomimetismo',
    title: 'Calibración Cromática con Fotos Polarizadas',
    description:
      'Análisis espectrofotométrico con mapas de translucidez incisal, halo lechoso y microtexturas superficiales basadas en guías VITA 3D-Master®.',
    linkText: 'Protocolo e-LAB System',
  },
  {
    icon: 'card_membership',
    badgeText: '03. Partner Clínico',
    title: 'Tarifas Preferentes & Muestras Físicas de Materiales',
    description:
      'Acceda a condiciones corporativas por volumen y reciba en su clínica el kit premium de pastillas cerámicas, discos y acabados de prueba.',
    linkText: 'Envío kit sin coste',
  },
];

const ValuePropsSection = () => {
  return (
    <section className="w-full bg-surface px-margin-mobile py-10 md:px-margin">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary">
              Diferencial de Calidad Biomédica
            </span>
            <h2 className="font-EB_Garamond text-headline-sm text-on-surface md:text-headline-md">
              ¿Por Qué Consultar Previamente su Caso con AKP?
            </h2>
          </div>
          <p className="max-w-md font-Hanken_Grotesk text-sm text-on-surface-variant">
            Integración directa entre la mesa clínica y la fresadora 5 ejes para suprimir repeticiones de citas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <ValuePropsCard key={card.badgeText} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
