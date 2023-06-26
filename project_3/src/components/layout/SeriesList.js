import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sprite from "./../../images/sprite.svg";

const baseURL = "http://gateway.marvel.com/v1/public/series";
const API_key = "95857d6d985fa57f979a3eca57531d54";

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

  const orders = ["title", "modified", "startYear"];
  const formats = ["comic", "magazine", "hardcover", "digest"];

  async function fetchSeries(search, offset, year, order, format) {
    if (!search && !year && !order && !format) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
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
        .get(baseURL, {
          params: {
            apikey: API_key,
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
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchSeries(search, offset + LIMIT, year, order, format);
  }

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
    const orderItems = orders.map((order) => (
      <option key={order}>{order}</option>
    ));
    const formatItems = formats.map((format) => (
      <option key={format}>{format}</option>
    ));
    return (
      <>
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
              {orderItems}
            </select>
          </label>
          <label className="series-format-title">
            Format:
            <select
              className="series-order-select"
              onChange={(e) => setFormat(e.target.value)}
            >
              {formatItems}
            </select>
          </label>
          <input className="series-form-button" type="submit" value="Search" />
        </form>
        <ul className="series-list">{seriesItems}</ul>
        <div className="list-buttons">
          <button
            className={
              offset > 0 ? "list-button" : "list-button list-button-inactive"
            }
            onClick={handlePrevClick}
          >
            <svg>
              <use href={sprite + "#arrow-icon"} />
            </svg>
          </button>
          <button
            className={
              offset + LIMIT < total
                ? "list-button"
                : "list-button list-button-inactive"
            }
            onClick={handleNextClick}
          >
            <svg>
              <use href={sprite + "#arrow-icon"} />
            </svg>
          </button>
        </div>
      </>
    );
  }
}

export default SeriesList;
