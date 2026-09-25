import Button from './Button';

const ConversionStrip = () => {
  return (
    <section className="w-full bg-surface-container-high px-margin-mobile py-3.5 text-on-surface md:px-margin">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary">
            <span className="material-symbols-outlined text-[22px]">headset_mic</span>
          </div>
          <div>
            <span className="block font-label text-label-sm font-semibold tracking-wider text-primary uppercase">
              ¿Tiene un caso quirúrgico o estético en marcha hoy?
            </span>
            <span className="font-sans text-sm text-on-surface-variant">
              Escríbanos a consultas@akpdentallab.com para coordinar tiempos con el ceramista
              asignado.
            </span>
          </div>
        </div>
        <Button
          href="mailto:consultas@akpdentallab.com?subject=Consulta%20Urgente%20Caso%20Clinico"
          className="shrink-0"
        >
          <span className="material-symbols-outlined">outgoing_mail</span>
          Redactar Correo Ahora
        </Button>
      </div>
    </section>
  );
};

export default ConversionStrip;
