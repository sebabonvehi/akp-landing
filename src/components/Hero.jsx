import Button from './Button';

// TODO: si en Stitch la foto del hero es otra, reemplazar esta URL
const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ';

const metrics = [
  { icon: 'schedule', value: '< 2h', label: 'Respuesta Garantizada' },
  { icon: 'lock', value: '100%', label: 'Confidencialidad Médica' },
  { icon: 'thumb_up', value: '0 €', label: 'Valoración Técnica' },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface px-margin-mobile py-10 md:px-margin">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-gutter">
        {/* Columna izquierda: pitch editorial */}
        <div className="flex max-w-2xl flex-col items-start lg:col-span-8">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-2 py-0.5 font-Geist text-label-sm font-medium uppercase tracking-wider text-primary">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Canal Preferente para Doctores y Clínicas
          </div>

          <h1 className="mb-4 font-EB_Garamond text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Consulte con Nuestros{' '}
            <span className="italic text-primary">Maestros Ceramistas</span> y Especialistas CAD/CAM.
          </h1>

          <p className="mb-6 max-w-2xl font-Hanken_Grotesk text-body-md text-on-surface-variant md:text-body-lg">
            Obtenga asesoría técnica de alta fidelidad, valoración de viabilidad anatómica y presupuesto por correo electrónico en{' '}
            <span className="font-medium text-secondary">menos de 2 horas hábiles</span>. Sin compromiso ni plantillas genéricas.
          </p>

          <div className="mb-6 flex w-full flex-wrap items-center gap-4">
            <Button href="#formulario-consulta">
              <span className="material-symbols-outlined">outgoing_mail</span>
              Completar Consulta Online
            </Button>
            <Button href="mailto:consultas@akpdentallab.com" variant="secondary">
              <span className="material-symbols-outlined text-secondary">mail</span>
              consultas@akpdentallab.com
            </Button>
          </div>

          <div className="grid w-full grid-cols-1 gap-2 rounded-sm bg-surface-container-low p-2 sm:grid-cols-3">
            {metrics.map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col py-1">
                <span className="flex items-center gap-1.5 font-Geist text-label-lg font-medium text-primary">
                  <span className="material-symbols-outlined text-[16px]">{icon}</span>
                  {value}
                </span>
                <span className="font-Geist text-label-sm uppercase tracking-wider text-outline">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: pieza visual */}
        <div className="w-full lg:col-span-4">
          <div className="overflow-hidden rounded-xl bg-surface-container-low p-2 shadow-xl">
            <div className="relative h-64 w-full overflow-hidden rounded-sm">
              <img
                className="h-full w-full object-cover brightness-95 transition-transform duration-500 hover:scale-105"
                alt="Maestro ceramista caracterizando una corona de zirconio con pincel Kolinsky"
                src={HERO_IMG}
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between">
                <span className="rounded-sm bg-surface-container-lowest/80 px-2 py-1 font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                  Atelier Anterior
                </span>
                <span className="font-Geist text-label-sm font-semibold uppercase tracking-wider text-on-surface">
                  Maquillaje Micrométrico
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-3">
              <div>
                <span className="block font-Geist text-label-md font-semibold text-on-surface">
                  Zirconio Translúcido Multicapa
                </span>
                <span className="font-Hanken_Grotesk text-body-sm text-on-surface-variant">
                  Gradiente natural 4Y-PSZ / 5Y-PSZ
                </span>
              </div>
              <span className="material-symbols-outlined text-[24px] text-primary">brush</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
