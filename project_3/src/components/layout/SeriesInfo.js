import { Link } from "react-router-dom";

function SeriesInfo(props) {
  const series = props.series.items;
  const seriesItems = series.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/series/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Series</h3>
      <ol className="info-list">
        {/* {series.map((item) => (
          <li className="info-list-item" key={item.name}>
            <Link
              to={"/series/" + item.resourceURI.split("/").splice(6).join()}
            >
              {item.name}
            </Link>
          </li>
        ))} */}
        {seriesItems}
      </ol>
      {props.series.available && props.series.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default SeriesInfo;
