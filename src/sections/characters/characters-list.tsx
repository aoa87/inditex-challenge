import { Character } from "@/modules/characters/domain/character";
import CharacterItem from "./character-item";

import classes from "./characters-list.module.css";

interface CharactersListProps {
  characters: Character[];
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  return (
    <div className={classes.characters_container}>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </div>
  );
};

export default CharactersList;
