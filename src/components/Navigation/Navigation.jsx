import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <button
        className="navigation__button navigation__button_type_secondary"
        type="button"
      >
        Sign Up
      </button>

      <button className="navigation__button" type="button">
        Log In
      </button>
    </nav>
  );
}

export default Navigation;