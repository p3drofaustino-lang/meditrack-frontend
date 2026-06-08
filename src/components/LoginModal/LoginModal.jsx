import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { login, getCurrentUser } from "../../utils/auth";

function LoginModal({ isOpen, onClose, setIsLoggedIn, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);

        return getCurrentUser(data.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        onClose();
      })
      .catch((err) => {
        console.error("Erro ao fazer login:", err);
      });
  }

  return (
    <ModalWithForm title="Log In" isOpen={isOpen} onClose={onClose}>
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

        <button className="modal__submit" type="submit">
          Log In
        </button>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;