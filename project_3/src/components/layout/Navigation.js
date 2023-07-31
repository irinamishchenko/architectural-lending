import { NavLink } from "react-router-dom";

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
  {
    link: "Creators",
    path: "/creators",
  },
];

function Navigation(props) {
  const isMenuActive = props.isMenuActive;
  const NAV_ITEMS = LINKS.map((item) => (
    <li key={item.link}>
      <NavLink to={item.path} className="navigation-item">
        {item.link}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul
        className={
          isMenuActive ? "navigation" : "navigation navigation-inactive"
        }
      >
        {NAV_ITEMS}
      </ul>
    </nav>
  );
}

export default Navigation;
