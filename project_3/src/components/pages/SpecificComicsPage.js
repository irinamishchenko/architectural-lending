import { useEffect } from "react";
import SpecificComics from "./../layout/SpecificComics";

function SpecificComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Comics";
  }, []);

  return (
    <div className="container">
      <SpecificComics />
    </div>
  );
}

export default SpecificComicsPage;
