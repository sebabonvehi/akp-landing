import ValuePropsCard from './ValuePropsCard';

const ValuePropsSection = () => {
  return (
    <section className="w-full bg-surface px-6 pt-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-Geist uppercase tracking-widest text-primary block mb-1">
              Diferencial de Calidad Biomédica
            </span>
            <h2 className="text-2xl font-EB_Garamond text-on-surface">
              ¿Por Qué Consultar Previamente su Caso con AKP?
            </h2>
          </div>
          <p className="text-sm font-Hanken_Grotesk text-on-surface-variant max-w-md">
            Integración directa entre la mesa clínica y la fresadora 5 ejes para suprimir repeticiones de citas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Asesoría Protrusiva */}
          <ValuePropsCard
            icon="architecture"
            title="Asesoría Protrusiva y Oclusal por Expertos Exocad & 3Shape"
            description="Evaluamos puntos de contacto prematuros, curvas de Spee y Wilson y guías caninas antes de dar la orden de sinterización definitiva."
            badgeText="01. Oclusión Dinámica"
          />

          {/* Card 2: Calibración Cromática */}
          <ValuePropsCard
            icon="palette"
            title="Calibración Cromática con Fotos Polarizadas"
            description="Análisis espectrofotométrico con mapas de translucidez incisal, halo lechoso y microtexturas superficiales basadas en guías VITA 3D-Master®."
            badgeText="02. Biomimetismo"
          />

          {/* Card 3: Tarifas & Welcome Kit */}
          <ValuePropsCard
            icon="card_membership"
            title="Tarifas Preferentes & Muestras Físicas de Materiales"
            description="Acceda a condiciones corporativas por volumen y reciba en su clínica el kit premium de pastillas cerámicas, discos y acabados de prueba."
            badgeText="03. Partner Clínico"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;