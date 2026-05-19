import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 MediTrack</p>

      <nav className="footer__navigation" aria-label="Footer navigation">
        <a className="footer__link" href="/">
          Home
        </a>
        <a className="footer__link" href="https://rxnav.nlm.nih.gov/" target="_blank" rel="noreferrer">
          RxNorm API
        </a>
      </nav>
    </footer>
  );
}

export default Footer;