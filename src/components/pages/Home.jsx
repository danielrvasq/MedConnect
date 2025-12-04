/**
 * Home - Landing page
 * Primera pantalla antes de autenticación
 */

import { FiClock, FiMessageSquare, FiLock, FiFileText } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import { Button } from "../common/Button";
import { copy } from "../../data/copy";
import "./Home.css";

export function Home({ onNavigate }) {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <header className="home-header">
        <div className="header-content">
          <h1 className="logo">MedConnect</h1>
          <nav className="header-nav">
            <button onClick={() => onNavigate("login")} className="nav-link">
              {copy.navigation.login}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{copy.home.title}</h1>
          <h2>{copy.home.subtitle}</h2>
          <p>{copy.home.tagline}</p>

          <div className="hero-buttons">
            <Button
              onClick={() => onNavigate("login")}
              size="lg"
              ariaLabel={copy.home.loginButtonAria}
            >
              {copy.home.loginButton}
            </Button>
            <Button
              onClick={() => onNavigate("register")}
              variant="secondary"
              size="lg"
              ariaLabel={copy.home.registerButtonAria}
            >
              {copy.home.registerButton}
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-icon">👨‍⚕️</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>¿Por qué elegir MedConnect?</h2>
        <div className="features-grid">
          {[
            {
              key: "feature1",
              icon: <FaUserMd size={48} />,
              title: "Doctores verificados",
              desc: "Profesionales de salud certificados",
            },
            {
              key: "feature2",
              icon: <FiLock size={48} />,
              title: "Privacidad garantizada",
              desc: "Tus datos están seguros y protegidos",
            },
            {
              key: "feature3",
              icon: <FiClock size={48} />,
              title: "Disponible 24/7",
              desc: "Consulta cuando lo necesites",
            },
            {
              key: "feature4",
              icon: <FiMessageSquare size={48} />,
              title: "Atención rápida",
              desc: "Respuestas en menos de 1 hora",
            },
          ].map((feature) => (
            <div key={feature.key} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Registrate</h3>
            <p>Crea tu cuenta en MedConnect</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Elige doctor</h3>
            <p>Selecciona un profesional según tus necesidades</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Agendar cita</h3>
            <p>Elige hora y fecha que te convenga</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Consulta</h3>
            <p>Videollamada segura con tu doctor</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>¿Listo para cuidar tu salud?</h2>
        <p>Únete a miles de pacientes que confían en MedConnect</p>
        <Button
          onClick={() => onNavigate("register")}
          size="lg"
          className="cta-button"
        >
          {copy.home.registerButton}
        </Button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>MedConnect</h4>
            <p>Telemedicina accesible para todos</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li>
                <a href="#privacy">Privacidad</a>
              </li>
              <li>
                <a href="#terms">Términos</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Seguros</h4>
            <ul>
              <li>
                <a href="#security">Seguridad</a>
              </li>
              <li>
                <a href="#compliance">Cumplimiento</a>
              </li>
              <li>
                <a href="#standards">Estándares</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MedConnect. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
