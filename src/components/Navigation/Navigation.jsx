import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginClick, onRegisterClick, onLogout }) {
  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <button
          className="navigation__button"
          type="button"
          onClick={onLogout}
        >
          Log Out
        </button>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
}

export default Navigation;