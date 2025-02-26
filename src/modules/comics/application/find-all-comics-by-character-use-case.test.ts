import { comicsMock } from "../infrastructure/__mocks__/comics-fixtures";
import { MarvelComicRepository } from "../infrastructure/marvel-comic-repository";
import { FindAllComicsByCharacterUseCase } from "./find-all-comics-by-character-use-case";

describe("FindAllComicsByCharacterUseCase", () => {
  it("should fetch all comics by character successfully", async () => {
    const mockComicRepository = new MarvelComicRepository();
    jest
      .spyOn(mockComicRepository, "findAllComicsByCharacter")
      .mockImplementation(() => Promise.resolve(comicsMock));

    const findAllComicsByCharacterUseCase = new FindAllComicsByCharacterUseCase(
      mockComicRepository,
    );

    const comics = await findAllComicsByCharacterUseCase.execute(1);

    expect(comics).not.toBeNull();
    expect(comics).toHaveLength(comicsMock.length);
    expect(comics[0].title).toBe(comics[0].title);
  });
});
