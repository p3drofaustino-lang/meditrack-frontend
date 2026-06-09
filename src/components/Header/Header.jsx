import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onRegisterClick, onSignOut }) {
  return (
    <header className="header">
      <p className="header__logo">MediTrack</p>

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