import { Link } from "react-router-dom";

function EventsInfo(props) {
  const events = props.events.items;
  let remadeArr = events[0].resourceURI.split("/");
  let eventsId = Number(remadeArr.splice(remadeArr.length - 1).join());
  return (
    <section className="info-container">
      <h3 className="info-title">Events</h3>
      <ol className="info-list">
        {events.map((item) => (
          <li className="info-list-item" key={item.name}>
            <Link to={"/events/" + eventsId}>{item.name}</Link>
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
