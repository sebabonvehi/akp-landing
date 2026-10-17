// Material Symbols has no brand icons, so Instagram is an inline SVG sized like `.icon`.
const SIZE_CLASS = {
  sm: 'size-4',
  md: 'size-5',
};

export function InstagramIcon({ size = 'md', className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${SIZE_CLASS[size]} ${className}`}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
