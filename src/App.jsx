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
      <section id="formulario-consulta" className="w-full bg-surface-container-lowest px-6 pt-16">
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
          <Form />
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