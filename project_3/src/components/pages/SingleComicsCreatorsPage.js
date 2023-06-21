import { useEffect } from "react";
import SingleComicsCreators from "../layout/SingleComicsCreators";

function SingleComicsCreatorsPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <SingleComicsCreators />
    </div>
  );
}

export default SingleComicsCreatorsPage;
