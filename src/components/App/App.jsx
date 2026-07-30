import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMedications from "../SavedMedications/SavedMedications";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getCurrentUser } from "../../utils/auth";
import {
  getSavedMedications,
  saveMedication,
  updateMedication,
  deleteMedication,
} from "../../utils/MainApi";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [savedMedications, setSavedMedications] = useState([]);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  function showFeedback(message, type = "success") {
    setFeedbackMessage(message);
    setFeedbackType(type);

    setTimeout(() => {
      setFeedbackMessage("");
      setFeedbackType("");
    }, 3000);
  }

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleRegisterClick() {
    setActiveModal("register");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedMedications([]);
  }

  function handleSaveMedication(medication) {
    const token = localStorage.getItem("jwt");

    if (!token) {
      handleLoginClick();
      return;
    }

    const isAlreadySaved = savedMedications.some(
      (savedMedication) =>
        String(savedMedication.rxcui) === String(medication.rxcui)
    );

    if (isAlreadySaved) {
      showFeedback("This medication is already saved.", "error");
      return;
    }

    saveMedication(token, {
      keyword: medication.name,
      name: medication.name,
      synonym: medication.synonym || "",
      tty: medication.tty,
      rxcui: medication.rxcui,
      notes: "",
      frequency: "",
    })
      .then((savedMedication) => {
        setSavedMedications((currentMedications) => [
          savedMedication,
          ...currentMedications,
        ]);
        showFeedback("Medication saved.");
      })
      .catch((err) => {
        console.error("Erro ao guardar medicamento:", err);
        showFeedback("Could not save medication. Please try again.", "error");
      });
  }

  function handleUpdateMedication(medicationId, data) {
    const token = localStorage.getItem("jwt");

    if (!token) {
      handleLoginClick();
      return;
    }

    updateMedication(token, medicationId, data)
      .then((updatedMedication) => {
        setSavedMedications((currentMedications) =>
          currentMedications.map((medication) =>
            medication._id === medicationId ? updatedMedication : medication
          )
        );
        showFeedback("Medication updated.");
      })
      .catch((err) => {
        console.error("Erro ao atualizar medicamento:", err);
        showFeedback("Could not update medication. Please try again.", "error");
      });
  }

  function handleDeleteMedicationClick(medication) {
    setSelectedMedication(medication);
    setActiveModal("confirm-delete");
  }

  function handleConfirmDeleteMedication() {
    if (!selectedMedication) {
      return;
    }

    handleDeleteMedication(selectedMedication._id);
  }

  function handleDeleteMedication(medicationId) {
    const token = localStorage.getItem("jwt");

    if (!token) {
      handleLoginClick();
      return;
    }

    deleteMedication(token, medicationId)
      .then(() => {
        setSavedMedications((currentMedications) =>
          currentMedications.filter(
            (medication) => medication._id !== medicationId
          )
        );
        showFeedback("Medication removed.");
        setSelectedMedication(null);
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Erro ao remover medicamento:", err);
        showFeedback("Could not remove medication. Please try again.", "error");
      });
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
      setIsAuthChecked(true);
      return;
    }

    getCurrentUser(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);

        return getSavedMedications(token);
      })
      .then((medications) => {
        setSavedMedications(medications);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
        setCurrentUser(null);
        setIsLoggedIn(false);
        setSavedMedications([]);
      })
      .finally(() => {
        setIsAuthChecked(true);
      });
  }, []);

  useEffect(() => {
    if (location.state?.openLoginModal) {
      setActiveModal("login");
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, location.state, navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
          onSignOut={handleSignOut}
        />

        {feedbackMessage && (
          <p
            className={`page__feedback page__feedback_type_${feedbackType}`}
            role="status"
          >
            {feedbackMessage}
          </p>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  savedMedications={savedMedications}
                  onSaveMedication={handleSaveMedication}
                  onDeleteMedication={handleDeleteMedicationClick}
                />
                <About />
              </>
            }
          />

          <Route
            path="/search"
            element={
              <Main
                savedMedications={savedMedications}
                onSaveMedication={handleSaveMedication}
                onDeleteMedication={handleDeleteMedicationClick}
              />
            }
          />

          <Route
            path="/saved-medications"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                isAuthChecked={isAuthChecked}
              >
                <SavedMedications
                  savedMedications={savedMedications}
                  onUpdateMedication={handleUpdateMedication}
                  onDeleteMedication={handleDeleteMedicationClick}
                />
              </ProtectedRoute>
            }
          />
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

        <ConfirmDeleteModal
          isOpen={activeModal === "confirm-delete"}
          medication={selectedMedication}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDeleteMedication}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;