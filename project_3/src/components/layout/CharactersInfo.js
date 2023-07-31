import { Link, useParams } from "react-router-dom";

function CharactersInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const { NAME, CHARACTERS } = props;
  const CHARACTERS_ITEMS = CHARACTERS.map((character, index) => (
    <li className="info-list-item" key={index}>
      <Link
        to={"/characters/" + character.resourceURI.split("/").splice(6).join()}
      >
        {character.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Characters</h3>
      <ol className="info-list">{CHARACTERS_ITEMS}</ol>
      {props.characters.available && props.characters.available > 20 ? (
        <Link to={"/characters/" + NAME + "/" + ID} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default CharactersInfo;
