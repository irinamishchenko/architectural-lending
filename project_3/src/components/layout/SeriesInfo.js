import { Link } from "react-router-dom";

function SeriesInfo(props) {
  const series = props.series.items;
  let remadeArr = series[0].resourceURI.split("/");
  let seriesId = Number(remadeArr.splice(remadeArr.length - 1).join());
  return (
    <section className="info-container">
      <h3 className="info-title">Series</h3>
      <ol className="info-list">
        {series.map((item) => (
          <li className="info-list-item" key={item.name}>
            <Link to={"/series/" + seriesId}>{item.name}</Link>
          </li>
        ))}
      </ol>
      {props.series.available && props.series.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default SeriesInfo;
