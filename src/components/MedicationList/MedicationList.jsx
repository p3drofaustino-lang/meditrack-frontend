import { useState, useEffect } from "react";
import MedicationCard from "../MedicationCard/MedicationCard";
import "./MedicationList.css";

const INITIAL_VISIBLE_CARDS = 3;
const CARDS_TO_ADD = 3;

function MedicationList({
  medications,
  savedMedications,
  onSaveMedication,
  onDeleteMedication,
}) {
  const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);

  useEffect(() => {
    setVisibleCards(INITIAL_VISIBLE_CARDS);
  }, [medications]);

  if (!medications.length) {
    return null;
  }

  const visibleMedications = medications.slice(0, visibleCards);
  const hasMoreCards = visibleCards < medications.length;

  function handleShowMore() {
    setVisibleCards(
      (currentVisibleCards) => currentVisibleCards + CARDS_TO_ADD
    );
  }

  return (
    <section className="medication-list">
      <h2 className="medication-list__title">Search results</h2>

      <div className="medication-list__grid">
        {visibleMedications.map((medication) => (
          <MedicationCard
            key={medication.rxcui}
            medication={medication}
            onSaveMedication={onSaveMedication}
            onDeleteMedication={onDeleteMedication}
            isSaved={savedMedications.some(
              (savedMedication) => savedMedication.rxcui === medication.rxcui
            )}
          />
        ))}
      </div>

      {hasMoreCards && (
        <button
          className="medication-list__show-more"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default MedicationList;