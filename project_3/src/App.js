import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import CharactersPage from "./components/pages/CharactersPage";
import ComicsPage from "./components/pages/ComicsPage";
import EventsPage from "./components/pages/EventsPage";
import SeriesPage from "./components/pages/SeriesPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SingleCharacterPage from "./components/pages/SingleCharacterPage";

import "./styles/css/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<SingleCharacterPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
