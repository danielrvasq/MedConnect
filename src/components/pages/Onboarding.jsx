/**
 * Onboarding - Tutorial interactivo para nuevos usuarios
 * Explica MedConnect de forma clara y accesible
 */

import { useState } from "react";
import { FiCalendar, FiLock } from "react-icons/fi";
import { RiHandHeartLine, RiSparklingLine } from "react-icons/ri";
import { Button } from "../common/Button";
import { copy } from "../../data/copy";
import "./Onboarding.css";

export function Onboarding({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    copy.onboarding.step1,
    copy.onboarding.step2,
    copy.onboarding.step3,
    copy.onboarding.step4,
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="onboarding">
      <div className="onboarding-container">
        <div className="onboarding-content">
          {/* Indicador de progreso */}
          <div
            className="onboarding-progress"
            role="progressbar"
            aria-valuenow={currentStep + 1}
            aria-valuemin="1"
            aria-valuemax={steps.length}
          >
            <div
              className="onboarding-progress-bar"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Contenido del paso */}
          <div className="onboarding-step">
            <h1 className="onboarding-title">{currentStepData.title}</h1>
            <h2 className="onboarding-subtitle">{currentStepData.subtitle}</h2>
            <p className="onboarding-description">
              {currentStepData.description}
            </p>
            <p className="onboarding-tip">{currentStepData.tip}</p>
          </div>

          {/* Botones */}
          <div className="onboarding-actions">
            {currentStep > 0 && (
              <Button
                variant="secondary"
                onClick={handlePrevious}
                ariaLabel="Volver al paso anterior"
              >
                ← Anterior
              </Button>
            )}

            <Button
              onClick={handleNext}
              ariaLabel={
                isLastStep ? "Crear cuenta y completar" : "Ir al siguiente paso"
              }
            >
              {isLastStep ? copy.onboarding.step4.button : "Siguiente →"}
            </Button>
          </div>

          {/* Opción para saltar */}
          <button
            onClick={onComplete}
            className="onboarding-skip"
            aria-label="Saltar tutorial"
          >
            {copy.onboarding.skip}
          </button>
        </div>

        {/* Visual - Icons/Illustration */}
        <div className="onboarding-visual">
          <div className="onboarding-icon">
            {currentStep === 0 && <RiHandHeartLine size={80} />}
            {currentStep === 1 && <FiCalendar size={80} />}
            {currentStep === 2 && <FiLock size={80} />}
            {currentStep === 3 && <RiSparklingLine size={80} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
