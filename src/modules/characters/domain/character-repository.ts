import { Character } from "./character";

export interface CharacterRepository {
  findAllCharacters(): Promise<Character[]>;
  findById(characterId: Character["id"]): Promise<Character | null>;
}
