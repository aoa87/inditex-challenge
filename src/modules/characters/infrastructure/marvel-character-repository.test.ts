import { fetchMarvelApi } from "@/modules/shared/infrastructure/fetch-marvel-api";
import { charactersMock } from "./__mocks__/characters-fixtures";
import { MarvelCharacterRepository } from "./marvel-character-repository";

jest.mock("../../shared/infrastructure/fetch-marvel-api");

const marvelCharacterRepository = new MarvelCharacterRepository();

describe("MarvelCharacterRepository", () => {
  it("should fetch all characters successfully", async () => {
    (fetchMarvelApi as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { results: charactersMock } }),
    );

    const characters = await marvelCharacterRepository.findAllCharacters();

    expect(characters).toHaveLength(charactersMock.length);
    expect(characters[0].name).toBe(charactersMock[0].name);
    expect(fetchMarvelApi).toHaveBeenCalledTimes(1);
  });

  it("should fetch a character by id successfully", async () => {
    (fetchMarvelApi as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { results: charactersMock }, code: 200 }),
    );

    const character = await marvelCharacterRepository.findById(1);

    expect(character).not.toBeNull();
    expect(character?.name).toBe(charactersMock[0].name);
    expect(fetchMarvelApi).toHaveBeenCalledTimes(1);
  });

  it("should return null for a non-existent character id", async () => {
    (fetchMarvelApi as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { results: [] }, code: 404 }),
    );

    const character = await marvelCharacterRepository.findById(999);

    expect(character).toBeNull();
    expect(fetchMarvelApi).toHaveBeenCalledTimes(1);
  });
});
