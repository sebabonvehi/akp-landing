import Header from './components/Header';
import TechnicalMatrixBar from './components/TechnicalMatrixBar';
import Hero from './components/Hero';
import Form from './components/Form';
import ValuePropsSection from './components/ValuePropsSection';
import FAQSection from './components/FAQSection';
import ConversionStrip from './components/ConversionStrip';
import Footer from './components/Footer';

// TODO: reemplazar por la imagen "estructura de zirconio" exportada desde Stitch
const ZIRCONIA_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ';

const eyebrow =
  'block font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary';

function App() {
  return (
    <>
      <Header />
      <TechnicalMatrixBar />
      <Hero />

      <section
        id="formulario-consulta"
        className="w-full scroll-mt-20 bg-surface-container-lowest px-margin-mobile py-10 md:px-margin"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center md:text-left">
            <span className={`${eyebrow} mb-1`}>Admisión Clínica Digital</span>
            <h2 className="font-EB_Garamond text-headline-sm text-on-surface md:text-headline-md">
              Formulario de Valoración Directa por Email
            </h2>
            <p className="mx-auto max-w-2xl font-Hanken_Grotesk text-body-md text-on-surface-variant md:mx-0">
              Complete los detalles de su caso. Nuestros directores de laboratorio estudiarán los datos antes de emitir un dictamen técnico exhaustivo a su correo.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <div className="rounded-lg bg-surface-container p-4 md:p-6 lg:col-span-8">
              <Form />
            </div>

            <aside className="flex flex-col gap-4 lg:col-span-4">
              {/* Canales inmediatos */}
              <div className="relative rounded-lg bg-surface-container p-4">
                <span className="material-symbols-outlined absolute right-4 top-4 text-[24px] text-primary/10">
                  alternate_email
                </span>
                <span className={`${eyebrow} mb-4`}>Canales Inmediatos</span>
                <h3 className="mb-4 font-EB_Garamond text-headline-sm text-on-surface">
                  Atención Directa por Email
                </h3>
                <p className="mb-4 font-Hanken_Grotesk text-body-sm text-on-surface-variant">
                  Si ya cuenta con orden de trabajo propia o prefiere comunicarse desde su cliente de correo predilecto:
                </p>

                <div className="flex flex-col gap-1">
                  <div className="rounded-sm bg-surface-container-lowest p-2">
                    <span className="block font-Geist text-label-sm uppercase tracking-wider text-outline">
                      Consultas generales &amp; presupuestos:
                    </span>
                    <a
                      className="mt-0.5 inline-flex items-center gap-2 font-Geist text-xs font-medium text-primary hover:underline"
                      href="mailto:consultas@akpdentallab.com"
                    >
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                      consultas@akpdentallab.com
                    </a>
                  </div>
                  <div className="rounded-sm bg-surface-container-lowest p-2">
                    <span className="block font-Geist text-label-sm uppercase tracking-wider text-outline">
                      Dirección técnica &amp; CAD/CAM:
                    </span>
                    <a
                      className="mt-0.5 inline-flex items-center gap-2 font-Geist text-xs font-medium text-primary hover:underline"
                      href="mailto:lab@akpdentallab.com"
                    >
                      <span className="material-symbols-outlined text-[16px]">manage_accounts</span>
                      lab@akpdentallab.com
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="block font-Geist text-label-sm font-semibold uppercase tracking-wider text-on-surface">
                    Horario equipo ceramista
                  </span>
                  <div className="mt-1 flex items-center gap-2 font-Hanken_Grotesk text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span>Lunes a Viernes: 08:30 - 19:30 CET</span>
                  </div>
                </div>
              </div>

              {/* Archivos voluminosos */}
              <div className="rounded-lg bg-surface-container p-4">
                <div className="mb-2 flex items-center gap-2 font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary">
                  <span className="material-symbols-outlined text-[18px]">drive_folder_upload</span>
                  ¿Archivos STL o PLY voluminosos?
                </div>
                <p className="mb-2 font-Hanken_Grotesk text-body-sm text-on-surface-variant">
                  Puede transferir sus escaneados intraorales mediante WeTransfer, Dropbox o Google Drive directamente al email clínico:
                </p>
                <div className="rounded-sm bg-surface-container-lowest p-2 text-center font-mono text-[11px] text-secondary">
                  casos@akpdentallab.com
                </div>
                <p className="mt-2.5 font-Hanken_Grotesk text-body-sm italic text-outline">
                  «Revisamos cada correo con lupa clínica antes de responder; garantizamos cero margen de error en asentamientos protésicos.»
                </p>
              </div>

              {/* Imagen */}
              <div className="relative h-44 overflow-hidden rounded-lg bg-surface-container">
                <img
                  className="h-full w-full object-cover opacity-80"
                  src={ZIRCONIA_IMG}
                  alt="Estructura de zirconio sobre mesa clínica"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute inset-x-3 bottom-2 flex items-center justify-between">
                  <span className="font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary">
                    Estructuras Zirconio
                  </span>
                  <span className="font-Geist text-label-md font-semibold text-on-surface">
                    Ajuste Pasivo 100%
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ValuePropsSection />
      <FAQSection />
      <ConversionStrip />
      <Footer />
    </>
  );
}

export default App;
