import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_URL } from "./../../API_info";
import CharactersInfo from "./CharactersInfo";
import ComicsInfo from "./ComicsInfo";
import CreatorsInfo from "./CreatorsInfo";
import EventsInfo from "./EventsInfo";

function SingleSeries() {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const [singleSeries, setSingleSeries] = useState(null);
  const [error, setError] = useState(null);

  async function fetchSeries() {
    axios
      .get(BASE_URL + "/series/" + ID, {
        params: {
          apikey: API_KEY,
        },
      })
      .then((response) => setSingleSeries(response.data.data.results[0]))
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    fetchSeries();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  } else if (singleSeries) {
    const GENERAL_INFO = (
      <div className="single-series-main-info-wrapper">
        <img
          className="single-series-photo"
          src={
            singleSeries.thumbnail.path + "." + singleSeries.thumbnail.extension
          }
          alt={singleSeries.title}
        />
        <div className="single-series-description-container">
          <h2 className="single-series-title">{singleSeries.title}</h2>
          {singleSeries.description ? (
            <p className="single-series-description">
              {singleSeries.description}
            </p>
          ) : null}
        </div>
      </div>
    );
    return (
      <>
        {GENERAL_INFO}
        {singleSeries.characters.items.length > 0 ? (
          <CharactersInfo
            characters={singleSeries.characters}
            name={"series"}
          />
        ) : null}
        {singleSeries.comics.items.length > 0 ? (
          <ComicsInfo comics={singleSeries.comics} name={"series"} />
        ) : null}
        {singleSeries.creators.items.length > 0 ? (
          <CreatorsInfo creators={singleSeries.creators} name={"series"} />
        ) : null}
        {singleSeries.events.items.length > 0 ? (
          <EventsInfo events={singleSeries.events} name={"series"} />
        ) : null}
      </>
    );
  }
}

export default SingleSeries;
