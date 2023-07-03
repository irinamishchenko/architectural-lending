import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "../layout/Navigation";
import logo from "../../images/logo.png";
import sprite from "./../../images/sprite.svg";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  let burgerIcon = sprite + "#burger-menu-icon";
  let closeIcon = sprite + "#close-icon";

  function toggleBurgerMenu() {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>

        <div className="header-navigation-wrapper">
          <svg
            className={isMenuActive ? "header-close" : "header-burger-menu"}
            onClick={toggleBurgerMenu}
          >
            <use href={isMenuActive ? closeIcon : burgerIcon} />
          </svg>
          <Navigation isMenuActive={isMenuActive} />
        </div>
      </div>
    </header>
  );
}

export default Header;
