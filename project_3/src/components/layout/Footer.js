import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Socials from "./Socials";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Navigation />
        <Socials />
        <Link to="/">
          <img className="footer-logo" src={logo} alt="logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
