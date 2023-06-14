import { useEffect } from "react";
import SingleEvent from "./../layout/SingleEvent";

function SingleEventPage() {
  useEffect(() => {
    document.title = "Marvel | Event";
  }, []);
  return (
    <div className="container">
      <SingleEvent />
    </div>
  );
}

export default SingleEventPage;
