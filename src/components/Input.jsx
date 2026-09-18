const Input = ({ type = 'text', placeholder, label, required, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      {label && (
        <label htmlFor={placeholder?.toLowerCase().replace(/\s+/g, '')} className="text-xs font-Geist uppercase tracking-wider flex items-center justify-between">
          <span>{label}</span>
          {required && <span className="text-outline text-[9px]">Requerido</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {props.iconLeft && (
          <span className={`material-symbols-outlined absolute left-2 text-outline text-[18px] ${props.iconLeftClass || ''}`}>
            {props.iconLeft}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-surface-container-lowest text-on-surface font-Hanken_Grotesk text-body-md pl-10 pr-3 py-1.5 rounded focus:outline-none focus:bg-surface-container-high transition-colors ${className}`}
          {...props}
        />
        {props.iconRight && (
          <span className={`material-symbols-outlined absolute right-2 text-outline text-[18px] ${props.iconRightClass || ''}`}>
            {props.iconRight}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;