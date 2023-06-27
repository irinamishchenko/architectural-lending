import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseURL = "http://gateway.marvel.com/v1/public/comics/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleComicsCreators() {
  const params = useParams();
  const id = params.id;
  const [creators, setCreators] = useState(null);
  const [error, setError] = useState(null);

  async function fetchComicsCreators() {
    axios
      .get(baseURL + "/" + id + "/creators", {
        params: {
          apikey: API_key,
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
    const creatorsItems = creators.map((creator, index) => (
      <li className="creator-list-item" key={index}>
        <h3 className="creator-name">{creator.fullName} </h3>
        <img
          className="creator-picture"
          src={creator.thumbnail.path + "." + creator.thumbnail.extension}
        />
        <p className="creator-info">
          Created {creator.comics.available} comics
        </p>
      </li>
    ));
    return <ul className="creators-list">{creatorsItems}</ul>;
  }
}

export default SingleComicsCreators;
