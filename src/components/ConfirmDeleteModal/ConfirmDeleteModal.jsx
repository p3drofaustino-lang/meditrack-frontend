import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ isOpen, medication, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirm-delete">
      <div className="confirm-delete__container">
        <button
          className="confirm-delete__close"
          type="button"
          onClick={onClose}
          aria-label="Close confirmation modal"
        >
          ×
        </button>

        <h2 className="confirm-delete__title">Remove medication?</h2>

        <p className="confirm-delete__text">
          Are you sure you want to remove{" "}
          <span className="confirm-delete__medication-name">
            {medication?.name}
          </span>
          ?
        </p>

        <div className="confirm-delete__actions">
          <button
            className="confirm-delete__button confirm-delete__button_type_danger"
            type="button"
            onClick={onConfirm}
          >
            Remove
          </button>

          <button
            className="confirm-delete__button confirm-delete__button_type_secondary"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;