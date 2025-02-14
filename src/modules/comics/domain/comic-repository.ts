import { Comic } from "./comic";

export interface ComicRepository {
  findAllComicsByCharacter(characterId: number): Promise<Comic[]>;
}
