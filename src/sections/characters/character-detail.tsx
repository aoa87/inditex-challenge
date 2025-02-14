import Image from "next/image";

import { Character } from "@/modules/characters/domain/character";
import CharacterFavorite from "./character-favorite";

import classes from "./character-detail.module.css";
import { Comic } from "@/modules/comics/domain/comic";
import Carousel from "@/components/carousel/carousel";
import CharacterComic from "./character-comic";

interface CharacterDetailProps {
  character: Character;
  comics: Comic[];
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, comics }) => {
  return (
    <>
      <div className={classes["character-card"]}>
        <div className={classes["character-card__image"]}>
          <Image
            src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
            alt={`${character.name} thumbnail`}
            width={395}
            height={395}
          />
        </div>
        <div className={classes["character-card__footer"]}>
          <div className={classes["character-card__footer-name-container"]}>
            <div className={classes["character-card__footer-name"]}>
              {character.name.toUpperCase()}
            </div>
            <CharacterFavorite character={character} />
          </div>
          <div>{character.description}</div>
          <div className={classes["character-card__footer-cut"]}></div>
        </div>
      </div>

      <div className={classes["character-card__comics"]}>
        <div className={classes["character-card__comic-body"]}>
          <div className={classes["character-card__comic-name"]}>COMICS</div>
          <div className={classes["character-card__comic-images"]}>
            <Carousel>
              {comics?.map((comic) => <CharacterComic key={comic.id} comic={comic} />)}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
