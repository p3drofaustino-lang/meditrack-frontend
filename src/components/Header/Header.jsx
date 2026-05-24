import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <p className="header__logo">MediTrack</p>
      <Navigation onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;