/**
 * VideoCall - Pantalla de videollamada
 * Interfaz clara y accesible para consultas médicas
 */

import { useState } from "react";
import {
  FiPhoneOff,
  FiMic,
  FiMicOff,
  FiVideo,
  FiVideoOff,
  FiMessageSquare,
  FiPaperclip,
} from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button } from "../common/Button";
import { copy } from "../../data/copy";
import "./VideoCall.css";

export function VideoCall({ onNavigate }) {
  const [callState, setCallState] = useState("pre-call"); // pre-call, in-call, post-call
  const [showChecklist, setShowChecklist] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "doctor", text: "Hola, ¿cómo te sientes hoy?" },
    { sender: "patient", text: "Hola doctor, bien gracias" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleStartCall = () => {
    setCallState("in-call");
    setShowChecklist(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { sender: "patient", text: newMessage },
      ]);
      setNewMessage("");
      // Simular respuesta del doctor
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { sender: "doctor", text: "Entendido, gracias por compartir eso." },
        ]);
      }, 1000);
    }
  };

  const handleEndCall = () => {
    setCallState("post-call");
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback enviado:", { rating, feedback });
    onNavigate("dashboard");
  };

  return (
    <div className="video-call">
      {/* Pre-Call Screen */}
      {callState === "pre-call" && (
        <div className="video-call-container">
          <div className="precall-content">
            <div className="precall-main">
              
              <h1>{copy.videoCall.preCall.title}</h1>
              <p className="precall-subtitle">
                {copy.videoCall.preCall.subtitle}
              </p>

              <div className="countdown" role="status" aria-live="polite">
                <p className="hint">{copy.videoCall.preCall.hint}</p>
                <div className="countdown-timer">5:00</div>
              </div>

              {showChecklist && (
                <div className="precall-checklist">
                  <h2>{copy.videoCall.preCall.checklist.title}</h2>
                  <ul className="checklist">
                    {copy.videoCall.preCall.checklist.items.map((item, idx) => (
                      <li key={idx} className="checklist-item">
                        <input type="checkbox" id={`item-${idx}`} disabled />
                        <label htmlFor={`item-${idx}`}>{item}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="precall-camera-test">
                <div className="camera-preview">
                  <div className="camera-placeholder">📷 Tu cámara aquí</div>
                </div>
                <div className="test-buttons">
                  <Button variant="secondary" size="sm">
                    {copy.videoCall.preCall.cameraTest}
                  </Button>
                  <Button variant="secondary" size="sm">
                    {copy.videoCall.preCall.microphoneTest}
                  </Button>
                </div>
                <p className="audio-test">{copy.videoCall.preCall.audioTest}</p>
              </div>

              <div className="precall-actions">
                <Button
                  onClick={handleStartCall}
                  size="lg"
                  ariaLabel={copy.videoCall.preCall.buttons.readyAria}
                >
                  {copy.videoCall.preCall.buttons.ready}
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onNavigate("dashboard")}
                  ariaLabel={copy.videoCall.preCall.buttons.cancelAria}
                >
                  {copy.videoCall.preCall.buttons.cancel}
                </Button>
              </div>
            </div>

            <div className="precall-sidebar">
              <h3>Doctor de la cita</h3>
              <div className="doctor-card-mini">
                <div className="doctor-avatar">👨‍⚕️</div>
                <h4>Dr. Juan Pérez</h4>
                <p>Medicina General</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* In-Call Screen */}
      {callState === "in-call" && (
        <div className="video-call-active">
          <div className="video-container">
            <div className="video-remote">
              <video
                className="video-stream"
                aria-label={copy.videoCall.inCall.videoCallAria}
              >
                <track kind="captions" />
              </video>
              <div className="video-placeholder">
                <div className="video-avatar">👨‍⚕️</div>
                <div className="video-name">Dr. Juan Pérez</div>
                <div className="video-status">En línea</div>
              </div>
            </div>

            <div className="video-local">
              <div className="local-placeholder">Tú</div>
            </div>

            {/* Chat Sidebar */}
            {showChat && (
              <div className="chat-sidebar">
                <div className="chat-header">
                  <h3>Chat</h3>
                  <button
                    onClick={() => setShowChat(false)}
                    aria-label="Cerrar chat"
                  >
                    ✕
                  </button>
                </div>
                <div className="chat-messages">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`message message-${msg.sender}`}>
                      <p>{msg.text}</p>
                    </div>
                  ))}
                </div>
                <div className="chat-input">
                  <input
                    type="text"
                    placeholder={copy.videoCall.inCall.chatPlaceholder}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    aria-label={copy.videoCall.inCall.chatLabel}
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    ariaLabel={copy.videoCall.inCall.sendMessageAria}
                  >
                    {copy.videoCall.inCall.sendMessage}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="call-controls">
            <Button
              variant={isMuted ? "danger" : "secondary"}
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              ariaLabel={
                isMuted
                  ? copy.videoCall.inCall.controls.unmute
                  : copy.videoCall.inCall.controls.mute
              }
              aria-pressed={isMuted}
            >
              {isMuted ? (
                <FiMicOff style={{ marginRight: "4px" }} />
              ) : (
                <FiMic style={{ marginRight: "4px" }} />
              )}{" "}
              {copy.videoCall.inCall.controls.mute}
            </Button>

            <Button
              variant={isVideoOff ? "danger" : "secondary"}
              size="sm"
              onClick={() => setIsVideoOff(!isVideoOff)}
              ariaLabel={copy.videoCall.inCall.controls.toggleVideo}
              aria-pressed={isVideoOff}
            >
              {isVideoOff ? (
                <FiVideoOff style={{ marginRight: "4px" }} />
              ) : (
                <FiVideo style={{ marginRight: "4px" }} />
              )}{" "}
              Video
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowChat(!showChat)}
              ariaLabel={copy.videoCall.inCall.uploadDocumentsAria}
            >
              <FiMessageSquare style={{ marginRight: "4px" }} /> Chat
            </Button>

            <Button
              variant="secondary"
              size="sm"
              ariaLabel={copy.videoCall.inCall.uploadDocumentsAria}
            >
              <FiPaperclip style={{ marginRight: "4px" }} /> Docs
            </Button>

            <Button
              variant="danger"
              size="sm"
              onClick={handleEndCall}
              ariaLabel={copy.videoCall.inCall.controls.endCallAria}
            >
              <FiPhoneOff style={{ marginRight: "4px" }} /> Terminar
            </Button>
          </div>
        </div>
      )}

      {/* Post-Call Screen */}
      {callState === "post-call" && (
        <div className="video-call-container">
          <div className="postcall-content">
            <h1>{copy.videoCall.postCall.title}</h1>
            <p className="postcall-subtitle">
              {copy.videoCall.postCall.subtitle}
            </p>

            <div className="call-summary">
              <h2>Resumen de la consulta</h2>
              <div className="summary-items">
                <div className="summary-item">
                  <span className="summary-label">
                    {copy.videoCall.postCall.summary.doctorName}:
                  </span>
                  <span className="summary-value">Dr. Juan Pérez</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">
                    {copy.videoCall.postCall.summary.duration}:
                  </span>
                  <span className="summary-value">28 minutos</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">
                    {copy.videoCall.postCall.summary.diagnosis}:
                  </span>
                  <span className="summary-value">
                    Consulta general de chequeo. Todo parece estar bien.
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">
                    {copy.videoCall.postCall.summary.recommendations}:
                  </span>
                  <span className="summary-value">
                    Mantener buena hidratación. Ejercicio moderado 3 veces por
                    semana.
                  </span>
                </div>
              </div>
            </div>

            <div className="actions-section">
              <h2>{copy.videoCall.postCall.actions.rateDoctorTitle}</h2>
              <div className="rating-section">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`star ${star <= rating ? "filled" : ""}`}
                      onClick={() => setRating(star)}
                      aria-label={`Calificar ${star} de 5 estrellas`}
                      aria-pressed={star === rating}
                    >
                      {star <= rating ? (
                        <AiFillStar size={32} color="#fbbf24" />
                      ) : (
                        <AiOutlineStar size={32} color="#d1d5db" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                className="feedback-textarea"
                placeholder={copy.videoCall.postCall.feedback.placeholder}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                aria-label={copy.videoCall.postCall.feedback.label}
              />

              <div className="postcall-buttons">
                <Button size="sm" variant="secondary">
                  {copy.videoCall.postCall.actions.downloadSummary}
                </Button>
                <Button size="sm" variant="secondary">
                  {copy.videoCall.postCall.actions.downloadPrescription}
                </Button>
              </div>

              <Button
                onClick={handleSubmitFeedback}
                ariaLabel={copy.videoCall.postCall.feedback.submitAria}
              >
                {copy.videoCall.postCall.feedback.submit}
              </Button>
            </div>

            <div className="postcall-links">
              <Button
                variant="secondary"
                onClick={() => onNavigate("dashboard")}
              >
                {copy.videoCall.postCall.actions.home}
              </Button>
              <Button variant="secondary" onClick={() => onNavigate("book")}>
                {copy.videoCall.postCall.actions.reschedule}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoCall;
