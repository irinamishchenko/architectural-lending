import Navigation from "../layout/Navigation";
import logo from "../../images/logo.png";
// import "../../styles/css/styles.css";

// const links = [
//   {
//     link: "Home",
//     path: "/",
//   },
//   {
//     link: "Characters",
//     path: "/characters",
//   },
//   {
//     link: "Comics",
//     path: "/comics",
//   },
//   {
//     link: "Events",
//     path: "/events",
//   },
//   {
//     link: "Series",
//     path: "/series",
//   },
// ];

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
