import { useEffect } from "react";
import ComicsList from "../layout/ComicsList";

function ComicsPage() {
  useEffect(() => {
    document.title = "Marvel | Comics";
  }, []);
  return (
    <div className="container">
      <h2 className="comics-title">Marvel comics</h2>
      <ComicsList />
    </div>
  );
}

export default ComicsPage;
