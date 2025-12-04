/**
 * Dashboard - Pantalla principal después de login
 * Muestra opciones rápidas y próxima cita
 */

import { useState } from "react";
import { FiCalendar, FiFileText, FiClock } from "react-icons/fi";
import { RiHandHeartLine } from "react-icons/ri";
import { GiMedicines, GiNightSleep, GiWaterDrop } from "react-icons/gi";
import { Button } from "../common/Button";
import { copy } from "../../data/copy";
import "./Dashboard.css";
import { FaDoorOpen, FaHeart } from "react-icons/fa";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { LuSalad } from "react-icons/lu";

export function Dashboard({ onNavigate, user = { name: "Juan" } }) {
  const [showMenu, setShowMenu] = useState(false);

  const upcomingAppointment = {
    date: "2024-12-05",
    time: "14:30",
    doctor: "Dr. Juan Pérez",
    specialty: "Medicina General",
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="logo">MedConnect</h1>
          <button
            className="menu-toggle"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Abrir menú"
            aria-expanded={showMenu}
          >
            ☰
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`dashboard-nav ${showMenu ? "active" : ""}`}
          role="navigation"
        >
          <button onClick={() => onNavigate("book")} className="nav-item">
            <FiCalendar style={{ marginRight: "8px" }} />{" "}
            {copy.navigation.bookAppointment}
          </button>
          <button onClick={() => onNavigate("history")} className="nav-item">
            <FiFileText style={{ marginRight: "8px" }} />{" "}
            {copy.navigation.medicalHistory}
          </button>
          <button
            onClick={() => onNavigate("home")}
            className="nav-item danger"
          >
            <FaDoorOpen /> {copy.navigation.logout}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2>
              ¡Hola, {user.name}!{" "}
              <RiHandHeartLine style={{ display: "inline" }} />
            </h2>
            <p>Bienvenido a MedConnect. Tu salud es nuestra prioridad.</p>
          </section>

          {/* Upcoming Appointment Card */}
          <section className="upcoming-section">
            <h3>Tu próxima cita</h3>
            <div className="appointment-card">
              <div className="appointment-badge">Próxima</div>
              <div className="appointment-main">
                <div className="appointment-time">
                  <span className="time">{upcomingAppointment.time}</span>
                  <span className="date">
                    {new Date(upcomingAppointment.date).toLocaleDateString(
                      "es-ES",
                      { weekday: "long", month: "long", day: "numeric" }
                    )}
                  </span>
                </div>
                <div className="appointment-details">
                  <h4>{upcomingAppointment.doctor}</h4>
                  <p>{upcomingAppointment.specialty}</p>
                  <p className="reminder">
                    <FiClock style={{ marginRight: "4px" }} /> Recibirás un
                    recordatorio 24 horas antes
                  </p>
                </div>
              </div>
              <div className="appointment-actions">
                <Button
                  size="sm"
                  onClick={() => onNavigate("video-call")}
                  ariaLabel="Ir a la cita"
                >
                  Ir a la cita
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => onNavigate("book")}
                >
                  Reprogramar
                </Button>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions">
            <h3>Acciones rápidas</h3>
            <div className="actions-grid">
              <button
                className="action-card"
                onClick={() => onNavigate("book")}
                role="button"
                tabIndex={0}
              >
                <span className="action-icon">
                  <FiCalendar size={36} />
                </span>
                <span className="action-title">Agendar cita</span>
                <span className="action-desc">Reserva una consulta</span>
              </button>

              <button
                className="action-card"
                onClick={() => onNavigate("history")}
                role="button"
                tabIndex={0}
              >
                <span className="action-icon">
                  <FiFileText size={36} />
                </span>
                <span className="action-title">Mi historial</span>
                <span className="action-desc">Consultas anteriores</span>
              </button>

              <button
                className="action-card"
                onClick={() => {}}
                role="button"
                tabIndex={0}
              >
                <span className="action-icon">
                  <GiMedicines size={36} />
                </span>
                <span className="action-title">Mis recetas</span>
                <span className="action-desc">Recetas activas</span>
              </button>

              <button
                className="action-card"
                onClick={() => {}}
                role="button"
                tabIndex={0}
              >
                <span className="action-icon">
                  <FaHeart />
                </span>
                <span className="action-title">Mi salud</span>
                <span className="action-desc">Datos y métricas</span>
              </button>
            </div>
          </section>

          {/* Health Tips */}
          <section className="health-tips">
            <h3>Consejos de salud</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">
                  <GiWaterDrop />
                </div>
                <h4>Mantente hidratado</h4>
                <p>
                  Bebe al menos 8 vasos de agua al día para mantener una buena
                  salud.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">
                  <MdOutlineSportsMartialArts />
                </div>
                <h4>Ejercicio regular</h4>
                <p>
                  30 minutos de actividad física moderada la mayoría de los
                  días.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">
                  <GiNightSleep />
                </div>
                <h4>Duerme bien</h4>
                <p>Duerme entre 7-9 horas cada noche para una salud óptima.</p>
              </div>

              <div className="tip-card">
                <div className="tip-icon">
                  <LuSalad />
                </div>
                <h4>Come saludable</h4>
                <p>Incluye frutas, verduras y proteína en cada comida.</p>
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="emergency-section">
            <div className="emergency-card">
              <h3>⚠️ En caso de emergencia</h3>
              <p>
                Si experimentas síntomas graves, llama a emergencias
                inmediatamente.
              </p>
              <p className="emergency-number">
                <strong>Emergencias: 911</strong>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
