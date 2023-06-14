import Navigation from "../layout/Navigation";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/">
          <img className="header-logo" src={logo} alt="logo" />
        </a>
        <Navigation className="header-nav" />
      </div>
    </header>
  );
}

export default Header;
