import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!query.trim()) {
      return;
    }

    onSearch(query.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        name="medication"
        placeholder="Search medication"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        required
      />

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;