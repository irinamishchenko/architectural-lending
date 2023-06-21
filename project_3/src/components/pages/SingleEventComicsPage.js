import { useEffect } from "react";
import SingleEventComics from "./../layout/SingleEventComics";

function SingleEventComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Comics";
  }, []);
  return (
    <div className="container">
      <SingleEventComics />
    </div>
  );
}

export default SingleEventComicsPage;
