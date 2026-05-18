import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <h1 className="main__title">Organize your medications with clarity</h1>
        <p className="main__subtitle">
          Search medications, review available formulations, and save the ones
          that match your personal treatment routine.
        </p>
      </section>

      <SearchForm />
      <Preloader />
    </main>
  );
}

export default Main;