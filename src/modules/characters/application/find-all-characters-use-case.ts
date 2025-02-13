import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/character-repository";

export class FindAllCharactersUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(): Promise<Character[]> {
    return this.characterRepository.findAllCharacters();
  }
}
