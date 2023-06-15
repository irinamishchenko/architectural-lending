import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComicsInfo from "./ComicsInfo";
import EventsInfo from "./EventsInfo";
import SeriesInfo from "./SeriesInfo";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/creators/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleCreator() {
  const params = useParams();
  const id = params.id;
  const [creator, setCreator] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCreator() {
    axios
      .get(baseURL + "/" + id, {
        params: {
          apikey: API_key,
        },
      })
      .then((response) => setCreator(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchCreator();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (creator) {
    return (
      <>
        <div className="creator-main-info">
          <h2 className="creator-name">{creator.fullName}</h2>
          {creator.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? null : (
            <img
              className="creator-picture"
              src={creator.thumbnail.path + "." + creator.thumbnail.extension}
              alt={creator.fullName}
            />
          )}
        </div>
        {creator.comics.items.length > 0 ? (
          <ComicsInfo comics={creator.comics} />
        ) : null}
        {creator.events.items.length > 0 ? (
          <EventsInfo events={creator.events} />
        ) : null}
        {creator.series.items.length > 0 ? (
          <SeriesInfo series={creator.series} />
        ) : null}
      </>
    );
  }
}

export default SingleCreator;
