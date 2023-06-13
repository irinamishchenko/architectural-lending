import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/comics/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleComics() {
  const params = useParams();
  const id = params.id;
  const [singleComics, setSingleComics] = useState(null);
  const [error, setError] = useState(null);

  async function fetchSingleComics() {
    axios
      .get(baseURL + "/" + id, {
        params: {
          apikey: API_key,
        },
      })
      .then((response) => setSingleComics(response.data.data.results[0]))
      // .then((response) => console.log(response.data.data.results[0]))
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
    console.log(singleComics);
    return (
      <>
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
        {singleComics.characters.items.length > 0 ? (
          <section className="comics-info-container">
            <h3 className="comics-info-title">Characters</h3>
            <ol className="comics-info-list">
              {singleComics.characters.items.map((character, index) => (
                <li className="comics-info-list-item" key={index}>
                  <a href="#">{character.name}</a>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
        {singleComics.creators.items.length > 0 ? (
          <section className="comics-info-container">
            <h3 className="comics-info-title">Creators</h3>
            <ol className="comics-info-list">
              {singleComics.creators.items.map((creator, index) => (
                <li className="comics-info-list-item" key={index}>
                  <a href="#">
                    {creator.name}: {creator.role}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
        {singleComics.events.items.length > 0 ? (
          <section className="comics-info-container">
            <h3 className="comics-info-title">Events</h3>
            <ol className="comics-info-list">
              {singleComics.events.items.map((event, index) => (
                <li className="comics-info-list-item" key={index}>
                  <a href="#">{event.name}</a>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
        {singleComics.series ? (
          <section className="comics-info-container">
            <h3 className="comics-info-title">Series</h3>
            <p className="comics-info-text">
              <a href="#">{singleComics.series.name}</a>
            </p>
          </section>
        ) : null}
      </>
    );
  }
}

export default SingleComics;
