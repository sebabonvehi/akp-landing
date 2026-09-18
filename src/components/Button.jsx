const Button = ({ children, variant = 'primary', className = '', asChild = false, ...props }) => {
  const Component = asChild ? props.as || 'span' : 'button';

  const baseClasses = 'inline-flex h-10 items-center justify-center gap-2 rounded px-7 font-Geist text-[11px] font-semibold uppercase tracking-wider leading-none transition-all [&_.material-symbols-outlined]:text-[18px]';

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-container text-on-primary-container',
    secondary: 'bg-surface-container-high hover:bg-surface-bright text-on-surface hover:text-primary',
    ghost: 'bg-transparent hover:bg-surface-container-lowest/10 text-on-surface-variant hover:text-primary'
  };

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
