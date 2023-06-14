import { Link } from "react-router-dom";

function CharactersInfo(props) {
  const characters = props.characters.items;
  let remadeArr = characters[0].resourceURI.split("/");
  let characterId = Number(remadeArr.splice(remadeArr.length - 1).join());
  return (
    <section className="info-container">
      <h3 className="info-title">Characters</h3>
      <ol className="info-list">
        {characters.map((character, index) => (
          <li className="info-list-item" key={index}>
            <Link to={"/characters/" + characterId}>{character.name}</Link>
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
