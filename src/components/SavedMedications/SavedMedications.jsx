import MedicationCard from "../MedicationCard/MedicationCard";
import "../MedicationList/MedicationList.css";

function SavedMedications({ savedMedications, onDeleteMedication }) {
  return (
    <main className="saved-medications">
      <section className="medication-list">
        <h1 className="medication-list__title">Saved Medications</h1>

        {!savedMedications.length ? (
          <p>You have no saved medications yet.</p>
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