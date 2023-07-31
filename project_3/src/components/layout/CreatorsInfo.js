import { Link, useParams } from "react-router-dom";

function CreatorsInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const { NAME, CREATORS } = props;
  const CREATORS_ITEMS = CREATORS.map((creator, index) => (
    <li className="info-list-item" key={index}>
      <Link to={"/creators/" + creator.resourceURI.split("/").splice(6).join()}>
        {creator.name}: {creator.role}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Creators</h3>
      <ol className="info-list">{CREATORS_ITEMS}</ol>
      {props.creators.available && props.creators.available > 20 ? (
        <Link to={"/creators/" + NAME + "/" + ID} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default CreatorsInfo;
