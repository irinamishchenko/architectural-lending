import { useEffect } from "react";
import CharactersList from "../layout/CharactersList";

function CharactersPage() {
  useEffect(() => {
    document.title = "Marvel | Characters";
  }, []);

  return (
    <div className="container">
      <h2 className="characters-title">Marvel characters</h2>
      <CharactersList />
    </div>
  );
}

export default CharactersPage;
