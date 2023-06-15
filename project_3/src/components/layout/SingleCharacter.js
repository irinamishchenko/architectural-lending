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
        {character.comics.items ? (
          // <section className="character-info-container">
          //   <h3 className="character-info-title">Comics</h3>
          //   <ol className="character-info-list">
          //     {character.comics.items.map((item) => (
          //       <li className="character-info-list-item" key={item.name}>
          //         <a href="#">{item.name}</a>
          //       </li>
          //     ))}
          //   </ol>
          //   <button className="character-button">More</button>
          // </section>
          <ComicsInfo comics={character.comics} />
        ) : null}
        {character.events.items ? (
          // <section className="character-info-container">
          //   <h3 className="character-info-title">Events</h3>
          //   <ol className="character-info-list">
          //     {character.events.items.map((item) => (
          //       <li className="character-info-list-item" key={item.name}>
          //         <a href="#">{item.name}</a>
          //       </li>
          //     ))}
          //   </ol>
          //   <button className="character-button">More</button>
          // </section>
          <EventsInfo events={character.events} />
        ) : null}
        {character.series.items ? (
          // <section className="character-info-container">
          //   <h3 className="character-info-title">Series</h3>
          //   <ol className="character-info-list">
          //     {character.series.items.map((item) => (
          //       <li className="character-info-list-item" key={item.name}>
          //         <a href="#">{item.name}</a>
          //       </li>
          //     ))}
          //   </ol>
          //   <button className="character-button">More</button>
          // </section>
          <SeriesInfo series={character.series} />
        ) : null}
      </>
    );
  }
}

export default SingleCharacter;
