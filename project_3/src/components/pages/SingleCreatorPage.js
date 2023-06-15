import { useEffect } from "react";
import SingleCreator from "../layout/SingleCreator";

function SingleCreatorPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <SingleCreator />
    </div>
  );
}

export default SingleCreatorPage;
