import { FindAllCharactersUseCase } from "@/modules/characters/application/find-all-characters-use-case";
import { Character } from "@/modules/characters/domain/character";
import { MarvelCharacterRepository } from "@/modules/characters/infrastructure/marvel-character-repository";
import CharactersList from "@/sections/characters/characters-list";

import classes from "./page.module.css";

export default async function CharactersPage() {
  const characterRepository = new MarvelCharacterRepository();
  const findAllCharactersUseCase = new FindAllCharactersUseCase(characterRepository);

  let characters: Character[] = [];

  try {
    characters = await findAllCharactersUseCase.execute();
  } catch {
    throw new Error("Failed to fetch characters");
  }

  return (
    <div className={classes["character-page"]}>
      <CharactersList characters={characters} />
    </div>
  );
}
