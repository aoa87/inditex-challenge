"use client";

import Image from "next/image";
import { useFavorites } from "@/shared/favorite-context";

import favoriteImg from "@/assets/favorite.png";
import favoriteUnselected from "@/assets/favorite_unselected.png";
import { Character } from "@/modules/characters/domain/character";

import classes from "./character-favorite.module.css";

interface CharacterFavoriteProps {
  character: Character;
}

const CharacterFavorite: React.FC<CharacterFavoriteProps> = ({ character }) => {
  const { addFavorite, removeFavorite, isFavoriteInList } = useFavorites();

  const isSelected = isFavoriteInList(character.id);

  const favoriteClickHandler = () => {
    if (isSelected) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <Image
      className={classes.favorite}
      src={isSelected ? favoriteImg : favoriteUnselected}
      alt={isSelected ? "Favorite selected" : "Favorite unselected"}
      onClick={favoriteClickHandler}
    />
  );
};

export default CharacterFavorite;
