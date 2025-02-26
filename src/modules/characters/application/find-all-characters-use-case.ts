import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/character-repository";

export class FindAllCharactersUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(search?: string): Promise<Character[]> {
    return this.characterRepository.findAllCharacters(search);
  }
}
