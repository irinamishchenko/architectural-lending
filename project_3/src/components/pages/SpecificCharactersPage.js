import { useEffect } from "react";
import SpecificCharacters from "./../layout/SpecificCharacters";

function SpecificCharactersPage() {
  useEffect(() => {
    document.title = "Marvel | Characters";
  }, []);

  return (
    <div className="container">
      <SpecificCharacters />
    </div>
  );
}

export default SpecificCharactersPage;
