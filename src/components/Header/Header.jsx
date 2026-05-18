import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <p className="header__logo">MediTrack</p>
      <Navigation />
    </header>
  );
}

export default Header;