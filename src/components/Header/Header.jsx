import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onRegisterClick, onLogout }) {
  return (
    <header className="header">
      <p className="header__logo">MediTrack</p>

      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        onLogout={onLogout}
      />
    </header>
  );
}

export default Header;
