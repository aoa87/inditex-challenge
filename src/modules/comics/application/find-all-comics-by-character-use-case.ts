import { Comic } from "../domain/comic";
import { ComicRepository } from "../domain/comic-repository";

export class FindAllComicsByCharacterUseCase {
  constructor(private comicRepository: ComicRepository) {}

  async execute(characterId: number): Promise<Comic[]> {
    return this.comicRepository.findAllComicsByCharacter(characterId);
  }
}
