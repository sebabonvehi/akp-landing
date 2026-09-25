import { getDescribedBy } from '../lib/fieldA11y.js';
import { FieldShell } from './FieldShell.jsx';
import { Icon } from './Icon.jsx';

export function Input({
  id,
  label,
  hint = '',
  error = '',
  icon = null,
  type = 'text',
  required = false,
  ...props
}) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} isRequired={required}>
      <div className="relative flex items-center">
        {icon && <Icon name={icon} className="input-icon" />}
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={getDescribedBy(id, { hint, error })}
          className={`input-field ${icon ? 'pl-10' : ''}`}
          {...props}
        />
      </div>
    </FieldShell>
  );
}
