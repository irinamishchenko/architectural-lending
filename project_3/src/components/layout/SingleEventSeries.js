import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/events/";
const API_KEY = "95857d6d985fa57f979a3eca57531d54";

function SingleEventSeries() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [series, setSeries] = useState(null);
  const [error, setError] = useState(null);

  async function fetchEventsSeries() {
    axios
      .get(BASE_URL + "/" + ID + "/series", {
        params: {
          apikey: API_KEY,
          limit: 100,
        },
      })
      .then((response) => setSeries(response.data.data.results))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchEventsSeries();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (series) {
    const SERIES_ITEMS = series.map((item) => (
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
    return (
      <>
        <ul className="series-list">{SERIES_ITEMS}</ul>
      </>
    );
  }
}

export default SingleEventSeries;
