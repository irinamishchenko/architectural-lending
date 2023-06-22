import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/series/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleSeriesComics() {
  const params = useParams();
  const id = params.id;
  const [comics, setComics] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  async function fetchSeriesComics() {
    axios
      .get(baseURL + "/" + id + "/comics", {
        params: {
          apikey: API_key,
          limit: 100,
        },
      })
      .then(
        (response) => (
          setComics(response.data.data.results),
          setTotal(response.data.data.total)
        )
      )
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchSeriesComics();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (comics) {
    const comicsItems = comics.map((item) => (
      <li key={item.id} className="comics-item">
        <div className="comics-add-info">
          <Link to={"/comics/" + item.id} className="comics-add-info-btn">
            More
          </Link>
        </div>
        <img
          className="comics-item-picture"
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          alt={item.title}
        />
        <h2 className="comics-item-title">{item.title}</h2>
      </li>
    ));
    return (
      <>
        <ul className="comics-list">{comicsItems}</ul>
      </>
    );
  }
}

export default SingleSeriesComics;