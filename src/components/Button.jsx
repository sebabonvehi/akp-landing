const Button = ({ children, variant = 'primary', className = '', asChild = false, ...props }) => {
  const Component = asChild ? props.as || 'span' : 'button';

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-Geist text-xs uppercase px-5 py-2 rounded shadow-lg transition-all';

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-container text-on-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.35)]',
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