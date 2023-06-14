function CharactersInfo(props) {
  const characters = props.characters.items;
  return (
    <section className="info-container">
      <h3 className="info-title">Characters</h3>
      <ol className="info-list">
        {characters.map((character, index) => (
          <li className="info-list-item" key={index}>
            <a href="#">{character.name}</a>
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
