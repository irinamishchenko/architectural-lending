import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

const baseURL = "http://gateway.marvel.com/v1/public/events/";
const API_key = "95857d6d985fa57f979a3eca57531d54";

function SingleEventCreators() {
  const params = useParams();
  const id = params.id;
  const [creators, setCreators] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchEventsCreators(offset) {
    axios
      .get(baseURL + "/" + id + "/creators", {
        params: {
          apikey: API_key,
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
    const creatorsItems = creators.map((creator, index) => (
      <li className="creator-list-item" key={index}>
        <h3 className="creator-name">{creator.fullName} </h3>
        <img
          className="creator-picture"
          src={creator.thumbnail.path + "." + creator.thumbnail.extension}
          alt={creator.fullName}
        />
        <p className="creator-info">
          Created {creator.comics.available} comics
        </p>
      </li>
    ));

    return (
      <>
        <ul className="creators-list">{creatorsItems}</ul>{" "}
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

export default SingleEventCreators;
