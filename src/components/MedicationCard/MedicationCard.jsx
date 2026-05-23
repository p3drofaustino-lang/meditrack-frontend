import "./MedicationCard.css";

function MedicationCard({ medication }) {
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

      <button className="medication-card__button" type="button">
        Save
      </button>
    </article>
  );
}

export default MedicationCard;