import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

const baseURL = "http://gateway.marvel.com/v1/public/events/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleEventCharacters() {
  const params = useParams();
  const id = params.id;
  const [characters, setCharacters] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchEventCharacters(offset) {
    axios
      .get(baseURL + "/" + id + "/characters", {
        params: {
          apikey: API_key,
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

  useEffect(() => {
    fetchEventCharacters();
  }, []);

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchEventCharacters(offset - LIMIT);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchEventCharacters(offset + LIMIT);
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

    return (
      <>
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

export default SingleEventCharacters;
