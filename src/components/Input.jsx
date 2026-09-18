const Input = ({
  type = 'text',
  placeholder,
  label,
  required,
  className = '',
  iconLeft,
  iconLeftClass = '',
  iconRight,
  iconRightClass = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      {label && (
        <label htmlFor={placeholder?.toLowerCase().replace(/\s+/g, '')} className="flex items-center justify-between font-Geist text-[10px] font-medium uppercase tracking-wider text-primary">
          <span>{label}</span>
          {required && <span className="text-outline text-[9px]">Requerido</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {iconLeft && (
          <span className={`material-symbols-outlined absolute left-3 text-primary text-[17px] ${iconLeftClass}`}>
            {iconLeft}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`h-10 w-full rounded bg-surface-container-lowest pl-10 pr-3 font-Hanken_Grotesk text-[14px] text-on-surface outline outline-1 outline-transparent transition-colors placeholder:text-outline focus:bg-surface-container-lowest focus:outline-primary ${className}`}
          {...props}
        />
        {iconRight && (
          <span className={`material-symbols-outlined absolute right-3 text-outline text-[17px] ${iconRightClass}`}>
            {iconRight}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
