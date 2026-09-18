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
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-Geist text-xs uppercase px-5 py-2 rounded transition-all hover:shadow-[0_0_24px_rgba(242,202,80,0.35)]"
        >
          <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
          Redactar Correo Ahora
        </a>
      </div>
    </section>
  );
};

export default ConversionStrip;