const Hero = () => {
  return (
    <section className="relative w-full bg-surface px-4 md:px-8 py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] items-center gap-10 md:gap-12">
        {/* Left Editorial Pitch */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-high rounded-full mb-3 text-xs font-Geist uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Canal Preferente para Doctores y Clínicas
          </div>
          <h1 className="text-[40px] md:text-5xl font-EB_Garamond text-on-surface mb-5 leading-tight">
            Consulte con Nuestros <span className="italic text-primary">Maestros Ceramistas</span> y Especialistas CAD/CAM.
          </h1>
          <p className="text-base md:text-lg font-Hanken_Grotesk text-on-surface-variant mb-6 max-w-2xl">
            Obtenga asesoría técnica de alta fidelidad, valoración de viabilidad anatómica y presupuesto por correo electrónico en <span className="font-medium text-secondary">menos de 2 horas hábiles</span>. Sin compromiso ni plantillas genéricas.
          </p>
          {/* Direct Email Fast-Actions */}
          <div className="flex flex-wrap items-center gap-3 mb-6 w-full">
            <a
              href="#formulario-consulta"
              className="inline-flex h-10 items-center justify-center gap-2 rounded bg-primary px-7 font-Geist text-[11px] font-semibold uppercase leading-none tracking-wider text-on-primary-container transition-all hover:bg-primary-container [&_.material-symbols-outlined]:text-[18px]"
            >
              <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
              Completar Consulta Online
            </a>
            <a
              href="mailto:consultas@akpdentallab.com"
              className="inline-flex h-10 items-center justify-center gap-2 rounded bg-surface-container-high px-7 font-Geist text-[11px] font-semibold uppercase leading-none tracking-wider text-on-surface transition-all hover:bg-surface-bright [&_.material-symbols-outlined]:text-[18px]"
            >
              <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
              consultas@akpdentallab.com
            </a>
          </div>
          {/* Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-3xl bg-surface-container-low p-3 rounded">
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5 text-primary text-[11px] font-Geist">
                <span className="material-symbols-outlined text-[16px]">schedule</span> menor a 2h
              </span>
              <span className="text-xs font-Geist uppercase text-outline">Respuesta Garantizada</span>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5 text-primary text-[11px] font-Geist">
                <span className="material-symbols-outlined text-[16px]">lock</span> 100%
              </span>
              <span className="text-xs font-Geist uppercase text-outline">Confidencialidad Médica</span>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5 text-primary text-[11px] font-Geist">
                <span className="material-symbols-outlined text-[16px]">thumb_up</span> 0 €
              </span>
              <span className="text-xs font-Geist uppercase text-outline">Valoración Técnica</span>
            </div>
          </div>
        </div>

        {/* Right Visual Feature: Editorial Craftsmanship Accent */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <div className="relative bg-surface-container-low p-2 rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-72 md:h-80 w-full rounded overflow-hidden">
              <img
                className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-500"
                data-alt="Close-up macro photography of a master dental ceramist hand wearing a surgical latex glove, holding a fine-tipped Kolinsky brush delicately characterizing a layered zirconia dental crown on a black granite workbench with warm directional studio lighting, dark luxury laboratory aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between">
                <span className="text-xs font-Geist uppercase text-primary bg-surface-container-lowest/80 backdrop-blur-md px-1 py-0.5 rounded">
                  Atelier Anterior
                </span>
                <span className="text-xs font-Geist uppercase text-on-surface">Maquillaje Micrométrico</span>
              </div>
            </div>
            <div className="p-2 flex items-center justify-between">
              <div>
                <span className="block text-base font-Geist text-on-surface">Zirconio Translúcido Multicapa</span>
                <span className="text-sm font-Hanken_Grotesk text-on-surface-variant">Gradiente natural 4Y-PSZ / 5Y-PSZ</span>
              </div>
              <span className="material-symbols-outlined text-primary text-[24px]">brush</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
