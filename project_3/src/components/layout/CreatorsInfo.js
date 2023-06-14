function CreatorsInfo(props) {
  const creators = props.creators.items;
  return (
    <section className="info-container">
      <h3 className="info-title">Creators</h3>
      <ol className="info-list">
        {creators.map((creator, index) => (
          <li className="info-list-item" key={index}>
            <a href="#">
              {creator.name}: {creator.role}
            </a>
          </li>
        ))}
      </ol>
      {props.creators.available && props.creators.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default CreatorsInfo;
