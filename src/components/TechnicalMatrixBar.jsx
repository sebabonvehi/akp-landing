const TechnicalMatrixBar = () => {
  return (
    <section className="mt-16 w-full border-y border-outline-variant/30 bg-surface-container-lowest px-margin-mobile py-1 font-label text-label-sm tracking-widest text-on-surface-variant uppercase md:mt-20 md:px-margin">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 font-semibold text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Canal Clínico Activo
          </span>
          <span className="text-outline">/</span>
          <span className="hidden sm:inline">Recepción Ininterrumpida: STL · PLY · OBJ</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-outline md:inline">
            Protocolo e-LAB &amp; VITA 3D-Master
          </span>
          <span className="hidden text-outline md:inline">/</span>
          <span className="font-semibold text-secondary">SLA de Respuesta: &lt; 120 Min</span>
        </div>
      </div>
    </section>
  );
};

export default TechnicalMatrixBar;
