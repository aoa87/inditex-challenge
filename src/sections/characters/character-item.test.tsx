import { render, screen } from "@testing-library/react";

import { charactersMock } from "@/modules/characters/infrastructure/__mocks__/characters-fixtures";
import { FavoritesProvider } from "@/shared/favorite-context";
import CharacterItem from "./character-item";
import CharacterFavorite from "./character-favorite";

jest.mock("./character-favorite", () => jest.fn(() => <div>Mocked CharacterFavorite</div>));

describe("CharacterItem", () => {
  it("should render a character correctly", () => {
    const character = charactersMock[0];

    const { container } = render(
      <FavoritesProvider>
        <CharacterItem character={character} />
      </FavoritesProvider>,
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(CharacterFavorite).toHaveBeenCalled();
  });
});
