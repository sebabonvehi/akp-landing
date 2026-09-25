const Input = ({
  type = 'text',
  label,
  hint,
  required,
  className = '',
  iconLeft,
  iconRight,
  id,
  name,
  ...props
}) => {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor={inputId}
            className="font-Geist text-label-sm font-medium tracking-wider text-primary uppercase"
          >
            {label}
            {required && ' *'}
          </label>
          {hint && (
            <span className="shrink-0 font-Geist text-[9px] tracking-wider text-outline uppercase">
              {hint}
            </span>
          )}
        </div>
      )}
      <div className="relative flex items-center">
        {iconLeft && (
          <span className="material-symbols-outlined pointer-events-none absolute left-3 text-[18px] text-primary">
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          required={required}
          className={`h-10 w-full rounded-sm bg-surface-container-lowest ${iconLeft ? 'pl-10' : 'pl-3'} ${iconRight ? 'pr-10' : 'pr-3'} font-Hanken_Grotesk text-body-md text-on-surface outline outline-1 outline-transparent transition-colors placeholder:text-on-surface-variant/80 focus:outline-primary ${className}`}
          {...props}
        />
        {iconRight && (
          <span className="material-symbols-outlined pointer-events-none absolute right-3 text-[18px] text-outline">
            {iconRight}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
