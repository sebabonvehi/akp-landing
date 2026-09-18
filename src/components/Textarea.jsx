const Textarea = ({ placeholder, label, className = '', rows = 4, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      {label && (
        <div className="flex items-center justify-between">
          <label htmlFor={placeholder?.toLowerCase().replace(/\s+/g, '')} className="text-xs font-Geist uppercase tracking-wider text-primary">
            {label}
          </label>
          <span className="text-xs font-Geist uppercase text-outline">
            Detalle sustratos, espesores o fechas límite
          </span>
        </div>
      )}
      <textarea
        placeholder={placeholder}
        className={`w-full bg-surface-container-lowest text-on-surface font-Hanken_Grotesk text-body-md p-2.5 rounded focus:outline-none focus:bg-surface-container-high transition-colors resize-y ${className}`}
        rows={rows}
        {...props}
      />
    </div>
  );
};

export default Textarea;