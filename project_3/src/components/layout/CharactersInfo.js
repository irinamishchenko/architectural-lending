import { Link } from "react-router-dom";

function CharactersInfo(props) {
  const characters = props.characters.items;
  return (
    <section className="info-container">
      <h3 className="info-title">Characters</h3>
      <ol className="info-list">
        {characters.map((character, index) => (
          <li className="info-list-item" key={index}>
            <Link
              to={
                "/characters/" +
                character.resourceURI.split("/").splice(6).join()
              }
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ol>
      {props.characters.available && props.characters.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default CharactersInfo;
