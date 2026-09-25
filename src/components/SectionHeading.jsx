const ALIGN_CLASS = {
  start: 'section-heading',
  center: 'section-heading text-center',
};

export function SectionHeading({ id, eyebrow, title, description = '', align = 'start' }) {
  return (
    <div className={ALIGN_CLASS[align]}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
