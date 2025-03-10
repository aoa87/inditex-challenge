import Image from "next/image";

import { Comic } from "@/modules/comics/domain/comic";

import classes from "./character-comic.module.css";

interface CharacterComicProps {
  comic: Comic;
}

const CharacterComic: React.FC<CharacterComicProps> = ({ comic }) => {
  const year = new Date(comic.modified).getFullYear();

  return (
    <div key={comic.id} className={classes.comic}>
      <Image
        src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
        alt={`${comic.title} thumbnail`}
        width={180}
        height={270}
        priority
      />
      <div>{comic.title}</div>
      <div>{isNaN(year) ? "-" : year}</div>
    </div>
  );
};

export default CharacterComic;
