import { Link } from "react-router-dom";

function ComicsInfo(props) {
  const comics = props.comics.items;
  const comicsItems = comics.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/comics/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <section className="info-container">
      <h3 className="info-title">Comics</h3>
      <ol className="info-list">{comicsItems}</ol>
      {props.comics.available && props.comics.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default ComicsInfo;
