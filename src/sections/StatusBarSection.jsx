import { STATUS_BAR } from '../data/hero.js';

export function StatusBarSection() {
  return (
    <div className="status-bar">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 text-gold">
            <span className="status-dot" aria-hidden="true" />
            {STATUS_BAR.status}
          </span>
          <span className="hidden text-outline sm:inline">/ {STATUS_BAR.formats}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="hidden text-outline md:inline">{STATUS_BAR.protocol} /</span>
          <span className="text-champagne">{STATUS_BAR.response}</span>
        </p>
      </div>
    </div>
  );
}
