import MedicationCard from "../MedicationCard/MedicationCard";
import "./MedicationList.css";

function MedicationList({ medications }) {
  if (!medications.length) {
    return null;
  }

  return (
    <section className="medication-list">
      <h2 className="medication-list__title">Search results</h2>

      <div className="medication-list__grid">
        {medications.slice(0, 3).map((medication) => (
          <MedicationCard
            key={medication.rxcui}
            medication={medication}
          />
        ))}
      </div>
    </section>
  );
}

export default MedicationList;