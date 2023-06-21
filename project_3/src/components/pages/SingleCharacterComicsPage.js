import { useEffect } from "react";
import SingleCharacterComics from "./../layout/SingleCharacterComics";

function SingleCharacterComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Comics";
  }, []);
  return (
    <div className="container">
      <SingleCharacterComics />
    </div>
  );
}

export default SingleCharacterComicsPage;
