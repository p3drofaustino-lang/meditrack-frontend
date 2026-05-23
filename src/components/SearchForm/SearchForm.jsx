import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleQueryChange(event) {
    setQuery(event.target.value);

    if (errorMessage) {
      setErrorMessage("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!query.trim()) {
      setErrorMessage("Please enter a medication name");
      return;
    }

    onSearch(query.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__field">
        <input
          className="search-form__input"
          type="text"
          name="medication"
          placeholder="Search medication"
          value={query}
          onChange={handleQueryChange}
        />

        {errorMessage && (
          <span className="search-form__error">{errorMessage}</span>
        )}
      </div>

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;