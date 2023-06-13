import { useEffect } from "react";
import SingleCharacter from "../layout/SingleCharacter";

function SingleCharacterPage() {
  useEffect(() => {
    document.title = "Marvel | Character";
  }, []);

  return (
    <div className="container">
      <SingleCharacter />
    </div>
  );
}

export default SingleCharacterPage;
