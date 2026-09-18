const Textarea = ({ placeholder, label, className = '', rows = 4, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      {label && (
        <div className="flex items-center justify-between">
          <label htmlFor={placeholder?.toLowerCase().replace(/\s+/g, '')} className="font-Geist text-[10px] font-medium uppercase tracking-wider text-primary">
            {label}
          </label>
          <span className="hidden sm:inline font-Geist text-[10px] uppercase tracking-wider text-outline">
            Detalle sustratos, espesores o fechas límite
          </span>
        </div>
      )}
      <textarea
        placeholder={placeholder}
        className={`w-full min-h-32 resize-y rounded bg-surface-container-lowest p-3 font-Hanken_Grotesk text-[14px] text-on-surface outline outline-1 outline-transparent transition-colors placeholder:text-outline focus:bg-surface-container-lowest focus:outline-primary ${className}`}
        rows={rows}
        {...props}
      />
    </div>
  );
};

export default Textarea;
