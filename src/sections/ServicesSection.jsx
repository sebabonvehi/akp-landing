import { Card } from '../components/Card.jsx';
import { Icon } from '../components/Icon.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { SERVICES, SERVICES_HEADING } from '../data/services.js';

export function ServicesSection() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="section bg-canvas">
      <div className="container-page flex flex-col gap-8">
        <SectionHeading id="services-title" {...SERVICES_HEADING} />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card as="li" key={service.id} className="card-interactive">
              <span className="icon-box">
                <Icon name={service.icon} size="lg" />
              </span>
              <h3 className="card-title italic">{service.name}</h3>
              <p className="body-sm">{service.description}</p>
              <ul className="flex flex-col gap-1">
                {service.indications.map((indication) => (
                  <li key={indication} className="list-item-check">
                    <Icon name="check" size="sm" className="text-gold" />
                    {indication}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
