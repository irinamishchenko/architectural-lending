import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import CharactersPage from "./components/pages/CharactersPage";
import ComicsPage from "./components/pages/ComicsPage";
import EventsPage from "./components/pages/EventsPage";
import SeriesPage from "./components/pages/SeriesPage";
import CreatorsPage from "./components/pages/CreatorsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SingleCharacterPage from "./components/pages/SingleCharacterPage";
import SingleComicsPage from "./components/pages/SingleComicsPage";
import SingleEventPage from "./components/pages/SingleEventPage";
import SingleSeriesPage from "./components/pages/SingleSeriesPage";
import SingleCreatorPage from "./components/pages/SingleCreatorPage";
import SpecificComicsPage from "./components/pages/SpecificComicsPage";
import SpecificCharactersPage from "./components/pages/SpecificCharactersPage";
import SpecificCreatorsPage from "./components/pages/SpecificCreatorsPage";
import SpecificEventsPage from "./components/pages/SpecificEventsPage";
import SpecificSeriesPage from "./components/pages/SpecificSeriesPage";

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
          <Route path="/comics/:id" element={<SingleComicsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<SingleEventPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/series/:id" element={<SingleSeriesPage />} />
          <Route path="/creators" element={<CreatorsPage />} />
          <Route path="/creators/:id" element={<SingleCreatorPage />} />
          <Route path="/comics/:name/:id" element={<SpecificComicsPage />} />
          <Route
            path="/characters/:name/:id"
            element={<SpecificCharactersPage />}
          />
          <Route
            path="/creators/:name/:id"
            element={<SpecificCreatorsPage />}
          />
          <Route path="/events/:name/:id" element={<SpecificEventsPage />} />
          <Route path="/series/:name/:id" element={<SpecificSeriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
