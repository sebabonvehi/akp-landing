/**
 * Botón reutilizable. Si recibe `href` se renderiza como <a>, si no como <button>.
 * size: 'md' (px-6) | 'lg' (px-8)
 */
const Button = ({ children, variant = 'primary', size = 'md', href, className = '', ...props }) => {
  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, ...props } : { type: 'button', ...props };

  const baseClasses =
    'inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-sm font-Geist text-[11px] font-semibold uppercase tracking-wider leading-none transition-colors [&_.material-symbols-outlined]:text-[18px]';

  const sizeClasses = {
    md: 'px-6',
    lg: 'px-8',
  };

  const variantClasses = {
    primary: 'bg-primary text-on-primary-container hover:bg-primary-container',
    secondary:
      'bg-surface-container-high text-on-surface hover:bg-surface-bright hover:text-primary',
    ghost:
      'bg-transparent text-on-surface-variant hover:bg-surface-container-lowest/10 hover:text-primary',
  };

  return (
    <Component
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export default Button;
