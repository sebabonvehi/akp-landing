import { useState } from 'react';

const pills = [
  'Diseño CAD/CAM',
  'Coronas & Carillas Zirconio / Disilicato',
  'Maquillaje de Prótesis & Enzimas',
  'Férulas Oclusales / Michigan',
  'Tarifas & Catálogo Completo 2025',
  'Otro Caso Complejo',
];

const SpecialtyPills = () => {
  const [selectedPill, setSelectedPill] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      <span className="font-label text-label-sm font-medium tracking-wider text-primary uppercase">
        Tipo de Consulta / Servicio de Interés *
      </span>
      <div className="flex flex-wrap gap-1.5">
        {pills.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={selectedPill === index}
            onClick={() => setSelectedPill(index)}
            className={`rounded-sm px-3 py-1 font-label text-label-sm font-medium tracking-wider uppercase transition-colors ${
              selectedPill === index
                ? 'bg-primary-container text-on-primary-container hover:bg-primary'
                : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyPills;
