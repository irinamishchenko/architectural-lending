import { Link } from "react-router-dom";
import Navigation from "../layout/Navigation";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        <Navigation className="header-nav" />
      </div>
    </header>
  );
}

export default Header;
