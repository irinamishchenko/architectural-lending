import sprite from "../../images/sprite.svg";

const socials = [
  "#facebook-icon",
  "#youtube-icon",
  "#pinterest-icon",
  "#instagram-icon",
  "#tumbler-icon",
  "#twitter-icon",
];

const links = [
  "https://www.facebook.com/Marvel/",
  "https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA",
  "https://www.pinterest.com/marvelofficial/",
  "https://www.instagram.com/marvel/",
  "https://marvelentertainment.tumblr.com/",
  "https://twitter.com/Marvel",
];

function Socials() {
  const socialLinks = socials.map((icon, index) => (
    <li className="socials-list-item" key={icon}>
      <a href={links[index]} target="_blank">
        <svg>
          <use href={sprite + icon} />
        </svg>
      </a>
    </li>
  ));
  return <ul className="socials-list">{socialLinks}</ul>;
}

export default Socials;
