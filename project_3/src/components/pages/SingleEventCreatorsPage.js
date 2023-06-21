import { useEffect } from "react";
import SingleEventCreators from "./../layout/SingleEventCreators";

function SingleEventCreatorsPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <SingleEventCreators />
    </div>
  );
}

export default SingleEventCreatorsPage;
