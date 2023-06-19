import { Link } from "react-router-dom";

function CreatorsInfo(props) {
  const creators = props.creators.items;
  const creatorsItems = creators.map((creator, index) => (
    <li className="info-list-item" key={index}>
      <Link to={"/creators/" + creator.resourceURI.split("/").splice(6).join()}>
        {creator.name}: {creator.role}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Creators</h3>
      <ol className="info-list">
        {/* {creators.map((creator, index) => (
          <li className="info-list-item" key={index}>
            <Link
              to={
                "/creators/" + creator.resourceURI.split("/").splice(6).join()
              }
            >
              {creator.name}: {creator.role}
            </Link>
          </li>
        ))} */}
        {creatorsItems}
      </ol>
      {props.creators.available && props.creators.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default CreatorsInfo;
