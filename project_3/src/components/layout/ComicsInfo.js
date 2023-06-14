import { Link } from "react-router-dom";

function ComicsInfo(props) {
  const comics = props.comics.items;
  let remadeArr = comics[0].resourceURI.split("/");
  let comicsId = Number(remadeArr.splice(remadeArr.length - 1).join());
  return (
    <section className="info-container">
      <h3 className="info-title">Comics</h3>
      <ol className="info-list">
        {comics.map((item) => (
          <li className="info-list-item" key={item.name}>
            <Link to={"/comics/" + comicsId}>{item.name}</Link>
          </li>
        ))}
      </ol>
      {props.comics.available && props.comics.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default ComicsInfo;
