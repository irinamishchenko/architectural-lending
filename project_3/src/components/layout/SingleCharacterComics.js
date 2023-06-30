import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Buttons from "./Buttons";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters/";
const API_KEY = "95857d6d985fa57f979a3eca57531d54";

function SingleCharacterComics() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [comics, setComics] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const LIMIT = 99;

  async function fetchCharacterComics(offset) {
    axios
      .get(BASE_URL + "/" + ID + "/comics", {
        params: {
          apikey: API_KEY,
          limit: LIMIT,
          offset: offset,
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
    fetchCharacterComics();
  }, []);

  function handlePrevClick() {
    setOffset(offset - LIMIT);
    fetchCharacterComics(offset - LIMIT);
    console.log("Prev click");
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    setOffset(offset + LIMIT);
    fetchCharacterComics(offset + LIMIT);
    console.log("Next click");
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
  } else if (comics) {
    const COMICS_ITEMS = comics.map((item) => (
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
        <ul className="comics-list">{COMICS_ITEMS}</ul>

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

export default SingleCharacterComics;
