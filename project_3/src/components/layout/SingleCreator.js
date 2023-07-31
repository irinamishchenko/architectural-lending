import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_URL } from "./../../API_info";
import ComicsInfo from "./ComicsInfo";
import EventsInfo from "./EventsInfo";
import SeriesInfo from "./SeriesInfo";

function SingleCreator() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [creator, setCreator] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCreator() {
    axios
      .get(BASE_URL + "/creators/" + ID, {
        params: {
          apikey: API_KEY,
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
    const GENERAL_INFO = (
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
    );
    return (
      <>
        {GENERAL_INFO}
        {creator.comics.items.length > 0 ? (
          <ComicsInfo comics={creator.comics} name={"creators"} />
        ) : null}
        {creator.events.items.length > 0 ? (
          <EventsInfo events={creator.events} name={"creators"} />
        ) : null}
        {creator.series.items.length > 0 ? (
          <SeriesInfo series={creator.series} name={"creators"} />
        ) : null}
      </>
    );
  }
}

export default SingleCreator;
