import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getCurrentUser } from "../../utils/auth";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleRegisterClick() {
    setActiveModal("register");
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  }

  useEffect(() => {
    if (!activeModal) {
      return undefined;
    }

    function handleEscClose(event) {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }

    getCurrentUser(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
        setCurrentUser(null);
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
          onSignOut={handleSignOut}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <About />
              </>
            }
          />

          <Route path="/search" element={<Main />} />
        </Routes>

        <LoginModal
          isOpen={activeModal === "login"}
          onClose={handleCloseModal}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentUser={setCurrentUser}
        />

        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={handleCloseModal}
          onLoginClick={handleLoginClick}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;