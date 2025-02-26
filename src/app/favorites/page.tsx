"use client";

import CharactersList from "@/sections/characters/characters-list";
import { useFavorites } from "@/shared/favorite-context";

import classes from "./page.module.css";
import SearchBox from "@/components/search-box/search-box";
import { useSearchParams } from "next/navigation";

const FavoritePage = () => {
  const { favorites: characters } = useFavorites();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const filteredCharacters = characters.filter((character) =>
    character.name.toUpperCase().includes(search.toUpperCase()),
  );

  return (
    <div className={classes["favorite-page"]}>
      <SearchBox initialSearch={search} placeholder="SEARCH A CHARACTER..." delay={0} />
      <CharactersList characters={filteredCharacters} />
    </div>
  );
};

export default FavoritePage;
