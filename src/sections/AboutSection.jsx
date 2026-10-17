import { SectionHeading } from '../components/SectionHeading.jsx';
import { ABOUT_HEADING, ABOUT_PARAGRAPHS } from '../data/about.js';

export function AboutSection() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="section bg-surface">
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <SectionHeading id="about-title" align="center" {...ABOUT_HEADING} />

        <div className="flex max-w-3xl flex-col gap-4">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <div key={paragraph.id} className="flex flex-col items-center gap-2">
              <p className={paragraph.items ? 'card-title' : 'section-description text-justify'}>
                {paragraph.text}
              </p>
              {paragraph.items && (
                <ul className="section-description list-inside list-disc">
                  {paragraph.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
