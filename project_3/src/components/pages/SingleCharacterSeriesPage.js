import { useEffect } from "react";
import SingleCharacterSeries from "./../layout/SingleCharacterSeries";

function SingleCharacterSeriesPage() {
  useEffect(() => {
    document.title = "Marvel | Series";
  }, []);

  return (
    <div className="container">
      <SingleCharacterSeries />
    </div>
  );
}

export default SingleCharacterSeriesPage;
