import { Link, useParams } from "react-router-dom";

function ComicsInfo(props) {
  const params = useParams();
  const id = params.id;
  let name = props.name;
  const comics = props.comics.items;
  const comicsItems = comics.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/comics/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));

  // const URL = name + "/" + id + "/comics";
  // console.log(name + "/" + id + "/comics");
  return (
    <section className="info-container">
      <h3 className="info-title">Comics</h3>
      <ol className="info-list">{comicsItems}</ol>
      {props.comics.available && props.comics.available > 20 ? (
        <Link to={"/" + name + "/" + id + "/comics"} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default ComicsInfo;
