import { ComicRepository } from "../domain/comic-repository";
import { Comic } from "../domain/comic";

import { fetchMarvelApi } from "@/modules/shared/infrastructure/fetch-marvel-api";

export class MarvelComicRepository implements ComicRepository {
  async findAllComicsByCharacter(characterId: number): Promise<Comic[]> {
    const response = await fetchMarvelApi<Comic>({
      path: `characters/${characterId}/comics`,
      queryParams: {
        limit: 20,
        orderBy: "-onsaleDate",
      },
    });

    return response.data.results;
  }
}
