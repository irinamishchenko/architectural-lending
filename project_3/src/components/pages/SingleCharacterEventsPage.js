import { useEffect } from "react";
import SingleCharacterEvents from "../layout/SingleCharacterEvents";

function SingleCharacterEventsPage() {
  useEffect(() => {
    document.title = "Marvel | Events";
  }, []);
  return (
    <div className="container">
      <SingleCharacterEvents />
    </div>
  );
}

export default SingleCharacterEventsPage;
