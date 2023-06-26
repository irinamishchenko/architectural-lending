import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sprite from "./../../images/sprite.svg";

const baseURL = "http://gateway.marvel.com/v1/public/characters";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function CharactersList() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [total, setTotal] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchCharacters(search, offset) {
    if (!search) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
            events: 310,
            limit: LIMIT,
            offset: offset,
          },
        })
        .then(
          (response) => (
            setCharacters(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    } else if (search) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
            nameStartsWith: search,
            limit: LIMIT,
            offset: offset,
          },
        })
        .then(
          (response) => (
            setCharacters(response.data.data.results),
            setTotal(response.data.data.total)
          )
        )
        .catch((error) => setError(error.message));
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function handleChange() {
    fetchCharacters(search, offset);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchCharacters(search, offset);
  }

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchCharacters(search, offset - LIMIT);
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchCharacters(search, offset + LIMIT);
  }

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (characters) {
    const charactersItems = characters.map((character) => (
      <li key={character.id} className="characters-item">
        <div className="character-add-info">
          <Link
            className="character-add-info-btn"
            to={"/characters/" + character.id}
          >
            More
          </Link>
        </div>
        <img
          className="characters-item-picture"
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
        />
        <h2 className="characters-item-name">{character.name}</h2>
      </li>
    ));

    return (
      <>
        <form
          className="characters-form"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <input
            className="characters-input"
            type="text"
            placeholder="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="characters-form-button"
            type="submit"
            value="Search"
          />
        </form>
        <ul className="characters-list">{charactersItems}</ul>
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

export default CharactersList;
