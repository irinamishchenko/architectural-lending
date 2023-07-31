import { Link, useParams } from "react-router-dom";

function SeriesInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const { NAME, SERIES } = props;
  const SERIES_ITEMS = SERIES.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/series/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container series-info-container">
      <h3 className="info-title">Series</h3>
      <ol className="info-list">{SERIES_ITEMS}</ol>
      {props.series.available && props.series.available > 20 ? (
        <Link to={"/series/" + NAME + "/" + ID} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default SeriesInfo;
