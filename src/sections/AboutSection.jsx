import { SectionHeading } from '../components/SectionHeading.jsx';
import { ABOUT_AUDIENCE, ABOUT_HEADING, ABOUT_PARAGRAPHS } from '../data/about.js';

export function AboutSection() {
  return (
    <section id="quienes-somos" aria-labelledby="about-title" className="section bg-surface">
      <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-5">
          <SectionHeading id="about-title" {...ABOUT_HEADING} />
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.id} className="section-description">
              {paragraph.text}
            </p>
          ))}

          <div className="flex flex-col gap-2 pt-2">
            <p className="caption">{ABOUT_AUDIENCE.label}</p>
            <ul className="flex flex-wrap gap-1.5">
              {ABOUT_AUDIENCE.items.map((item) => (
                <li key={item} className="badge">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
