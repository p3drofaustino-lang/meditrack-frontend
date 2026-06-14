import { useState } from "react";
import { FiBookmark, FiTrash2, FiEdit2, FiCheck, FiX } from "react-icons/fi";
import "./MedicationCard.css";

function MedicationCard({
  medication,
  savedMedication,
  onSaveMedication,
  onUpdateMedication,
  onDeleteMedication,
  isSaved = false,
  canEdit = false,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(medication.notes || "");
  const [frequency, setFrequency] = useState(medication.frequency || "");

  function handleSaveClick() {
    onSaveMedication(medication);
  }

  function handleDeleteClick() {
    const medicationId = savedMedication?._id || medication._id;
    onDeleteMedication(medicationId);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setNotes(medication.notes || "");
    setFrequency(medication.frequency || "");
    setIsEditing(false);
  }

  function handleSubmitEdit(event) {
    event.preventDefault();

    if (!onUpdateMedication) {
      return;
    }

    const medicationId = savedMedication?._id || medication._id;

    onUpdateMedication(medicationId, {
      notes,
      frequency,
    });

    setIsEditing(false);
  }

  return (
    <article className="medication-card">
      <span className="medication-card__badge">{medication.tty}</span>

      <div className="medication-card__section">
        <p className="medication-card__label">Medication</p>
        <h3 className="medication-card__title">{medication.name}</h3>
      </div>

      {medication.synonym && (
        <div className="medication-card__section">
          <p className="medication-card__label">Formulation / synonym</p>
          <p className="medication-card__text">{medication.synonym}</p>
        </div>
      )}

      <div className="medication-card__section">
        <p className="medication-card__label">RxCUI</p>
        <p className="medication-card__text">{medication.rxcui}</p>
      </div>

      {isSaved && !isEditing && (
        <>
          {medication.frequency && (
            <div className="medication-card__section">
              <p className="medication-card__label">Frequency</p>
              <p className="medication-card__text">{medication.frequency}</p>
            </div>
          )}

          {medication.notes && (
            <div className="medication-card__section">
              <p className="medication-card__label">Notes</p>
              <p className="medication-card__text">{medication.notes}</p>
            </div>
          )}
        </>
      )}

      {isSaved && canEdit && isEditing && (
        <form className="medication-card__edit-form" onSubmit={handleSubmitEdit}>
          <label className="medication-card__field">
            <span className="medication-card__label">Frequency</span>
            <input
              className="medication-card__input"
              type="text"
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
              placeholder="Example: Once daily"
              maxLength="100"
            />
          </label>

          <label className="medication-card__field">
            <span className="medication-card__label">Notes</span>
            <textarea
              className="medication-card__textarea"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Example: Take after food"
              maxLength="500"
            />
          </label>

          <div className="medication-card__actions">
            <button className="medication-card__button" type="submit">
              <FiCheck className="medication-card__button-icon" />
              Save changes
            </button>

            <button
              className="medication-card__button medication-card__button_type_secondary"
              type="button"
              onClick={handleCancelEdit}
            >
              <FiX className="medication-card__button-icon" />
              Cancel
            </button>
          </div>
        </form>
      )}

      {!isEditing &&
        (isSaved ? (
          <div className="medication-card__actions">
            {canEdit && (
              <button
                className="medication-card__button"
                type="button"
                onClick={handleEditClick}
              >
                <FiEdit2 className="medication-card__button-icon" />
                Edit
              </button>
            )}

            <button
              className="medication-card__button medication-card__button_type_secondary"
              type="button"
              onClick={handleDeleteClick}
            >
              <FiTrash2 className="medication-card__button-icon" />
              Remove
            </button>
          </div>
        ) : (
          <button
            className="medication-card__button"
            type="button"
            onClick={handleSaveClick}
          >
            <FiBookmark className="medication-card__button-icon" />
            Save
          </button>
        ))}
    </article>
  );
}

export default MedicationCard;