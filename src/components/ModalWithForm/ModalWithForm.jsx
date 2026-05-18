import "./ModalWithForm.css";

function ModalWithForm({ title, children }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close" type="button" aria-label="Close" />
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;