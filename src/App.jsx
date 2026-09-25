import { AboutSection } from './sections/AboutSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';
import { ConversionSection } from './sections/ConversionSection.jsx';
import { FaqSection } from './sections/FaqSection.jsx';
import { HeroSection } from './sections/HeroSection.jsx';
import { ServicesSection } from './sections/ServicesSection.jsx';
import { SiteFooter } from './sections/SiteFooter.jsx';
import { SiteHeader } from './sections/SiteHeader.jsx';
import { StatusBarSection } from './sections/StatusBarSection.jsx';
import { ValuePropsSection } from './sections/ValuePropsSection.jsx';

export function App() {
  return (
    <>
      <SiteHeader />
      <main id="content" tabIndex={-1} className="pt-16 focus:outline-none md:pt-20">
        <StatusBarSection />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <ValuePropsSection />
        <FaqSection />
        <ConversionSection />
      </main>
      <SiteFooter />
    </>
  );
}
