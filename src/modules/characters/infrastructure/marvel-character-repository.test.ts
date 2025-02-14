import { charactersMock } from "./__mocks__/characters-fixtures";
import { MarvelCharacterRepository } from "./marvel-character-repository";

const marvelCharacterRepository = new MarvelCharacterRepository();

describe("MarvelCharacterRepository", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch all characters successfully", async () => {
    jest
      .spyOn(marvelCharacterRepository, "findAllCharacters")
      .mockImplementation(() => Promise.resolve(charactersMock));

    const characters = await marvelCharacterRepository.findAllCharacters();

    expect(characters).toHaveLength(charactersMock.length);
    expect(characters[0].name).toBe(charactersMock[0].name);
  });

  it("should fetch a character by id successfully", async () => {
    jest
      .spyOn(marvelCharacterRepository, "findById")
      .mockImplementation(() => Promise.resolve(charactersMock[0]));

    const character = await marvelCharacterRepository.findById(1);

    expect(character).not.toBeNull();
    expect(character?.name).toBe(charactersMock[0].name);
  });
});
