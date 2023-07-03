import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/comics/";
const API_KEY = "95857d6d985fa57f979a3eca57531d54";

function SingleComicsCreators() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [creators, setCreators] = useState(null);
  const [error, setError] = useState(null);

  async function fetchComicsCreators() {
    axios
      .get(BASE_URL + "/" + ID + "/creators", {
        params: {
          apikey: API_KEY,
          limit: 100,
        },
      })
      .then((response) => setCreators(response.data.data.results))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchComicsCreators();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (creators) {
    console.log(creators);
    const CREATORS_ITEMS = creators.map((creator, index) => (
      <li className="creator-list-item" key={index}>
        <h3 className="creator-name">{creator.fullName} </h3>
        <p className="creator-info">
          Created {creator.comics.available} comics
        </p>
        <div className="creator-add-info">
          <Link to={"/creators/" + creator.id} className="creator-add-info-btn">
            More
          </Link>
        </div>
        <img
          className="creator-picture"
          src={creator.thumbnail.path + "." + creator.thumbnail.extension}
        />
      </li>
    ));
    return <ul className="creators-list">{CREATORS_ITEMS}</ul>;
  }
}

export default SingleComicsCreators;
