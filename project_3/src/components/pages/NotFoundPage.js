import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Marvel | Not Found";
  }, []);
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">
        Oops! Page you're looking for doesn't exist!
      </h2>
      <Link to={"/"} className="not-found-button">
        Go to Home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
