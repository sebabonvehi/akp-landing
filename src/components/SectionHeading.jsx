const ALIGN_CLASS = {
  start: 'section-heading',
  center: 'section-heading text-center',
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description = '',
  align = 'center',
  as: Heading = 'h2',
}) {
  return (
    <div className={ALIGN_CLASS[align]}>
      <span className="eyebrow">{eyebrow}</span>
      <Heading id={id} className="section-title">
        {title}
      </Heading>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
