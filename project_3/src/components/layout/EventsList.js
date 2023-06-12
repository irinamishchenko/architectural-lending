import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/events";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function EventsList() {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  async function fetchEvents() {
    axios
      .get(baseURL, {
        params: {
          apikey: API_key,
          orderBy: "-startDate",
        },
      })
      .then((response) => setEvents(response.data.data.results))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchEvents();
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
          <button className="event-item-button">More</button>
        </div>
      </li>
    ));
    return <ul className="events-list">{eventsItems}</ul>;
  }
}

export default EventsList;
