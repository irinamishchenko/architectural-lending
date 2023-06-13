import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/characters";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function CharactersList() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCharacters() {
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
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

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
    return <ul className="characters-list">{charactersItems}</ul>;
  }
}

export default CharactersList;
