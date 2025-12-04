/**
 * MedicalHistory - Historial de consultas médicas
 * Muestra todas las consultas previas del paciente
 */

import { useState } from "react";
import { FiFileText, FiSearch, FiClock } from "react-icons/fi";
import { Button } from "../common/Button";
import { copy } from "../../data/copy";
import "./MedicalHistory.css";
import { FaArrowLeft, FaFileDownload, FaRegEye } from "react-icons/fa";

// Mock data
const mockConsultations = [
  {
    id: 1,
    date: "2024-11-28",
    time: "14:30",
    doctor: "Dr. Juan Pérez",
    specialty: "Medicina General",
    diagnosis: "Consulta de chequeo general",
    prescription: "Multivitamínico diario",
    notes: "Paciente en buen estado de salud. Continuar con hábitos actuales.",
  },
  {
    id: 2,
    date: "2024-11-15",
    time: "10:00",
    doctor: "Dra. María García",
    specialty: "Cardiología",
    diagnosis: "Presión arterial elevada (leve)",
    prescription: "Amlodipina 5mg cada mañana",
    notes: "Seguimiento en 1 mes. Redu cir sal en dieta.",
  },
  {
    id: 3,
    date: "2024-10-20",
    time: "16:00",
    doctor: "Dr. Carlos López",
    specialty: "Neurología",
    diagnosis: "Migraña",
    prescription: "Ibuprofeno 400mg según sea necesario",
    notes: "Realizar actividad física moderada. Evitar estrés.",
  },
];

export function MedicalHistory({ onNavigate }) {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConsultations = mockConsultations.filter((consultation) => {
    const matchesSearch =
      consultation.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "recent") {
      return matchesSearch;
    }
    return matchesSearch;
  });

  return (
    <div className="medical-history">
      <div className="medical-history-header">
        <h1>{copy.medicalHistory.title}</h1>
        <p>{copy.medicalHistory.subtitle}</p>
      </div>

      {filteredConsultations.length === 0 && !searchTerm ? (
        <div className="empty-state">
          <div className="empty-state-icon">
            <FiFileText size={80} />
          </div>
          <h2>{copy.medicalHistory.emptyState.title}</h2>
          <p>{copy.medicalHistory.emptyState.subtitle}</p>
          <Button onClick={() => onNavigate("book")}>
            {copy.medicalHistory.emptyState.button}
          </Button>
        </div>
      ) : (
        <>
          {/* Filters and Search */}
          <div className="medical-history-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder={copy.medicalHistory.filters.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label={copy.medicalHistory.filters.search}
              />
              <span className="search-icon">
                <FiSearch />
              </span>
            </div>

            <div className="filter-buttons">
              {["all", "recent", "byDoctor", "bySpecialty"].map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                >
                  {copy.medicalHistory.filters[f]}
                </button>
              ))}
            </div>
          </div>

          {/* Consultations List */}
          <div className="consultations-list">
            {filteredConsultations.map((consultation) => (
              <div
                key={consultation.id}
                className="consultation-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedConsultation(consultation)}
                onKeyPress={(e) =>
                  e.key === "Enter" && setSelectedConsultation(consultation)
                }
              >
                <div className="consultation-header">
                  <div className="consultation-date">
                    <span className="date-day">
                      {new Date(consultation.date).getDate()}
                    </span>
                    <span className="date-month">
                      {new Date(consultation.date).toLocaleDateString("es-ES", {
                        month: "short",
                      })}
                    </span>
                  </div>

                  <div className="consultation-info">
                    <h3>{consultation.doctor}</h3>
                    <p className="specialty">{consultation.specialty}</p>
                    <p className="time">
                      <FiClock style={{ marginRight: "4px" }} />{" "}
                      {consultation.time}
                    </p>
                  </div>

                  <div className="consultation-actions">
                    <span className="action-badge">
                      <FiFileText style={{ marginRight: "4px" }} />{" "}
                      {copy.medicalHistory.consultationCard.viewDetails}
                    </span>
                  </div>
                </div>

                <div className="consultation-details">
                  <div className="detail-item">
                    <span className="label">
                      {copy.medicalHistory.consultationCard.diagnosis}:
                    </span>
                    <span className="value">{consultation.diagnosis}</span>
                  </div>
                </div>

                <div className="consultation-actions-row">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("video-call");
                    }}
                    ariaLabel={
                      copy.medicalHistory.consultationCard.viewDetailsAria
                    }
                  >
                    <FaRegEye />
 Ver detalles
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    ariaLabel={
                      copy.medicalHistory.consultationCard.downloadReportAria
                    }
                  >
                    <FaFileDownload />
 Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Consultation Detail */}
          {selectedConsultation && (
            <div
              className="consultation-detail-modal"
              onClick={() => setSelectedConsultation(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedConsultation(null)}
                  aria-label={copy.medicalHistory.details.close}
                >
                  ✕
                </button>

                <h2>Detalles de la consulta</h2>

                <div className="modal-sections">
                  <div className="modal-section">
                    <h3>{copy.medicalHistory.details.sections.summary}</h3>
                    <div className="detail-row">
                      <span className="label">
                        {copy.medicalHistory.consultationCard.doctor}:
                      </span>
                      <span>{selectedConsultation.doctor}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Fecha:</span>
                      <span>
                        {new Date(selectedConsultation.date).toLocaleDateString(
                          "es-ES",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Hora:</span>
                      <span>{selectedConsultation.time}</span>
                    </div>
                  </div>

                  <div className="modal-section">
                    <h3>{copy.medicalHistory.details.sections.diagnosis}</h3>
                    <p>{selectedConsultation.diagnosis}</p>
                  </div>

                  <div className="modal-section">
                    <h3>{copy.medicalHistory.details.sections.prescription}</h3>
                    <p>{selectedConsultation.prescription}</p>
                  </div>

                  <div className="modal-section">
                    <h3>
                      {copy.medicalHistory.details.sections.recommendations}
                    </h3>
                    <p>{selectedConsultation.notes}</p>
                  </div>
                </div>

                <div className="modal-actions">
                  <Button size="sm" variant="secondary">
                    📥 {copy.medicalHistory.consultationCard.downloadReport}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      setSelectedConsultation(null);
                      onNavigate("book");
                    }}
                  >
                    {copy.medicalHistory.consultationCard.reschedule}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <button className="back-button" onClick={() => onNavigate("dashboard")}>
        <FaArrowLeft />
Volver {copy.medicalHistory.back}
      </button>
    </div>
  );
}

export default MedicalHistory;
