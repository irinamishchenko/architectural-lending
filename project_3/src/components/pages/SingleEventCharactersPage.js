import { useEffect } from "react";
import SingleEventCharacters from "./../layout/SingleEventCharacters";

function SingleEventCharactersPage() {
  useEffect(() => {
    document.title = "Marvel | Characters";
  }, []);
  return (
    <div className="container">
      <SingleEventCharacters />
    </div>
  );
}

export default SingleEventCharactersPage;
