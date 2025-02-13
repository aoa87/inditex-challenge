import { fetchMarvelApi } from "@/modules/shared/infrastructure/fetch-marvel-api";
import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/character-repository";

export class FetchCharacterRepository implements CharacterRepository {
  async findAllCharacters(): Promise<Character[]> {
    const response = await fetchMarvelApi<Character>("characters");

    return response.data.results;
  }
}
