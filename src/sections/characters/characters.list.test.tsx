import { render, screen } from "@testing-library/react";

import { charactersMock } from "@/modules/characters/infrastructure/__mocks__/characters-fixtures";
import { FavoritesProvider } from "@/shared/favorite-context";

import CharactersList from "./characters-list";

describe("CharactersList", () => {
  it("should render a list of characters", () => {
    render(
      <FavoritesProvider>
        <CharactersList characters={charactersMock} />
      </FavoritesProvider>,
    );

    expect(screen.getByText(charactersMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(charactersMock[1].name)).toBeInTheDocument();
  });

  it("renders an empty list of characters", () => {
    render(
      <FavoritesProvider>
        <CharactersList characters={[]} />
      </FavoritesProvider>,
    );

    expect(screen.queryByText(charactersMock[0].name)).not.toBeInTheDocument();
    expect(screen.queryByText(charactersMock[1].name)).not.toBeInTheDocument();
  });
});
