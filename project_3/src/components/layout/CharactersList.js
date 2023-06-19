import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/characters";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function CharactersList() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);

  async function fetchCharacters(search) {
    if (!search) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
            events: 310,
            limit: 42,
            offset: 1,
          },
        })
        .then((response) => setCharacters(response.data.data.results))
        .catch((error) => setError(error.message));
    } else if (search) {
      axios
        .get(baseURL, {
          params: {
            apikey: API_key,
            limit: 42,
            nameStartsWith: search,
          },
        })
        .then((response) => setCharacters(response.data.data.results))
        .catch((error) => setError(error.message));
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function handleChange(e) {
    fetchCharacters(search);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchCharacters(search);
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
      </>
    );
  }
}

export default CharactersList;
