import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_URL } from "./../../API_info";
import Buttons from "./Buttons";

function EventsList() {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchEvents(search, offset, order) {
    if (!search && !order) {
      axios
        .get(BASE_URL + "/events", {
          params: {
            apikey: API_KEY,
            orderBy: "-startDate",
            limit: LIMIT,
            offset: offset,
          },
        })
        .then(
          (response) => (
            setEvents(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    } else if (search || order) {
      axios
        .get(BASE_URL + "/events", {
          params: {
            apikey: API_KEY,
            nameStartsWith: search,
            limit: LIMIT,
            offset: offset,
            orderBy: order,
          },
        })
        .then(
          (response) => (
            setEvents(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  function handleChange() {
    fetchEvents(search, offset);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchEvents(search, offset, order);
  }

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchEvents(search, offset - LIMIT, order);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchEvents(search, offset + LIMIT, order);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (events) {
    const EVENTS_ITEMS = events.map((event) => (
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
    const ORDERS = ["name", "startDate"];
    const ORDERS_ITEMS = ORDERS.map((order) => (
      <option key={order} value={order}>
        {order}
      </option>
    ));
    const SEARCH_FORM = (
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
            {ORDERS_ITEMS}
          </select>
        </label>
        <input className="events-form-button" type="submit" value="Search" />
      </form>
    );
    return (
      <>
        {SEARCH_FORM}
        <ul className="events-list">{EVENTS_ITEMS}</ul>
        <Buttons
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          offset={offset}
          limit={LIMIT}
          total={total}
        />
      </>
    );
  }
}

export default EventsList;
