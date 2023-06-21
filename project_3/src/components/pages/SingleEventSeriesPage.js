import { useEffect } from "react";
import SingleEventSeries from "./../layout/SingleEventSeries";

function SingleEventSeriesPage() {
  useEffect(() => {
    document.title = "Marvel | Series";
  }, []);
  return (
    <div className="container">
      <SingleEventSeries />
    </div>
  );
}

export default SingleEventSeriesPage;
