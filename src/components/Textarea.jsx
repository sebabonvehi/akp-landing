const Textarea = ({ label, hint, required, className = '', rows = 4, id, name, ...props }) => {
  const textareaId = id ?? name;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor={textareaId}
            className="font-Geist text-label-sm font-medium tracking-wider text-primary uppercase"
          >
            {label}
            {required && ' *'}
          </label>
          {hint && (
            <span className="hidden font-Geist text-label-sm text-outline sm:inline">{hint}</span>
          )}
        </div>
      )}
      <textarea
        id={textareaId}
        name={name}
        required={required}
        rows={rows}
        className={`w-full resize-y rounded-sm bg-surface-container-lowest p-3 font-Hanken_Grotesk text-body-md text-on-surface outline outline-1 outline-transparent transition-colors placeholder:text-on-surface-variant/80 focus:outline-primary ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
