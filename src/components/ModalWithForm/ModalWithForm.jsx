import "./ModalWithForm.css";

function ModalWithForm({ title, isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onMouseDown={onClose}>
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

        <h2 className="modal__title">{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;