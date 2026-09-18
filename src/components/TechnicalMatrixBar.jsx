const TechnicalMatrixBar = () => {
  return (
    <section className="w-full bg-surface-container-lowest px-6 py-1 text-on-surface-variant flex flex-wrap items-center justify-between gap-2 text-[10px] font-Geist uppercase tracking-widest">
      <div className="flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1.5 text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Canal Clínico Activo
        </span>
        <span className="text-outline">/</span>
        <span>Recepción Ininterrumpida: STL · PLY · OBJ</span>
      </div>
      <div className="flex items-center gap-1.5 text-outline">
        <span className="hidden sm:inline">Protocolo e-LAB & VITA 3D-Master</span>
        <span className="hidden sm:inline">/</span>
        <span className="text-secondary">SLA de Respuesta: menor a 120 Min</span>
      </div>
    </section>
  );
};

export default TechnicalMatrixBar;