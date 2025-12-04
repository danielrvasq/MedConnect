/**
 * MedConnect - App Principal
 * Gestión de navegación y rutas entre componentes
 */

import { useState, useEffect } from "react";
import "./App.css";

// Components
import { Onboarding } from "./components/pages/Onboarding";
import { Home } from "./components/pages/Home";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Dashboard } from "./components/pages/Dashboard";
import { BookAppointment } from "./components/pages/BookAppointment";
import { VideoCall } from "./components/pages/VideoCall";
import { MedicalHistory } from "./components/pages/MedicalHistory";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check if first time user
  useEffect(() => {
    const hasVisited = localStorage.getItem("medconnect_visited");
    if (hasVisited) {
      setIsFirstTime(false);
    }
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem("medconnect_visited", "true");
    setIsFirstTime(false);
    handleNavigate("register");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Juan", email: "juan@example.com" });
    handleNavigate("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    handleNavigate("home");
  };

  // Render onboarding if first time
  if (isFirstTime) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Routes
  return (
    <div className="app">
      {currentPage === "home" && <Home onNavigate={handleNavigate} />}
      {currentPage === "login" && (
        <Login
          onNavigate={(page) => {
            if (page === "dashboard") handleLogin();
            else handleNavigate(page);
          }}
        />
      )}
      {currentPage === "register" && <Register onNavigate={handleNavigate} />}
      {currentPage === "dashboard" && (
        <Dashboard onNavigate={handleNavigate} user={user} />
      )}
      {currentPage === "book" && (
        <BookAppointment onNavigate={handleNavigate} />
      )}
      {currentPage === "video-call" && (
        <VideoCall onNavigate={handleNavigate} />
      )}
      {currentPage === "history" && (
        <MedicalHistory onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
