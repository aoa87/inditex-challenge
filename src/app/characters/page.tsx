import React, { Suspense } from "react";

import { FindAllCharactersUseCase } from "@/modules/characters/application/find-all-characters-use-case";
import { Character } from "@/modules/characters/domain/character";
import { MarvelCharacterRepository } from "@/modules/characters/infrastructure/marvel-character-repository";
import CharactersList from "@/sections/characters/characters-list";
import LoadingBar from "@/components/loading-bar/loading-bar";
import SearchBox from "@/components/search-box/search-box";
import { SearchParams } from "@/shared/types";

import classes from "./page.module.css";

interface LoadCharactersPageProps {
  search: string;
}

const LoadCharactersPage: React.FC<LoadCharactersPageProps> = async ({ search }) => {
  const characterRepository = new MarvelCharacterRepository();
  const findAllCharactersUseCase = new FindAllCharactersUseCase(characterRepository);

  let characters: Character[] = [];

  try {
    characters = await findAllCharactersUseCase.execute(search);
  } catch {
    throw new Error("Failed to fetch characters");
  }

  return <CharactersList characters={characters} />;
};

const CharactersPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const search = searchParams.search ?? "";

  return (
    <Suspense fallback={<LoadingBar />}>
      <div className={classes["character-page"]}>
        <SearchBox initialSearch={search} placeholder="SEARCH A CHARACTER..." />
        <LoadCharactersPage search={search} />
      </div>
    </Suspense>
  );
};

export default CharactersPage;
