import { Card } from '../components/Card.jsx';
import { Icon } from '../components/Icon.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { VALUE_PROPS, VALUE_PROPS_HEADING } from '../data/valueProps.js';

export function ValuePropsSection() {
  return (
    <section aria-labelledby="value-props-title" className="section bg-surface">
      <div className="container-page flex flex-col gap-6">
        <SectionHeading id="value-props-title" {...VALUE_PROPS_HEADING} />

        <ul className="grid gap-6 lg:grid-cols-3">
          {VALUE_PROPS.map((item) => (
            <Card as="li" key={item.id} className="card-interactive">
              <span className="icon-box">
                <Icon name={item.icon} size="lg" />
              </span>
              <span className="caption">{item.badge}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="body-sm">{item.description}</p>
              <p className="caption mt-auto pt-4 text-champagne">{item.footnote}</p>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
