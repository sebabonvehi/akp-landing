import { ContactSection } from './sections/ContactSection.jsx';
import { ConversionSection } from './sections/ConversionSection.jsx';
import { FaqSection } from './sections/FaqSection.jsx';
import { HeroSection } from './sections/HeroSection.jsx';
import { SiteFooter } from './sections/SiteFooter.jsx';
import { SiteHeader } from './sections/SiteHeader.jsx';
import { StatusBarSection } from './sections/StatusBarSection.jsx';
import { ValuePropsSection } from './sections/ValuePropsSection.jsx';

export function App() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="pt-16 md:pt-20">
        <StatusBarSection />
        <HeroSection />
        <ContactSection />
        <ValuePropsSection />
        <FaqSection />
        <ConversionSection />
      </main>
      <SiteFooter />
    </>
  );
}
