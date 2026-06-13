import { useRef, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { register } from "../../utils/auth";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTimeoutRef = useRef(null);

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setSuccessMessage("");
    setErrorMessage("");
  }

  function handleClose() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }

    resetForm();
    onClose();
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    register({ name, email, password })
      .then(() => {
        setSuccessMessage("Account created successfully. You can now log in.");

        setName("");
        setEmail("");
        setPassword("");

        redirectTimeoutRef.current = setTimeout(() => {
          resetForm();
          onLoginClick();
        }, 1000);
      })
      .catch((err) => {
        console.error("Erro ao criar conta:", err);

        if (err.status === 409) {
          setErrorMessage("This email is already registered.");
          return;
        }

        if (err.status === 400) {
          setErrorMessage("Please check your name, email, and password.");
          return;
        }

        setErrorMessage("Could not create account. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <ModalWithForm title="Sign Up" isOpen={isOpen} onClose={handleClose}>
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

        <button className="modal__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;