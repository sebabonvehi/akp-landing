import { WhatsAppFab } from './components/WhatsAppFab.jsx';
import { AboutSection } from './sections/AboutSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';
import { FaqSection } from './sections/FaqSection.jsx';
import { GallerySection } from './sections/GallerySection.jsx';
import { ServicesSection } from './sections/ServicesSection.jsx';
import { SiteFooter } from './sections/SiteFooter.jsx';
import { SiteHeader } from './sections/SiteHeader.jsx';

export function App() {
  return (
    <>
      <SiteHeader />
      <main id="content" tabIndex={-1} className="pt-16 focus:outline-none md:pt-20">
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
