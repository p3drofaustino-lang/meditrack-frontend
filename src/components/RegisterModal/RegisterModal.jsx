import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { register } from "../../utils/auth";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    register({ name, email, password })
      .then(() => {
        setSuccessMessage("Account created successfully.");

        setName("");
        setEmail("");
        setPassword("");

        setTimeout(() => {
          onLoginClick();
        }, 1000);
      })
      .catch((err) => {
        console.error("Erro ao criar conta:", err);
        setErrorMessage("Could not create account. Please check your data.");
      });
  }

  return (
    <ModalWithForm title="Sign Up" isOpen={isOpen} onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />

        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />

        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          required
        />

        {successMessage && (
          <p className="modal__message modal__message_type_success">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="modal__message modal__message_type_error">
            {errorMessage}
          </p>
        )}

        <button className="modal__submit" type="submit">
          Sign Up
        </button>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;