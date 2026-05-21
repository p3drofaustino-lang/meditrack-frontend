import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MedicationList from "../MedicationList/MedicationList";
import NothingFound from "../NothingFound/NothingFound";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { searchMedication } from "../../utils/rxnormApi";
import "./Main.css";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [medications, setMedications] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleSearch(query) {
    setIsLoading(true);
    setHasSearched(true);
    setHasError(false);
    setMedications([]);

    searchMedication(query)
      .then((data) => {
        const conceptGroups = data.drugGroup.conceptGroup || [];

        const medicationResults = conceptGroups
          .filter((group) => group.conceptProperties)
          .flatMap((group) => group.conceptProperties);

        setMedications(medicationResults);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const isNothingFound =
    hasSearched && !isLoading && !hasError && medications.length === 0;

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

      {isNothingFound && <NothingFound />}
      {hasError && !isLoading && <ErrorMessage />}
      <MedicationList medications={medications} />
    </main>
  );
}

export default Main;