import { useEffect } from "react";
import Slider from "../layout/Slider";
import HomeInfo from "../layout/HomeInfo";

function HomePage() {
  useEffect(() => {
    document.title = "Marvel | Home";
  }, []);
  return (
    <>
      <section className="first-screen">
        <h1 className="first-screen-title">Learn more about Marvel Universe</h1>
        <Slider />
      </section>
      <section className="container">
        <HomeInfo />
      </section>
    </>
  );
}

export default HomePage;
