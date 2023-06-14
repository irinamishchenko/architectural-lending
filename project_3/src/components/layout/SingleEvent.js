import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharactersInfo from "./CharactersInfo";
import ComicsInfo from "./ComicsInfo";
import CreatorsInfo from "./CreatorsInfo";
import SeriesInfo from "./SeriesInfo";

const baseURL = "http://gateway.marvel.com/v1/public/events/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleEvent() {
  const params = useParams();
  const id = params.id;
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  async function fetchEvent() {
    axios
      .get(baseURL + "/" + id, {
        params: {
          apikey: API_key,
        },
      })
      .then((response) => setEvent(response.data.data.results[0]))
      // .then((response) => console.log(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (event) {
    console.log(event);
    return (
      <>
        <div className="event-main-info-wrapper">
          <img
            className="event-photo"
            src={event.thumbnail.path + "." + event.thumbnail.extension}
            alt={event.title}
          />
          <div className="event-description-container">
            <h2 className="event-title">{event.title}</h2>
            {event.description ? (
              <p className="event-description">{event.description}</p>
            ) : null}
          </div>
        </div>
        {event.characters.items.length > 0 ? (
          <CharactersInfo characters={event.characters} />
        ) : null}
        {event.comics.items.length > 0 ? (
          <ComicsInfo comics={event.comics} />
        ) : null}
        {event.creators.items.length > 0 ? (
          <CreatorsInfo creators={event.creators} />
        ) : null}
        {event.series.items.length > 0 ? (
          <SeriesInfo series={event.series} />
        ) : null}
      </>
    );
  }
}

export default SingleEvent;