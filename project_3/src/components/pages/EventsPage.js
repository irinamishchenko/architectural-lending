import { useEffect } from "react";
import EventsList from "../layout/EventsList";

function EventsPage() {
  useEffect(() => {
    document.title = "Marvel | Events";
  }, []);

  return (
    <div className="container">
      <h2 className="events-title">Marvel events</h2>
      <EventsList />
    </div>
  );
}

export default EventsPage;
