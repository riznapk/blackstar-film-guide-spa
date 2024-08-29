import "./Header.scss";
import headerLogo from "../../assets/images/headerlogo.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import headerMobileLogo from "../../assets/images/header-mobile-logo.png";

function Header() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <header className="header">
      <Link className="logo" to="/">
        <img
          src={isDesktop ? headerLogo : headerMobileLogo}
          alt="Header Logo"
        />
      </Link>
    </header>
  );
}

export default Header;
