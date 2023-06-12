import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          // id: id,
          apikey: API_key,
        },
      })
      .then((response) => setCharacter(response.data.data.results[0]))
      // .then((response) => console.log(response.data.data.results[0]))
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
    console.log(character);
    return (
      <>
        <div className="character-main-info-wrapper">
          <img
            className="character-photo"
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.name}
          />
          <div className="character-description">
            <h2 className="character-name">{character.name}</h2>
            {character.description ? (
              <p className="character-description">{character.description}</p>
            ) : null}
          </div>
        </div>
        {character.comics.items ? (
          <div className="character-comics">
            <h3 className="character-comics-title">Comics</h3>
            <ol className="character-comics-list">
              {character.comics.items.map((item) => (
                <li className="character-comics-list-item" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ol>
            <button className="character-comics-button">More</button>
          </div>
        ) : null}
        {character.events.items ? (
          <div className="character-events">
            <h3 className="character-events-title">Comics</h3>
            <ol className="character-events-list">
              {character.events.items.map((item) => (
                <li className="character-events-list-item" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ol>
            <button className="character-events-button">More</button>
          </div>
        ) : null}
        {character.series.items ? (
          <div className="character-series">
            <h3 className="character-series-title">Comics</h3>
            <ol className="character-series-list">
              {character.series.items.map((item) => (
                <li className="character-series-list-item" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ol>
            <button className="character-series-button">More</button>
          </div>
        ) : null}
      </>
    );
  }
}
// return <div>Character</div>;
// }

export default SingleCharacter;
