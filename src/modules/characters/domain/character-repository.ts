import { Character } from "./character";

export interface CharacterRepository {
  findAllCharacters(): Promise<Character[]>;
}
