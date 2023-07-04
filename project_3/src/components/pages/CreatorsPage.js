import { useEffect } from "react";
import CreatorsList from "../layout/CreatorsList";

function CreatorsPage() {
  useEffect(() => {
    document.title = "Marvel | Creators";
  }, []);
  return (
    <div className="container">
      <h2 className="creators-title">Marvel creators</h2>
      <CreatorsList />
    </div>
  );
}

export default CreatorsPage;
