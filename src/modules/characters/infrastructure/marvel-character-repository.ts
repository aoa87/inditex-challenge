import { fetchMarvelApi } from "@/modules/shared/infrastructure/fetch-marvel-api";
import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/character-repository";

export class MarvelCharacterRepository implements CharacterRepository {
  async findAllCharacters(): Promise<Character[]> {
    const response = await fetchMarvelApi<Character>({
      path: "characters",
      queryParams: {
        limit: 50,
      },
    });

    return response.data.results;
  }

  async findById(characterId: Character["id"]): Promise<Character | null> {
    const response = await fetchMarvelApi<Character>({
      path: `characters/${characterId}`,
      queryParams: {
        limit: 1,
      },
    });

    if (response.code !== 200) {
      return null;
    }

    return response.data.results[0];
  }
}
