function ComicsInfo(props) {
  console.log(props.comics);
  const comics = props.comics.items;
  return (
    <section className="info-container">
      <h3 className="info-title">Comics</h3>
      <ol className="info-list">
        {comics.map((item) => (
          <li className="info-list-item" key={item.name}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ol>
      {props.comics.available && props.comics.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default ComicsInfo;
