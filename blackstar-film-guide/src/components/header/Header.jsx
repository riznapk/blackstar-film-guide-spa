import "./Header.scss";
import headerLogo from "../../assets/images/header-logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="logo">
        <img src={headerLogo} alt="Header Logo" />
      </nav>
    </header>
  );
}

export default Header;
