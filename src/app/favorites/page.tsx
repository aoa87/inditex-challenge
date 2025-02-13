"use client";

import CharactersList from "@/sections/characters/characters-list";
import { useFavorites } from "@/shared/favorite-context";

import classes from "./page.module.css";

const FavoritePage = () => {
  const { favorites: characters } = useFavorites();

  return (
    <div className={classes["favorite-page"]}>
      <CharactersList characters={characters} />
    </div>
  );
};

export default FavoritePage;
