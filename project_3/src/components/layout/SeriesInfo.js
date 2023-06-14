function SeriesInfo(props) {
  const series = props.series.items;
  return (
    <section className="info-container">
      <h3 className="info-title">Series</h3>
      <ol className="info-list">
        {series.map((item) => (
          <li className="info-list-item" key={item.name}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ol>
      {props.series.available && props.series.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default SeriesInfo;
