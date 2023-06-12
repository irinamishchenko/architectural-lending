import { useEffect } from "react";
import Slider from "../layout/Slider";

function HomePage() {
  useEffect(() => {
    document.title = "Marvel | Home";
  }, []);
  return (
    <section className="first-screen">
      <h1 className="first-screen-title">Learn more about Marvel Universe</h1>
      <Slider />
    </section>
  );
}

export default HomePage;
