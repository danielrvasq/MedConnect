/**
 * Login - Iniciar sesión
 * Formulario accesible para autenticación
 */

import { useState } from "react";
import { Button } from "../common/Button";
import { FormField } from "../common/FormField";
import { copy } from "../../data/copy";
import "./Auth.css";

export function Login({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = copy.login.fields.email.errorEmpty;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = copy.login.fields.email.errorInvalid;
    }

    if (!formData.password) {
      newErrors.password = copy.login.fields.password.errorEmpty;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simular llamada a API
    setTimeout(() => {
      setLoading(false);
      // Simular login exitoso
      console.log("Login exitoso:", formData);
      onNavigate("dashboard");
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">MedConnect</h1>
          <h2 className="auth-subtitle">{copy.login.title}</h2>
          <p className="auth-description">{copy.login.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <FormField
            label={copy.login.fields.email.label}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            hint={copy.login.fields.email.placeholder}
            placeholder={copy.login.fields.email.placeholder}
            ariaLabel={copy.login.fields.email.ariaLabel}
            autoComplete="email"
            required
          />

          <div className="form-field">
            <label htmlFor="password" className="form-field-label">
              {copy.login.fields.password.label}
              <span className="form-field-required">*</span>
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={copy.login.fields.password.placeholder}
                className={`form-field-input ${
                  errors.password ? "form-field-input-error" : ""
                }`}
                aria-label={copy.login.fields.password.ariaLabel}
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "error-password" : undefined
                }
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? copy.login.fields.password.hidePassword
                    : copy.login.fields.password.showPassword
                }
                aria-pressed={showPassword}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && (
              <div
                id="error-password"
                className="form-field-error"
                role="alert"
              >
                ⚠️ {errors.password}
              </div>
            )}
          </div>

          <div className="auth-actions-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                defaultChecked
                aria-label={copy.login.rememberMe}
              />
              {copy.login.rememberMe}
            </label>
            <a href="#forgot" className="link">
              {copy.login.forgotPassword}
            </a>
          </div>

          <Button
            type="submit"
            loading={loading}
            ariaLabel={copy.login.submitButtonAria}
            className="auth-button"
          >
            {loading ? copy.login.submittingButton : copy.login.submitButton}
          </Button>
        </form>

        <div className="auth-footer">
          <p>
            {copy.login.registerLink}{" "}
            <button
              onClick={() => onNavigate("register")}
              className="link-button"
            >
              {copy.login.registerLinkText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
