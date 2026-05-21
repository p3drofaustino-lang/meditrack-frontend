import "./MedicationCard.css";

function MedicationCard({ medication }) {
  return (
    <article className="medication-card">
      <h3 className="medication-card__title">{medication.name}</h3>
      <p className="medication-card__type">Type: {medication.tty}</p>
      <p className="medication-card__id">RxCUI: {medication.rxcui}</p>
      <button className="medication-card__button" type="button">
        Save
      </button>
    </article>
  );
}

export default MedicationCard;