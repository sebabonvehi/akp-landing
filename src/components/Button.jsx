import { Icon } from './Icon.jsx';

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

export function Button({
  variant = 'primary',
  icon = null,
  href = null,
  type = 'button',
  className = '',
  children,
  ...props
}) {
  const classes = `${VARIANT_CLASS[variant]} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
