"use client";

import { useSearchParams } from "next/navigation";

import SearchBox from "@/components/search-box/search-box";
import { useFavorites } from "@/shared/favorite-context";
import CharactersList from "../characters/characters-list";

const FavoriteList = () => {
  const { favorites: characters } = useFavorites();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const filteredCharacters = characters.filter((character) =>
    character.name.toUpperCase().includes(search.toUpperCase()),
  );

  return (
    <>
      <SearchBox initialSearch={search} placeholder="SEARCH A CHARACTER..." delay={0} />
      <CharactersList characters={filteredCharacters} />
    </>
  );
};

export default FavoriteList;
