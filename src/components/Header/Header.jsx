import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onRegisterClick, onSignOut }) {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        MediTrack
      </Link>

      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        onSignOut={onSignOut}
      />
    </header>
  );
}

export default Header;