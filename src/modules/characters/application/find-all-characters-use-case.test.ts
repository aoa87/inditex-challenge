import { charactersMock } from "../infrastructure/__mocks__/characters-fixtures";
import { MarvelCharacterRepository } from "../infrastructure/marvel-character-repository";
import { FindAllCharactersUseCase } from "./find-all-characters-use-case";

describe("FindAllCharactersUseCase", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch all characters successfully", async () => {
    const mockCharacterRepository = new MarvelCharacterRepository();
    jest
      .spyOn(mockCharacterRepository, "findAllCharacters")
      .mockImplementation(() => Promise.resolve(charactersMock));

    const findAllCharactersUseCase = new FindAllCharactersUseCase(mockCharacterRepository);
    const characters = await findAllCharactersUseCase.execute();

    expect(characters).toHaveLength(charactersMock.length);
    expect(characters[0].name).toBe(charactersMock[0].name);
  });
});
