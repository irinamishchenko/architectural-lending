import { useEffect } from "react";
import SeriesList from "../layout/SeriesList";

function SeriesPage() {
  useEffect(() => {
    document.title = "Marvel | Series";
  }, []);

  return (
    <div className="container">
      <h2 className="series-title">Marvel series</h2>
      <SeriesList />
    </div>
  );
}

export default SeriesPage;
