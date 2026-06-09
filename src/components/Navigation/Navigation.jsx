import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginClick, onRegisterClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <p className="navigation__user">
            {currentUser?.name || currentUser?.email}
          </p>

          <button
            className="navigation__button"
            type="button"
            onClick={onSignOut}
          >
            Log Out
          </button>
        </>
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