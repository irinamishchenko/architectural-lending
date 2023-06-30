import { Link, useParams } from "react-router-dom";

function EventsInfo(props) {
  const PARAMS = useParams();
  const ID = PARAMS.id;
  const NAME = props.name;
  const EVENTS = props.events.items;
  const EVENTS_ITEMS = EVENTS.map((item) => (
    <li className="info-list-item" key={item.name}>
      <Link to={"/events/" + item.resourceURI.split("/").splice(6).join()}>
        {item.name}
      </Link>
    </li>
  ));
  return (
    <section className="info-container">
      <h3 className="info-title">Events</h3>
      <ol className="info-list">{EVENTS_ITEMS}</ol>
      {props.events.available && props.events.available > 20 ? (
        <Link to={"/" + NAME + "/" + ID + "/events"} className="info-button">
          More
        </Link>
      ) : null}
    </section>
  );
}

export default EventsInfo;
