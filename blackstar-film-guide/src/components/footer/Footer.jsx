import "./Footer.scss";
import footerLogo from "../../assets/images/footer-logo.png";
import unlovedLogo from "../../assets/images/unloved-heart-logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link className="logo" to="/">
        <img src={footerLogo} alt="footer-logo" />
      </Link>
      <div className="footer-middle">
        <p>© 2024 All Rights Reserved</p>
        <Link to="/">
          <p>Accessibility</p>
        </Link>
        <Link to="/">
          <p>Privacy Policy</p>
        </Link>
      </div>
      <Link to="https://theunloved.co.uk/">
        <div className="footer-end">
          Made with love by the unloved{" "}
          <span>
            <img src={unlovedLogo} alt="unloved-logo" />
          </span>
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
