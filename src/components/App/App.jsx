import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleCloseModal() {
    setActiveModal("");
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

  return (
    <div className="page">
      <Header onLoginClick={handleLoginClick} />

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
      />

      <Footer />
    </div>
  );
}

export default App;