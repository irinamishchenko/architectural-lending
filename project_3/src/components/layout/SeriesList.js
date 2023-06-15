import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/series";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SeriesList() {
  const [series, setSeries] = useState(null);
  const [error, setError] = useState(null);

  async function fetchSeries() {
    axios
      .get(baseURL, {
        params: {
          apikey: API_key,
          orderBy: "-modified",
          contains: "comic",
        },
      })
      .then((response) => setSeries(response.data.data.results))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchSeries();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (series) {
    const seriesItems = series.map((item) => (
      <li key={item.id} className="series-item">
        <div className="series-add-info">
          <Link to={"/series/" + item.id} className="series-add-info-btn">
            More
          </Link>
        </div>
        <img
          className="series-item-picture"
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          alt={item.title}
        />
        <h2 className="series-item-title">{item.title}</h2>
        <p className="series-item-date">
          {item.startYear}-{item.endYear}
        </p>
      </li>
    ));
    return <ul className="series-list">{seriesItems}</ul>;
  }
}

export default SeriesList;
