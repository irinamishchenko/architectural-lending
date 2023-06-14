import sprite from "../../images/sprite.svg";

const socials = [
  "#facebook-icon",
  "#youtube-icon",
  "#pinterest-icon",
  "#instagram-icon",
  "#tumbler-icon",
  "#twitter-icon",
];

function Socials() {
  const socialLinks = socials.map((icon) => (
    <li className="socials-list-item" key={icon}>
      <a href="#">
        <svg>
          <use href={sprite + icon} />
        </svg>
      </a>
    </li>
  ));
  return <ul className="socials-list">{socialLinks}</ul>;
}

export default Socials;
