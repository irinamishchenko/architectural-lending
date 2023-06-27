import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/characters/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleCharacterEvents() {
  const params = useParams();
  const id = params.id;
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCharacterEvents() {
    axios
      .get(baseURL + "/" + id + "/events", {
        params: {
          apikey: API_key,
          limit: 100,
        },
      })
      .then((response) => setEvents(response.data.data.results))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchCharacterEvents();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (events) {
    const eventsItems = events.map((event) => (
      <li key={event.id} className="events-item">
        <img
          className="event-item-picture"
          src={event.thumbnail.path + "." + event.thumbnail.extension}
          alt={event.title}
        />
        <div className="event-item-info">
          <h2 className="event-item-title">{event.title}</h2>
          <p className="event-item-description">{event.description}</p>
          <Link to={"/events/" + event.id} className="event-item-button">
            More
          </Link>
        </div>
      </li>
    ));
    return (
      <>
        <ul className="events-list">{eventsItems}</ul>
      </>
    );
  }
}

export default SingleCharacterEvents;
