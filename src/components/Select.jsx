import { getDescribedBy } from '../lib/fieldA11y.js';
import { FieldShell } from './FieldShell.jsx';

export function Select({
  id,
  label,
  options,
  placeholder = '',
  hint = '',
  error = '',
  required = false,
  ...props
}) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} isRequired={required}>
      <select
        id={id}
        name={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={getDescribedBy(id, { hint, error })}
        className="input-field"
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
