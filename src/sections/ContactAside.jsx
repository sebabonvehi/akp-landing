import { Card } from '../components/Card.jsx';
import { Icon } from '../components/Icon.jsx';
import { BUSINESS_HOURS, CONTACT_CHANNELS, CONTACT_IMAGE, LARGE_FILES } from '../data/contact.js';

export function ContactAside() {
  return (
    <aside className="flex flex-col gap-4 lg:col-span-4">
      <Card>
        <span className="eyebrow mb-4">{CONTACT_CHANNELS.eyebrow}</span>
        <h3 className="card-title mb-4">{CONTACT_CHANNELS.title}</h3>
        <p className="body-sm mb-4">{CONTACT_CHANNELS.description}</p>

        <ul className="flex flex-col gap-1">
          {CONTACT_CHANNELS.items.map((channel) => (
            <li key={channel.id} className="inset-box">
              <span className="caption block">{channel.label}</span>
              <a href={channel.href} className="text-link">
                <Icon name={channel.icon} size="sm" />
                {channel.value}
              </a>
            </li>
          ))}
        </ul>

        <p className="caption mt-4 text-on-surface">{CONTACT_CHANNELS.hoursLabel}</p>
        <p className="body-sm mt-1 flex items-center gap-2">
          <Icon name="schedule" size="sm" />
          {BUSINESS_HOURS}
        </p>
      </Card>

      <Card>
        <h3 className="eyebrow mb-2 flex items-center gap-2">
          <Icon name="drive_folder_upload" size="sm" />
          {LARGE_FILES.title}
        </h3>
        <p className="body-sm mb-2">{LARGE_FILES.description}</p>
        <a href={`mailto:${LARGE_FILES.email}`} className="inset-box text-link justify-center">
          {LARGE_FILES.email}
        </a>
        <p className="body-sm mt-2.5 text-outline italic">{LARGE_FILES.quote}</p>
      </Card>

      <figure className="relative h-44 overflow-hidden rounded-lg">
        <img src={CONTACT_IMAGE.src} alt={CONTACT_IMAGE.alt} className="media-image" />
        <div className="media-overlay" aria-hidden="true" />
        <figcaption className="media-caption">
          <span className="eyebrow">{CONTACT_IMAGE.tag}</span>
          <span className="caption text-on-surface">{CONTACT_IMAGE.caption}</span>
        </figcaption>
      </figure>
    </aside>
  );
}
