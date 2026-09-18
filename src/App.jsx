import './App.css';

// Import components
import Header from './components/Header';
import TechnicalMatrixBar from './components/TechnicalMatrixBar';
import Hero from './components/Hero';
import Form from './components/Form';
import ValuePropsSection from './components/ValuePropsSection';
import FAQSection from './components/FAQSection';
import ConversionStrip from './components/ConversionStrip';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <TechnicalMatrixBar />
      <Hero />
      <section id="formulario-consulta" className="w-full bg-surface-container-lowest px-4 md:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-center md:text-left">
            <span className="text-xs font-Geist uppercase tracking-widest text-primary block mb-1">
              Admisión Clínica Digital
            </span>
            <h2 className="text-2xl font-EB_Garamond text-on-surface">
              Formulario de Valoración Directa por Email
            </h2>
            <p className="text-sm font-Hanken_Grotesk text-on-surface-variant max-w-2xl">
              Complete los detalles de su caso. Nuestros directores de laboratorio estudiarán los datos antes de emitir un dictamen técnico exhaustivo a su correo.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 items-start">
            <div className="rounded-lg bg-surface-container p-4 md:p-5">
              <Form />
            </div>
            <aside className="flex flex-col gap-5">
              <div className="bg-surface-container rounded-lg p-5">
                <span className="text-xs font-Geist uppercase tracking-widest text-primary block mb-4">
                  Canales Inmediatos
                </span>
                <h3 className="text-2xl font-EB_Garamond text-on-surface mb-3">
                  Atención Directa por Email
                </h3>
                <p className="text-sm font-Hanken_Grotesk text-on-surface-variant mb-5">
                  Si ya cuenta con orden de trabajo propia o prefiere comunicarse desde su cliente de correo predilecto:
                </p>
                <div className="space-y-3 text-sm font-Hanken_Grotesk">
                  <div className="bg-surface-container-lowest p-3 rounded">
                    <span className="block text-xs font-Geist uppercase text-outline">Consultas generales & presupuestos:</span>
                    <a className="text-primary font-Geist text-xs uppercase" href="mailto:consultas@akpdentallab.com">consultas@akpdentallab.com</a>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded">
                    <span className="block text-xs font-Geist uppercase text-outline">Dirección técnica & CAD/CAM:</span>
                    <a className="text-primary font-Geist text-xs uppercase" href="mailto:lab@akpdentallab.com">lab@akpdentallab.com</a>
                  </div>
                  <div className="flex items-start gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
                    <span>Lunes a Viernes: 08:30 - 19:30 CET</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-5">
                <span className="text-xs font-Geist uppercase tracking-widest text-primary block mb-3">
                  ¿Archivos STL o PLY voluminosos?
                </span>
                <p className="text-sm font-Hanken_Grotesk text-on-surface-variant mb-4">
                  Puede transferir sus escaneados intraorales mediante WeTransfer, Dropbox o Google Drive directamente al email clínico:
                </p>
                <div className="bg-surface-container-lowest p-3 rounded text-center text-xs font-Geist uppercase text-secondary">
                  casos@akpdentallab.com
                </div>
                <p className="text-sm italic font-Hanken_Grotesk text-outline mt-4">
                  Revisamos cada correo con lupa clínica antes de responder.
                </p>
              </div>
              <div className="relative h-44 overflow-hidden rounded-lg bg-surface-container">
                <img
                  className="h-full w-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITeXJEALxB8QsdFKTriWxyDp5tLv95vJBxOaiVcNUP19O1mMM64sFWPOG3dExMdzxz29rY7BW4wWeDGBswt22DcisJvT3iM74Z-twPrOlqUOX0ZwqVqmkZumphsXjMXVjQJOGZwpTgBihz3BhUckdI471-bHN8z79RfY7JjbiKbHO2JUYKaxAY9ZyiXymPZa_1nCqNrt-gJpgqyzZICmBum4KwztZ3qls0kuNQmrtZTPo67VxX4bKLQ"
                  alt="Estructura de zirconio sobre mesa clínica"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-Geist uppercase">
                  <span className="text-primary">Estructuras Zirconio</span>
                  <span className="text-on-surface">Ajuste Pasivo 100%</span>
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

      <div className="ticks" />
      <section id="spacer" />
    </>
  );
}

export default App;
