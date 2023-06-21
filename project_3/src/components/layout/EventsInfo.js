import { Link, useParams } from "react-router-dom";

function EventsInfo(props) {
  const params = useParams();
  const id = params.id;

  const events = props.events.items;
  const eventsItems = events.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/events/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Events</h3>
      <ol className="info-list">{eventsItems}</ol>
      {props.events.available && props.events.available > 20 ? (
        <Link to={"/characters/" + id + "/events"} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default EventsInfo;
