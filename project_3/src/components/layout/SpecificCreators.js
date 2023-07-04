import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

const BASE_URL = "http://gateway.marvel.com/v1/public/creators";
const API_KEY = "95857d6d985fa57f979a3eca57531d54";

function SpecificCreators() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const NAME = PARAMS.name;
  console.log(PARAMS);
  const [creators, setCreators] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchEventsCreators(offset) {
    axios
      .get(BASE_URL + "?" + NAME + "=" + ID, {
        params: {
          apikey: API_KEY,
          limit: LIMIT,
          offset: offset,
        },
      })
      .then(
        (response) => (
          setCreators(response.data.data.results),
          setTotal(response.data.data.total)
        )
      )
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchEventsCreators();
  }, []);

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchEventsCreators(offset - LIMIT);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchEventsCreators(offset + LIMIT);
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
  } else if (creators) {
    const CREATORS_ITEMS = creators.map((creator, index) => (
      <li className="creator-list-item" key={index}>
        <h3 className="creator-name">{creator.fullName}</h3>
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
          alt={creator.fullName}
        />
      </li>
    ));

    return (
      <>
        <ul className="creators-list">{CREATORS_ITEMS}</ul>
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

export default SpecificCreators;
