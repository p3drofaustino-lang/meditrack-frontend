import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__title">Organize your medications with clarity</h1>
          <p className="main__subtitle">
            Search medication data, compare available formulations, and prepare
            your personal medication list.
          </p>
          <SearchForm />
        </div>
      </section>
    </main>
  );
}

export default Main;