import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onLoginClick, onRegisterClick }) {
  return (
    <header className="header">
      <p className="header__logo">MediTrack</p>
      <Navigation
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
      />
    </header>
  );
}

export default Header;