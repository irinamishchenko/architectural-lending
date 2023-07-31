import { Link, useParams } from "react-router-dom";

function ComicsInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const { NAME, COMICS } = props;
  const COMICS_ITEMS = COMICS.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/comics/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <section className="info-container comics-info-container">
      <h3 className="info-title">Comics</h3>
      <ol className="info-list">{COMICS_ITEMS}</ol>
      {props.comics.available && props.comics.available > 20 ? (
        <Link to={"/comics/" + NAME + "/" + ID} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default ComicsInfo;
