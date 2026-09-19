const TechnicalMatrixBar = () => {
  return (
    <section className="w-full mt-12 md:mt-16 bg-surface-container-lowest border-y border-outline-variant/30 px-4 md:px-6 py-2 md:py-3 text-on-surface-variant text-[10px] md:text-[11px] font-Geist uppercase tracking-widest">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
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
      </div>
    </section>
  );
};

export default TechnicalMatrixBar;
