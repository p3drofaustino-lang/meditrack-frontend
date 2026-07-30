import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import meditrackLogo from "../../assets/branding/meditrack_logo_horizontal.svg";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onRegisterClick, onSignOut }) {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img
          className="header__logo-image"
          src={meditrackLogo}
          alt="MediTrack"
        />
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