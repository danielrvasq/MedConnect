/**
 * Register - Crear nueva cuenta
 * Formulario completo con validación accesible
 */

import { useState } from "react";
import { Button } from "../common/Button";
import { FormField } from "../common/FormField";
import { copy } from "../../data/copy";
import "./Auth.css";

export function Register({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    documentId: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex =
      /^(\+57|0057|57)?[\s.-]?[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?[0-9]{2}[\s.-]?[0-9]{2}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validatePasswordStrength = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      password
    );
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.fullName.trim()) {
      newErrors.fullName = copy.register.fields.fullName.errorEmpty;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = copy.register.fields.fullName.errorShort;
    } else if (!/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/.test(formData.fullName)) {
      newErrors.fullName = copy.register.fields.fullName.errorInvalid;
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = copy.register.fields.email.errorEmpty;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = copy.register.fields.email.errorInvalid;
    }

    // Validar teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = copy.register.fields.phone.errorEmpty;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = copy.register.fields.phone.errorInvalid;
    }

    // Validar fecha de nacimiento
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = copy.register.fields.dateOfBirth.errorEmpty;
    } else {
      const age = calculateAge(formData.dateOfBirth);
      if (age < 18) {
        newErrors.dateOfBirth = copy.register.fields.dateOfBirth.errorAge;
      }
    }

    // Validar documento
    if (!formData.documentId.trim()) {
      newErrors.documentId = copy.register.fields.documentId.errorEmpty;
    } else if (formData.documentId.length < 5) {
      newErrors.documentId = copy.register.fields.documentId.errorInvalid;
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = copy.register.fields.password.errorEmpty;
    } else if (formData.password.length < 8) {
      newErrors.password = copy.register.fields.password.errorShort;
    } else if (!validatePasswordStrength(formData.password)) {
      newErrors.password = copy.register.fields.password.errorWeak;
    }

    // Validar confirmación de contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        copy.register.fields.confirmPassword.errorEmpty;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        copy.register.fields.confirmPassword.errorMismatch;
    }

    // Validar términos
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = copy.register.termsError;
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
      console.log("Registro exitoso:", formData);
      onNavigate("login");
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card auth-card-large">
        <div className="auth-header">
          <h1 className="auth-title">MedConnect</h1>
          <h2 className="auth-subtitle">{copy.register.title}</h2>
          <p className="auth-description">{copy.register.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <FormField
            label={copy.register.fields.fullName.label}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            hint={copy.register.fields.fullName.hint}
            placeholder={copy.register.fields.fullName.placeholder}
            ariaLabel={copy.register.fields.fullName.ariaLabel}
            autoComplete="name"
            required
          />

          <FormField
            label={copy.register.fields.email.label}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            hint={copy.register.fields.email.hint}
            placeholder={copy.register.fields.email.placeholder}
            ariaLabel={copy.register.fields.email.ariaLabel}
            autoComplete="email"
            required
          />

          <FormField
            label={copy.register.fields.phone.label}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            hint={copy.register.fields.phone.hint}
            placeholder="+57 3XX XXX XXXX"
            ariaLabel={copy.register.fields.phone.ariaLabel}
            autoComplete="tel"
            required
          />

          <FormField
            label={copy.register.fields.dateOfBirth.label}
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            error={errors.dateOfBirth}
            hint={copy.register.fields.dateOfBirth.hint}
            ariaLabel={copy.register.fields.dateOfBirth.ariaLabel}
            required
          />

          <FormField
            label={copy.register.fields.documentId.label}
            type="text"
            name="documentId"
            value={formData.documentId}
            onChange={handleChange}
            error={errors.documentId}
            hint={copy.register.fields.documentId.hint}
            placeholder={copy.register.fields.documentId.placeholder}
            ariaLabel={copy.register.fields.documentId.ariaLabel}
            autoComplete="off"
            required
          />

          {/* Password field con toggle */}
          <div className="form-field">
            <label htmlFor="password" className="form-field-label">
              {copy.register.fields.password.label}
              <span className="form-field-required">*</span>
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={copy.register.fields.password.placeholder}
                className={`form-field-input ${
                  errors.password ? "form-field-input-error" : ""
                }`}
                aria-label={copy.register.fields.password.ariaLabel}
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "error-password" : "hint-password"
                }
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? copy.register.fields.password.hidePassword
                    : copy.register.fields.password.showPassword
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
            {!errors.password && (
              <div id="hint-password" className="form-field-hint">
                💡 {copy.register.fields.password.hint}
              </div>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword" className="form-field-label">
              {copy.register.fields.confirmPassword.label}
              <span className="form-field-required">*</span>
            </label>
            <div className="password-input-wrapper">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={copy.register.fields.confirmPassword.placeholder}
                className={`form-field-input ${
                  errors.confirmPassword ? "form-field-input-error" : ""
                }`}
                aria-label={copy.register.fields.confirmPassword.ariaLabel}
                aria-invalid={!!errors.confirmPassword}
                aria-describedby={
                  errors.confirmPassword ? "error-confirmPassword" : undefined
                }
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword
                    ? copy.register.fields.password.hidePassword
                    : copy.register.fields.password.showPassword
                }
                aria-pressed={showConfirmPassword}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <div
                id="error-confirmPassword"
                className="form-field-error"
                role="alert"
              >
                ⚠️ {errors.confirmPassword}
              </div>
            )}
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              aria-label={copy.register.terms}
            />
            {copy.register.terms}
          </label>
          {errors.acceptTerms && (
            <div className="form-field-error" role="alert">
              ⚠️ {errors.acceptTerms}
            </div>
          )}

          <Button
            type="submit"
            loading={loading}
            ariaLabel={copy.register.submitButtonAria}
            className="auth-button"
          >
            {loading
              ? copy.register.submittingButton
              : copy.register.submitButton}
          </Button>
        </form>

        <div className="auth-footer">
          <p>
            {copy.register.loginLink}{" "}
            <button onClick={() => onNavigate("login")} className="link-button">
              {copy.register.loginLinkText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
