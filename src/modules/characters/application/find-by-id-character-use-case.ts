import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/character-repository";

export class FindByIdCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(characterId: Character["id"]): Promise<Character | null> {
    return this.characterRepository.findById(characterId);
  }
}
