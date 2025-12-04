/**
 * BookAppointment - Agendar una cita
 * Flujo multi-paso para reservar una consulta
 */

import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../common/Button";
import { copy } from "../../data/copy";
import "./BookAppointment.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Mock data
const specialties = [
  {
    id: "general",
    name: copy.bookAppointment.specialty.options.generalMedicine,
    desc: copy.bookAppointment.specialty.options.generalMedicineDesc,
  },
  {
    id: "cardio",
    name: copy.bookAppointment.specialty.options.cardiology,
    desc: copy.bookAppointment.specialty.options.cardiologyDesc,
  },
  {
    id: "neuro",
    name: copy.bookAppointment.specialty.options.neurology,
    desc: copy.bookAppointment.specialty.options.neurologyDesc,
  },
  {
    id: "derma",
    name: copy.bookAppointment.specialty.options.dermatology,
    desc: copy.bookAppointment.specialty.options.dermatologyDesc,
  },
  {
    id: "psych",
    name: copy.bookAppointment.specialty.options.psychiatry,
    desc: copy.bookAppointment.specialty.options.psychiatryDesc,
  },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    specialty: "general",
    experience: 15,
    rating: 4.8,
    consultations: 2500,
    image: "👨‍⚕️",
    price: "95.000 COP",
  },
  {
    id: 2,
    name: "Dra. María García",
    specialty: "cardio",
    experience: 12,
    rating: 4.9,
    consultations: 2100,
    image: "👩‍⚕️",
    price: "114.000 COP",
  },
  {
    id: 3,
    name: "Dr. Carlos López",
    specialty: "neuro",
    experience: 20,
    rating: 4.7,
    consultations: 3200,
    image: "👨‍⚕️",
    price: "133.000 COP",
  },
];

export function BookAppointment({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  const getNextWeekDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    console.log("Cita confirmada:", {
      specialty: selectedSpecialty,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
    });
    onNavigate("dashboard");
  };

  const filteredDoctors = doctors.filter(
    (doc) => doc.specialty === selectedSpecialty
  );

  return (
    <div className="book-appointment">
      <div className="book-appointment-container">
        {/* Header */}
        <div className="book-appointment-header">
          <h1>{copy.bookAppointment.title}</h1>
          <p>{copy.bookAppointment.subtitle}</p>
        </div>

        {/* Progress indicator */}
        <div className="progress-steps">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`progress-step ${
                currentStep >= step ? "active" : ""
              } ${currentStep === step ? "current" : ""}`}
              aria-current={currentStep === step ? "step" : undefined}
            >
              <span className="progress-step-number">{step}</span>
              <span className="progress-step-label">
                {copy.bookAppointment.steps[`step${step}`]}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Specialty */}
        {currentStep === 1 && (
          <div className="appointment-step">
            <h2>{copy.bookAppointment.specialty.label}</h2>
            <p className="step-hint">{copy.bookAppointment.specialty.hint}</p>

            <div className="specialty-grid">
              {specialties.map((spec) => (
                <button
                  key={spec.id}
                  className={`specialty-card ${
                    selectedSpecialty === spec.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSpecialty(spec.id)}
                  aria-pressed={selectedSpecialty === spec.id}
                  aria-label={`Seleccionar ${spec.name}`}
                >
                  <div className="specialty-card-title">{spec.name}</div>
                  <div className="specialty-card-desc">{spec.desc}</div>
                </button>
              ))}
            </div>

            <div className="step-actions">
              <Button
                variant="secondary"
                onClick={() => onNavigate("dashboard")}
              >
                <FaArrowLeft />
 Cancelar
              </Button>
              <Button onClick={handleNext} disabled={!selectedSpecialty}>
                Siguiente <FaArrowRight />

              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Doctor */}
        {currentStep === 2 && (
          <div className="appointment-step">
            <h2>{copy.bookAppointment.doctor.label}</h2>
            <p className="step-hint">{copy.bookAppointment.doctor.hint}</p>

            {filteredDoctors.length === 0 ? (
              <div className="empty-state">
                <p>No hay doctores disponibles para esta especialidad</p>
              </div>
            ) : (
              <div className="doctors-list">
                {filteredDoctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    className={`doctor-card ${
                      selectedDoctor === doctor.id ? "selected" : ""
                    }`}
                    onClick={() => setSelectedDoctor(doctor.id)}
                    aria-pressed={selectedDoctor === doctor.id}
                  >
                    <div className="doctor-avatar">{doctor.image}</div>
                    <div className="doctor-info">
                      <h3>{doctor.name}</h3>
                      <div className="doctor-meta">
                        <span>
                          {doctor.experience}{" "}
                          {copy.bookAppointment.doctor.cardInfo.experience}
                        </span>
                        <span>
                          <AiFillStar
                            style={{ color: "#fbbf24", marginRight: "2px" }}
                          />{" "}
                          {doctor.rating}
                        </span>
                        <span>
                          {doctor.consultations}{" "}
                          {
                            copy.bookAppointment.doctor.cardInfo
                              .consultationsCompleted
                          }
                        </span>
                      </div>
                      <div className="doctor-price">
                        {doctor.price}{" "}
                        {copy.bookAppointment.doctor.cardInfo.price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="step-actions">
              <Button variant="secondary" onClick={handlePrevious}>
                ← Anterior
              </Button>
              <Button onClick={handleNext} disabled={!selectedDoctor}>
                Siguiente →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Date and Time */}
        {currentStep === 3 && (
          <div className="appointment-step">
            <div className="date-time-container">
              <div className="date-section">
                <h2>{copy.bookAppointment.dateTime.dateLabel}</h2>
                <p className="step-hint">
                  {copy.bookAppointment.dateTime.dateHint}
                </p>
                <div className="dates-grid">
                  {getNextWeekDates().map((date, index) => {
                    const dateStr = date.toISOString().split("T")[0];
                    const dayName = date.toLocaleDateString("es-ES", {
                      weekday: "short",
                    });
                    const dayNum = date.getDate();
                    return (
                      <button
                        key={index}
                        className={`date-option ${
                          selectedDate === dateStr ? "selected" : ""
                        }`}
                        onClick={() => setSelectedDate(dateStr)}
                        aria-pressed={selectedDate === dateStr}
                      >
                        <div className="date-day">{dayName}</div>
                        <div className="date-num">{dayNum}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div className="time-section">
                  <h2>{copy.bookAppointment.dateTime.timeLabel}</h2>
                  <p className="step-hint">
                    {copy.bookAppointment.dateTime.timeHint}
                  </p>
                  <div className="times-grid">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        className={`time-option ${
                          selectedTime === time ? "selected" : ""
                        }`}
                        onClick={() => setSelectedTime(time)}
                        aria-pressed={selectedTime === time}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="step-actions">
              <Button variant="secondary" onClick={handlePrevious}>
                ← Anterior
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
              >
                Siguiente →
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="appointment-step">
            <h2>{copy.bookAppointment.confirmation.title}</h2>
            <p>{copy.bookAppointment.confirmation.subtitle}</p>

            <div className="confirmation-details">
              <div className="detail-row">
                <span className="detail-label">
                  {copy.bookAppointment.confirmation.details.specialty}:
                </span>
                <span className="detail-value">
                  {specialties.find((s) => s.id === selectedSpecialty)?.name}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">
                  {copy.bookAppointment.confirmation.details.doctor}:
                </span>
                <span className="detail-value">
                  {doctors.find((d) => d.id === selectedDoctor)?.name}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">
                  {copy.bookAppointment.confirmation.details.date}:
                </span>
                <span className="detail-value">
                  {new Date(selectedDate).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">
                  {copy.bookAppointment.confirmation.details.time}:
                </span>
                <span className="detail-value">{selectedTime}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">
                  {copy.bookAppointment.confirmation.details.duration}:
                </span>
                <span className="detail-value">30 minutos</span>
              </div>
              <div className="detail-row total">
                <span className="detail-label">
                  {copy.bookAppointment.confirmation.totalPrice}:
                </span>
                <span className="detail-value">
                  {doctors.find((d) => d.id === selectedDoctor)?.price}
                </span>
              </div>
            </div>

            <div className="step-actions">
              <Button variant="secondary" onClick={handlePrevious}>
                ← Anterior
              </Button>
              <Button
                onClick={handleConfirm}
                ariaLabel={copy.bookAppointment.confirmation.confirmButtonAria}
              >
                {copy.bookAppointment.confirmation.confirmButton}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;
