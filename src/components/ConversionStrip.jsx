const ConversionStrip = () => {
  return (
    <section className="w-full bg-surface-container-high px-6 pt-4 text-on-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">headset_mic</span>
          </div>
          <div>
            <span className="text-xs font-Geist uppercase tracking-wider text-primary block">
              ¿Tiene un caso quirúrgico o estético en marcha hoy?
            </span>
            <span className="text-sm font-Hanken_Grotesk text-on-surface-variant">
              Escríbanos a consultas@akpdentallab.com para coordinar tiempos con el ceramista asignado.
            </span>
          </div>
        </div>
        <a
          href="mailto:consultas@akpdentallab.com?subject=Consulta%20Urgente%20Caso%20Clinico"
          className="inline-flex h-10 items-center gap-2 rounded bg-primary px-7 font-Geist text-[11px] font-semibold uppercase leading-none tracking-wider text-on-primary-container transition-all hover:bg-primary-container [&_.material-symbols-outlined]:text-[18px]"
        >
          <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
          Redactar Correo Ahora
        </a>
      </div>
    </section>
  );
};

export default ConversionStrip;
