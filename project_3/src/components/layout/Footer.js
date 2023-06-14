import Navigation from "./Navigation";
import Socials from "./Socials";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Navigation />
        <Socials />
        <img className="footer-logo" src={logo} alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;
