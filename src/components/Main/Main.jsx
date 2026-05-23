import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MedicationList from "../MedicationList/MedicationList";
import NothingFound from "../NothingFound/NothingFound";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { searchMedication } from "../../utils/rxnormApi";
import "./Main.css";

const SEARCH_RESULTS_KEY = "meditrackSearchResults";
const LAST_QUERY_KEY = "meditrackLastQuery";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [medications, setMedications] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastQuery, setLastQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedResults = localStorage.getItem(SEARCH_RESULTS_KEY);
    const savedQuery = localStorage.getItem(LAST_QUERY_KEY);

    if (savedResults) {
      setMedications(JSON.parse(savedResults));
      setHasSearched(true);
    }

    if (savedQuery) {
      setLastQuery(savedQuery);
    }
  }, []);

  function handleSearch(query) {
    navigate("/search");

    setIsLoading(true);
    setHasSearched(true);
    setHasError(false);
    setMedications([]);
    setLastQuery(query);

    localStorage.setItem(LAST_QUERY_KEY, query);

    searchMedication(query)
      .then((data) => {
        const conceptGroups = data.drugGroup.conceptGroup || [];

        const medicationResults = conceptGroups
          .filter((group) => group.conceptProperties)
          .flatMap((group) => group.conceptProperties);

        setMedications(medicationResults);
        setHasError(false);

        localStorage.setItem(
          SEARCH_RESULTS_KEY,
          JSON.stringify(medicationResults)
        );
      })
      .catch((error) => {
        console.error(error);
        setMedications([]);
        setHasError(true);
        localStorage.removeItem(SEARCH_RESULTS_KEY);
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
      {!hasError && (
        <MedicationList medications={medications} lastQuery={lastQuery} />
      )}
    </main>
  );
}

export default Main;
