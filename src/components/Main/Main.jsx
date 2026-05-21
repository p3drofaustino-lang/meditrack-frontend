import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { searchMedication } from "../../utils/rxnormApi";
import "./Main.css";

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(query) {
    setIsLoading(true);

    searchMedication(query)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
    </main>
  );
}

export default Main;