import { NavLink } from "react-router-dom";
import { useState } from "react";
// import sprite from "./../../images/sprite.svg";

const LINKS = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "Characters",
    path: "/characters",
  },
  {
    link: "Comics",
    path: "/comics",
  },
  {
    link: "Events",
    path: "/events",
  },
  {
    link: "Series",
    path: "/series",
  },
];

// let burgerIcon = sprite + "#burger-menu-icon";
// let closeIcon = sprite + "#close-icon";

function Navigation(props) {
  // const [isMenuActive, setIsMenuActive] = useState(false);
  const NAV_ITEMS = LINKS.map((item) => (
    <li key={item.link}>
      <NavLink to={item.path} className="navigation-item">
        {item.link}
      </NavLink>
    </li>
  ));

  // function toggleBurgerMenu() {
  //   isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  // }

  return (
    // <div className="header-navigation-wrapper">
    //   <svg
    //     className={isMenuActive ? "header-close" : "header-burger-menu"}
    //     onClick={toggleBurgerMenu}
    //   >
    //     <use href={isMenuActive ? closeIcon : burgerIcon} />
    //   </svg>
    <nav>
      <ul
        className={
          props.isMenuActive ? "navigation" : "navigation navigation-inactive"
        }
      >
        {NAV_ITEMS}
      </ul>
    </nav>
    // </div>
  );
}

export default Navigation;
