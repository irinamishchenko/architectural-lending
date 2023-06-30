import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

const BASE_URL = "http://gateway.marvel.com/v1/public/series";
const API_KEY = "95857d6d985fa57f979a3eca57531d54";

function SeriesList() {
  const [series, setSeries] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [year, setYear] = useState(null);
  const [order, setOrder] = useState(null);
  const [format, setFormat] = useState(null);
  const [total, setTotal] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 96;

  const ORDERS = ["title", "modified", "startYear"];
  const FORMATS = ["comic", "magazine", "hardcover", "digest"];

  async function fetchSeries(search, offset, year, order, format) {
    if (!search && !year && !order && !format) {
      axios
        .get(BASE_URL, {
          params: {
            apikey: API_KEY,
            orderBy: "-modified",
            contains: "comic",
            limit: LIMIT,
            offset: offset,
          },
        })
        .then(
          (response) => (
            setSeries(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    } else if (search || year || order || format) {
      axios
        .get(BASE_URL, {
          params: {
            apikey: API_KEY,
            titleStartsWith: search,
            startYear: year,
            orderBy: order,
            contains: format,
            limit: LIMIT,
            offset: offset,
          },
        })
        .then(
          (response) => (
            setSeries(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    }
  }

  useEffect(() => {
    fetchSeries();
  }, []);

  function handleChange() {
    fetchSeries(search, offset);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchSeries(search, offset, year, order, format);
  }

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchSeries(search, offset - LIMIT, year, order, format);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchSeries(search, offset + LIMIT, year, order, format);
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
    const ORDERS_ITEMS = ORDERS.map((order) => (
      <option key={order}>{order}</option>
    ));
    const FORMAT_ITEMS = FORMATS.map((format) => (
      <option key={format}>{format}</option>
    ));
    const SEARCH_FORM = (
      <form
        className="series-form"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <input
          className="series-title-input"
          type="text"
          placeholder="title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className="series-year-title">
          Start year:{" "}
          <input
            className="series-year-input"
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label className="series-order-title">
          Order by:
          <select
            className="series-order-select"
            onChange={(e) => setOrder(e.target.value)}
          >
            {ORDERS_ITEMS}
          </select>
        </label>
        <label className="series-format-title">
          Format:
          <select
            className="series-order-select"
            onChange={(e) => setFormat(e.target.value)}
          >
            {FORMAT_ITEMS}
          </select>
        </label>
        <input className="series-form-button" type="submit" value="Search" />
      </form>
    );
    return (
      <>
        {SEARCH_FORM}
        <ul className="series-list">{SERIES_ITEMS}</ul>
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

export default SeriesList;
