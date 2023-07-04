import { useEffect } from "react";
import SpecificEvents from "./../layout/SpecificEvents";

function SpecificEventsPage() {
  useEffect(() => {
    document.title = "Marvel | Events";
  }, []);

  return (
    <div className="container">
      <SpecificEvents />
    </div>
  );
}

export default SpecificEventsPage;
