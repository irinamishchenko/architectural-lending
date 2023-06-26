import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ComicsInfo from "./ComicsInfo";
import EventsInfo from "./EventsInfo";
import SeriesInfo from "./SeriesInfo";

const baseURL = "http://gateway.marvel.com/v1/public/characters/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleCharacter() {
  const params = useParams();
  const id = params.id;
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCharacter() {
    axios
      .get(baseURL + "/" + id, {
        params: {
          apikey: API_key,
        },
      })
      .then((response) => setCharacter(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (character) {
    console.log(character.events.items);
    return (
      <>
        <div className="character-main-info-wrapper">
          <img
            className="character-photo"
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.name}
          />
          <div className="character-description-container">
            <h2 className="character-name">{character.name}</h2>
            {character.description ? (
              <p className="character-description">{character.description}</p>
            ) : null}
          </div>
        </div>
        {character.comics.items.length > 0 ? (
          <ComicsInfo comics={character.comics} name={"characters"} />
        ) : null}
        {character.events.items.length > 0 ? (
          <EventsInfo events={character.events} name={"characters"} />
        ) : null}
        {character.series.items.length > 0 ? (
          <SeriesInfo series={character.series} name={"characters"} />
        ) : null}
      </>
    );
  }
}

export default SingleCharacter;
