import { fetchMarvelApi } from "@/modules/shared/infrastructure/fetch-marvel-api";
import { comicsMock } from "./__mocks__/comics-fixtures";

import { MarvelComicRepository } from "./marvel-comic-repository";

jest.mock("../../shared/infrastructure/fetch-marvel-api");

const marvelComicRepository = new MarvelComicRepository();

describe("MarvelComicRepository", () => {
  it("should fetch all comics by character successfully", async () => {
    (fetchMarvelApi as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { results: comicsMock } }),
    );

    const comics = await marvelComicRepository.findAllComicsByCharacter(1);

    expect(comics).toHaveLength(comicsMock.length);
    expect(comics[0].title).toBe(comicsMock[0].title);
    expect(fetchMarvelApi).toHaveBeenCalledTimes(1);
  });

  it("should handle fetch errors gracefully", async () => {
    (fetchMarvelApi as jest.Mock).mockImplementation(() => Promise.reject(new Error("API Error")));

    await expect(marvelComicRepository.findAllComicsByCharacter(1)).rejects.toThrow("API Error");
  });
});
