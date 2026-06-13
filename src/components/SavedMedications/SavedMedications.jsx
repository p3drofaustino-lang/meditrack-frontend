import { Link } from "react-router-dom";
import MedicationCard from "../MedicationCard/MedicationCard";
import "../MedicationList/MedicationList.css";
import "./SavedMedications.css";

function SavedMedications({ savedMedications, onDeleteMedication }) {
  return (
    <main className="saved-medications">
      <section className="saved-medications__container">
        <h1 className="saved-medications__title">Saved Medications</h1>

        <p className="saved-medications__subtitle">
          Review and manage the medications you have saved.
        </p>

        {!savedMedications.length ? (
          <div className="saved-medications__empty">
            <h2 className="saved-medications__empty-title">
              No saved medications yet
            </h2>

            <p className="saved-medications__empty-text">
              Search for medications and save the ones you want to keep track
              of.
            </p>

            <Link className="saved-medications__empty-link" to="/">
              Search medications
            </Link>
          </div>
        ) : (
          <div className="medication-list__grid">
            {savedMedications.map((medication) => (
              <MedicationCard
                key={medication._id}
                medication={medication}
                isSaved
                onDeleteMedication={onDeleteMedication}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default SavedMedications;