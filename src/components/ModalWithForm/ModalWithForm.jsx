import meditrackMark from "../../assets/branding/meditrack_mark_blue.svg";
import "./ModalWithForm.css";

function ModalWithForm({ title, isOpen, onClose, children }) {
  return (
    <div 
    className={`modal ${isOpen ? "modal_opened" : ""}`} 
    onMouseDown={onClose}
    >
      <div
        className="modal__container"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        />

        <div className="modal__header">
          <img
            className="modal__logo"
            src={meditrackMark}
            alt=""
            aria-hidden="true"
          />
          <h2 className="modal__title">{title}</h2>

          <p className="modal__subtitle">Welcome to MediTrack</p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;