import "./NothingFound.css";

function NothingFound() {
  return (
    <section className="nothing-found">
      <div className="nothing-found__icon" aria-hidden="true">
        !
      </div>
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">
        No medications matched your search. Try another name or active substance.
      </p>
    </section>
  );
}

export default NothingFound;