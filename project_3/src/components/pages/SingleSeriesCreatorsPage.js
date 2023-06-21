import { useEffect } from "react";
import SingleSeriesCreators from "./../layout/SingleSeriesCreators";

function SingleSeriesCreatorsPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <SingleSeriesCreators />
    </div>
  );
}

export default SingleSeriesCreatorsPage;
