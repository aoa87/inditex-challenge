import Image from "next/image";

import { Character } from "@/modules/characters/domain/character";

import classes from "./character-item.module.css";
import CharacterFavorite from "./character-favorite";

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return (
    <div className={classes["character-card"]}>
      <div className={classes["character-card__image"]}>
        <Image
          src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
          alt={`${character.name} thumbnail`}
          width={200}
          height={200}
        />
        <div className={classes["character-card__red-bar"]}></div>
      </div>
      <div className={classes["character-card__footer"]}>
        <div>{character.name}</div>
        <CharacterFavorite character={character} />
        <div className={classes["character-card__footer-cut"]}></div>
      </div>
    </div>
  );
};

export default CharacterItem;
