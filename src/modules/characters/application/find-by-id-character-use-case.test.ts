import { charactersMock } from "../infrastructure/__mocks__/characters-fixtures";
import { MarvelCharacterRepository } from "../infrastructure/marvel-character-repository";
import { FindByIdCharacterUseCase } from "./find-by-id-character-use-case";

describe("FindByIdCharacterUseCase", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch by id character successfully", async () => {
    const mockCharacterRepository = new MarvelCharacterRepository();
    jest
      .spyOn(mockCharacterRepository, "findById")
      .mockImplementation(() => Promise.resolve(charactersMock[0]));

    const findByIdCharacterUseCase = new FindByIdCharacterUseCase(mockCharacterRepository);

    const character = await findByIdCharacterUseCase.execute(charactersMock[0].id);

    expect(character).not.toBeNull();
    expect(character?.name).toBe(charactersMock[0].name);
  });
});
