import Image from "next/image";

import { Character } from "@/modules/characters/domain/character";

import classes from "./character-item.module.css";
import CharacterFavorite from "./character-favorite";
import Link from "next/link";

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return (
    <div className={classes["character-card"]}>
      <Link href={`/characters/${character.id}`}>
        <div className={classes["character-card__image"]}>
          <Image
            src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
            alt={`${character.name} thumbnail`}
            width={200}
            height={200}
          />
        </div>
      </Link>
      <div className={classes["character-card__footer"]}>
        <div>{character.name}</div>
        <CharacterFavorite character={character} />
      </div>
    </div>
  );
};

export default CharacterItem;
