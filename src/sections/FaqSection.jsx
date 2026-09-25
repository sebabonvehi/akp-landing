import { Icon } from '../components/Icon.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { FAQ_HEADING, FAQ_ITEMS } from '../data/faq.js';

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-canvas">
      <div className="container-page flex max-w-4xl flex-col gap-6">
        <SectionHeading id="faq-title" align="center" {...FAQ_HEADING} />

        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="faq-item group">
              <summary className="faq-question">
                <span>{item.question}</span>
                <Icon name="expand_more" className="faq-chevron" />
              </summary>
              <p className="body-sm pb-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
