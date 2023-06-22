import sprite from "../../images/sprite.svg";

const socialLinks = [
  {
    icon: "#facebook-icon",
    link: "https://www.facebook.com/Marvel/",
  },
  {
    icon: "#youtube-icon",
    link: "https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA",
  },
  {
    icon: "#pinterest-icon",
    link: "https://www.pinterest.com/marvelofficial/",
  },
  {
    icon: "#instagram-icon",
    link: "https://www.instagram.com/marvel/",
  },
  {
    icon: "#tumbler-icon",
    link: "https://marvelentertainment.tumblr.com/",
  },
  {
    icon: "#twitter-icon",
    link: "https://twitter.com/Marvel",
  },
];

function Socials() {
  const socialLinksItems = socialLinks.map((item, index) => (
    <li className="socials-list-item" key={index}>
      <a href={item.link} target="_blank">
        <svg>
          <use href={sprite + item.icon} />
        </svg>
      </a>
    </li>
  ));
  return <ul className="socials-list">{socialLinksItems}</ul>;
}

export default Socials;
