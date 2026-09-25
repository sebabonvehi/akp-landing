import { getFieldIds } from '../lib/fieldA11y.js';

export function FieldShell({ id, label, hint = '', error = '', isRequired = false, children }) {
  const { hintId, errorId } = getFieldIds(id);

  return (
    <div className="field">
      <div className="field-header">
        <label htmlFor={id} className="input-label">
          {label}
          {isRequired && ' *'}
        </label>
        {hint && (
          <span id={hintId} className="input-hint">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p id={errorId} className="input-error">
          {error}
        </p>
      )}
    </div>
  );
}
