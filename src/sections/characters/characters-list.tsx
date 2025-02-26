import { Character } from "@/modules/characters/domain/character";
import CharacterItem from "./character-item";

import classes from "./characters-list.module.css";

interface CharactersListProps {
  characters: Character[];
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  return (
    <>
      <div className={classes["characters-results"]}>{characters.length} RESULTS</div>
      <div className={classes["characters-container"]}>
        {characters.map((character) => (
          <div key={character.id} className={classes["character-item"]}>
            <CharacterItem character={character} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CharactersList;
