import { NavLink } from "react-router-dom";

const links = [
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

function Navigation() {
  const navItems = links.map((item) => (
    <li key={item.link}>
      <NavLink to={item.path} className="navigation-item">
        {item.link}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul className="navigation">{navItems}</ul>
    </nav>
  );
}

export default Navigation;
