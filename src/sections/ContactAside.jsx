import { Card } from '../components/Card.jsx';
import { Icon } from '../components/Icon.jsx';
import { InstagramIcon } from '../components/InstagramIcon.jsx';
import { BUSINESS_HOURS, CONTACT_CHANNELS, SATURDAY_HOURS } from '../data/contact.js';
import { externalLinkProps } from '../lib/externalLinkProps.js';

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
              <a href={channel.href} className="text-link" {...externalLinkProps(channel.href)}>
                {channel.icon === 'instagram' ? (
                  <InstagramIcon size="sm" />
                ) : (
                  <Icon name={channel.icon} size="sm" />
                )}
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
        <p className="body-sm mt-1 flex items-center gap-2">
          <Icon name="schedule" size="sm" />
          {SATURDAY_HOURS}
        </p>
      </Card>
    </aside>
  );
}
