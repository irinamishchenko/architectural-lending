const HOME_CONTENT = [
  {
    title: "Characters",
    info: "Choose your favourite characters and read more about them! What comics did they appear in? Who created them? Learn about the events and series of the Marvel Universe with their participation!",
  },
  {
    title: "Comics",
    info: "Do you want to read every Marvel comics ever released? Now you have this opportunity! Seacrh by title, type, start year or format you want.",
  },
  {
    title: "Events",
    info: "Your favourite characters take part in so many events! They don't come together very often, but when they do, how exciting it is!",
  },
  {
    title: "Series",
    info: "One more reason to know more about Marvel characters. For your convenience we have combined them into awsome series. Read and enjoy!",
  },
  {
    title: "Creators",
    info: "Do you want to know, who created your favourite characters, comics and stories? It's easy now!",
  },
];
function HomeInfo() {
  const CONTENT_ITEMS = HOME_CONTENT.map((item) => (
    <li key={item.title.toLowerCase()} className="home-info-list-item">
      <div className="home-info-title-wrapper">
        <h2 className="home-info-title">{item.title}</h2>
      </div>
      <p className="home-info-content">{item.info}</p>
    </li>
  ));
  return (
    <>
      <ul className="home-info-list">{CONTENT_ITEMS}</ul>
    </>
  );
}

export default HomeInfo;
