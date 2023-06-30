import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

const BASE_URL = "http://gateway.marvel.com/v1/public/comics";
const API_KEY = "95857d6d985fa57f979a3eca57531d54";

function ComicsList() {
  const [comics, setComics] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [type, setType] = useState(null);
  const [year, setYear] = useState(null);
  const [format, setFormat] = useState(null);
  const [total, setTotal] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchComics(search, offset, type, year, format) {
    if (!search && !type && !year && !format) {
      axios
        .get(BASE_URL, {
          params: {
            apikey: API_KEY,
            format: "hardcover",
            limit: LIMIT,
            offset: offset,
          },
        })
        .then(
          (response) => (
            setComics(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    } else if (search || type || year || format) {
      axios
        .get(BASE_URL, {
          params: {
            apikey: API_KEY,
            titleStartsWith: search,
            limit: LIMIT,
            offset: offset,
            formatType: type,
            startYear: year,
            format: format,
          },
        })
        .then(
          (response) => (
            setComics(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    }
  }

  useEffect(() => {
    fetchComics();
  }, []);

  function handleChange() {
    fetchComics(search, offset);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchComics(search, offset, type, year, format);
  }

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchComics(search, offset - LIMIT, type, year, format);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchComics(search, offset + LIMIT, type, year, format);
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
  } else if (comics) {
    const COMICS_ITEMS = comics.map((item) => (
      <li key={item.id} className="comics-item">
        <div className="comics-add-info">
          <Link to={"/comics/" + item.id} className="comics-add-info-btn">
            More
          </Link>
        </div>
        <img
          className="comics-item-picture"
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          alt={item.title}
        />
        <h2 className="comics-item-title">{item.title}</h2>
      </li>
    ));
    const FORMATS = ["comic", "magazine", "hardcover", "digest"];
    const FORMAT_ITEMS = FORMATS.map((format) => (
      <option key={format} value={format}>
        {format}
      </option>
    ));
    const SEARCH_FORM = (
      <form
        className="comics-form"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <input
          className="comics-title-input"
          type="text"
          placeholder="title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="comics-type-wrapper">
          <h3>Type:</h3>
          <label className="comics-type-title">
            <input
              className="comics-type-input"
              type="radio"
              id="comic"
              name="type"
              value="comic"
              onChange={(e) => setType(e.target.value)}
            />
            comic
          </label>
          <label className="comics-type-title">
            <input
              className="comics-type-input"
              type="radio"
              id="collection"
              name="type"
              value="collection"
              onChange={(e) => setType(e.target.value)}
            />
            collection
          </label>
        </div>
        <label className="comics-year-title">
          Start year:{" "}
          <input
            className="comics-year-input"
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label className="comics-format-title">
          Format:
          <select
            className="comics-format-select"
            onChange={(e) => setFormat(e.target.value)}
          >
            {FORMAT_ITEMS}
          </select>
        </label>
        <input className="comics-form-button" type="submit" value="Search" />
      </form>
    );
    return (
      <>
        {SEARCH_FORM}
        <ul className="comics-list">{COMICS_ITEMS}</ul>
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

export default ComicsList;
