const SIZE_CLASS = {
  sm: 'icon-sm',
  md: 'icon-md',
  lg: 'icon-lg',
};

export function Icon({ name, size = 'md', className = '' }) {
  return (
    <span className={`icon ${SIZE_CLASS[size]} ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
