import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/events";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function EventsList() {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [order, setOrder] = useState(null);

  const orders = ["name", "startDate"];

  async function fetchEvents(search, order) {
    if (!search && !order) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
            orderBy: "-startDate",
          },
        })
        .then((response) => setEvents(response.data.data.results))
        .catch((error) => setError(error.message));
    } else if (search || order) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
            nameStartsWith: search,
            orderBy: order,
          },
        })
        .then((response) => setEvents(response.data.data.results))
        .catch((error) => setError(error.message));
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  function handleChange() {
    fetchEvents(search);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchEvents(search, order);
  }

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
    const ordersItems = orders.map((order) => (
      <option key={order}>{order}</option>
    ));
    return (
      <>
        <form
          className="events-form"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <input
            className="events-title-input"
            type="text"
            placeholder="title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label className="events-order-title">
            Order by:
            <select
              className="events-order-select"
              onChange={(e) => setOrder(e.target.value)}
            >
              {ordersItems}
            </select>
          </label>
          <input className="events-form-button" type="submit" value="Search" />
        </form>
        <ul className="events-list">{eventsItems}</ul>
      </>
    );
  }
}

export default EventsList;
