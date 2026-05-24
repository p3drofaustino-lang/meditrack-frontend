import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose }) {
  return (
    <ModalWithForm title="Sign Up" isOpen={isOpen} onClose={onClose}>
      <form className="modal__form">
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
        />

        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          required
        />

        <button className="modal__submit" type="submit">
          Sign Up
        </button>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;