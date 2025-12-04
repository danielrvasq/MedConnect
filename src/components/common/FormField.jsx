/**
 * Componente FormField accesible
 * Maneja inputs, labels, hints y errores de forma accesible
 */

import "./FormField.css";

export function FormField({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  hint,
  placeholder,
  ariaLabel,
  disabled = false,
  required = false,
  autoComplete,
  inputMode,
  min,
  max,
  step,
  onBlur,
  ...props
}) {
  const fieldId = `field-${name}`;
  const errorId = `error-${name}`;
  const hintId = `hint-${name}`;

  const ariaDescribedByArray = [];
  if (error) ariaDescribedByArray.push(errorId);
  if (hint) ariaDescribedByArray.push(hintId);
  const ariaDescribedBy = ariaDescribedByArray.length
    ? ariaDescribedByArray.join(" ")
    : undefined;

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={fieldId} className="form-field-label">
          {label}
          {required && (
            <span className="form-field-required" aria-label="requerido">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={fieldId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        min={min}
        max={max}
        step={step}
        className={`form-field-input ${error ? "form-field-input-error" : ""}`}
        aria-label={ariaLabel}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy}
        {...props}
      />

      {hint && !error && (
        <div id={hintId} className="form-field-hint">
          💡 {hint}
        </div>
      )}

      {error && (
        <div id={errorId} className="form-field-error" role="alert">
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

export default FormField;
