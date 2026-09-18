import { useState } from 'react';

const SpecialtyPills = () => {
  const [selectedPill, setSelectedPill] = useState(1); // Default to second pill (index 1) as primary

  const pills = [
    { label: 'Diseño CAD/CAM', isPrimary: false },
    { label: 'Coronas & Carillas Zirconio / Disilicato', isPrimary: true },
    { label: 'Maquillaje de Prótesis & Enzimas', isPrimary: false },
    { label: 'Férulas Oclusales / Michigan', isPrimary: false },
    { label: 'Tarifas & Catálogo Completo 2025', isPrimary: false },
    { label: 'Otro Caso Complejo', isPrimary: false }
  ];

  return (
    <div className="flex flex-col gap-1 mb-2">
      <span className="text-xs font-Geist uppercase tracking-wider text-primary">
        Tipo de Consulta / Servicio de Interés *
      </span>
      <div className="flex flex-wrap gap-1 mt-1">
        {pills.map((pill, index) => (
          <button
            key={index}
            onClick={() => setSelectedPill(index)}
            className={`specialty-pill px-2 py-0.5 rounded font-Geist text-xs uppercase transition-all ${
              selectedPill === index
                ? 'bg-primary-container text-on-primary-container hover:bg-primary'
                : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyPills;