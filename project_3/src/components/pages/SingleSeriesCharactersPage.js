import { useEffect } from "react";
import SingleSeriesCharacters from "./../layout/SingleSeriesCharacters";

function SingleSeriesCharactersPage() {
  useEffect(() => {
    document.title = "Marvel | Characters";
  }, []);
  return (
    <div className="container">
      <SingleSeriesCharacters />
    </div>
  );
}

export default SingleSeriesCharactersPage;
