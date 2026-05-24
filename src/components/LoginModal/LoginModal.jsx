import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      title="Log In"
      isOpen={isOpen}
      onClose={onClose}
    >
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
          Log In
        </button>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;