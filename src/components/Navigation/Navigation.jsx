import "./Navigation.css";

function Navigation({ onLoginClick, onRegisterClick }) {
  return (
    <nav className="navigation">
      <button
        className="navigation__button navigation__button_type_secondary"
        type="button"
        onClick={onRegisterClick}
      >
        Sign Up
      </button>

      <button
        className="navigation__button"
        type="button"
        onClick={onLoginClick}
      >
        Log In
      </button>
    </nav>
  );
}

export default Navigation;