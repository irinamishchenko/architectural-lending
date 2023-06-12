import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Marvel | Not Found";
  }, []);
  return <div>404</div>;
}

export default NotFoundPage;
