import { useEffect } from "react";
import SingleSeriesComics from "./../layout/SingleSeriesComics";

function SingleSeriesComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Comics";
  }, []);
  return (
    <div className="container">
      <SingleSeriesComics />
    </div>
  );
}

export default SingleSeriesComicsPage;
