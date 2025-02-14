import { Suspense } from "react";

import { FindAllCharactersUseCase } from "@/modules/characters/application/find-all-characters-use-case";
import { Character } from "@/modules/characters/domain/character";
import { MarvelCharacterRepository } from "@/modules/characters/infrastructure/marvel-character-repository";
import CharactersList from "@/sections/characters/characters-list";
import LoadingBar from "@/components/loading-bar/loading-bar";

import classes from "./page.module.css";

const LoadCharactersPage = async () => {
  const characterRepository = new MarvelCharacterRepository();
  const findAllCharactersUseCase = new FindAllCharactersUseCase(characterRepository);

  let characters: Character[] = [];

  try {
    characters = await findAllCharactersUseCase.execute();
  } catch {
    throw new Error("Failed to fetch characters");
  }

  return <CharactersList characters={characters} />;
};

export default async function CharactersPage() {
  return (
    <Suspense fallback={<LoadingBar />}>
      <div className={classes["character-page"]}>
        <LoadCharactersPage />
      </div>
    </Suspense>
  );
}
