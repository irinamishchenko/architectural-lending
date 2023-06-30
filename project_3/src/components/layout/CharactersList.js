import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

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
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchCharacters(search, offset + LIMIT);
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
    const form = (
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
    );

    return (
      <>
        {form}
        <ul className="characters-list">{charactersItems}</ul>
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

export default CharactersList;
