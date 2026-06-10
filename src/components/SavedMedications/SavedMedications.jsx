import MedicationCard from "../MedicationCard/MedicationCard";
import "../MedicationList/MedicationList.css";
import "./SavedMedications.css";

function SavedMedications({ savedMedications, onDeleteMedication }) {
  return (
    <main className="saved-medications">
      <section className="saved-medications__container">
        <h1 className="saved-medications__title">Saved Medications</h1>

        {!savedMedications.length ? (
          <p className="saved-medications__empty">
            You have no saved medications yet.
          </p>
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