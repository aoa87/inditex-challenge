import { FavoritesProvider } from "@/shared/favorite-context";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { charactersMock } from "@/modules/characters/infrastructure/__mocks__/characters-fixtures";

import CharacterFavorite from "./character-favorite";

describe("CharacterFavorite", () => {
  it("should render by default unselected favorite icon", () => {
    const character = charactersMock[0];

    render(
      <FavoritesProvider>
        <CharacterFavorite character={character} />
      </FavoritesProvider>,
    );

    const img = screen.getByAltText("Favorite unselected");
    expect(img).toBeInTheDocument();
  });

  it("should add to favorites when clicked", async () => {
    const character = charactersMock[0];

    render(
      <FavoritesProvider>
        <CharacterFavorite character={character} />
      </FavoritesProvider>,
    );

    const img = screen.getByAltText("Favorite unselected");
    fireEvent.click(img);

    await waitFor(() => {
      expect(screen.getByAltText("Favorite selected")).toBeInTheDocument();
    });
  });

  it("should remove from favorites when clicked again", async () => {
    const character = charactersMock[0];

    render(
      <FavoritesProvider>
        <CharacterFavorite character={character} />
      </FavoritesProvider>,
    );

    const img = screen.getByAltText("Favorite unselected");
    fireEvent.click(img);

    await waitFor(() => {
      expect(screen.getByAltText("Favorite selected")).toBeInTheDocument();
    });

    fireEvent.click(img);
    await waitFor(() => {
      expect(screen.getByAltText("Favorite unselected")).toBeInTheDocument();
    });
  });
});
