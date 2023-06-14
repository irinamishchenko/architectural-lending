function EventsInfo(props) {
  const events = props.events.items;
  console.log(props);
  return (
    <section className="info-container">
      <h3 className="info-title">Events</h3>
      <ol className="info-list">
        {events.map((item) => (
          <li className="info-list-item" key={item.name}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ol>
      {props.events.available && props.events.available > 20 ? (
        <button className="info-button">More</button>
      ) : null}
    </section>
  );
}

export default EventsInfo;
