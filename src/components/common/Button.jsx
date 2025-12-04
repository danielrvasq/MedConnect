/**
 * Componente Button accesible
 * Proporciona botones con ARIA labels y estados visuales claros
 */

import "./Button.css";

export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  ariaLabel,
  ariaDescribedBy,
  className = "",
  ...props
}) {
  const buttonClass = `button button-${variant} button-${size} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="button-spinner" aria-hidden="true"></span>
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
