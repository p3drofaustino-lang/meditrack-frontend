import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { login, getCurrentUser } from "../../utils/auth";

function LoginModal({ isOpen, onClose, setIsLoggedIn, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleClose() {
    setEmail("");
    setPassword("");
    setErrorMessage("");
    onClose();
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);

        return getCurrentUser(data.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleClose();
      })
      .catch((err) => {
        console.error("Erro ao fazer login:", err);
        setErrorMessage("Incorrect email or password. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <ModalWithForm title="Log In" isOpen={isOpen} onClose={handleClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="email"
          required
        />

        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
          required
        />

        {errorMessage && <p className="modal__error">{errorMessage}</p>}

        <button className="modal__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;