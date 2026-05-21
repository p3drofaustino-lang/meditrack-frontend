import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MedicationList from "../MedicationList/MedicationList";
import { searchMedication } from "../../utils/rxnormApi";

import "./Main.css";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [medications, setMedications] = useState([]);

  function handleSearch(query) {
    setIsLoading(true);

    searchMedication(query)
      .then((data) => {
        const conceptGroups = data.drugGroup.conceptGroup || [];

        const medicationResults = conceptGroups
          .filter((group) => group.conceptProperties)
          .flatMap((group) => group.conceptProperties);

        setMedications(medicationResults);

        console.log(medicationResults);
      })
  }

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__title">
            Organize your medications with clarity
          </h1>

          <p className="main__subtitle">
            Search medication data, compare available formulations, and prepare
            your personal medication list.
          </p>

          <SearchForm onSearch={handleSearch} />

          {isLoading && <Preloader />}
        </div>
      </section>
      <MedicationList medications={medications} />
    </main>
  );
}

export default Main;