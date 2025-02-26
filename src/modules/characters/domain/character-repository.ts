import { Character } from "./character";

export interface CharacterRepository {
  findAllCharacters(search?: string): Promise<Character[]>;
  findById(characterId: Character["id"]): Promise<Character | null>;
}
