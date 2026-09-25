import { Card } from '../components/Card.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { CONTACT_HEADING } from '../data/contact.js';
import { ContactAside } from './ContactAside.jsx';
import { ContactForm } from './ContactForm.jsx';

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="section bg-canvas">
      <div className="container-page flex flex-col gap-6">
        <SectionHeading id="contact-title" {...CONTACT_HEADING} />

        <div className="grid items-start gap-6 lg:grid-cols-12">
          <Card className="lg:col-span-8">
            <ContactForm />
          </Card>
          <ContactAside />
        </div>
      </div>
    </section>
  );
}
