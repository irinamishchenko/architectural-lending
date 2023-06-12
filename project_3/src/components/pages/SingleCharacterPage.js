import { useEffect } from "react";
import SingleCharacter from "../layout/SingleCharacter";

function SingleCharacterPage() {
  useEffect(() => {
    document.title = "Marvel | Character";
  }, []);

  return (
    <div className="container">
      {/* <h2 className="characters-title">Marvel character</h2> */}
      <SingleCharacter />
    </div>
  );
}

export default SingleCharacterPage;
