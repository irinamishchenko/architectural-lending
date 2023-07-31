import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_URL } from "./../../API_info";
import EventsInfo from "./EventsInfo";
import CreatorsInfo from "./CreatorsInfo";
import CharactersInfo from "./CharactersInfo";

function SingleComics() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [singleComics, setSingleComics] = useState(null);
  const [error, setError] = useState(null);

  async function fetchSingleComics() {
    axios
      .get(BASE_URL + "/comics/" + ID, {
        params: {
          apikey: API_KEY,
        },
      })
      .then((response) => setSingleComics(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchSingleComics();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (singleComics) {
    const GENERAL_INFO = (
      <>
        {" "}
        <h2 className="comics-title">{singleComics.title}</h2>
        <div className="comics-main-info-container">
          <img
            className="comics-picture"
            src={
              singleComics.thumbnail.path +
              "." +
              singleComics.thumbnail.extension
            }
            alt={singleComics.title}
          />
          {singleComics.description ? (
            <div className="comics-content-container">
              <h3 className="comics-content-title">Content</h3>
              <ol className="comics-content-list">
                {singleComics.description.split("#").map((item, index) => (
                  <li className="comics-content-list-item" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </>
    );
    return (
      <>
        {GENERAL_INFO}
        {singleComics.characters.items.length > 0 ? (
          <CharactersInfo
            characters={singleComics.characters}
            name={"comics"}
          />
        ) : null}
        {singleComics.creators.items.length > 0 ? (
          <CreatorsInfo creators={singleComics.creators} name={"comics"} />
        ) : null}
        {singleComics.events.items.length > 0 ? (
          <EventsInfo events={singleComics.events} name={"comics"} />
        ) : null}
        {singleComics.series ? (
          <section className="info-container">
            <h3 className="info-title">Series</h3>
            <p className="info-text">
              <a href="#">{singleComics.series.name}</a>
            </p>
          </section>
        ) : null}
      </>
    );
  }
}

export default SingleComics;
